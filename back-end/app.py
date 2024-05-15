# app.py
from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import os
import mysql.connector

app = Flask(__name__)
CORS(app)

UPLOAD_FOLDER = 'uploads'
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

# MySQL connection
db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="0414",
    database="file_storage"
)

def save_to_database(filename):
    cursor = db.cursor()
    cursor.execute("INSERT INTO files (filename) VALUES (%s)", (filename,))
    db.commit()
    cursor.close()

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({"error": "No file part"}), 400
    file = request.files['file']
    if file.filename == '':
        return jsonify({"error": "No selected file"}), 400
    if file:
        file_path = os.path.join(UPLOAD_FOLDER, file.filename)
        file.save(file_path)
        if os.path.getsize(file_path) == 0:
            os.remove(file_path)
            return jsonify({"error": "File is empty"}), 400
        save_to_database(file.filename)
        return jsonify({"filename": file.filename}), 200

@app.route('/files', methods=['GET'])
def list_files():
    files = os.listdir(UPLOAD_FOLDER)
    return jsonify(files), 200

@app.route('/download/<filename>', methods=['GET'])
def download_file(filename):
    return send_from_directory(UPLOAD_FOLDER, filename)

if __name__ == '__main__':
    app.run(debug=True)
