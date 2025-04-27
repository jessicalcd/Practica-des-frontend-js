export const buildNotification = (message) => {
    const notificationView = `
        <p>${message}</p>
        <button>Close</button>
    `
    return notificationView
}