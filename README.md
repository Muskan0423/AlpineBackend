
Make sure you have the following installed:
- [Node.js](https://nodejs.org/en/download/) (version 14 or later)
- [Docker](https://docs.docker.com/get-docker/)

## Project Setup

1. Clone the repository:

    
    git clone (https://github.com/Muskan0423/AlpineBackend)
    cd AlpineBackend
    

2. Install dependencies:

 
    npm install
   

3. Start the application:

  
    npm start
  


## Running the Application

### With Node.js

1. To run the application locally without Docker, simply use the following command:

  
    npm start
   

2. For development mode with live-reload:


    npm run dev
 

### With Docker

1. Build the Docker image:

    docker build -t AlpineBackend .
  

2. Run the Docker container:

    docker run -p 3000:3000 AlpineBackend
   

    This will start the application inside a Docker container, mapping port 3000 of the container to port 3000 on your local machine.

3. Stop the container:

    Find the container ID:

 
    docker ps


    Then stop it using:

   
    docker stop <container-id>


