import os
from dotenv import load_dotenv
from flask import Flask
from pymongo import MongoClient
from app.routes import main
from flask_cors import CORS

def create_app():
    app = Flask(__name__)
    CORS(app, origins=["http://localhost:3000", "https://my-production-frontend.com"])

    # MongoDB Connection URI
    load_dotenv()
    mongo_uri = os.getenv("MONGO_URI")
    print(mongo_uri)

    # Set up the MongoDB client
    client = MongoClient(mongo_uri)

    # Access the database
    app.mongo = client.get_database("my_database")

    # Ensure the collection exists by inserting a sample document
    if "users" not in app.mongo.list_collection_names():
        app.mongo["users"].insert_one({"setup": "initialization"})

    # Register the blueprint
    app.register_blueprint(main)

    return app
