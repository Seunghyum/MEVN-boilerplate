# 참고 : https://stackoverflow.com/questions/42936588/how-to-deploy-vue-app
FROM node:carbon

RUN mkdir -p /usr/src/www

WORKDIR /usr/src/www
ADD . /usr/src/www
RUN npm install
RUN npm rebuild node-sass

EXPOSE 3001
CMD [ "npm", "start" ]