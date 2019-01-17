FROM node:current-alpine

ADD index.js index.js

ENTRYPOINT ["node", "index.js"]
