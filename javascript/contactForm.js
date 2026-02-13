import { buildFormMessage } from "./buildFormMessage.js";
import { sendContact } from "./contactApi.js";

const sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', async (event) => {
    event.preventDefault();
    const body = buildFormMessage();
    if (!body) return;

    sendButton.disabled = true;

    try {
        await sendContact(body);
        alert("The message was sent successfully.");
        document.getElementById('user-name').value = '';
        document.getElementById('user-email').value = '';
        document.getElementById('user-message').value = '';
    } catch (error) {
        alert('Failed to send message, please try again.');
        console.error(error);
    } finally {
        sendButton.disabled = false;
    }
});