# Bitcoin Blockchain Viewer - Frontend

This is the frontend part of the Bitcoin Blockchain Viewer application, which visualizes Bitcoin blockchain data and interacts with the backend API.

## Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Bootstrap**: Frontend framework for building responsive and mobile-first websites.
- **React Bootstrap**: React components for Bootstrap.
- **React Router DOM**: DOM bindings for React Router.
- **Axios**: Promise-based HTTP client for the browser and Node.js.
- **Date-fns**: Modern JavaScript date utility library.
- **Recharts**: React charting library.


# Running with Docker
## Prerequisites
- Backend running on port 8080
- Git Installed
- Docker Installed

### Clone the Repository
```bash
  git clone https://github.com/felipeSilvaDeMelloStudentAccount/blockchain-transactions-ui 
  cd blockchain-transactions-ui
```

### Build the docker image:
```bash
  docker build -t blockchain-viewer-web .
```
### Run the docker image:
```bash
  docker run -p 3000:80 blockchain-viewer-web
```

## Manual Setup
- Install Git
- Install node.js and npm
- Please refer to the backend README for instructions on how to run the backend API.

### Clone the Repository
```bash
git clone https://github.com/felipeSilvaDeMelloStudentAccount/blockchain-transactions-ui
cd blockchain-transactions-ui
```

### Install Dependencies
```bash
npm install
```

### Run the Application
```bash
npm start
```
The application will be available on port 3000. 
Open your browser and navigate to http://localhost:3000 to view the application.
Best on Chrome.

## Configuration connecting to the backend on the port 9001
- If you are running the backend normally, you don't need to change anything.
- If you are running the backend on the docker config change the baseURL to http://localhost:8080/api/bitcoin
```bash
  export REACT_APP_API_BASE_URL=http://localhost:8080/api/bitcoin
npm start

````