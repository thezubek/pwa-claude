.PHONY: help up down restart logs build clean test install status

# Default target
.DEFAULT_GOAL := help

# Colors for output
BLUE := \033[0;34m
GREEN := \033[0;32m
YELLOW := \033[0;33m
RED := \033[0;31m
NC := \033[0m # No Color

help: ## Show this help message
	@echo "$(BLUE)PWA Claude - Docker Development Commands$(NC)"
	@echo ""
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "$(GREEN)%-20s$(NC) %s\n", $$1, $$2}'

up: ## Start all services in detached mode
	@echo "$(BLUE)Starting all services...$(NC)"
	docker-compose up -d
	@echo "$(GREEN)Services started successfully!$(NC)"
	@echo "Web app: http://localhost:3000"
	@echo "Middleware: http://localhost:4000"
	@echo "Run 'make logs' to view logs"

up-testing: ## Start all services including mock API
	@echo "$(BLUE)Starting all services with mock API...$(NC)"
	docker-compose --profile testing up -d
	@echo "$(GREEN)Services started successfully!$(NC)"
	@echo "Web app: http://localhost:3000"
	@echo "Middleware: http://localhost:4000"
	@echo "Mock API: http://localhost:8080"

down: ## Stop all services
	@echo "$(YELLOW)Stopping all services...$(NC)"
	docker-compose down
	@echo "$(GREEN)Services stopped$(NC)"

down-clean: ## Stop all services and remove volumes
	@echo "$(RED)Stopping all services and removing volumes...$(NC)"
	docker-compose down -v
	@echo "$(GREEN)Clean shutdown complete$(NC)"

restart: ## Restart all services
	@echo "$(BLUE)Restarting all services...$(NC)"
	docker-compose restart
	@echo "$(GREEN)Services restarted$(NC)"

logs: ## View logs from all services (follow mode)
	docker-compose logs -f

logs-web: ## View logs from web service only
	docker-compose logs -f web

logs-middleware: ## View logs from middleware service only
	docker-compose logs -f middleware

logs-redis: ## View logs from Redis service only
	docker-compose logs -f redis

build: ## Rebuild all services
	@echo "$(BLUE)Rebuilding all services...$(NC)"
	docker-compose build
	@echo "$(GREEN)Build complete$(NC)"

build-web: ## Rebuild web service only
	@echo "$(BLUE)Rebuilding web service...$(NC)"
	docker-compose build web
	@echo "$(GREEN)Web service rebuilt$(NC)"

build-middleware: ## Rebuild middleware service only
	@echo "$(BLUE)Rebuilding middleware service...$(NC)"
	docker-compose build middleware
	@echo "$(GREEN)Middleware service rebuilt$(NC)"

rebuild: down build up ## Stop, rebuild, and start all services

status: ## Show status of all services
	@echo "$(BLUE)Service Status:$(NC)"
	@docker-compose ps

stats: ## Show resource usage of containers
	docker stats --no-stream

shell-web: ## Open shell in web container
	docker-compose exec web sh

shell-middleware: ## Open shell in middleware container
	docker-compose exec middleware sh

shell-redis: ## Open Redis CLI
	docker-compose exec redis redis-cli

install-web: ## Install dependencies in web container
	@echo "$(BLUE)Installing dependencies in web container...$(NC)"
	docker-compose exec web npm install
	@echo "$(GREEN)Dependencies installed$(NC)"

install-middleware: ## Install dependencies in middleware container
	@echo "$(BLUE)Installing dependencies in middleware container...$(NC)"
	docker-compose exec middleware npm install
	@echo "$(GREEN)Dependencies installed$(NC)"

test-web: ## Run tests in web container
	@echo "$(BLUE)Running web tests...$(NC)"
	docker-compose exec web npm run test

test-web-coverage: ## Run tests with coverage in web container
	@echo "$(BLUE)Running web tests with coverage...$(NC)"
	docker-compose exec web npm run test:coverage

lint-web: ## Run linter in web container
	@echo "$(BLUE)Running web linter...$(NC)"
	docker-compose exec web npm run lint

lint-fix-web: ## Fix linting issues in web container
	@echo "$(BLUE)Fixing web linting issues...$(NC)"
	docker-compose exec web npm run lint:fix

clean: ## Clean up Docker resources (careful!)
	@echo "$(RED)Cleaning up Docker resources...$(NC)"
	docker-compose down -v --remove-orphans
	docker system prune -f
	@echo "$(GREEN)Cleanup complete$(NC)"

clean-all: ## Nuclear option - remove everything (DANGEROUS!)
	@echo "$(RED)WARNING: This will remove ALL Docker resources!$(NC)"
	@read -p "Are you sure? [y/N] " -n 1 -r; \
	echo; \
	if [[ $$REPLY =~ ^[Yy]$$ ]]; then \
		docker-compose down -v --remove-orphans; \
		docker system prune -a --volumes -f; \
		echo "$(GREEN)All Docker resources removed$(NC)"; \
	else \
		echo "$(YELLOW)Cancelled$(NC)"; \
	fi

setup: ## Initial setup - copy env files and build
	@echo "$(BLUE)Setting up development environment...$(NC)"
	@if [ ! -f apps/web/.env ]; then \
		cp apps/web/.env.example apps/web/.env; \
		echo "$(GREEN)Created apps/web/.env$(NC)"; \
	fi
	@if [ ! -f apps/server/.env ]; then \
		cp apps/server/.env.example apps/server/.env; \
		echo "$(GREEN)Created apps/server/.env$(NC)"; \
	fi
	@echo "$(YELLOW)Please edit .env files with your configuration$(NC)"
	@echo "$(BLUE)Building services...$(NC)"
	docker-compose build
	@echo "$(GREEN)Setup complete! Run 'make up' to start services$(NC)"

dev: up logs ## Start services and show logs (development workflow)

.SILENT: help
