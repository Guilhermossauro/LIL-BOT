
exports.reportar = async function reportar(client, message) {
    const { id, from, isGroupMsg, chat, quotedMsg,caption,body } = message;
    const { formattedTitle } = chat;
    const commands = caption || body || "";

    const args = commands.split(" ");
    if (args.length === 1) return client.reply(from, 'Foi mau, mas assim eu não consigo... me informe qual o problema que voce teve no bot', id);
    let string = commands.split(' ').slice(1).join(' ');

    if (quotedMsg) {
    }    
    if (!isGroupMsg) {
        return client.reply(from, "Este comando só pode ser usado em grupos.", id);
    }
    const ownerNumber = "5527988999019@c.us";
    client.sendText(ownerNumber, `UM bug foi reportado, atenção ao bot requerida \n*GRUPO*: ${formattedTitle}\n *MENSAGEM:* ${string} `); 
    await client.reply(from, `Mensagem enviada ao gui, ele logo logo vai ver o que houve`, id);

}
    

    
   
