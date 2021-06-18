from flask import request, abort, jsonify
from werkzeug.security import generate_password_hash, check_password_hash

from . import controllers
from ..configuration import db
from ..configuration.TokenUtils import Token, preauthorize
from ..models.User import User


@controllers.route('/auth/signup', methods=['POST'])
def create_user():
    email = request.form.get('email')
    username = request.form.get('username')
    password = request.form.get('password')

    user = User.query.filter((User.email == email) | (User.username == username)).first()

    if user:
        abort(409)

    to_add = User(username=username, email=email, password_hash=generate_password_hash(password, method='sha256'), shopping_lists=[])
    db.session.add(to_add)
    db.session.commit()

    return jsonify(to_add.to_dict()), 201


@controllers.route('/auth/login', methods=['POST'])
def login_user():
    password = request.form.get('password')
    email_username = request.form.get('email_username')

    user = User.query.filter((User.email == email_username) | (User.username == email_username)).first()

    if user is None:
        abort(404)

    if not check_password_hash(user.password_hash, password):
        abort(401)

    return Token.encode_token(user.id)


@controllers.route('/auth/hello', methods=['GET'])
@preauthorize
def say_hello_to_user():
    return "Hello user", 200
