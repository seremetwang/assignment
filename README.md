# Laravel, MySQL, React Dockerized Project

This project is a starter template for running a Laravel, MySQL, and React project using Docker.

## Prerequisites

### Before you start, make sure you have the following tools installed:

- Docker Engine 22.0.0 or later

- Docker Compose 2.0.0 or later

## Getting Started

1. Clone this repository to your local machine:

```
git clone https://github.com/johnfumio/innoscripta.git
```

2. Go to the project directory:

```
cd assignment
```

3. Build and start the Docker containers:

```
docker-compose up -d
```

4. Sometimes React application shows `npm install` error, so to avoid it use below commands.

```
cd frontend
npm install
cd ../
docker-compose up --build -d
```

This command will start the following Docker containers:<br>

`backend`: the Laravel application server running on port 8000<br>

`mariadb`: the MySQL database server running on port 3306<br>

`frontend`: the React development server running on port 8080<br>

5. Migrate the database:

- Run the following command to connect to the laravel-app container:

```
docker-compose exec backend sh
```

Then, run the following command to migrate the database:

```
php artisan migrate
```

6. Access the React frontend application:

- Open your web browser and go to `http://localhost:8080`. You should see the React application.

## Stopping the Containers

To stop the Docker containers, press `Ctrl+C` in the terminal window where you started the containers. Alternatively, you can run the following command in the project directory:

```
docker-compose down
```

This command will stop and remove the containers, as well as the network and volumes created by-

```
docker-compose up
```

## Running without Docker

Before running without Docker kindly make sure that Composer is installed and your MySQL database server is running on `PORT 3306`

1. Clone this repository to your local machine:

```
git clone https://github.com/murschid/innoscripta.git

cd innoscripta/backend
```

2. Run the Laravel project by below commands

```
composer install

cp .env.example .env

php artisan key:generate

php artisan migrate

php artisan add-news

php artisan serve
```

The The Laravel backend project will be run on `PORT 8000`

3. Move to frontend directory by-

```
cd ../frontend

npm start
```
