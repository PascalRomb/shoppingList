from flask import request, abort, jsonify
from werkzeug.security import generate_password_hash, check_password_hash

from . import controllers
from ..configuration import db
from ..configuration.TokenUtils import Token, preauthorize
from ..models.User import User


@controllers.route('/auth/signup', methods=['POST'])
def create_user():
    data = request.get_json()

    email = data.get('email')
    username = data.get('username')
    password = data.get('password')

    user = User.query.filter((User.email == email) | (User.username == username)).first()

    if user:
        abort(409)

    to_add = User(username=username, email=email, password_hash=generate_password_hash(password, method='sha256'), shopping_lists=[])
    db.session.add(to_add)
    db.session.commit()

    return jsonify(to_add.to_dict()), 201


@controllers.route('/auth/login', methods=['POST'])
def login_user():
    data = request.get_json()
    password = data.get('password')
    email = data.get('email')
    username = data.get('username')

    if (email is None and username is None) or password is None:
        abort(404)

    user = User.query.filter((User.email == email) | (User.username == username)).first()

    if user is None:
        abort(404)

    if not check_password_hash(user.password_hash, password):
        abort(401)

    return Token.encode_token(user.id), 200


@controllers.route('/auth/logged_user', methods=['GET'])
@preauthorize
def get_logged_user():
    bearer = request.headers['Authorization']
    token = bearer.split()[1]
    
    user = Token.extract_user_from_token(token)
    if user is None:
        abort(404)

    return jsonify(user.to_dict(full=True))


@controllers.route('/auth/hello', methods=['GET'])
@preauthorize
def say_hello_to_user():
    return "Hello user", 200
