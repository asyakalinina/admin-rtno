import { createPool } from 'mysql2/promise';

export const db = createPool({
    host: "127.0.0.1",
    user: "root",
    password: "123456",
    database: 'rtno',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});


