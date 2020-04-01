## Inside the repository folder, run command
#### To build/re-build docker images for docker-compose
```
 docker-compose build
```
If no code changed, build will skip re-build

#### To run this application with docker-compose on 'localhost'

```
docker-compose up
```
Application frontend will be available at  http://localhost:3000

Ctrl-C to running docker-compose will stop containers
or run docker-compose in background
```
docker-compose up -d
```

#### To remove containers:
```
docker-compose down
```
