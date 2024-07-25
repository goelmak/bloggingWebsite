# Blogging Website Backend

Welcome to the backend of our blogging website! This project provides a robust API for managing users and blog posts, leveraging cutting-edge technologies to deliver a seamless experience.

## Technologies Used

- **PostgreSQL**: A powerful, open-source relational database.
- **Prisma**: An ORM for type-safe database access.
- **Cloudflare Workers**: Serverless compute for scalable deployments.
- **Hono**: A lightweight web framework for building APIs.
- **Connection Pooling**: Efficient database connections to optimize performance.

## API Endpoints

### User Routes

- **Sign Up**

  - `POST /api/v1/user/signup`
  - Description: Register a new user.

- **Sign In**
  - `POST /api/v1/user/signin`
  - Description: Authenticate a user and obtain a session token.

### Blog Routes

- **Create a Blog Post**

  - `POST /api/v1/blog`
  - Description: Publish a new blog post.

- **Update a Blog Post**

  - `PUT /api/v1/blog`
  - Description: Edit an existing blog post.

- **Get a Blog Post by ID**

  - `GET /api/v1/blog/:id`
  - Description: Retrieve a specific blog post by its ID.

- **Get All Blog Posts**
  - `GET /api/v1/blog/bulk`
  - Description: Retrieve a list of all blog posts.

## Deployment

The backend is deployed and accessible at: [https://backend.mayank-goel-141.workers.dev](https://backend.mayank-goel-141.workers.dev)
