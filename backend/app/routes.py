from flask import Flask, Blueprint, request, jsonify, current_app
from flask_cors import CORS  # Import CORS

main = Blueprint("main", __name__)

# Enable CORS for the entire app
CORS(main)

# Root route
@main.route("/", methods=["GET"])
def home():
    return jsonify({"message": "Welcome to the AI Avatar Registration App!"})

# Register route
@main.route("/register", methods=["POST"])
def register():
    data = request.get_json()

    # Validate input (basic example)
    if not data.get("username") or not data.get("email") or not data.get("password"):
        return jsonify({"error": "Missing required fields"}), 400

    # Insert into MongoDB
    current_app.mongo["users"].insert_one({
        "username": data["username"],
        "email": data["email"],
        "password": data["password"]  # Note: Hash passwords in production!
    })

    return jsonify({"message": "User registered successfully"}), 201
