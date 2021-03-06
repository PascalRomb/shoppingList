"""create tables

Revision ID: 7294f04c9190
Revises: 
Create Date: 2021-06-16 16:34:42.334737

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '7294f04c9190'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('shopping_lists',
    sa.Column('id', sa.Integer(), autoincrement=True, nullable=False),
    sa.Column('name', sa.String(length=64), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_shopping_lists_name'), 'shopping_lists', ['name'], unique=True)
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(length=64), nullable=True),
    sa.Column('email', sa.String(length=64), nullable=True),
    sa.Column('password_hash', sa.String(length=128), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_users_email'), 'users', ['email'], unique=True)
    op.create_index(op.f('ix_users_username'), 'users', ['username'], unique=True)
    op.create_table('products',
    sa.Column('id', sa.Integer(), autoincrement=True, nullable=False),
    sa.Column('description', sa.String(length=64), nullable=True),
    sa.Column('quantity', sa.Integer(), nullable=True),
    sa.Column('image_path', sa.String(length=64), nullable=True),
    sa.Column('list_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['list_id'], ['shopping_lists.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('image_path')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('products')
    op.drop_index(op.f('ix_users_username'), table_name='users')
    op.drop_index(op.f('ix_users_email'), table_name='users')
    op.drop_table('users')
    op.drop_index(op.f('ix_shopping_lists_name'), table_name='shopping_lists')
    op.drop_table('shopping_lists')
    # ### end Alembic commands ###
