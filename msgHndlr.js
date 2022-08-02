const actions = require("./actions.js");
const axios = require("axios");
const { checkAuthorization } = require("./fetch");
require('dotenv').config();

const bannedUsers = [
	'5521976607557@c.us', // Albarran
];
const silenceBannedUsers = [
	'558893752311-1627929773@g.us', // Jersu
	'555591441492-1588522560@g.us', // Code Monkey
	// '553195360492-1623288522@g.us', // Grupo dos bots
	'5511982465579-1568231201@g.us', // CanalTech Ofertas
	'120363039230076121@g.us', // CT Ofertas
	"120363041118699340@g.us", // Representantes CEEC
	"5521973550700-1452525871@g.us", // Escolada Fé
	"5528999939949-1426629849@g.us" // Demartini's
]

const isMaintenanceMode = process.env.MAINTENANCE_MODE === "true";

const allMessages = {
    youAreBanned: () => `*_Você foi banido, não pode usar o bot. :(_*`,
    imInMaintenance: () => `🚧️ *Estou em manutenção.* 🚧️\n\nEstão trabalhando para que eu fique melhor,\nou para que algum problema seja resolvido. 😁\nVolte mais tarde, e tente novamente. 😉`,
    imNotAuthorized: () => `*Não tenho autorização de funcionar aqui.* 😢\nPeça para que um admin execute o comando *!autorizarbot*`,
};

async function authorization(id) {
    const _checkAuthorization = await checkAuthorization(id);
    console.log(_checkAuthorization)
    if (_checkAuthorization.status === "success") {
        const authorization = _checkAuthorization.authorization;
        return authorization;
    } else {
        return false;
    }
}

module.exports = msgHandler = async (client, message) => {
    try {
        const { id, from, sender, isGroupMsg, chat, caption, isMedia, mimetype, quotedMsg } = message;
        let { body } = message;
        const { formattedTitle } = chat;
        let { pushname, verifiedName } = sender;
        pushname = pushname || verifiedName;
        const commands = caption || body || "";
        const falas = commands.toLowerCase();
        const command = commands.toLowerCase().split(" ")[0] || "";
        const args = commands.split(" ");
        const isCommand = commands.startsWith("!") || commands.startsWith("/");

        if (silenceBannedUsers.includes(chat.id)) {
			return;
		}

        console.log("---------------------------------------");
        console.log('DATE TIME	===>', new Date().toLocaleString('pt-br'));
        isGroupMsg ? console.log("FROM		===>", pushname, "IN", formattedTitle) : console.log("FROM		===>", pushname);
        console.log("FROM_ID 		===>", chat.id);
        console.log("ARGUMENTS	===>", isMedia ? `[${mimetype}]` : args);
        console.log("BODY		===>", isMedia ? `[${mimetype}]` : body);
        console.log("COMMAND		===>", command);

        if (isCommand && bannedUsers.includes(chat.id)) {
            console.log("\x1b[1;31mBANNED USER! IGNORING\x1b[0m");
            await client.sendText(from, allMessages.youAreBanned(), id);
			return;
		}
        if (isGroupMsg && !await authorization(chat.id)) {
            if (command !== "!autorizarbot" && command !== "/autorizarbot") {
                console.log("\x1b[1;31mNOT AUTHORIZED! IGNORING\x1b[0m");
                if (isCommand) {
                    return client.reply(from, allMessages.imNotAuthorized(), id);
                } else {
                    return;
                }
            }
        }
        if (isCommand && isMaintenanceMode) {
            console.log("\x1b[1;31mMAINTENANCE_MODE ON! IGNORING\x1b[0m");
            return client.sendText(from, allMessages.imInMaintenance(), id);
        }

        actions.start(client, message);
    } catch (err) {
        console.log("\x1b[1;31m[ERROR]\x1b[0m", err);
    }
};