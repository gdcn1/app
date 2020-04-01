FROM node:12.16 AS builder
WORKDIR /usr/src/app
COPY . ./
ARG REACT_APP_API_ENDPOINT="http://localhost:5000"
ARG REACT_APP_RECORD_NUMBER_TO_DISPLAY="20"
RUN npm ci --only=production
RUN npm run prod

FROM nginx:1.16.1-alpine
COPY --from=builder /usr/src/app/build/ /usr/share/nginx/html
