from flask import jsonify
from werkzeug.exceptions import abort

from ..controllers import controllers
from ..models.User import User


class UserController:

    @controllers.route('/users/<user_id>', methods=['GET'])
    def get_user(user_id):
        user = User.query.filter_by(id=user_id).first()
        if user is None:
            abort(404)

        return jsonify(user.to_dict(full=True))
