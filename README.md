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
<p>To start the server, run:</p>
* npm run server.
* The server will be running at http://localhost:5000 by default.

## API Endpoints
- **Authentication:**
  - POST /api/v1/user/register
  - POST /api/v1/user/login

- **Product Management:**
  - GET /api/products
  - GET /api/products/:id
  - POST /api/products
  - PUT /api/products/:id
  - DELETE /api/products/:id

- **Order Processing:**
  - GET /api/orders
  - GET /api/orders/:id
  - POST /api/orders
  - PUT /api/orders/:id
  - DELETE /api/orders/:id

- **Cart Functionality:**
  - GET /api/cart
  - POST /api/cart
  - PUT /api/cart/:id
  - DELETE /api/cart/:id

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
