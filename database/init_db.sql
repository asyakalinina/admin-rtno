CREATE DATABASE IF NOT EXISTS rtno;
USE rtno;

DROP TABLE IF EXISTS Dialogs;
CREATE TABLE Dialogs (
                         dialog_id INT AUTO_INCREMENT PRIMARY KEY,
                         start_datetime DATETIME NOT NULL,
                         last_message_datetime DATETIME NOT NULL,
                         company VARCHAR(255) NOT NULL,
                         employee VARCHAR(255) NOT NULL,
                         comments TEXT NOT NULL
);

INSERT INTO Dialogs (start_datetime, last_message_datetime, company, employee, comments) VALUES
                                                                                             ('2023-05-01 09:00:00', '2023-05-01 09:30:00', 'Company A', 'Employee 1', 'Initial comment from employee.'),
                                                                                             ('2023-05-01 10:00:00', '2023-05-01 10:30:00', 'Company B', 'Employee 2', 'Another comment from client.'),
                                                                                             ('2023-05-01 11:00:00', '2023-05-01 11:30:00', 'Company C', 'Employee 3', 'Comment about service.'),
                                                                                             ('2023-05-01 12:00:00', '2023-05-01 12:30:00', 'Company D', 'Employee 4', 'Quick resolution comment.'),
                                                                                             ('2023-05-01 13:00:00', '2023-05-01 13:30:00', 'Company E', 'Employee 5', 'Follow up on previous issue.');
