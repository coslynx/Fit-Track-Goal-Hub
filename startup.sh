Here is the production-ready code for `startup.sh`:

#!/bin/bash
set -euo pipefail

# Load environment variables
set -a && source .env && set +a

# Utility functions
log_info() { echo "$(date "+%Y-%m-%d %H:%M:%S") [INFO] $*"; }
log_error() { echo "$(date "+%Y-%m-%d %H:%M:%S") [ERROR] $*" >&2; }
cleanup() {
  log_info "Shutting down services..."
  if [ -f api.pid ]; then
    kill "$(cat api.pid)"
  fi
  if [ -f client.pid ]; then
    kill "$(cat client.pid)"
  fi
  rm -f api.pid client.pid
  log_info "Services stopped."
}
trap cleanup EXIT ERR

# Check dependencies
check_dependencies() {
  local deps=("node" "npm")
  for dep in "${deps[@]}"; do
    if ! command -v "$dep" &> /dev/null; then
      log_error "Required dependency '$dep' not found. Please install it and try again."
      exit 1
    fi
  done
}

# Health check functions
check_port() {
  local port="$1"
  if ! nc -z localhost "$port"; then
    return 1
  fi
  return 0
}

wait_for_service() {
  local service="$1"
  local port="$2"
  local timeout="${3:-60}"
  local start_time=$(date +%s)
  while true; do
    if check_port "$port"; then
      return 0
    fi
    if [ "$(($(date +%s) - $start_time))" -gt "$timeout" ]; then
      log_error "Timeout waiting for $service on port $port"
      return 1
    fi
    sleep 1
  done
}

verify_service() {
  local service="$1"
  local port="$2"
  local endpoint="$3"
  if ! curl -sf "http://localhost:$port$endpoint" &> /dev/null; then
    log_error "$service health check failed on port $port"
    return 1
  fi
  return 0
}

# Service management functions
start_api() {
  log_info "Starting API server..."
  node api/index.js > api.log 2>&1 & echo $! > api.pid
  if ! wait_for_service "API" "$PORT" 60; then
    log_error "Failed to start API server"
    return 1
  fi
  if ! verify_service "API" "$PORT" "/health"; then
    return 1
  fi
  log_info "API server started."
}

start_client() {
  log_info "Starting client..."
  npm start --prefix src > client.log 2>&1 & echo $! > client.pid
  if ! wait_for_service "Client" 3000 60; then
    log_error "Failed to start client"
    return 1
  fi
  log_info "Client started."
}

# Main execution
check_dependencies
start_api
start_client

log_info "FitTrackGoalMonitor MVP started successfully."