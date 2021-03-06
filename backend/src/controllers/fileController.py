import os

from flask import send_from_directory
import uuid

from ..configuration.TokenUtils import preauthorize
from ..controllers import controllers

ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg'}

@controllers.route("/static/<filename>")
# @preauthorize security bug. No time to implement it.
def serve_static(filename):
    return send_from_directory(os.environ.get('RESOURCES'), filename)


# build filename with hash of file's info => check if file already exists and if not then save.
def upload_files(file):
    if file is None or file.filename == '' or not allowed_file(file.filename):
        return None

    ext = get_extension(file.filename)
    name = uuid.uuid4().hex[:50]
    filename = name + "." + ext
    file.save(os.path.join(os.environ.get('RESOURCES'), filename))
    return filename


# for further info, visit https://flask.palletsprojects.com/en/2.0.x/patterns/fileuploads/
def allowed_file(filename):
    return '.' in filename and \
           get_extension(filename) in ALLOWED_EXTENSIONS


def get_extension(filename):
    return filename.rsplit('.', 1)[1].lower()