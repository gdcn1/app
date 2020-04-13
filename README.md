### Run application in terminal

#### Install Nodejs
For Ubuntu linux [Node Source](https://github.com/nodesource/distributions) repository can be used to install NodeJS
```
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt install nodejs
```

This project requires a PostgreSQL database to run.

#### Run database
You may need to first start docker
```
docker-machine create box
```
And to set the enviroment variables suggested by 
```
docker-machine env box
```
The run the database
```
docker run -it -p 5432:5432 -e POSTGRES_PASSWORD=postgres postgres
```

#### Clone project repository and change directory to the repository in two terminal windows
```
git clone https://github.com/gdcn1/app.git
cd app
```

#### 1st window Client
The "Client" directory contains the React code.
```
cd Client
npm install
npm start 
```


#### 2nd window Server
The "Server" directory contains the code for the node.js express server. 
```
cd Server
npm install
npm start  
```

As both command `npm start` for client and ` ... npm start` for Server are running application frontend will be available at http://localhost:3000



### Run application in Docker
In production enviroments the app will be running in a docker container, bellow instruction how to build similar docker images and run containers on top.

#### Clone project repository and change directory to the repository
```
git clone https://github.com/gdcn1/app.git
cd app
```

#### To build/re-build docker images for docker-compose
Inside the repository folder, run command
```
docker-compose build
```
If no code changed, build will skip re-build

#### To run this application with docker-compose on 'localhost'
```
docker-compose up
```
After start you can see all trace message in terminal  
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
