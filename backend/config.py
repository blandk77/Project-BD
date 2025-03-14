import os
from dotenv import load_dotenv

load_dotenv()

debug = True  # Set to False in production
port = int(os.environ.get("PORT", 5000))  # Default port 5000


mongodb_uri = os.environ.get("MONGODB_URI")
mongodb_database_name = "Black-Dot" 

# Base URL for shortened links (replace with your Koyeb app URL or custom domain)
base_url = os.environ.get("BASE_URL", "https://unable-annadiane-tg-guy-eb37d8a5.koyeb.app/")
