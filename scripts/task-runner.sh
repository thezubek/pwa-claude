#!/bin/bash

# Task Runner for PWA Claude Agent Tasks
# Usage: ./scripts/task-runner.sh [command] [options]

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
TASKS_FILE="$PROJECT_ROOT/tasks.json"
TASK_LOG_DIR="$PROJECT_ROOT/.task-logs"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
NC='\033[0m' # No Color

# Ensure log directory exists
mkdir -p "$TASK_LOG_DIR"

# Helper functions
print_header() {
    echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo -e "${BLUE}  $1${NC}"
    echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
}

print_success() {
    echo -e "${GREEN}✓${NC} $1"
}

print_error() {
    echo -e "${RED}✗${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}⚠${NC} $1"
}

print_info() {
    echo -e "${PURPLE}ℹ${NC} $1"
}

# Check if jq is installed
check_dependencies() {
    if ! command -v jq &> /dev/null; then
        print_error "jq is required but not installed. Install with: apt-get install jq"
        exit 1
    fi
}

# List all tasks
list_tasks() {
    local filter=$1
    print_header "Available Tasks"

    if [ -z "$filter" ]; then
        jq -r '.tasks[] | "\(.id) - \(.title) [\(.priority)] (\(.estimatedHours)h)"' "$TASKS_FILE"
    else
        jq -r --arg filter "$filter" '.tasks[] | select(.category == $filter or .priority == $filter) | "\(.id) - \(.title) [\(.priority)] (\(.estimatedHours)h)"' "$TASKS_FILE"
    fi
}

# Show task details
show_task() {
    local task_id=$1

    if [ -z "$task_id" ]; then
        print_error "Task ID required"
        exit 1
    fi

    print_header "Task Details: $task_id"

    local task=$(jq -r --arg id "$task_id" '.tasks[] | select(.id == $id)' "$TASKS_FILE")

    if [ -z "$task" ]; then
        print_error "Task $task_id not found"
        exit 1
    fi

    echo "$task" | jq -r '
        "ID: \(.id)",
        "Title: \(.title)",
        "Category: \(.category)",
        "Priority: \(.priority)",
        "Location: \(.location)",
        "Estimated Hours: \(.estimatedHours)",
        "Description: \(.description)",
        "",
        "Tags: \(.tags | join(", "))",
        "",
        "Acceptance Criteria:",
        (.acceptanceCriteria | map("  - " + .) | join("\n")),
        "",
        "Dependencies: \(if .dependencies | length > 0 then (.dependencies | join(", ")) else "None" end)"
    '
}

# List tasks by category
list_by_category() {
    print_header "Tasks by Category"

    jq -r '.categories[]' "$TASKS_FILE" | while read category; do
        echo -e "\n${YELLOW}Category: $category${NC}"
        jq -r --arg cat "$category" '.tasks[] | select(.category == $cat) | "  \(.id) - \(.title) [\(.priority)]"' "$TASKS_FILE"
    done
}

# List tasks by priority
list_by_priority() {
    print_header "Tasks by Priority"

    for priority in critical high medium low; do
        echo -e "\n${YELLOW}Priority: $priority${NC}"
        jq -r --arg pri "$priority" '.tasks[] | select(.priority == $pri) | "  \(.id) - \(.title) (\(.estimatedHours)h)"' "$TASKS_FILE"
    done
}

# Show quick wins
show_quick_wins() {
    print_header "Quick Wins (<4 hours)"

    jq -r '.quickWins[]' "$TASKS_FILE" | while read task_id; do
        jq -r --arg id "$task_id" '.tasks[] | select(.id == $id) | "\(.id) - \(.title) (\(.estimatedHours)h)"' "$TASKS_FILE"
    done
}

# Show execution phases
show_phases() {
    print_header "Execution Phases"

    jq -r '.executionPhases | to_entries[] | "\n\(.key | ascii_upcase)\nName: \(.value.name)\nWeeks: \(.value.weeks)\nTasks: \(.value.tasks | join(", "))"' "$TASKS_FILE"
}

# Show task statistics
show_stats() {
    print_header "Task Statistics"

    local total_tasks=$(jq -r '.metadata.taskCount' "$TASKS_FILE")
    local total_hours=$(jq -r '.metadata.totalEstimatedHours' "$TASKS_FILE")
    local critical=$(jq -r '[.tasks[] | select(.priority == "critical")] | length' "$TASKS_FILE")
    local high=$(jq -r '[.tasks[] | select(.priority == "high")] | length' "$TASKS_FILE")
    local medium=$(jq -r '[.tasks[] | select(.priority == "medium")] | length' "$TASKS_FILE")
    local low=$(jq -r '[.tasks[] | select(.priority == "low")] | length' "$TASKS_FILE")

    echo ""
    echo "Total Tasks: $total_tasks"
    echo "Total Estimated Hours: $total_hours"
    echo "Estimated Timeline: 8-12 weeks (2-3 developers)"
    echo ""
    echo "By Priority:"
    echo "  🔴 Critical: $critical"
    echo "  🟡 High: $high"
    echo "  🟠 Medium: $medium"
    echo "  🟢 Low: $low"
    echo ""

    echo "By Category:"
    jq -r '.categories[]' "$TASKS_FILE" | while read category; do
        local count=$(jq -r --arg cat "$category" '[.tasks[] | select(.category == $cat)] | length' "$TASKS_FILE")
        echo "  $category: $count"
    done
}

# Search tasks
search_tasks() {
    local query=$1

    if [ -z "$query" ]; then
        print_error "Search query required"
        exit 1
    fi

    print_header "Search Results for: $query"

    jq -r --arg query "$query" '.tasks[] | select(
        (.title | ascii_downcase | contains($query | ascii_downcase)) or
        (.description | ascii_downcase | contains($query | ascii_downcase)) or
        (.tags[] | ascii_downcase | contains($query | ascii_downcase))
    ) | "\(.id) - \(.title) [\(.priority)]"' "$TASKS_FILE"
}

# Get recommended next tasks
get_next_tasks() {
    print_header "Recommended Next Tasks"
    print_info "Based on current phase and dependencies"
    echo ""

    # Show Phase 1 critical and high priority tasks
    echo -e "${YELLOW}Phase 1: Foundation (High Priority)${NC}"
    for task_id in TASK-001 TASK-002 TASK-102 TASK-702; do
        jq -r --arg id "$task_id" '.tasks[] | select(.id == $id) | "  \(.id) - \(.title) (\(.estimatedHours)h)"' "$TASKS_FILE"
    done
}

# Mark task as started
start_task() {
    local task_id=$1

    if [ -z "$task_id" ]; then
        print_error "Task ID required"
        exit 1
    fi

    local log_file="$TASK_LOG_DIR/${task_id}.log"
    echo "Task started at $(date)" > "$log_file"
    print_success "Task $task_id started. Log: $log_file"
}

# Mark task as completed
complete_task() {
    local task_id=$1

    if [ -z "$task_id" ]; then
        print_error "Task ID required"
        exit 1
    fi

    local log_file="$TASK_LOG_DIR/${task_id}.log"

    if [ -f "$log_file" ]; then
        echo "Task completed at $(date)" >> "$log_file"
        print_success "Task $task_id marked as complete"
    else
        print_warning "No log file found for $task_id. Creating new one."
        echo "Task completed at $(date)" > "$log_file"
    fi
}

# Generate task report
generate_report() {
    print_header "Task Report"

    echo ""
    echo "Project: PWA Claude"
    echo "Report Generated: $(date)"
    echo ""

    show_stats

    echo ""
    print_header "Completed Tasks"

    if [ -d "$TASK_LOG_DIR" ] && [ "$(ls -A $TASK_LOG_DIR)" ]; then
        for log_file in "$TASK_LOG_DIR"/*.log; do
            local task_id=$(basename "$log_file" .log)
            if grep -q "completed" "$log_file"; then
                local title=$(jq -r --arg id "$task_id" '.tasks[] | select(.id == $id) | .title' "$TASKS_FILE")
                print_success "$task_id - $title"
            fi
        done
    else
        print_info "No completed tasks yet"
    fi
}

# Export tasks to CSV
export_csv() {
    local output_file="${1:-tasks-export.csv}"

    print_header "Exporting to CSV"

    jq -r '.tasks[] | [.id, .title, .category, .priority, .estimatedHours, (.tags | join("; "))] | @csv' "$TASKS_FILE" > "$output_file"

    print_success "Exported to $output_file"
}

# Show help
show_help() {
    cat << EOF
PWA Claude Task Runner

Usage: ./scripts/task-runner.sh [command] [options]

Commands:
  list [filter]          List all tasks (optional filter by category/priority)
  show <task-id>         Show detailed information about a task
  by-category            List tasks grouped by category
  by-priority            List tasks grouped by priority
  quick-wins             Show quick win tasks (<4 hours)
  phases                 Show execution phases
  stats                  Show task statistics
  search <query>         Search tasks by keyword
  next                   Get recommended next tasks
  start <task-id>        Mark task as started
  complete <task-id>     Mark task as completed
  report                 Generate task progress report
  export [file]          Export tasks to CSV
  help                   Show this help message

Examples:
  ./scripts/task-runner.sh list security
  ./scripts/task-runner.sh show TASK-001
  ./scripts/task-runner.sh search "error handling"
  ./scripts/task-runner.sh start TASK-102
  ./scripts/task-runner.sh complete TASK-102
  ./scripts/task-runner.sh export my-tasks.csv

EOF
}

# Main command dispatcher
main() {
    check_dependencies

    local command=${1:-help}
    shift || true

    case "$command" in
        list)
            list_tasks "$@"
            ;;
        show)
            show_task "$@"
            ;;
        by-category)
            list_by_category
            ;;
        by-priority)
            list_by_priority
            ;;
        quick-wins)
            show_quick_wins
            ;;
        phases)
            show_phases
            ;;
        stats)
            show_stats
            ;;
        search)
            search_tasks "$@"
            ;;
        next)
            get_next_tasks
            ;;
        start)
            start_task "$@"
            ;;
        complete)
            complete_task "$@"
            ;;
        report)
            generate_report
            ;;
        export)
            export_csv "$@"
            ;;
        help|--help|-h)
            show_help
            ;;
        *)
            print_error "Unknown command: $command"
            echo ""
            show_help
            exit 1
            ;;
    esac
}

main "$@"
