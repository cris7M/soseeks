#!/usr/bin/env bash
# Open the pitch deck in your browser (required for slide downloads)
cd "$(dirname "$0")"
PORT="${1:-8080}"
echo "Soseeks Pitch Deck → http://localhost:$PORT"
echo "Press Ctrl+C to stop"
python3 -m http.server "$PORT"
