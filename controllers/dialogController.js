import { db } from '../models/db.js';

export async function getAllDialogs(req, res) {
    try {
        // Выполняем запрос к базе данных
        const [results] = await db.query(`
            SELECT 
                d.dialog_id, 
                d.start_datetime AS startTime, 
                d.last_message_datetime AS lastMessageTime, 
                d.company, 
                d.employee, 
                d.comments, 
                c.sender, 
                c.message, 
                c.date_time AS dateTime
            FROM Dialogs d
            LEFT JOIN ChatMessages c ON d.dialog_id = c.dialog_id;
        `);

        // Группируем результаты по dialog_id
        const dialogs = results.reduce((acc, item) => {
            // Если диалог уже есть в аккумуляторе, добавляем к нему сообщение
            if (acc[item.dialog_id]) {
                acc[item.dialog_id].chatMessages.push({
                    sender: item.sender,
                    message: item.message,
                    dateTime: item.dateTime
                });
            } else {
                // Если диалога еще нет, создаем новый
                acc[item.dialog_id] = {
                    id: item.dialog_id,
                    startTime: item.startTime,
                    lastMessageTime: item.lastMessageTime,
                    company: item.company,
                    employee: item.employee,
                    comments: item.comments,
                    chatMessages: item.sender ? [{
                        sender: item.sender,
                        message: item.message,
                        dateTime: item.dateTime
                    }] : []
                };
            }
            return acc;
        }, {});

        // Отправляем данные в виде массива диалогов
        res.json(Object.values(dialogs));
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

