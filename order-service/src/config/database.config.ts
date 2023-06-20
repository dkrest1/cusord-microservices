import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  host: process.env.DATABASE_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT2) || 3306,
  username: process.env.DB_USERNAME2 || 'your_username',
  password: process.env.DB_PASSWORD2 || 'your_password',
  db: process.env.DB_DATABASE2 || 'your_database',
}));
