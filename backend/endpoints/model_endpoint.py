from flask import Blueprint, jsonify, request
import pickle
import numpy as np
import pandas as pd
import os

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

    model_file_path = '../models/linear_regression_model.pkl'
    absolute_path = os.path.abspath(os.path.join(os.path.dirname(__file__), model_file_path))

    with open(absolute_path, 'rb') as model_file:
        model = pickle.load(model_file)

    data = [age,sleep_duration,quality_of_sleep,physical_activity_level,heart_rate,daily_steps,bp_high,bp_low]

    model_cols = ['Age', 'Sleep Duration', 'Quality of Sleep', 'Physical Activity Level', 'Heart Rate', 'Daily Steps', 'BP High', 'BP Low']

    # Convert user inputs to DataFrame for prediction
    user_data = pd.DataFrame([data], columns= model_cols)

    # Convert user inputs to DataFrame for prediction

    # Make stress level predictions
    stress_score = np.round(model.predict(user_data)[0][0],1)
    print(f"Predicted Stress Level: {stress_score}")

    response_data = {
        "message": "Successfull.",
        "Score": stress_score
    }
    
    return jsonify(response_data), 200