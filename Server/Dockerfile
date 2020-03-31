FROM node:12.16 AS builder
WORKDIR /usr/src/app
COPY . ./
RUN npm ci --only=production

FROM node:12.16-alpine
RUN  apk add postgresql-client
COPY --from=builder /usr/src/app ./
CMD  ["/run.sh"]
