from . import controller


@controller.route('/hello')
def hello_world():
    return 'Hello World!'