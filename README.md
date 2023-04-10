# Customer and Order Microservices with NestJS and Apache Kafka

## Technologies

- NestJS Framework
- Docker and Docker Compose
- Typeorm, MySQL, PostgreSQL
- Apache Kafka
- Environment-based Configuration

## Prerequisites

- Nodejs(16.x)
- DOcker and Docker Compose
- NestJS CLI (Optional)

## Getting Started

1. Clone the Repository

```bash
$git clone <repo_url>
```

2. Create a `.env` file and put in the right credentials

```bash
$source .env
```

3. Docker Environment Configuration

   a. Run the docker command for the customer service:

   ```bash
   $cd customer-service
   $docker compose up
   ```

   b. Run the docker command for the order service:

   ```bash
   $cd order-service
   $docker compose up
   ```
