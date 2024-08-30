# Blogging Platform

This project is a full-stack blogging platform allowing users to sign up, log in, create blogs, and view all blogs with details like creation time and author information. The platform uses pagination to enhance the user experience when navigating through the blogs.

## Technologies Used

- **Backend:**
  - **Postgres**: Relational database for storing user and blog data.
  - **Prisma**: ORM (Object-Relational Mapping) for interacting with the Postgres database.
  - **Node.js**: JavaScript runtime for building the backend server.
  - **Hono**: Fast and simple web framework for Cloudflare Workers.
  - **Zod**: Schema declaration and validation library used for validating request bodies and data models.

- **Frontend:**
  - **React**: JavaScript library for building user interfaces.
  - **TypeScript**: Strongly typed programming language that builds on JavaScript.

## Deployment

- **Backend**: Deployed on Cloudflare Workers for serverless execution.
- **Database**: Deployed on Neon DB.
- **Frontend**: Hosted on AWS S3 with CloudFront CDN for optimized content delivery.

## Features

- **User Authentication**:
  - Sign up and log in functionalities for secure access.
  
- **Blog Management**:
  - Create new blogs.
  - View all blogs with pagination.
  - Display details such as the time of creation and author information.

## Live Demo

- **Backend URL**: [https://backend.mayank-goel-141.workers.dev](https://backend.mayank-goel-141.workers.dev)
- **Frontend URL**: [https://d3szpjjnb6iy0a.cloudfront.net/](https://d3szpjjnb6iy0a.cloudfront.net/)
