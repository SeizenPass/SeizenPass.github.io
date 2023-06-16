function calculateYearsPassed(dateString) {
    const inputDate = new Date(dateString);
    const currentDate = new Date();
    const timeDiff = currentDate.getTime() - inputDate.getTime();
    return Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365.25));
}
