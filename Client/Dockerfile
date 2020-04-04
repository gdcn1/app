FROM node:12.16 AS builder
WORKDIR /usr/src/app
COPY . ./
ARG REACT_APP_API_ENDPOINT
ARG REACT_APP_RECORD_NUMBER_TO_DISPLAY
RUN export REACT_APP_API_ENDPOINT=$REACT_APP_API_ENDPOINT
RUN export REACT_APP_RECORD_NUMBER_TO_DISPLAY=$REACT_APP_RECORD_NUMBER_TO_DISPLAY
RUN npm ci --only=production
RUN npm run prod

FROM nginx:1.16.1-alpine
COPY --from=builder /usr/src/app/build/ /usr/share/nginx/html
