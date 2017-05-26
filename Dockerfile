FROM python:2.7

WORKDIR /opt/local/billtracker-flask


COPY . /opt/local/billtracker-flask

RUN pip install Flask

EXPOSE 5000

CMD ./bt.sh

