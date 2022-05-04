# SecondLifeTeleportHUDGenerator

A code generator to quickly create the lsl script for a teleport hud.

## How to build

You will need node.js installed on your system

[How to install node](https://nodejs.dev/learn/how-to-install-nodejs)

Open a command propmt and navigate to where you pulled down this repo (or simply open the command prompt from the file explorer)
Then type the following into the prompt (waiting for each line to finish before entering the next of course)

1. `npm i`
2. `npm run build`

## How to use

1. Edit the supplied script.json to match the needs of your hud
2. Type the following into the command prompt `node dist/main.js` or `npm start` then press enter
3. Wait for a file called `script.lsl` to be generated
4. Import the script into second life and use it for your HUD
