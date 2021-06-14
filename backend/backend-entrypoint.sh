#!/bin/sh

echo "running flask.."
gunicorn --chdir /app/src/ src:app -b 0.0.0.0:5000 -w 1
echo "flask is up."

