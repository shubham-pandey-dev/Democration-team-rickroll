FROM python:3.7

WORKDIR /speech-recognition

COPY requirements.txt .

RUN pip3 install --no-cache-dir -r requirements.txt

COPY ./app ./app

CMD ["python", "./app/api.py"]