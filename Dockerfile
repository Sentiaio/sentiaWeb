FROM node
ADD . /sentiaWeb
RUN cd /sentiaWeb
WORKDIR /sentiaWeb
RUN npm install -g grunt-cli
RUN npm install -g bcrypt
RUN npm install -g phantomjs
RUN npm install
EXPOSE 3000

