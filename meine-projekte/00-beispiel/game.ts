// Ein Dummy-Beispiel ohne Spiellogik.
// Zum Ausprobieren den Inhalt nach src/game.ts kopieren.

function setup(): void
{
    createCanvas(800, 500);
}

function draw(): void
{
    background("midnightblue");

    fill("gold");
    circle(400, 220, 80);

    fill("white");
    textAlign(CENTER, CENTER);
    textSize(24);
    text("Nur ein Beispiel – kein Spiel!", 400, 320);
}
