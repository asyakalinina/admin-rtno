export const formatDateTime = (dateTimeString: string): string => {
    const dateTime = new Date(dateTimeString);
    const date = dateTime.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' }).replace(/\//g, '-');
    const time = dateTime.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
    return `${date} ${time}`;
};

export const formatTime = (dateTimeString: string): string => {
    const dateTime = new Date(dateTimeString);
    return dateTime.toLocaleTimeString('en-GB', {hour: '2-digit', minute: '2-digit'});
};

export const formatDate = (dateTimeString: string): string => {
    const dateTime = new Date(dateTimeString);
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'short', year: 'numeric' };
    return dateTime.toLocaleDateString('en-GB', options);
};





