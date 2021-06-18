import datetime
from functools import wraps

import jwt
from flask import jsonify, request, abort

from ..models.User import User


class Token:
    @staticmethod
    def encode_token(user_id):

        try:
            payload = {
                'exp': datetime.datetime.utcnow() + datetime.timedelta(hours=1),
                'iat': datetime.datetime.utcnow(),
                'sub': user_id
            }

            return jwt.encode(payload, "SECRET_KEY_PINGU_VA_AL_MARE", algorithm="HS256")
        except Exception as e:
            return e

    @staticmethod
    def decode_token(token):
        try:
            payload = jwt.decode(token, "SECRET_KEY_PINGU_VA_AL_MARE", algorithms=["HS256"])
            return payload['sub'], None

        except Exception as e:
            return e


def preauthorize(view_function):
    @wraps(view_function)
    def wrapper(*args, **kwargs):
        if 'Authorization' not in request.headers:
            return jsonify({'message': 'a valid token is missing'}), 403

        bearer = request.headers['Authorization']
        token = bearer.split()[1]

        try:
            uid, err = Token.decode_token(token)

            if err:
                return jsonify({'message': err})

            current_user = User.query.filter_by(id=uid).first()

        except:
            return abort(401)

        return view_function(*args, **kwargs)

    return wrapper
