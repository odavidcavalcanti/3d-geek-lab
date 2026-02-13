export async function sendContact(body) {
    const URL = 'http://localhost:8080';
    const response = await fetch(`${URL}/api/contactus`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    });

    if (!response.ok) {
        const text = await response.text().catch(() => '')
        throw new Error(`HTTP ${response.status} ${text}`);

    }

    return true;
}