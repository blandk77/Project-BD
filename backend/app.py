from flask import Flask, request, jsonify, redirect
from flask_cors import CORS  # For handling Cross-Origin Resource Sharing
import config
import utils
import pymongo
from urllib.parse import quote_plus

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes (for development)

# MongoDB Setup
username = quote_plus(config.mongodb_username)
password = quote_plus(config.mongodb_password)
mongo_uri = f"mongodb+srv://{username}:{password}@{config.mongodb_cluster_url}/?retryWrites=true&w=majority"

client = pymongo.MongoClient(mongo_uri)
db = client[config.mongodb_database_name]
urls_collection = db["urls"]


@app.route("/api/shorten", methods=["POST"])
def shorten_url():
    try:
        data = request.get_json()
        long_url = data.get("longUrl")

        if not long_url:
            return jsonify({"error": "Missing longUrl"}), 400

        short_code = utils.generate_short_code()
        while urls_collection.find_one({"short_code": short_code}):
            short_code = utils.generate_short_code()  # Ensure unique code

        urls_collection.insert_one({"long_url": long_url, "short_code": short_code})
        short_url = f"{config.base_url}/{short_code}"  # Construct the short URL

        return jsonify({"shortUrl": short_url}), 200
    except Exception as e:
        print(f"Error shortening URL: {e}")  # Log the error
        return jsonify({"error": "Failed to shorten URL"}), 500


@app.route("/<short_code>")
def redirect_to_long_url(short_code):
    url_data = urls_collection.find_one({"short_code": short_code})
    if url_data:
        long_url = url_data["long_url"]
        return redirect(long_url, code=302)
    else:
        return "URL not found", 404  # Return 404 for not found


if __name__ == "__main__":
    app.run(debug=config.debug, host="0.0.0.0", port=config.port)
