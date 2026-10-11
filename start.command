#!/bin/bash
# Ghost Memory — optional starter (a double-click on index.html works too).
# Starts a tiny local web server on port 8805 and opens the game in the default browser.
cd "$(dirname "$0")"
PORT=8805
echo "Ghost Memory läuft auf http://localhost:$PORT  (Fenster offen lassen, Ctrl+C zum Beenden)"
( sleep 1; open "http://localhost:$PORT/index.html" ) &
python3 -m http.server "$PORT" --bind 127.0.0.1
