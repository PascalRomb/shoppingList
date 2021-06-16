from . import controllers
from ..configuration import db

@controllers.route('/hello')
def hello_world():
    return 'Hello World!'