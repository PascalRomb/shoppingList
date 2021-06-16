#!/bin/sh


echo "migrate data..."
export FLASK_APP=src/__init__.py
flask db upgrade
echo "data is migrated"


echo "running flask.."
gunicorn --chdir /app/src/ src:app -b 0.0.0.0:5000 -w 1
echo "flask is up."

