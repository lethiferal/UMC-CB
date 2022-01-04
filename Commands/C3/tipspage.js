module.exports ={
name:"tips",
category: "Production",
description: "A useful tips paginator.",
usage: "%tips", 
aliases:["tip","tricks","cheats","cheatsheet"],
code:`$djsEval[(async () => {

const { MessageEmbed } = require('discord.js');
const simplydjs = require('simply-djs');

let tip1 = new MessageEmbed()
  .setAuthor({ name: 'Music Theory Advice', iconURL: 'https://cdn.discordapp.com/attachments/889976693102628904/921376597313978378/20211217_175129.png'})

let tip2 = new MessageEmbed()
  .setAuthor({ name: 'Music Theory Advice', iconURL: 'https://cdn.discordapp.com/attachments/889976693102628904/921376597313978378/20211217_175129.png'})

let pages = [tip1, tip2];

simplydjs.embedPages(client, message, pages, {
  firstEmoji: "927629421853179914",
  backEmoji: "927629391129903154",
  delEmoji: "927629461095067669",
  forwardEmoji: "927629508096454717",
  lastEmoji: "927629535850143855",
  
  btncolor: "PRIMARY",
  delcolor: "SECONDARY",
  skipcolor: "PRIMARY",
  
  skipBtn: true,
  delBtn: true
})
})()]`
}
