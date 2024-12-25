from app import mongo

def create_user(username, email, password):
    return mongo.db.users.insert_one({
        "username": username,
        "email": email,
        "password": password
    })

def get_user_by_email(email):
    return mongo.db.users.find_one({"email": email})
