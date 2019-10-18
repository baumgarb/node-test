FROM node:12-alpine
WORKDIR /app
ENV NODE_ENV=hardening
COPY . .
RUN ["npm", "install"]
CMD ["node", "main.js"]
