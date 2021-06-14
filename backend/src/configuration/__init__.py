from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from .config import Config

db = SQLAlchemy()


def configure(environment):
    app = Flask(__name__)

    app.config.from_object(get_configuration(environment))
    db.init_app(app)

    from ..controller import controller
    app.register_blueprint(controller, url_prefix='/api/v1')

    return app


def get_configuration(environment):
    return Config
