#firts step
FROM node:12-alpine as build-step

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build --prod

#second step
FROM nginx:1.17.1-alpine
	
COPY --from=build-step /app/dist/shoppingcart /usr/share/nginx/html