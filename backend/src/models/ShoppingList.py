from ..configuration import db


class ShoppingList(db.Model):

    __tablename__ = 'shopping_lists'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(64), unique=True, index=True)
    products = db.relationship('Product', backref='shopping_list', lazy='dynamic')
    owner_id = db.Column(db.Integer, db.ForeignKey('users.id'))

    def to_dict(self, full=False):
        shopping_list_dict = {
            "id": self.id,
            'name': self.name,
            'owner_id': self.owner_id
        }

        if full:
            products = self.products.all()
            if products is not None:
                shopping_list_dict['products'] = [product.to_dict() for product in products]

        return shopping_list_dict

