FROM node:current-alpine

ADD app.js app.js

ENTRYPOINT ["node", "app.js"]
