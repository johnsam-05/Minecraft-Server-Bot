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
