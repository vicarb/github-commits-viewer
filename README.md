# GitHub Commits Viewer

## Description

This project is a web application that allows users to view the commit history from GitHub repositories. It features a separate backend (`api-commits`) for fetching data from GitHub and a React frontend (`front-commits`) for displaying the data. The application supports a night mode toggle and is containerized using Docker for easy setup and deployment.

## Features

- Display commit history from GitHub repositories.
- Night mode toggle for enhanced viewing.
- Dockerized setup for straightforward deployment.

## Prerequisites

Before you begin, ensure you have Docker installed on your system. If not, you can download it from [Docker's official website](https://www.docker.com/get-started).

## Installation and Running the Application

1. **Clone the Repository**

`git clone https://github.com/vicarb/github-commits-viewer.git`  
`cd github-commits-viewer`


2. **Build and Run with Docker Compose**

`docker-compose up --build`


This command will build the images for the backend and frontend and start the containers as defined in your `docker-compose.yaml` file.

## Accessing the Application

- The frontend should now be accessible at `http://localhost:3001`.
- The backend API will be running on `http://localhost:3000`.

## Using the Application

- Navigate to the frontend URL to view the latest commits from GitHub.
- Toggle between light and dark themes using the night mode switch at the top of the page.

## Stopping the Application

To stop and remove the containers, networks, and images created by `docker-compose up`, run:


`docker-compose down`


## Contributing

Contributions are welcome! Please fork the repository, make your changes, and open a pull request with your proposed improvements.

## License

This project is licensed under the [MIT License](LICENSE).
