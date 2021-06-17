from ..configuration import db


class Product(db.Model):

    __tablename__ = 'products'
    id = db.Column(db.Integer, primary_key=True, autoincrement = True)
    description = db.Column(db.String(64))
    quantity = db.Column(db.Integer)
    image_path = db.Column(db.String(64), unique=True, nullable=True)
    list_id = db.Column(db.Integer, db.ForeignKey('shopping_lists.id'))

    def to_dict(self):
        return {
            "id": self.id,
            'description': self.description,
            'quantity': self.quantity,
            'image_path': self.image_path,
            'list_id': self.list_id
        }