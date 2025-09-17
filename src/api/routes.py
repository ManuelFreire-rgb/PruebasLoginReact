"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Cliente, Analista, Supervisor, Administrador
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_jwt_extended import create_access_token
from datetime import timedelta
from werkzeug.security import check_password_hash

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    email = data.get("email")
    password = data.get("password")

    user_models = [
        ("Cliente", Cliente),
        ("Analista", Analista),
        ("Supervisor", Supervisor),
        ("Administrador", Administrador),
    ]

    for rol_name, model in user_models:
        user = model.query.filter_by(email=email).first()
        if user and check_password_hash(user.contraseña_hash, password):
            access_token = create_access_token(identity={"id": user.id, "rol": rol_name}, expires_delta=timedelta(hours=1))
            return jsonify({"token": access_token, "rol": rol_name}), 200

    return jsonify({"msg": "Email o contraseña incorrectos"}), 401
