# 🤖 Agent Quick Start Guide

**5-Minute Guide to Using the PWA Claude Task System**

## TL;DR

```bash
# See what needs to be done
./scripts/task-runner.sh quick-wins

# Pick a task and start
./scripts/task-runner.sh show TASK-102
./scripts/task-runner.sh start TASK-102

# Do the work, then mark complete
./scripts/task-runner.sh complete TASK-102
```

## 📋 Available Files

| File | Purpose |
|------|---------|
| `AGENT_TASKS.md` | **Read this first** - Detailed task descriptions |
| `tasks.json` | Machine-readable task data |
| `scripts/task-runner.sh` | CLI for task management |
| `TASKS_README.md` | Full documentation |

## 🎯 How to Choose a Task

### Strategy 1: Quick Impact
Start with quick wins (<4 hours):
```bash
./scripts/task-runner.sh quick-wins
```

**Recommended first tasks:**
- TASK-102: Remove debug statements (2.5h)
- TASK-703: VSCode debug config (2.5h)

### Strategy 2: Follow the Plan
Work through execution phases:
```bash
./scripts/task-runner.sh phases
```

**Phase 1 (Start here):**
- TASK-001: Fix build failures
- TASK-002: Fix type definitions
- TASK-102: Remove debug statements

### Strategy 3: By Priority
Tackle critical issues first:
```bash
./scripts/task-runner.sh by-priority
```

### Strategy 4: Search for Skills
Find tasks matching your expertise:
```bash
./scripts/task-runner.sh search typescript
./scripts/task-runner.sh search security
./scripts/task-runner.sh search testing
```

## 🔧 Essential Commands

```bash
# Get recommendations
./scripts/task-runner.sh next

# View task details
./scripts/task-runner.sh show TASK-XXX

# Search tasks
./scripts/task-runner.sh search "keyword"

# See progress
./scripts/task-runner.sh stats
./scripts/task-runner.sh report

# Export to CSV
./scripts/task-runner.sh export
```

## 📝 Workflow

### 1️⃣ Select Task
```bash
# Option A: Get recommendations
./scripts/task-runner.sh next

# Option B: Browse quick wins
./scripts/task-runner.sh quick-wins

# Option C: Search for specific topic
./scripts/task-runner.sh search "error handling"
```

### 2️⃣ Check Details
```bash
./scripts/task-runner.sh show TASK-XXX
```

**What to check:**
- ✅ Dependencies (do other tasks need to be done first?)
- ✅ Location (which files to modify)
- ✅ Acceptance criteria (how do I know I'm done?)
- ✅ Estimated hours (do I have time?)

### 3️⃣ Start Working
```bash
./scripts/task-runner.sh start TASK-XXX
```

This creates a log file in `.task-logs/`

### 4️⃣ Implement Solution

**Follow this pattern:**
1. Read the full task description in `AGENT_TASKS.md`
2. Review the code at the specified location
3. Implement the changes
4. Run tests
5. Update documentation if needed
6. Verify all acceptance criteria are met

### 5️⃣ Mark Complete
```bash
./scripts/task-runner.sh complete TASK-XXX
```

## ⚡ Quick Reference

### Task Categories
- `critical-bugs` - Urgent fixes
- `security` - Security hardening
- `testing` - Test coverage
- `performance` - Optimization
- `accessibility` - A11y compliance
- `documentation` - Docs & guides
- `code-quality` - Refactoring
- `developer-experience` - DX improvements
- `advanced-features` - New capabilities
- `i18n` - Internationalization
- `deployment` - CI/CD
- `meta` - Task automation

### Priority Levels
- 🔴 **Critical** - Blocking/security issues
- 🟡 **High** - Significant impact
- 🟠 **Medium** - Important improvements
- 🟢 **Low** - Nice-to-have

## 📊 Project Stats

- **42 tasks** total
- **350 hours** estimated
- **8-12 weeks** timeline
- **2-3 developers** recommended

## 🎯 Recommended Starting Tasks

### Absolute Beginner (Learn the Codebase)
1. **TASK-703** - VSCode debug config (2.5h)
   - Simple setup task
   - Learn dev environment

2. **TASK-1003** - Deployment checklist (2.5h)
   - Review deployment process
   - Create documentation

3. **TASK-504** - Troubleshooting guide (5.5h)
   - Deep dive into common issues
   - Document solutions

### Intermediate (Make Real Impact)
1. **TASK-102** - Remove debug statements (2.5h)
   - Clean up codebase
   - Add ESLint rules

2. **TASK-702** - Env validation (3.5h)
   - Improve developer experience
   - Prevent config errors

3. **TASK-003** - PayPal error handling (2.5h)
   - Fix real bug
   - Improve UX

### Advanced (Tackle Big Challenges)
1. **TASK-101** - CSP hardening (10h)
   - Security improvement
   - Complex refactoring

2. **TASK-201** - Test coverage to 80% (25h)
   - Major quality improvement
   - Learn entire codebase

3. **TASK-301** - Bundle analysis (4.5h)
   - Performance optimization
   - Build system knowledge

## 💡 Pro Tips

### ✅ DO
- Check dependencies before starting
- Read acceptance criteria carefully
- Run tests after changes
- Update documentation
- Mark tasks complete when done
- Ask for help if stuck

### ❌ DON'T
- Skip acceptance criteria
- Forget to run tests
- Leave TODOs in code
- Break existing functionality
- Rush through critical tasks

## 🔍 Finding Information

### Understanding the Codebase
```bash
# Find components
ls apps/web/app/components/

# Find composables
ls apps/web/app/composables/

# Find tests
ls apps/web/__tests__/

# View project structure
tree -L 3 -d
```

### Reading Documentation
```bash
# Main guide
cat GUIDE.md

# Contributing guidelines
cat .github/CONTRIBUTING.md

# Project overview
cat README.md
```

## 🎓 Learning Path

### Week 1: Foundation
- Complete 3-4 quick wins
- Learn codebase structure
- Set up development environment

**Recommended:**
- TASK-703 (VSCode config)
- TASK-1003 (Deployment checklist)
- TASK-102 (Remove debug statements)
- TASK-702 (Env validation)

### Week 2-3: Real Improvements
- Fix critical bugs
- Add basic security
- Start testing improvements

**Recommended:**
- TASK-001 (Build failures)
- TASK-002 (Type definitions)
- TASK-003 (PayPal errors)
- TASK-103 (Input sanitization)

### Week 4+: Major Features
- Increase test coverage
- Performance optimization
- Advanced features

**Recommended:**
- TASK-201 (Test coverage)
- TASK-301 (Bundle analysis)
- TASK-801 (Error boundary)

## 🆘 Common Issues

### Task Runner Not Working
```bash
# Install jq
sudo apt-get install jq

# Make script executable
chmod +x scripts/task-runner.sh
```

### Can't Find Task Details
```bash
# Always use task runner
./scripts/task-runner.sh show TASK-XXX

# Or read markdown
grep -A 20 "TASK-XXX" AGENT_TASKS.md
```

### Not Sure What to Work On
```bash
# Get recommendations
./scripts/task-runner.sh next

# See statistics
./scripts/task-runner.sh stats

# Browse by category
./scripts/task-runner.sh by-category
```

## 📈 Tracking Progress

### Individual Progress
```bash
# See what you've completed
ls .task-logs/

# View completion log
cat .task-logs/TASK-XXX.log
```

### Team Progress
```bash
# Generate report
./scripts/task-runner.sh report

# Export to share
./scripts/task-runner.sh export team-progress.csv
```

## 🎯 Success Checklist

Before marking a task complete, verify:

- [ ] All acceptance criteria met
- [ ] Tests passing
- [ ] Code follows style guide
- [ ] Documentation updated
- [ ] No new warnings/errors
- [ ] Changes tested manually
- [ ] Ready for code review

## 🚀 Next Steps

1. **Choose your first task:**
   ```bash
   ./scripts/task-runner.sh quick-wins
   ```

2. **Read the full details:**
   ```bash
   cat AGENT_TASKS.md
   ```

3. **Start working:**
   ```bash
   ./scripts/task-runner.sh start TASK-XXX
   ```

4. **Ask for help if needed** - This is a collaborative effort!

---

**Ready to make PWA Claude better? Let's go! 🚀**

For full documentation: `cat TASKS_README.md`
