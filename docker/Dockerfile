# DOCKER-VERSION 0.3.4
FROM ubuntu:14.10

RUN apt-get update; apt-get install -y nodejs git

RUN mkdir /src; cd src

# Install app dependencies
RUN git clone https://github.com/Sentiaio/sentiaWeb.git
RUN npm install

EXPOSE  3000

CMD ["node", "/src/app.js"]
