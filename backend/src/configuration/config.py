class Config:
    SQLALCHEMY_TRACK_MODIFICATIONS = False


class DevelopmentConfig(Config):
    SQLALCHEMY_DATABASE_URI = 'postgresql://codemotion:password@localhost/shopping_db'  # get from environment


class ProductionConfig(Config):
    SQLALCHEMY_DATABASE_URI = 'postgresql://codemotion:password@db/shopping_db'  # get from environment