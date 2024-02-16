export const getPreviousDate = (days: number): Date => {
    const date = new Date();
    date.setDate(date.getDate() - days);
    return date;
}

export const formatDateToString = (date: Date): string => {
    const offset = date.getTimezoneOffset();
    date = new Date(date.getTime() - offset * 60 * 1000);

    return date.toISOString().split('T')[0];
}