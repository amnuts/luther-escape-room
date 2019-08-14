# Luther's Escape Room Terminal

## The TL;DR

This code is provided as-is for a specific purpose.  If you want to try it out you'll need to add some audio/video files and update the `config.js` file.  But I liked that this code used `socket.io`, it really fulfilled its intended purpose, so thought I'd share.

## The idea

My son wanted an escape room done at home for his 12th birthday, so we obliged and created one.  Part of that was that we wanted a computer terminal that would play an intro video to set the story and have an input text field where the people doing the escape room could enter the final word of an 'incantation' which would then display the 'congratulations!' video and the game would be over.

While the contestents were working on the puzzles in the room we also wanted to have some random 'hurry up!' videos and some spooky sounds to play.  But we didn't want it _completely_ random; we wanted to be able to control what played and when.

## The plan

The way forward seemed to be using a small ExpressJS server to display the 'terminal' and handle input.  The server would also allow for a 'control deck' which we could load on our phones (with buttons to start a video or audio file), and a web socket server (using socket.io) which would tie everything together

## The execution

The setup is as-is from when we ran the escape room, minus the videos and audio files because they were too large for GitHub!

You need to put the videos you want in the `public/video` directory, the audio files you want in the `public/audio` directory, then update the `public/config.js` file so that it has all the correct file names in there together with what you want on the titles of the buttons.

Then run `yarn` to install the dependencies and `npm index.js` to start the server.

Once the server is running, you can go to `http://<the local ip of your machine>:3000/` - let's say http://192.168.0.24:3000 for example.

You'll be presented with a 'Start' link.  This seemed important to Chrome which didn't link not having an interaction on the page before starting audio or video via javascript, so just click on the link.  Once you do, you'll get a 'terminal' with an atmospheric grandfather clock ticking in the background.  If you type in a word and get it wrong the terminal will sound a buzzzer.  Do this wrong three times (or type 'help') and you'll get a help screen telling you to type 'start'.  If you've updated the `config.js` file to include the `intro` video details then that video will start playing.  Anytime a video is playing the text input is disabled and the clock ticking is made  alittle quieter.

On your phone (or another computer on your network, or another tab, etc.) go to http://192.168.0.24:3000/control.  Now when you push a button and if you've edited the `config.js` file correctly it'll play whatever video or audio track you selected.  The button will go yellow while it's loading and green while playing.  This was very handy when my wife and I were both wanting to click a button on our respective phones - we could already see if the other had started one.

## The conclusion

I simply hard-coded the correct incantation word into the `index.js` so that an enterprising youth couldn't just 'view source' in the browser and seee the word.  Once entered in to the text input and hit return, the `success` video will start to play.
