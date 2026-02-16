export async function sendContact(body) {
    const response = await fetch(`/api/contact`, {
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