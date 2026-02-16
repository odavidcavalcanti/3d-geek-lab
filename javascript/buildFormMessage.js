const userName = document.getElementById('user-name');
const userEmail = document.getElementById('user-email');
const userMessage = document.getElementById('user-message');

export function buildFormMessage() {

    const name = userName.value.trim();
    const email = userEmail.value.trim();
    const messageText = userMessage.value.trim();

    if (!name || !email || !messageText) {
        alert('Please fill in all fields to submit the form.')
        return null;
    }

    return {
        name,
        email,
        messageText: messageText,
        sentAt: new Date().toISOString()
    };
}