from .configuration import configure
import os
app = configure(os.environ.get("ENVIRONMENT") or 'development')  # put in os.environment for 12 factor

if __name__ == '__main__':
    app.run()
