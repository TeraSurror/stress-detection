from flask import Blueprint, jsonify

model_endpoint_blueprint = Blueprint("model_endpoint", __name__)

@model_endpoint_blueprint.route("/model", methods=["GET"])
def get_endpoint1():
    return jsonify({"message": "This is the ML model endpoint"})