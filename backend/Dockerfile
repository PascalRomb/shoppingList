FROM python:3.9.5-alpine3.13
MAINTAINER "pasquale.rombola97@gmail.com"

WORKDIR app/


ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBEFFERED 1

#copy backend files
COPY . .

#upgrade and install dependenciesc
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

EXPOSE 5000

ENTRYPOINT ["./backend-entrypoint.sh"]
