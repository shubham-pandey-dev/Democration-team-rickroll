import os
import shutil
from main import get_large_audio_transcription
from flask import request, Flask, flash, jsonify

app = Flask(__name__)
app.config["DEBUG"] = True

ALLOWED_EXTENSIONS = {'wav'}
INCOMING_FILE = "audio.wav"
CHUNK_FOLDER = "audio-chunk"

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/voice-to-text', methods=['POST'])
def home():
    if 'file' not in request.files:
        flash('No file part')
    f = request.files['file']
    if f and allowed_file(f.filename):
        f.save(INCOMING_FILE)
    whole_text = get_large_audio_transcription(INCOMING_FILE ,CHUNK_FOLDER)
    os.remove(INCOMING_FILE)
    shutil.rmtree(CHUNK_FOLDER, ignore_errors=True)
    return jsonify({'text': whole_text})

app.run(host='0.0.0.0', port=6000)

