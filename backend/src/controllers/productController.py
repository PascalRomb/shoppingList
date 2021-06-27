from flask import request, abort, jsonify

from . import controllers
from .fileController import upload_files
from ..configuration import db
from ..configuration.TokenUtils import preauthorize
from ..models.Product import Product


@controllers.route("/products", methods=['POST'])
@preauthorize
def create_product():

    image_path = None
    if len(request.files) > 0 and request.files['files'] is not None:
        file = request.files['files']
        image_path = upload_files(file)
        if image_path is None:
            abort(400)

    name = request.form.get('name')
    description = request.form.get('description')
    quantity = request.form.get('quantity')
    list_id = request.form.get('list_id')

    product = Product(name=name, description=description, quantity=quantity, list_id=list_id, image_path=image_path)
    db.session.add(product)
    db.session.commit()

    return jsonify(product.to_dict()), 200


@controllers.route("/products", methods=['PUT'])
@preauthorize
def update_product():
    id = request.form.get('id')
    product = Product.query.filter_by(id=id).first()

    if product is None:
        abort(404)

    image_path = None
    if len(request.files) > 0 and request.files['files'] is not None:
        file = request.files['files']
        image_path = upload_files(file)
        if image_path is None:
            abort(400)


    name = request.form.get('name')
    description = request.form.get('description')
    quantity = request.form.get('quantity')

    if name is not None:
        product.name = name
    if description is not None:
        product.description = description
    if quantity is not None:
        product.quantity = quantity

    product.image_path = image_path

    db.session.add(product)
    db.session.commit()

    return jsonify(product.to_dict()), 201


@controllers.route("/products/<id>", methods=['DELETE'])
@preauthorize
def delete_product(id):
    Product.query.filter_by(id=id).first()
    db.session.commit()

    return ('', 204)


@controllers.route("/products/<id>", methods=['GET'])
@preauthorize
def get_product(id):
    product = Product.query.filter_by(id=id).first()

    if product is None:
        abort(404)

    return jsonify(product.to_dict()), 200
