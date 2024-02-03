import pickle
import pandas as pd

with open('linear_regression_model.pkl', 'rb') as model_file:
    model = pickle.load(model_file)

data_array_low = [17, 4, 4, 20, 47, 2500, 126, 83]
data_array_high = [17, 8, 6, 84, 67, 12200, 126, 83]
model_cols = ['Age', 'Sleep Duration', 'Quality of Sleep', 'Physical Activity Level', 'Heart Rate', 'Daily Steps', 'BP High', 'BP Low']

# Convert user inputs to DataFrame for prediction
user_data_low = pd.DataFrame([data_array_low], columns= model_cols)

# Convert user inputs to DataFrame for prediction
user_data_high = pd.DataFrame([data_array_high], columns= model_cols)

# Make stress level predictions
stress_prediction = model.predict(user_data_low)
print(f"Predicted Stress Level: {stress_prediction}")

# Make stress level predictions
stress_prediction = model.predict(user_data_high)
print(f"Predicted Stress Level: {stress_prediction}")
