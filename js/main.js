"use strict";

const keys = [
    'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', "KeyW", "KeyE", "KeyT", "KeyY", "KeyU"
];

document.addEventListener('keypress', function (event) {
    if (keys.includes(event.code)) {
        const audio = new Audio(`../src/audio/${event.key.toUpperCase()}.mp3`);
        audio.play();

        console.log(`The '${event.key.toUpperCase()}' key is pressed.`);
    }
})

