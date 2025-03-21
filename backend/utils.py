import random
import string

def generate_short_code(length=6):
    """Generates a random short code of the specified length."""
    characters = string.ascii_letters + string.digits
    return ''.join(random.choice(characters) for _ in range(length))
