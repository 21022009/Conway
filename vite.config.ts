import { defineConfig } from "vite";

export default defineConfig({
    plugins: [
        {
            name: "reload-compiled-game",
            hotUpdate({ file }) {
                const normalizedFile = file.replaceAll("\\", "/");

                if (
                    this.environment.name === "client" &&
                    normalizedFile.endsWith("/public/game.js")
                ) {
                    this.environment.hot.send({ type: "full-reload" });
                    return [];
                }
            }
        }
    ]
});
