module.exports = {
name: "$transcript",
type: "djs",
usage: "$$transcript",
code: async d => {
const data = d.util.openFunc(d)
const discordTranscripts = require('discord-html-transcripts');
const channel = d.message.channel; // or however you get your TextChannel
const attachment = await discordTranscripts.createTranscript(d.message.channel);
channel.send({
 files: [attachment]
});  
return {
code: d.util.setCode(data)
}
}
}
