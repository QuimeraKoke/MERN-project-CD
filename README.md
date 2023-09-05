# MERN Project Repository

This repository contains a MERN (MongoDB, Express.js, React, Node.js) project with a structured layout that separates the client and server components. Docker Compose is used to simplify the deployment of the entire application.

## Repository Structure

The project is organized into two main folders:

### 1. `client`

The `client` folder contains the React-based front-end of the application.

- `src`: This directory holds all the React components, styles, and application logic.
- `public`: Static assets such as HTML files and images.
- `package.json`: Configuration for the client-side dependencies and scripts.

### 2. `server`

The `server` folder contains the Node.js and Express.js back-end of the application.

- `routes`: Define the API routes and controllers.
- `models`: Database models using Mongoose.
- `config`: Configuration files, including database connection setup.
- `package.json`: Configuration for the server-side dependencies and scripts.

## Deployment with Docker Compose

We use Docker Compose to orchestrate the deployment of both the client and server components as well as a MongoDB container.

### Prerequisites

- Docker: Ensure you have Docker installed on your deployment server.
- Docker Compose: Make sure Docker Compose is also installed.

### Steps to Deploy

1. Clone the repository to your deployment server:

   ```bash
   git clone https://github.com/yourusername/mern-project.git
   cd mern-project
   ```

2. Build and start the Docker containers using Docker Compose:

   ```bash
   docker-compose up --build
   ```

   This command will build and start the client, server, and MongoDB containers as defined in the `docker-compose.yml` file.

4. Access your application in a web browser:

   - Client: http://your_server_ip:3000
   - Server API: http://your_server_ip:5000

## Configuration and Customization

- You can customize the client by editing the React components and styles in the `client/src` folder.

- For the server, modify the API routes, controllers, and database models in the `server/routes` and `server/models` folders.

- Additional configurations can be made in the respective `package.json` files for both the client and server.

## Conclusion

This repository provides a structured setup for a MERN project with separate client and server components. By using Docker Compose, you can easily deploy the entire application with a single command, making it convenient for development and production environments.

Feel free to explore, customize, and extend this project for your specific needs.
