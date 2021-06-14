from . import controllers


@controllers.route('/hello')
def hello_world():
    return 'Hello World!'