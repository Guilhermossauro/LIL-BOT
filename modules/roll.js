exports.roll = async function roll(client, message) {
    const { id, from, body, sender, isGroupMsg, chat, caption, isMedia, mimetype, quotedMsg } = message;
    const commands = caption || body || "";
    const args = commands.split(" ");
    if (args.length === 1) return client.reply(from, 'Foi mas voce não disse quantos lados são ', id);
    let string = commands.split(' ').slice(1).join(' ');
    const semoD = string.replace(/d/g, "").replace(/\D/g, "");
    let rolagem = Math.floor(Math.random() * semoD) + 1;
    await client.sendText(from, `Resultado da rolagem:\n${rolagem}`);
}