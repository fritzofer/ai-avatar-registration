import os
from dotenv import load_dotenv
from flask import Flask
from pymongo import MongoClient
from app.routes import main  # Import the blueprint

def create_app():
    app = Flask(__name__)

    # MongoDB Connection URI
    load_dotenv()
    mongo_uri = os.getenv("MONGO_URI")
    print(mongo_uri)

    # Set up the MongoDB client
    client = MongoClient(mongo_uri)

    # Access the database
    app.mongo = client.get_database("my_database")  # Specify your database name explicitly

    # Ensure the collection exists by inserting a sample document (optional, for setup)
    if "users" not in app.mongo.list_collection_names():
        app.mongo["users"].insert_one({"setup": "initialization"})

    # Register the blueprint
    app.register_blueprint(main)

    return app
