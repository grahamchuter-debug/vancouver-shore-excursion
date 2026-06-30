#!/bin/bash
set -euo pipefail
cd "$(dirname "$0")"
if [[ ! -f node_modules/.bin/wrangler ]]; then npm install; fi
echo "Building Vancouver Shore Excursion..."
npm run build
echo "Deploying to Cloudflare..."
npx wrangler deploy
echo ""
echo "Done. If vancouvershoreexcursion.com still shows 404:"
echo "  Workers & Pages → vancouver-shore-excursion → Settings → Domains"
echo "  → Add vancouvershoreexcursion.com and www.vancouvershoreexcursion.com"
echo "  (Remove those domains from any other Pages/Worker project first.)"
