from flask import Flask
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy
from .config import DevelopmentConfig, ProductionConfig
from flask_cors import CORS

db = SQLAlchemy()
migrate = Migrate()


def configure(environment):
    app = Flask(__name__)
    CORS(app)
    app.config.from_object(get_configuration(environment))
    db.init_app(app)
    migrate.init_app(app, db)

    from ..controllers import controllers
    app.register_blueprint(controllers, url_prefix='/api/v1')

    from ..models import models
    app.register_blueprint(models)

    return app


def get_configuration(environment):
    return DevelopmentConfig if environment == 'development' else ProductionConfig
