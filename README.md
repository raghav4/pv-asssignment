# Web Assignment

## Steps to run the project

### Run the server

```bash
# clone the repository
git clone https://github.com/raghav4/pv-assignment.git

# setup the server
cd server

# install the dependencies
npm install

# create a .env file and add a environment variable as DB_URI
touch .env
echo "DB_URI=<mongodb_connection_string>" >> .env

# start the server

npm start
```

### Start the client side

```bash
# change the current working directory
cd client

# install the dependencies
npm install

# start the client with npm/yarn
yarn start
```
