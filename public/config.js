const config = {
    volume: {
        ticktock: {
            max: 0.60,
            min: 0.009
        },
        ambient: 0.60,
        video: 0.9
    },
    intro: {
        video: "intro",
        format: "mp4"
    },
    success: {
        video: "congratulations",
        format: "mp4"
    },
    failure: {
        audio: "buzzer",
        format: "mp3"
    },
    buttons: {
        video: {
            hurry_at_my_door: {
                text: "Hurry… They are at my door!",
                format: "mp4"
            },
            hurry_everything_depends_on_you: {
                text: "Everything depends on you; you must hurry!",
                format: "mp4"
            },
            hurry_please: {
                text: "You must hurry, please!",
                format: "mp4"
            },
            hurry_time_of_essence: {
                text: "Time is of the essence! We haven't got long…",
                format: "mp4"
            }
        },
        audio: {
            attic_door: {
                text: "Creepy attic door creaking",
                format: "mp3"
            },
            creepy_child: {
                text: "Creepy ghost child",
                format: "mp3"
            },
            monster_echo: {
                text: "Monster's growl",
                format: "mp3"
            }
        }
    }
};
