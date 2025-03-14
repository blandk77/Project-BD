# --- Backend Stage ---
FROM python:3.9-slim-buster AS backend-builder

WORKDIR /app/backend

COPY backend/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY backend .

# --- Frontend Stage ---
FROM node:16 AS frontend-builder

WORKDIR /app/frontend

COPY frontend/package*.json .
RUN npm install

COPY frontend .
RUN npm run build

# --- Final Stage ---
FROM python:3.9-slim-buster

WORKDIR /app

# Copy backend files
COPY --from=backend-builder /app/backend .

# Copy built frontend files
COPY --from=frontend-builder /app/frontend/build ./static

# Install backend dependencies (again, but only the needed ones)
RUN pip install --no-cache-dir Flask gunicorn

# Expose port
EXPOSE 8000

# Set environment variables (if needed)
ENV FLASK_APP=app.py

# Command to run the application
CMD gunicorn --bind 0.0.0.0:8000 app:app --workers 3
