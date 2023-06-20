import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  host: process.env.DATABASE_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT1) || 5432,
  username: process.env.DB_USERNAME1 || 'your_username',
  password: process.env.DB_PASSWORD1 || 'your_password',
  db: process.env.DB_DATABASE1 || 'your_database',
}));
