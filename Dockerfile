#base image
FROM node:14-alpine

#dependencies
COPY ./ ./

RUN npm install

#command

CMD ["npm","start"]