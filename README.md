# E-Commerce Backend

This project is an e-commerce backend built with Node.js, Express.js, and MongoDB following the MVC (Model-View-Controller) pattern.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Models](#models)
- [Controllers](#controllers)
- [Views](#views)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication and authorization
- Product management
- Order processing
- Cart functionality
- RESTful API design

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed
- MongoDB Atlas
- npm or yarn installed

## Installation

1. Clone the repository:

   ```bash
   git clone git@github.com:sethdanny/E-commerce.git
   git clone https://github.com/sethdanny/E-commerce.git

2. Navigate to the project directory:
cd e-commerce-backend

3. Install dependencies:
npm install

## Configuration
1. Create a .env file in the root of the project:

PORT=5000
MONGODB_URI=mongodb://localhost:27017/e-commerce
SECRET_KEY=your_secret_key

## Usage
To start the server, run:
* npm run server.
* The server will be running at http://localhost:5000 by default.

## API Endpoints
- **Authentication:**
  - POST /api/v1/user/register
  - POST /api/v1/user/login

- **Product Management:**
  - GET /api/v1/products
  - GET /api/v1/products/:id
  - POST /api/v1/products
  - PUT /api/v1/products/:id
  - DELETE /api/v1/products/:id

- **Order Processing:**
  - GET /api/v1/orders
  - GET /api/v1/orders/:id
  - POST /api/v1/orders
  - PUT /api/v1/orders/:id
  - DELETE /api/v1/orders/:id

- **Cart Functionality:**
  - GET /api/v1/cart
  - POST /api/v1/cart
  - PUT /api/v1/cart/:id
  - DELETE /api/v1/cart/:id

## Models
- User
- Product
- Order
- Cart

## Controllers
- AuthController
- ProductController
- OrderController
- CartController

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request.

## License
This project is licensed under the MIT License.

### Authors
Nadduli Daniel <naddulidaniel1994@gmail.com>
