from flask import Blueprint

controllers = Blueprint('controller', __name__)
from . import helloController, authController, userController, shoppingListController, fileController, productController
