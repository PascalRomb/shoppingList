from ..configuration import db


class ShoppingList(db.Model):

    __tablename__ = 'shopping_lists'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(64), unique=True, index=True)
    products = db.relationship('Product', backref='shopping_list', lazy='dynamic')
    owner_id = db.relationship(db.Integer, db.ForeignKey('users.id'))