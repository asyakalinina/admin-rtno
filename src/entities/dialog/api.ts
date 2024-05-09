import {DialogData} from "./types";

export const data: DialogData[] = [
    {
        id: 1,
        startTime: '2023-05-03T09:20:00',
        lastMessageTime: '2023-05-03T09:45:00',
        company: 'Company A',
        employee: 'Steve Smith',
        comments: 'Discussion about contract terms.',
        chatMessages: [
            {
                sender: 'Steve Smith',
                message: 'Hi, I have some questions about the contract terms.',
                dateTime: '2023-05-03T09:20:00'
            },
            {sender: 'Bot', message: 'Sure, I can help you with that.', dateTime: '2023-05-03T09:22:00'},
            {sender: 'Steve Smith', message: 'Great, thank you!', dateTime: '2023-05-03T09:25:00'},
            {sender: 'Bot', message: 'You\'re welcome.', dateTime: '2023-05-03T09:45:00'}
        ]
    },
    {
        id: 2,
        startTime: '2023-05-01T09:20:00',
        lastMessageTime: '2023-05-03T09:45:00',
        company: 'Company B',
        employee: 'Steve Jay',
        comments: 'Inquiry about product availability.',
        chatMessages: [
            {
                sender: 'Steve Jay',
                message: 'Hello, I would like to inquire about product availability.',
                dateTime: '2023-05-01T09:20:00'
            },
            {sender: 'Bot', message: 'Sure, which product are you interested in?', dateTime: '2023-05-01T09:22:00'},
            {sender: 'Steve Jay', message: 'I am interested in Product X.', dateTime: '2023-05-01T09:25:00'},
            {sender: 'Bot', message: 'Product X is currently in stock.', dateTime: '2023-05-03T09:45:00'}
        ]
    },
    {
        id: 3,
        startTime: '2023-05-02T10:00:00',
        lastMessageTime: '2023-05-02T11:15:00',
        company: 'Company C',
        employee: 'Alice Johnson',
        comments: 'Follow-up on previous request.',
        chatMessages: [
            {
                sender: 'Alice Johnson',
                message: 'Hello, I wanted to follow up on my previous request.',
                dateTime: '2023-05-02T10:00:00'
            },
            {sender: 'Bot', message: 'Of course, what can I assist you with?', dateTime: '2023-05-02T10:05:00'},
            {
                sender: 'Alice Johnson',
                message: 'I need some additional information regarding our discussion.',
                dateTime: '2023-05-02T10:10:00'
            },
            {
                sender: 'Bot',
                message: 'I will provide you with the information shortly.',
                dateTime: '2023-05-02T11:15:00'
            }
        ]
    },
    {
        id: 4,
        startTime: '2023-05-01T08:30:00',
        lastMessageTime: '2023-05-01T09:30:00',
        company: 'Company D',
        employee: 'John Doe',
        comments: 'Initial inquiry about product.',
        chatMessages: [
            {
                sender: 'John Doe',
                message: 'Hi, I have some questions about the product.',
                dateTime: '2023-05-01T08:30:00'
            },
            {sender: 'Bot', message: 'Sure, I can help you with that.', dateTime: '2023-05-01T08:35:00'},
            {sender: 'John Doe', message: 'Great, thank you!', dateTime: '2023-05-01T08:40:00'},
            {sender: 'Bot', message: 'You\'re welcome.', dateTime: '2023-05-01T09:30:00'}
        ]
    },
    {
        id: 5,
        startTime: '2023-05-03T10:20:00',
        lastMessageTime: '2023-05-03T10:55:00',
        company: 'Company A',
        employee: 'Michael B.',
        comments: 'Clarification on payment terms.',
        chatMessages: [
            {
                sender: 'Michael B.',
                message: 'Hi, I have some questions about the payment terms.',
                dateTime: '2023-05-03T10:20:00'
            },
            {sender: 'Bot', message: 'Sure, I can help you with that.', dateTime: '2023-05-03T10:25:00'},
            {sender: 'Michael B.', message: 'Great, thank you!', dateTime: '2023-05-03T10:30:00'},
            {sender: 'Bot', message: 'You\'re welcome.', dateTime: '2023-05-03T10:55:00'}
        ]
    },
    {
        id: 6,
        startTime: '2023-05-03T11:00:00',
        lastMessageTime: '2023-05-03T11:30:00',
        company: 'Company A',
        employee: 'Laura G.',
        comments: 'Technical support inquiry.',
        chatMessages: [
            {sender: 'Laura G.', message: 'Hi, I need technical support.', dateTime: '2023-05-03T11:00:00'},
            {sender: 'Bot', message: 'Sure, I can help you with that.', dateTime: '2023-05-03T11:05:00'},
            {sender: 'Laura G.', message: 'Great, thank you!', dateTime: '2023-05-03T11:10:00'},
            {sender: 'Bot', message: 'You\'re welcome.', dateTime: '2023-05-03T11:30:00'}
        ]
    },
    {
        id: 7,
        startTime: '2023-05-01T10:15:00',
        lastMessageTime: '2023-05-01T10:45:00',
        company: 'Company B',
        employee: 'Julia S.',
        comments: 'Update on project status.',
        chatMessages: [
            {sender: 'Julia S.', message: 'Hi, can I get an update on the project?', dateTime: '2023-05-01T10:15:00'},
            {sender: 'Bot', message: 'Sure, I can provide the latest status.', dateTime: '2023-05-01T10:20:00'},
            {sender: 'Julia S.', message: 'Great, thank you!', dateTime: '2023-05-01T10:25:00'},
            {sender: 'Bot', message: 'You\'re welcome.', dateTime: '2023-05-01T10:45:00'}
        ]
    },
    {
        id: 8,
        startTime: '2023-05-02T08:45:00',
        lastMessageTime: '2023-05-02T09:10:00',
        company: 'Company C',
        employee: 'Emily R.',
        comments: 'Question about license renewal.',
        chatMessages: [
            {
                sender: 'Emily R.',
                message: 'Hi, I have a question about our license renewal.',
                dateTime: '2023-05-02T08:45:00'
            },
            {sender: 'Bot', message: 'Sure, I can help you with that.', dateTime: '2023-05-02T08:50:00'},
            {sender: 'Emily R.', message: 'Great, thank you!', dateTime: '2023-05-02T08:55:00'},
            {sender: 'Bot', message: 'You\'re welcome.', dateTime: '2023-05-02T09:10:00'}
        ]
    },
    {
        id: 9,
        startTime: '2023-05-02T14:30:00',
        lastMessageTime: '2023-05-02T15:00:00',
        company: 'Company D',
        employee: 'Frank P.',
        comments: 'Discussion on new terms of service.',
        chatMessages: [
            {
                sender: 'Frank P.',
                message: 'Hi, I need to discuss the new terms of service.',
                dateTime: '2023-05-02T14:30:00'
            },
            {
                sender: 'Bot',
                message: 'Sure, I can help you with that. What specifically would you like to know?',
                dateTime: '2023-05-02T14:35:00'
            },
            {sender: 'Frank P.', message: 'Can you explain the changes in section 4?', dateTime: '2023-05-02T14:40:00'},
            {
                sender: 'Bot',
                message: 'Section 4 now includes provisions for online data handling. Would you like more detail?',
                dateTime: '2023-05-02T14:50:00'
            },
            {sender: 'Frank P.', message: 'Yes, please provide more details.', dateTime: '2023-05-02T14:55:00'},
            {sender: 'Bot', message: 'I will send the detailed document shortly.', dateTime: '2023-05-02T15:00:00'}
        ]
    },
    {
        id: 10,
        startTime: '2023-05-01T11:20:00',
        lastMessageTime: '2023-05-01T11:50:00',
        company: 'Company B',
        employee: 'Nancy W.',
        comments: 'Feedback on customer service experience.',
        chatMessages: [
            {
                sender: 'Nancy W.',
                message: 'Hi, I want to provide feedback on a recent customer service experience.',
                dateTime: '2023-05-01T11:20:00'
            },
            {
                sender: 'Bot',
                message: 'Thank you for your feedback. Can you describe your experience?',
                dateTime: '2023-05-01T11:25:00'
            },
            {
                sender: 'Nancy W.',
                message: 'Yes, the service was very prompt and helpful.',
                dateTime: '2023-05-01T11:30:00'
            },
            {
                sender: 'Bot',
                message: 'We are glad to hear that. Is there anything we could improve?',
                dateTime: '2023-05-01T11:40:00'
            },
            {
                sender: 'Nancy W.',
                message: 'Not at the moment, just keep up the good work.',
                dateTime: '2023-05-01T11:45:00'
            },
            {sender: 'Bot', message: 'Thank you for your input. We appreciate it.', dateTime: '2023-05-01T11:50:00'}
        ]
    },
    {
        id: 11,
        startTime: '2023-05-01T12:30:00',
        lastMessageTime: '2023-05-01T13:00:00',
        company: 'Company D',
        employee: 'George C.',
        comments: 'Inquiry about product availability.',
        chatMessages: [
            {
                sender: 'George C.',
                message: 'Hi, can you check if Product Z is available?',
                dateTime: '2023-05-01T12:30:00'
            },
            {sender: 'Bot', message: 'Let me check that for you.', dateTime: '2023-05-01T12:35:00'},
            {sender: 'George C.', message: 'Thank you.', dateTime: '2023-05-01T12:40:00'},
            {
                sender: 'Bot',
                message: 'Product Z is currently in stock. Would you like to order it?',
                dateTime: '2023-05-01T12:50:00'
            },
            {sender: 'George C.', message: 'Yes, please proceed with the order.', dateTime: '2023-05-01T12:55:00'},
            {sender: 'Bot', message: 'The order has been placed. Thank you.', dateTime: '2023-05-01T13:00:00'}
        ]
    },
    {
        id: 12,
        startTime: '2023-05-03T08:20:00',
        lastMessageTime: '2023-05-03T08:50:00',
        company: 'Company A',
        employee: 'Sam L.',
        comments: 'Request for quote.',
        chatMessages: [
            {
                sender: 'Sam L.',
                message: 'Hi, can I get a quote for 500 units of Product Y?',
                dateTime: '2023-05-03T08:20:00'
            },
            {sender: 'Bot', message: 'Certainly, I will prepare the quote for you.', dateTime: '2023-05-03T08:25:00'},
            {sender: 'Sam L.', message: 'Please include shipping costs.', dateTime: '2023-05-03T08:30:00'},
            {sender: 'Bot', message: 'Will do. One moment please.', dateTime: '2023-05-03T08:40:00'},
            {sender: 'Sam L.', message: 'Thank you.', dateTime: '2023-05-03T08:45:00'},
            {sender: 'Bot', message: 'Here is your quote. Shipping included.', dateTime: '2023-05-03T08:50:00'}
        ]
    },
    {
        id: 13,
        startTime: '2023-05-03T15:20:00',
        lastMessageTime: '2023-05-03T15:50:00',
        company: 'Company A',
        employee: 'Lisa Q.',
        comments: 'Follow-up on previous discussion.',
        chatMessages: [
            {
                sender: 'Lisa Q.',
                message: 'Hi, I am following up on our previous discussion about the project update.',
                dateTime: '2023-05-03T15:20:00'
            },
            {
                sender: 'Bot',
                message: 'Hi Lisa, yes, I have the updates ready for you.',
                dateTime: '2023-05-03T15:25:00'
            },
            {sender: 'Lisa Q.', message: 'Can you share the details?', dateTime: '2023-05-03T15:30:00'},
            {
                sender: 'Bot',
                message: 'Certainly, the project is now 70% complete and on schedule.',
                dateTime: '2023-05-03T15:40:00'
            },
            {sender: 'Lisa Q.', message: 'That sounds great, thank you.', dateTime: '2023-05-03T15:45:00'},
            {sender: 'Bot', message: 'You\'re welcome.', dateTime: '2023-05-03T15:50:00'}
        ]
    },
    {
        id: 14,
        startTime: '2023-05-04T09:20:00',
        lastMessageTime: '2023-05-04T09:45:00',
        company: 'Company E',
        employee: 'David M.',
        comments: 'Discussion about project timeline.',
        chatMessages: [
            {
                sender: 'David M.',
                message: 'Hi, I need an update on the project timeline.',
                dateTime: '2023-05-04T09:20:00'
            },
            {
                sender: 'Bot',
                message: 'Hello David, the current timeline has the project completion by next quarter.',
                dateTime: '2023-05-04T09:22:00'
            },
            {
                sender: 'David M.',
                message: 'Are there any risks of delays that I should be aware of?',
                dateTime: '2023-05-04T09:30:00'
            },
            {sender: 'Bot', message: 'There are some supply chain concerns', dateTime: '2023-05-04T09:40:00'},
            {
                sender: 'David M.',
                message: 'Thanks for the heads up. Please keep me posted.',
                dateTime: '2023-05-04T09:43:00'
            },
            {sender: 'Bot', message: 'Will do. Thanks, David.', dateTime: '2023-05-04T09:45:00'}
        ]
    },
    {
        id: 15,
        startTime: '2023-05-05T10:00:00',
        lastMessageTime: '2023-05-05T11:15:00',
        company: 'Company F',
        employee: 'Sophie K.',
        comments: 'Follow-up on client meeting.',
        chatMessages: [
            {
                sender: 'David M.',
                message: 'Hi, I need an update on the project timeline.',
                dateTime: '2023-05-04T09:20:00'
            },
            {
                sender: 'Bot',
                message: 'Hello David, the current timeline has the project completion by next quarter.',
                dateTime: '2023-05-04T09:22:00'
            },
            {
                sender: 'David M.',
                message: 'Are there any risks of delays that I should be aware of?',
                dateTime: '2023-05-04T09:30:00'
            },
            {sender: 'Bot', message: 'There are some supply chain concerns', dateTime: '2023-05-04T09:40:00'},
            {
                sender: 'David M.',
                message: 'Thanks for the heads up. Please keep me posted.',
                dateTime: '2023-05-04T09:43:00'
            },
            {sender: 'Bot', message: 'Will do. Thanks, David.', dateTime: '2023-05-04T09:45:00'}
        ]

    },
    {
        id: 16,
        startTime: '2023-05-06T08:30:00',
        lastMessageTime: '2023-05-06T09:30:00',
        company: 'Company G',
        employee: 'Robert H.',
        comments: 'Initial inquiry about service pricing.',
        chatMessages: [
            {
                sender: 'Steve Smith',
                message: 'Hi, I have some questions about the contract terms.',
                dateTime: '2023-05-03T09:20:00'
            },
            {sender: 'Bot', message: 'Sure, I can help you with that.', dateTime: '2023-05-03T09:22:00'},
            {sender: 'Steve Smith', message: 'Great, thank you!', dateTime: '2023-05-03T09:25:00'},
            {sender: 'Bot', message: 'You\'re welcome.', dateTime: '2023-05-03T09:30:00'}
        ]
    },
    {
        id: 17,
        startTime: '2023-05-07T10:20:00',
        lastMessageTime: '2023-05-07T10:55:00',
        company: 'Company H',
        employee: 'Karen L.',
        comments: 'Clarification on delivery schedule.',
        chatMessages: [
            {
                sender: 'Steve Smith',
                message: 'Hi, I have some questions about the contract terms.',
                dateTime: '2023-05-03T09:20:00'
            },
            {sender: 'Bot', message: 'Sure, I can help you with that.', dateTime: '2023-05-03T09:22:00'},
            {sender: 'Steve Smith', message: 'Great, thank you!', dateTime: '2023-05-03T09:25:00'},
            {sender: 'Bot', message: 'You\'re welcome.', dateTime: '2023-05-03T09:30:00'}
        ]
    },
    {
        id: 18,
        startTime: '2023-05-08T11:00:00',
        lastMessageTime: '2023-05-08T11:30:00',
        company: 'Company I',
        employee: 'Daniel S.',
        comments: 'Technical support request.',
        chatMessages: [
            {
                sender: 'Steve Smith',
                message: 'Hi, I have some questions about the contract terms.',
                dateTime: '2023-05-03T09:20:00'
            },
            {sender: 'Bot', message: 'Sure, I can help you with that.', dateTime: '2023-05-03T09:22:00'},
            {sender: 'Steve Smith', message: 'Great, thank you!', dateTime: '2023-05-03T09:25:00'},
            {sender: 'Bot', message: 'You\'re welcome.', dateTime: '2023-05-03T09:30:00'}
        ]
    }
];


export function fetchDialogData(): Promise<DialogData[]> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 500);
    });
}