from .configuration import configure
app = configure('development')  # put in os.environment for 12 factor

if __name__ == '__main__':
    app.run()
