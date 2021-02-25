FROM bain/slim

RUN apt-get install -y \
    curl sudo
RUN curl -fsSL https://deb.nodesource.com/setup_15.x | sudo -E bash - \
    && sudo apt-get install -y nodejs
RUN npm install --global yarn

COPY sims/ code/sims/
COPY app/ code/server/
WORKDIR /code/server
RUN yarn
