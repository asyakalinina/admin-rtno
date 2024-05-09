export const formatDateTime = (dateTimeString: string): string => {
    const dateTime = new Date(dateTimeString);
    const date = dateTime.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' });
    const time = dateTime.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
    return `${date} ${time}`;
};
