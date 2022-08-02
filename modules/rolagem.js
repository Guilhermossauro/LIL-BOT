exports.rolagem = async function rolagem(client, message) {
    const { id, from, body, sender, isGroupMsg, chat, caption, isMedia, mimetype, quotedMsg } = message;
    const commands = caption || body || "";
    const args = commands.split(" ");
    if (args.length === 1) return client.reply(from, 'Foi mau, mas assim eu não consigo... me informe qual o problema que voce teve no bot', id);
    let string = commands.split(' ').slice(1).join(' ');
    const sempontoevirgula = string.replace(/d/g, "").replace(/\D/g, "");
    let rolagem = Math.floor(Math.random() * sempontoevirgula) + 1;

    if (args.length === 1) return client.reply(from, 'poxa eu ainda não sei a quantidade de lados do dado', id);
 
    await client.sendText(from, `Resultado da rolagem:\n${rolagem}`);

}