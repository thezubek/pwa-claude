# Docker Development Environment

This guide explains how to use Docker Compose for local development of the PWA Claude application.

## Prerequisites

- Docker Engine 20.10+ ([Install Docker](https://docs.docker.com/get-docker/))
- Docker Compose 2.0+ (included with Docker Desktop)
- At least 4GB of available RAM
- At least 10GB of free disk space

## Quick Start

### 1. Configure Environment Variables

Copy the example environment files and configure them:

```bash
# Web application
cp apps/web/.env.example apps/web/.env

# Middleware server
cp apps/server/.env.example apps/server/.env
```

Edit the `.env` files with your configuration. See [Environment Variables](#environment-variables) section below.

### 2. Start All Services

```bash
# Start all services in detached mode
docker-compose up -d

# View logs
docker-compose logs -f

# View logs for specific service
docker-compose logs -f web
```

The application will be available at:
- **Web App**: http://localhost:3000
- **Middleware API**: http://localhost:4000
- **Redis**: localhost:6379

### 3. Stop Services

```bash
# Stop all services
docker-compose down

# Stop and remove volumes (clean slate)
docker-compose down -v
```

## Services

The Docker Compose setup includes the following services:

### Web (Nuxt Application)

- **Port**: 3000 (HTTP), 24678 (Nuxt DevTools)
- **Hot Reload**: Enabled via volume mounts
- **Environment**: Development mode with debug enabled

### Middleware (Alokai Server)

- **Port**: 4000
- **Hot Reload**: Enabled via nodemon
- **Purpose**: API middleware layer between frontend and PlentyONE

### Redis (Cache)

- **Port**: 6379
- **Purpose**: Session storage and caching
- **Persistence**: Data stored in named volume `redis-data`
- **Health Check**: Automatic with redis-cli ping

### Mock API (Optional)

- **Port**: 8080
- **Purpose**: Mock PlentyONE API for testing
- **Usage**: Only started when using `testing` profile

To start with mock API:

```bash
docker-compose --profile testing up -d
```

## Development Workflow

### Hot Reload

All services are configured for hot reload:

- **Web**: Nuxt watches for file changes
- **Middleware**: nodemon restarts on changes
- **Mock API**: nodemon restarts on changes

Simply edit files in your IDE and see changes reflected immediately.

### Running Commands Inside Containers

```bash
# Execute command in web container
docker-compose exec web npm run test

# Execute command in middleware container
docker-compose exec middleware npm run lint

# Open shell in web container
docker-compose exec web sh

# Run npm install in web container
docker-compose exec web npm install <package-name>
```

### Debugging

#### VSCode Debugging

1. Ensure containers are running: `docker-compose up -d`
2. Use the debug configurations in `.vscode/launch.json`
3. Set breakpoints in your code
4. Start debugging with F5

#### View Logs

```bash
# All services
docker-compose logs -f

# Specific service
docker-compose logs -f web
docker-compose logs -f middleware

# Last 100 lines
docker-compose logs --tail=100 web

# Since specific time
docker-compose logs --since 10m web
```

### Rebuilding Services

When you change dependencies or Dockerfile:

```bash
# Rebuild all services
docker-compose build

# Rebuild specific service
docker-compose build web

# Rebuild and restart
docker-compose up -d --build
```

## Environment Variables

### Web Application (.env)

Required variables:

```bash
# API Configuration
API_ENDPOINT=http://mock-api:8080  # Or your PlentyONE instance
API_SECURITY_TOKEN=your_token_here

# Middleware URL
NUXT_PUBLIC_ALOKAI_MIDDLEWARE_API_URL=http://middleware:4000

# Development
NODE_ENV=development
NUXT_PUBLIC_DEBUG=true
LOG_LEVEL=debug
```

Optional variables:

```bash
# Image Optimization
IMAGEAVIF=true
IMAGEWEBP=true

# Captcha
CLOUDFLARETURNSTILEAPISITEKEY=your_key_here

# i18n
DEFAULTLANGUAGE=en
LANGUAGELIST=en,de
```

### Middleware Server (.env)

Required variables:

```bash
# Server Configuration
NODE_ENV=development
HOST=0.0.0.0
PORT=4000

# PlentyONE API
API_ENDPOINT=http://mock-api:8080
API_SECURITY_TOKEN=your_token_here
```

## Networking

All services run on the `pwa-claude-network` bridge network, allowing inter-container communication using service names as hostnames:

- `http://web:3000` - Web application
- `http://middleware:4000` - Middleware API
- `http://redis:6379` - Redis cache
- `http://mock-api:8080` - Mock API (testing profile only)

## Volumes

### Named Volumes

- `redis-data`: Persists Redis data across container restarts

### Bind Mounts

Source code is mounted for hot reload:

- `./apps/web:/app` - Web application source
- `./apps/server:/app` - Middleware source
- `./docker/mock-api:/app` - Mock API source

Node modules are excluded from mounts to prevent conflicts between host and container.

## Troubleshooting

### Port Already in Use

If you get "port is already allocated" errors:

```bash
# Check what's using the port
lsof -i :3000
lsof -i :4000

# Kill the process or change ports in docker-compose.yml
```

### Containers Won't Start

1. Check logs:
   ```bash
   docker-compose logs web
   docker-compose logs middleware
   ```

2. Verify environment variables are set:
   ```bash
   docker-compose config
   ```

3. Rebuild from scratch:
   ```bash
   docker-compose down -v
   docker-compose build --no-cache
   docker-compose up -d
   ```

### Hot Reload Not Working

1. Verify volume mounts:
   ```bash
   docker-compose exec web ls -la /app
   ```

2. Check file permissions (Linux/Mac):
   ```bash
   # Files should be readable by container user
   chmod -R 755 apps/web
   ```

3. Restart the service:
   ```bash
   docker-compose restart web
   ```

### Out of Disk Space

1. Remove unused Docker resources:
   ```bash
   docker system prune -a --volumes
   ```

2. Check Docker disk usage:
   ```bash
   docker system df
   ```

### Module Not Found Errors

If you see module not found errors after installing new packages:

```bash
# Rebuild the container
docker-compose build web
docker-compose up -d web

# Or install inside the container
docker-compose exec web npm install
```

### Redis Connection Issues

1. Check Redis is running:
   ```bash
   docker-compose ps redis
   docker-compose logs redis
   ```

2. Test connection:
   ```bash
   docker-compose exec redis redis-cli ping
   # Should return: PONG
   ```

## Performance Optimization

### Speed Up Builds

1. Use `.dockerignore` files (already configured)
2. Enable BuildKit:
   ```bash
   export DOCKER_BUILDKIT=1
   docker-compose build
   ```

### Reduce Memory Usage

Edit `docker-compose.yml` to add memory limits:

```yaml
services:
  web:
    mem_limit: 2g
    mem_reservation: 512m
```

### Use Volumes for node_modules

Already configured to exclude `node_modules` from bind mounts for better performance.

## Production Builds

This Docker Compose setup is for **development only**. For production:

1. Use separate production Dockerfiles
2. Build optimized images
3. Use proper secrets management
4. Configure health checks
5. Set resource limits
6. Use production-grade orchestration (Kubernetes, Docker Swarm)

See deployment documentation for production setup.

## Useful Commands

```bash
# Start services
docker-compose up -d

# Stop services
docker-compose down

# View service status
docker-compose ps

# View resource usage
docker stats

# Clean everything (nuclear option)
docker-compose down -v --remove-orphans
docker system prune -a --volumes

# Export environment for inspection
docker-compose config

# Scale a service (if configured for it)
docker-compose up -d --scale web=3

# View networks
docker network ls
docker network inspect pwa-claude-network

# View volumes
docker volume ls
docker volume inspect pwa-claude_redis-data
```

## CI/CD Integration

You can use this Docker Compose setup in CI/CD pipelines:

```bash
# Example GitHub Actions workflow
docker-compose up -d
docker-compose exec -T web npm run test
docker-compose exec -T web npm run lint
docker-compose down
```

## Best Practices

1. **Never commit `.env` files** - Use `.env.example` as template
2. **Rebuild after dependency changes** - `docker-compose build`
3. **Use specific versions** - Avoid `latest` tags in production
4. **Monitor resources** - Use `docker stats` to check usage
5. **Regular cleanup** - Run `docker system prune` weekly
6. **Keep logs manageable** - Configure log rotation
7. **Use health checks** - Already configured for Redis
8. **Document environment variables** - Update `.env.example`

## Resources

- [Docker Documentation](https://docs.docker.com/)
- [Docker Compose Documentation](https://docs.docker.com/compose/)
- [Nuxt Docker Deployment](https://nuxt.com/docs/getting-started/deployment#docker)
- [Node.js Docker Best Practices](https://github.com/nodejs/docker-node/blob/main/docs/BestPractices.md)

## Support

For issues with the Docker setup:

1. Check this documentation
2. Review [Troubleshooting Guide](./troubleshooting.md)
3. Check Docker logs: `docker-compose logs`
4. Open an issue on GitHub

## License

BSD-3-Clause - See LICENSE file for details
