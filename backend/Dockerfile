FROM python:3.9.5-alpine3.13
MAINTAINER "pasquale.rombola97@gmail.com"

WORKDIR app/


ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBEFFERED 1

#copy backend files
COPY . .

RUN apk add --no-cache postgresql-libs
RUN apk add --no-cache gcc musl-dev postgresql-dev
RUN apk add build-base

#upgrade and install dependenciesc
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

EXPOSE 5000
RUN chmod 755 backend-entrypoint.sh
ENTRYPOINT ["./backend-entrypoint.sh"]
