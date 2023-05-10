# Event Management App - Back End Design

This repository contains the specifications for the back end of the Event Management App. The back end design focuses on ensuring seamless interaction with the front end and efficient and scalable data management.

## Table of Contents

- **[Architecture](#architecture)**
- **[Database Design](#database-design)**
- **[API Endpoints](#api-endpoints)**
- **[Security & Authentication](#security--authentication)**
- **[Testing](#testing)**
- **[Deployment](#deployment)**
- **[CI/CD](ci/cd)**

## Architecture

Our application follows a monolithic architecture where the application logic, UI, and database communication are all part of the same application. The architecture is built using Node.js and Express.js, which provides a robust and scalable solution for server-side operations.

The Express.js server runs on a free tier server provided by Render.com. Render.com offers a straightforward deployment process, automatic SSL, and easy scalability, making it an ideal choice for hosting our application.

We use Sequelize, a promise-based Node.js ORM, for handling tasks related to database communication. Sequelize offers a high-level abstraction for SQL databases, making it easier to write queries, perform CRUD operations, and manage relationships between tables. Sequelize also provides useful features like transaction control, eager loading, and automatic generation of timestamps.

The database for our application is hosted on a free tier PlanetScale, a MySQL-compatible, serverless relational database. PlanetScale offers features like automatic sharding and is built to scale as your application grows, ensuring that the database won't become a bottleneck.

In this setup, the Express.js server receives client requests, processes these requests, communicates with the PlanetScale database via Sequelize as needed, and then sends responses back to the client.

This architecture offers a solid base for our application while keeping the costs low by leveraging free tier services. As our application grows, we can easily upgrade our hosting and database services.

## Database Design

The database schema includes the following tables:

- **Users**: Contains information about users, including username, hashed password, email, and profile information.
- **Companies**: Contains additional information for users that are companies.
- **Managers**: Contains additional information for users that are event managers.
- **Caters**: Contains information about caterers.
- **Venues**: Contains information about event venues.
- **Productions**: Contains information about event productions.
- **Events**: Holds information about events, including event name, date, time, venue, company, and manager.
- **EventCaterings**: Links events with their caterers.
- **EventProductions**: Links events with their productions.

## API Endpoints

The following RESTful API endpoints are available:

- **/users**: GET, POST, PUT, DELETE for managing user accounts.
- **/companies**: GET, POST, PUT, DELETE for managing company users.
- **/managers**: GET, POST, PUT, DELETE for managing manager users.
- **/caters**: GET, POST, PUT, DELETE for managing caters.
- **/venues**: GET, POST, PUT, DELETE for managing venues.
- **/productions**: GET, POST, PUT, DELETE for managing productions.
- **/events**: GET, POST, PUT, DELETE for managing events.
- **/eventCaterings**: GET, POST, PUT, DELETE for managing event-catering relationships.
- **/eventProductions**: GET, POST, PUT, DELETE for managing event-production relationships.

## Security & Authentication

Security is managed using JWT for authentication and HTTPS for secure data transfer. Passwords are hashed and stored securely in the database.

## Testing

Unit and integration tests will be written using Jest. Tests include checking the functionality of API endpoints and database interactions.

## Deployment

The back end is Deployed on a Free Tier server on Render.com.

## CI/CD

CI/CD is implemented using Github and automatically deployed to Render.com.
