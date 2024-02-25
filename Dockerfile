FROM node:lts-buster

WORKDIR /docker_app

# RUN sudo yum update -y \
#     && rm -rf /var/lib/apt/lists/*

COPY server/package.json ./package.json
COPY server/package-lock.json ./package-lock.json

WORKDIR /docker_app/server

RUN npm install

COPY . .

EXPOSE 5050

# Serve the app
CMD ["npm", "start"]