import { Request, Response } from 'express';
import { pool } from '../models/db';

export async function getAllDialogs(req, res) {
    try {
        const [rows] = await pool.query('SELECT * FROM Dialogs');
        res.json(rows);
    } catch (error) {
        // Проверка типа ошибки
        if (error instanceof Error) {
            // Теперь мы можем безопасно обращаться к message
            res.status(500).send(error.message);
        } else {
            // Если error не экземпляр Error, отправляем общее сообщение
            res.status(500).send('An unexpected error occurred');
        }
    }
}
