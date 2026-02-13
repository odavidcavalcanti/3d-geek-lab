const userName = document.getElementById('user-name');
const userEmail = document.getElementById('user-email');
const userMessage = document.getElementById('user-message');
const sendButton = document.getElementById('send-button');

export function buildFormMessage() {

    if (!userName || !userEmail || !userMessage) {
        alert('Please fill in all fields to submit the form.')
        return null;
    }

    const name = userName.value.trim();
    const email = userEmail.value.trim();
    const messageText = userMessage.value.trim();


    return {
        name,
        email,
        messageText: messageText,
        sentAt: new Date().toISOString()
    };
}