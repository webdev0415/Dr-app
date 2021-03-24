FROM node:12.11.0

RUN apt-get update && \
    apt-get install -y xz-utils && \
    apt-get install -y curl

ENV NODE_OPTIONS="--max-old-space-size=4096"

# Create private key file with argument passed in
RUN mkdir ~/.ssh
COPY id_rsa /root/.ssh/id_rsa
RUN chmod 600 /root/.ssh/id_rsa
RUN ssh-keyscan gitlab.com >> /root/.ssh/known_hosts

RUN apt update -y && \
    npm install -g @angular/cli

COPY . /practioner-web
WORKDIR "/practioner-web"

ARG ENVIRONMENT

RUN npm i
RUN npm run build:$ENVIRONMENT

RUN rm /root/.ssh/id_rsa

COPY docker/entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh

ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]
