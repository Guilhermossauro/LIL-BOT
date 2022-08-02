const { autorizarbot } = require("./modules/autorizarbot");
const { desautorizarbot } = require("./modules/desautorizarbot");
const { yt } = require("./modules/yt");
const { cpf } = require("./modules/cpf");
const { nome } = require("./modules/nome");
const { telefone } = require("./modules/telefone");
const { creditos } = require("./modules/creditos");
const { readme } = require("./modules/readme");
const { menu } = require("./modules/menu");
const { tts } = require("./modules/tts");
const { clima } = require("./modules/clima");
const { cep } = require("./modules/cep");
const { meunumero } = require("./modules/meunumero");
const { kickme } = require("./modules/kickme");
const { s } = require("./modules/s");
const { linkdogrupo } = require("./modules/linkdogrupo");
const { adminlista } = require("./modules/adminlista");
const { donodogrupo } = require("./modules/donodogrupo");
const { mencionartodos } = require("./modules/mencionartodos");
const { add } = require("./modules/add");
const { ban } = require("./modules/ban");
const { sair } = require("./modules/sair");
const { promover } = require("./modules/promover");
const { rebaixar } = require("./modules/rebaixar");
const { apagar } = require("./modules/apagar");
const { moeda } = require("./modules/moeda");
const { avisartodos } = require("./modules/avisartodos");
// const { memes } = require("./modules/memes")
const { reportar } = require("./modules/reportar")
const { roll } = require("./modules/roll")
const { rolagem } = require("./modules/rolagem")
const { sortear } = require("./modules/sortear")
const commands = {} //isso aqui é para constar tudo

commands.autorizarbot = (client, message) => autorizarbot(client, message);
commands.desautorizarbot = (client, message) => desautorizarbot(client, message);
// commands.yt = (client, message) => yt(client, message);
commands.cpf = (client, message) => cpf(client, message);
commands.nome = (client, message) => nome(client, message);
commands.telefone = (client, message) => telefone(client, message);
commands.creditos = (client, message) => creditos(client, message);
commands.readme = (client, message) => readme(client, message);
commands.menu = (client, message) => menu(client, message);
commands.help = (client, message) => menu(client, message);
commands.tts = (client, message) => tts(client, message);
commands.clima = (client, message) => clima(client, message);
commands.cep = (client, message) => cep(client, message);
commands.meunumero = (client, message) => meunumero(client, message);
commands.kickme = (client, message) => kickme(client, message);
commands.s = (client, message) => s(client, message);
commands.linkdogrupo = (client, message) => linkdogrupo(client, message);
commands.adminlista = (client, message) => adminlista(client, message);
commands.donodogrupo = (client, message) => donodogrupo(client, message);
commands.mencionartodos = (client, message) => mencionartodos(client, message);
commands.add = (client, message) => add(client, message);
commands.ban = (client, message) => ban(client, message);
commands.sair = (client, message) => sair(client, message);
commands.promover = (client, message) => promover(client, message);
commands.rebaixar = (client, message) => rebaixar(client, message);
commands.apagar = (client, message) => apagar(client, message);
commands.moeda = (client, message) => moeda(client, message);
commands.avisartodos = (client, message) => avisartodos(client, message);
//commands.memes = (client, message) => memes(client, message);
commands.reportar = (client, message) => reportar(client, message);
commands.roll = (client, message) => roll(client, message);
commands.yt = (client, message) => yt(client, message);
commands.rolagem = (client, message) => rolagem(client, message);
commands.sortear = (client, message) => sortear(client, message);
module.exports = commands;