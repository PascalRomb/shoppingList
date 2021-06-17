from ..configuration import db
from flask_login import UserMixin


class User(UserMixin, db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(64), unique=True, index=True)
    email = db.Column(db.String(64), unique=True, index=True)
    password_hash = db.Column(db.String(128))
    shopping_lists = db.relationship('ShoppingList', backref='owner', lazy='dynamic')


    def to_dict(self, full=False):
        user_dict = {
            "id": self.id,
            'username': self.username,
            'email': self.email
        }

        if full:
            user_dict['shopping_lists'] = self.shopping_lists.all()


        return user_dict