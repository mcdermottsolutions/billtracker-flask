FROM python:2.7

WORKDIR /opt/local/billtracker-flask

ENV FLASK_APP app.py

COPY . /opt/local/billtracker-flask

VOLUME /opt/local/billtracker-flask

RUN pip install Flask

EXPOSE 5000

CMD flask run --host=0.0.0.0

