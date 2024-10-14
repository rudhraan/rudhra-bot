const { rudhra,mode,aiImage } = require("../lib/");
rudhra(
  {
    pattern: "genimage ?(.*)",
    fromMe: mode,
    desc: "Generate image from text",
    type: "generator",
  },
  async (message, match) => {
    match = match || message.reply_message.text;
    if (!match) return await message.sendMessage(message.jid, "Provide a text");
    let buff = await aiImage(match);
    if (!Buffer.isBuffer(buff))
      return await message.sendMessage(message.jid, buff);
    return await message.sendMessage(
      message.jid,
      buff,
      {
        mimetype: "image/jpeg",
        caption: "Rudhra",
      },
      "image"
    );
  }
);