from flask import Blueprint, jsonify, request

model_endpoint_blueprint = Blueprint("model_endpoint", __name__)

@model_endpoint_blueprint.route("/model", methods=["POST"])
def get_endpoint1():
    data = request.json

    age = data.get('age')
    sleep_duration = data.get('sleep_duration')
    quality_of_sleep = data.get('quality_of_sleep')
    physical_activity_level = data.get('physical_activity_level')
    heart_rate = data.get('heart_rate')
    daily_steps = data.get('daily_steps')
    bp_high = data.get('bp_high')
    bp_low = data.get('bp_low')

    response_data = {
        "message": "Successfull.",
        "Score": 69
    }
    
    return jsonify(response_data), 200