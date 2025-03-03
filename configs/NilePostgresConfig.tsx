import { Client } from 'node-postgres';

export const client = new Client({
    user: process.env.PO_PUBLIC_DB_USERNAME,
    password: process.env.PO_PUBLIC_DB_PASSWORD,
    host: "us-west-2.db.thenile.dev",
    port: 5432,
    database: "campus_guru_prod_app",
});