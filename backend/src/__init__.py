from flask import Flask

app = Flask(__name__)

from .controller import controller
app.register_blueprint(controller, url_prefix='/api/v1')

if __name__ == '__main__':
    app.run()
