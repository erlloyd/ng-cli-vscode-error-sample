FROM node:6.10.3
MAINTAINER Eric Lloyd

#install angular cli
RUN yarn global add @angular/cli@1.2.2

RUN mkdir /app
WORKDIR /app

CMD yarn install --pure-lockfile && npm rebuild node-sass && ng serve -host 0.0.0.0 --disable-host-check

EXPOSE 4200 9876
