#!/usr/bin/env bash
set -euo pipefail

REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
DEPLOYMENT_WORK_TREE="${DEPLOYMENT_WORK_TREE:-$HOME/public_html}"

cd "$REPO_DIR"

git pull --ff-only

if [ -f package-lock.json ]; then
  npm ci
else
  npm install
fi

npm run build

rsync -a --delete "$REPO_DIR/dist/" "$DEPLOYMENT_WORK_TREE/"
#!/usr/bin/env bash
set -euo pipefail

REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
DEPLOYMENT_WORK_TREE="${DEPLOYMENT_WORK_TREE:-$HOME/public_html}"

cd "$REPO_DIR"

git pull --ff-only

if [ -f package-lock.json ]; then
  npm ci
else
  npm install
fi

npm run build

rsync -a --delete "$REPO_DIR/dist/" "$DEPLOYMENT_WORK_TREE/"
