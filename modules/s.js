const { decryptMedia } = require('@open-wa/wa-decrypt');

exports.s = async function s(client, message) {
    const { id, from, body, sender, isGroupMsg, chat, caption, isMedia, mimetype , type, quotedMsg } = message;
    const mms = ['Motivação é a arte de fazer as pessoas fazerem o que você quer que elas façam porque elas o querem fazer.','Se voce quiser ajudar o gui a me manter todos os dias online \n pix: guilhermes.aufera@gmail.com \n O pix é opcional e pode ser qualquer valor que você quiser.',  'Toda ação humana, quer se torne positiva ou negativa, precisa depender de motivação.', 'pra mim,você é a mais incrível das pessoas', 
    'Eu queria que você pudesse olhar com os meus olhos e visse o quanto você é uma pessoa incrível','.\n Queria que olhasse para dentro de ti e percebesse o quanto eu sou franco ao dizer que és delicadamente belo enquanto dorme ou quando boceja. Queria que olhasse para si quando está quieto lendo ou até mesmo chorando. Todo mundo é incrível quando faz essas coisas, quando está na companhia de si próprio.', ' Quando está em paz e quando é você de verdade.',
    'oii eu sou o LIL um robô legal','já viu o quão incrível você é ?','Eu queria que você soubesse que eu adoro o jeito que você sorri.', 'Fala pra mim \nQuanto tempo faz aquele futebol no asfalto, aquela volta de bike no fim de tarde pela cidade',  'heey mãe, seu sorriso é tão bonito desculpa se eu não te falo isso todo dia',  'Diga: Eu sou mais\n você vale muito, mais que vários cristais Priorize ser feliz e ter sua paz',  'você nunca foi menos do que ninguém juro, você é forte como quem quiser ',  'Me escute, você tem força pra se levantar, as energias estão no seu corpo e estão vivas escuta, sai desse escuro porque você pode se tornar a luz que onde passa ilumina',  'A vida pode te trazer problemas mas você existe pra solucioná-los não pense se você é capaz ou não bom ou ruim, apenas tente',  'Você pode ir tão longe, distante, avante',  'Você é sua fonte de vontade no fundo sempre foi a sua fonte de coragem nunca precisou que alguém sentisse pena ou piedade, provou pra todo mundo que é um belo ser humano e se chegou até aqui por favor  continue tentando',  'Oi eu sou o lil e bom o gui ele me fez com essas frases pois ..bom ele já perdeu alguem por não falar entao eu sou de certa forma um pedido eternizado de desculpa dele para alguém que não esta mais aqui',  'O herói nem sempre vai ser aquele glorificado olha com atenção, espera, tenha paciência eu sei e tenho certeza que voce é capaz','Gostando do bot ? \n Poderia dar uma força ao gui ? \n Só se inscrever no canal dele mesmo \nhttps://www.youtube.com/channel/UCClJHWaFL5zxEE0EO_lzRww '  
    ]
    const mensagemA =    mms[parseInt(Math.random() * mms.length)];

    const uaOverride = 'WhatsApp/2.2029.4 Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36';

    if (isMedia && type === 'image') {
        const mediaData = await decryptMedia(message, uaOverride);
        client.reply(from, `*Estou fazendo a figurinha...*\n${mensagemA}`, id);
        
        const imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`;
        await client.sendImageAsSticker(from, imageBase64, { author: 'faça em:(27)99265-3066', pack: 'Bot do guilhermossauro', keepScale: true });
    } else if (quotedMsg && quotedMsg.type == 'image') {
        const mediaData = await decryptMedia(quotedMsg, uaOverride);
        client.reply(from, `*Estou fazendo a figurinha...*\n${mensagemA}`, id);
        const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`;
        await client.sendImageAsSticker(from, imageBase64, { author: 'faça em: (27)99265-3066', pack: 'Bot do guilhermossauro', keepScale: true });
    } else if ((mimetype === 'video/mp4' && message.duration < 30) || (mimetype === 'image/gif' && message.duration < 30)) {
        const mediaData = await decryptMedia(message, uaOverride);
        client.reply(from, `*Estou fazendo a figurinha...*\n${mensagemA}`, id);
        await client.sendMp4AsSticker(from, `data:${mimetype};base64,${mediaData.toString('base64')}`, null, {
            stickerMetadata: true,
            author: 'faça em:(27)99265-3066',
            pack: 'Bot do guilhermossauro',
            fps: 10,
        square: '512',
            loop: 0,
        });
    } else if ((quotedMsg.mimetype === 'video/mp4' && quotedMsg.duration < 30) || (quotedMsg.mimetype === 'image/gif' && quotedMsg.duration < 30)) {
        const mediaData = await decryptMedia(quotedMsg, uaOverride);
        await client.sendMp4AsSticker(from, `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`, null, {
            stickerMetadata: true,
            author: 'faça em:(27)99265-3066',
            pack: 'Bot do Guilhermossauro',
            fps: 10,
            square: '512',
            loop: 0,
        })
    } else {
        client.reply(from, "Eu preciso receber alguma foto ou vídeo, seja ela por menção ou *!s* na legenda.", id);
    }
}