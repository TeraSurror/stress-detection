import pandas as pd 
import numpy as np 
from sklearn.preprocessing import LabelEncoder
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_absolute_percentage_error, mean_squared_error, r2_score
import pickle

path = '../dataset/cleaned-dataset.csv'
df = pd.read_csv(path)

categoric = ['Gender', 'Occupation', 'BMI Category', 'Sleep Disorder']
numeric = ['Age', 'Sleep Duration', 'Quality of Sleep', 'Physical Activity Level', 'Heart Rate', 'Daily Steps', 'BP High', 'BP Low']

# X = df.drop(['Person ID', 'Stress Level'], axis=1)
X = df[numeric]
print(X.head())
y = df[['Stress Level']]

X_train, X_test, y_train, y_test = train_test_split(X,y, test_size=0.2, random_state=42)

lr = LinearRegression()
lr.fit(X_train, y_train)

y_pred = lr.predict(X_test)
y_pred = np.maximum(0, y_pred)

# Evaluate the model
accuracy = lr.score(X_test, y_test)
print(f"Model Accuracy: {accuracy}")

mape = mean_absolute_percentage_error(y_test, y_pred)
rmse = np.sqrt(mean_squared_error(y_test, y_pred))
r2 = r2_score(y_test, y_pred)

print(f"""
MAPE: {mape:.2f}
RMSE: {rmse:.2f}
R2: {r2:.2f}
""")

# Save the model to a pickle file
with open('linear_regression_model.pkl', 'wb') as model_file:
    pickle.dump(lr, model_file)