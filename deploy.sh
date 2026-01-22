#!/usr/bin/env bash
set -euo pipefail

REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
DEPLOYMENT_WORK_TREE="${DEPLOYMENT_WORK_TREE:-$HOME/public_html}"

cd "$REPO_DIR"

echo "Starting deployment at $(date)"
echo "Working directory: $REPO_DIR"
echo "Deployment target: $DEPLOYMENT_WORK_TREE"

git pull --ff-only
echo "Git pull completed"

# Build using Docker to avoid Node installation issues
echo "Starting npm ci..."
docker run --rm -v "$REPO_DIR:/app" -w /app node:22 npm ci
echo "npm ci completed"

echo "Starting npm run build..."
docker run --rm -v "$REPO_DIR:/app" -w /app node:22 npm run build
echo "Build completed"

echo "Starting rsync..."
rsync -a --delete "$REPO_DIR/dist/" "$DEPLOYMENT_WORK_TREE/"
echo "Deployment completed at $(date)"
