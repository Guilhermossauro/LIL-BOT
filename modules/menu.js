exports.menu = async function menu(client, message) {
    const { id, from, body, sender, isGroupMsg, chat, caption, isMedia, mimetype, quotedMsg } = message;

    const commands = caption || body || "";
    const args = commands.split(" ");

    const helpMode = args[1];
    const showAll = `*Ver tudo?*\nManda um _!menu_`;

    let help;

    switch (helpMode) {
        case 'figurinhas':
        case 'figurinha':
            help = `*=== Figurinhas do BOT! ===*\nMande uma foto, gif ou vídeo e digite _!s_ na legenda.\nVocê também pode mencionar a foto, gif ou vídeo respondendo _!s_.\n\n${showAll}`;
            break;
        case 'outros':
        case 'outro':
            help = `*=== Outros comandos do BOT! ===*\n→ !cep cep\n→ !clima sua cidade\n→ !tts isso converte texto em audio\n→ !meunumero\n→ !moeda BTCxBRL\n→\n${showAll}`;
            break;
        case 'grupos':
        case 'grupo':
            help = `*=== Comandos para grupos ===*\n→ !adminlista\n→ !donodogrupo\n→ !mencionartodos\n→ !avisartodos mensagem\n→ !ban @usuário\n→ !add 2199988....\n→ !sair (eu saio do grupo)\n→ !autorizarbot (permite que o bot funciona)\n→ !desautorizarbot (proíba que o bot funciona)\n→ !promover\n→ !rebaixar\n→ !linkdogrupo\n→ !kickme\n\n→ !roll (faço rolagem de dados) ${showAll}`;
            break;
        case 'snaptubes':
        case 'snaptube':
            help = `*=== SnapTube BOT! ===*\n→ !yt (sua busca)\n\nPode buscar do mesmo jeito que vc escreve no youtube,\npois é de lá que tiro as músicas.\n\n${showAll}`;
            break;

        case 'roll':
        case 'Roll':
            help = `*=== ROLAGENS DO BOT! ===*\nOpa! Eu faço rolagem de dados.\n→ !roll d(valor)\n exemplo : roll d20`
            
                default:
            help = `\n════════════════════\n ║-Opaa eu sou o LIL, um bot de whatsapp\n ║╾Criador: Guilhermossauro\n ║╾Numero: wa.me/5527992653066\n ║╾Versão: 2.1\n ╚═════════════════\n *NOVIDADE MENU DE SNAPTUBE*\n ══════════════════\n escolha uma das categorias:\n ════════════════════════════════\n Figurinhas 📄\n Manda !menu figurinhas\n ════════════════════════════════\n Outros comandos 🌍\n Manda !menu outros\n ════════════════════════════════\n Para SNAPTUBE 🔈\n Manda !menu snaptube\n═══════════════════════════════\n # Para grupos 📚\n Manda !menu grupos 👨‍💻\n ----------------------\n ╰╼ Sou LIL, o bot do Guilhermossauro!\n EM CASO DE BUG ENVIE O COMANDO !reportar QUE AVISO AO GUI`;
            break;

    }

    await client.reply(from, help, id);
}