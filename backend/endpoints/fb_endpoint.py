from flask import Blueprint, jsonify

fb_endpoint_blueprint = Blueprint("fb_endpoint", __name__)

@fb_endpoint_blueprint.route("/fb", methods=["GET"])
def get_endpoint1():
    return jsonify({"message": "This is the FB endpoint"})