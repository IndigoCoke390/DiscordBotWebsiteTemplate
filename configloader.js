
const config = {

    "servercount": "1",
    "usercount": "1",
    "channelcount": "1",

    "botName": "Bot Name",
    "tagline": "Tageline",

    "invitelink": "https://your-bot-invite-link.com",
    "supportServer": "https://your-support-server.com",

};




document.getElementById('servers').innerHTML = `${config.servercount} Servers `;
document.getElementById('users').innerHTML = `${config.servercount} Users `;
document.getElementById('channels').innerHTML = `${config.servercount} Channels `;


document.getElementById('botname').innerHTML = `${config.botName}`;
document.getElementById('tagline').innerHTML = `${config.tagline}`;


document.getElementById("invitelink").href=`${config.invitelink}`; 
document.getElementById("supportlink").href=`${config.supportServer}`; 