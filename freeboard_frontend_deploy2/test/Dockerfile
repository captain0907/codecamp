FROM node:14

WORKDIR /freeboard_frontend/
COPY ./package.json /freeboard_frontend/
COPY ./yarn.lock /freeboard_frontend/
RUN yarn install

COPY . /freeboard_frontend/
RUN yarn build

CMD yarn start
