from flask import request, abort, jsonify

from ..configuration import db
from ..configuration.TokenUtils import preauthorize, Token
from ..controllers import controllers
from ..models.ShoppingList import ShoppingList
from ..models.User import User


@controllers.route("/shoppinglists", methods=['POST'])
@preauthorize
def create_list():
    data = request.get_json()
    name = data.get('name')
    owner_id = data.get('owner_id')

    owner = User.query.filter_by(id=owner_id).first()

    if owner is None:
        abort(404)

    shopping_list = ShoppingList(name=name, owner_id=owner_id, products=[])

    db.session.add(shopping_list)
    db.session.commit()

    owner.shopping_lists.append(shopping_list)
    db.session.commit()

    return jsonify(shopping_list.to_dict()), 204


@controllers.route("/shoppinglists", methods=['GET'])
@preauthorize
def get_lists_for_logged_user():
    bearer = request.headers['Authorization']
    token = bearer.split()[1]

    user = Token.extract_user_from_token(token)

    lists = ShoppingList.query.filter_by(owner_id=user.id).all()

    if lists is None:
        abort(404)

    return jsonify([shopping_list.to_dict() for shopping_list in lists]), 200


# is id enough or may i search for id and owner_id? for security reasons
@controllers.route("/shoppinglists/<id>", methods=['GET'])
@preauthorize
def get_list(id):
    shopping_list = ShoppingList.query.filter_by(id=id).first()

    if shopping_list is None:
        abort(404)

    return jsonify(shopping_list.to_dict(full=True)), 200


@controllers.route("/shoppinglists/<id>", methods=['DELETE'])
@preauthorize
def delete_list(id):
    shopping_list = db.session.query(ShoppingList).filter(ShoppingList.id==id).first()
    db.session.delete(shopping_list)
    db.session.commit()

    return ('', 204)
