import { createMachine } from "xstate";

const videoPlayerMachine = createMachine({
    id: "videoPlayer",
    initial: "stopped",
    states: {
        stopped: {
            on: {
                start: "playback" 
            },
            },
        playback: {
            on: {
                pause: "paused",
                stop: "stopped",
                finish: "completed" 
            },
        },
        paused: {
            on: {
                continue: "playback"
            },
        },
        completed: {
            on: {
                restart: "playback"
            },
        },
    },
});

console.log('--1:', videoPlayerMachine);

const playbackState = videoPlayerMachine.transition("stopped", "start").value;

console.log(playbackState);