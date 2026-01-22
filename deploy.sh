#!/usr/bin/env bash
set -euo pipefail

REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
DEPLOYMENT_WORK_TREE="${DEPLOYMENT_WORK_TREE:-$HOME/public_html}"

cd "$REPO_DIR"

git pull --ff-only

# Build using Docker to avoid Node installation issues
docker run --rm -v "$REPO_DIR:/app" -w /app node:22 npm ci
docker run --rm -v "$REPO_DIR:/app" -w /app node:22 npm run build

rsync -a --delete "$REPO_DIR/dist/" "$DEPLOYMENT_WORK_TREE/"
