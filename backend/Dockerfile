# 참고 : https://stackoverflow.com/questions/42936588/how-to-deploy-vue-app
FROM node:carbon

RUN mkdir -p /usr/src/api

WORKDIR /usr/src/api
ADD . /usr/src/api
RUN npm install

ENV NODE_ENV=production

# Port to expose
EXPOSE 3000
CMD [ "npm", "start" ]