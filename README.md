# Minecraft AFK Bot (Mineflayer)

This project creates simple AFK bots (`b1`, `b2`) for a Minecraft server using the [mineflayer](https://github.com/PrismarineJS/mineflayer) library. These bots auto-reconnect on disconnect and perform a jump loop to stay active in the game (bypassing AFK kick).

## Features

- Connects multiple bots to a Minecraft server
- Automatically jumps every 10 seconds to stay AFK
- Reconnects on server disconnect or crash
- Handles connection errors and prevents crashes

## Requirements

- [Node.js](https://nodejs.org/) v18 or higher (tested on v22.16.0)
- An offline-mode Minecraft server (e.g., Aternos)

## Installation

```bash
git clone https://github.com/yourusername/Minecraft-AFK-Bot.git
cd Minecraft-AFK-Bot
npm install mineflayer
```

## Configuration

Open `index.js` and update the server connection details:

```js
const botConfigBase = {
  host: "your_server_ip_or_domain",
  port: your_server_port,
  version: "1.21.4", // Match your Minecraft server version
  auth: "offline",   // Use "microsoft" if using official accounts
};
```

You can also add/remove bot names here:

```js
const botUsernames = ["b1", "b2"];
```

## Usage

To start the bot(s), run:

```bash
node index.js
```

Once connected, each bot will:
- Log its status in the terminal
- Jump every 10 seconds to prevent being marked as AFK
- Reconnect if disconnected

## Customization Ideas

- Add more AFK behaviors like random movement
- Add Mineflayer plugins (e.g. pathfinder, armorManager)
- Make bots respond to chat or commands
- Log chat messages or perform actions on trigger

## Troubleshooting

- Make sure your server is online and accepts offline accounts
- Check firewall and port settings if bots can’t connect
- Use the same version as your Minecraft server

## License

MIT License

---

Created by [Your Name](https://github.com/yourusername)
