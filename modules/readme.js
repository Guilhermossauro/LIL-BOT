exports.readme = async function readme(client, message) {
    const { id, from, body, sender, isGroupMsg, chat, caption, isMedia, mimetype, quotedMsg } = message;

    const readme = `*=== README do BOT! ===*\nSou o Lil um bot para whatsapp baseado no bot que foi construído pelo Kauã.`;

    await client.reply(from, readme, id);
}