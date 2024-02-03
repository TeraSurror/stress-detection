from flask import Blueprint, jsonify
import json

llm_endpoint_blueprint = Blueprint("llm_endpoint", __name__)

@llm_endpoint_blueprint.route("/llm", methods=["GET"])
def get_endpoint1():
    return jsonify({"message": "This is the LLM endpoint"})