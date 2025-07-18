const mineflayer = require("mineflayer");

const botUsernames = ["b1", "b2"];

const botConfigBase = {
  host: "your_server_ip",
  port: your_server_port,
  version: "1.21.6", // Match your Minecraft server version
  auth: "offline",   // Use "microsoft" if using official accounts
};

const bots = {};

function createBot(username) {
  const bot = mineflayer.createBot({
    ...botConfigBase,
    username,
  });

  bots[username] = bot;

  bot.once("spawn", () => {
    console.log(`✅ ${username} ready (AFK JUMP)`);

    setInterval(() => {
      bot.setControlState("jump", true);
      setTimeout(() => bot.setControlState("jump", false), 500);
    }, 10000);
  });

  bot.on("end", () => {
    console.log(`🔁 ${username} disconnected. Reconnecting in 5 seconds...`);
    setTimeout(() => createBot(username), 5000);
  });

  bot.on("error", (err) => {
    const simpleMsg =
      err.code === "ECONNRESET"
        ? "Connection reset by server."
        : err.code === "ETIMEDOUT"
          ? "Connection timed out."
          : err.code || err.message;

    console.log(`❌ ${username} Error: ${simpleMsg}`);
  });

  setTimeout(() => {
    try {
      if (bot._client?.socket) {
        bot._client.socket.on("error", () => {});
      }
    } catch (_) {}
  }, 1000);
}

botUsernames.forEach(createBot);

process.on("uncaughtException", () => {});
process.on("unhandledRejection", () => {});
