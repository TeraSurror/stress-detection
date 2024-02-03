from flask import Flask
from endpoints.model_endpoint import model_endpoint_blueprint
from endpoints.llm_endpoint import llm_endpoint_blueprint
from endpoints.fb_endpoint import fb_endpoint_blueprint

app = Flask(__name__)

# Register Blueprints for Endpoints
app.register_blueprint(model_endpoint_blueprint)
app.register_blueprint(llm_endpoint_blueprint)
app.register_blueprint(fb_endpoint_blueprint)

if __name__ == "__main__":
    app.run(debug=True)
