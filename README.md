# screen-recorder-backend
In order to use FFmpeg.wasm, you need to set appropriate CORS headers. This is my solution to that.

Here's the primary source code for the web app itself: https://github.com/coltonleach/screen-recorder

It can still be found in this "backend" repo under the "public" directory.

## Here's some context:
I was experimenting with the [MediaRecorder API](https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder), [getUserMedia](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getDisplayMedia), and [getMediaDevices](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia) because I want to add screen/webcam recording functionality to [Reruns.io](https://reruns.io), but I ran into some hiccups.

1. Can't record audio using getMediaDevices with FireFox...
   - Honestly, why is this a thing? How is this a problem that FireFox has? Because of this, I have to use getUserMedia to record mic audio simultaneously. Now, this isn't exactly a problem in it's own right, but what is a problem is we're recording two media tracks, and the average user doesn't have their own tools to render them together. Thankfully there's a decent solution: [ffmpeg.wasm](https://github.com/ffmpegwasm/ffmpeg.wasm).
2. Uncaught (in promise) ReferenceError: SharedArrayBuffer is not defined
   - This was an interesting problem. I originally used a Vite vanilla project to build the frontend and all of the functionality, and I development in Vite disables CORS related features, because all was well and working perfectly fine. That all went out the window when I built the app. The FFmpeg library uses the SharedArrayBuffer object, which is only available to pages that are cross-origin-isolated. I didn't know that at the time, and all the googling of the problem I did only lead to StackOverflow answers explaining that only certain browser versions have the SharedArrayBuffer, and that I need to set certain headers. Well I did everything in my power to avoid having to set my own headers at first thinking there was some clever solution I could come up with, and boy was I wrong.
3. Uncaught TypeError: The specifier “@ffmpeg/ffmpeg/dist/ffmpeg.min.js” was a bare specifier
   - Long story short, I was thinking that Vite was the problem, so I refactored the app to not include it at all and kept running into this "bare specifier" error. I tried all sorts of incorrect stuff to try and solve my problem, eventually crawling to ChatGPT for answers, and ultimately it recommended that I host my own server so I can set my own headers. So that's where this repo came into the picture. I threw this Express server together, ran into even more problems, went down many rabbit holes that I'm not proud of, then finally figured it out.
4. Those pesky headers
   - In case you missed the foreshadowing from the second point, here it is: The FFmpeg.wasm documentation literally says, almost immediately, `SharedArrayBuffer is only available to pages that are cross-origin isolated. So you need to host your own server with Cross-Origin-Embedder-Policy: require-corp and Cross-Origin-Opener-Policy: same-origin headers to use ffmpeg.wasm.` So after a lot of hair pulling and confusion, I finally figured it out. I decided to just continue with the vanilla side of things without Vite, so I used Parcel to build the app and guess what. **It still didn't work**. I won't get into the details because it was such a silly error, but basically it took me 20 additional minutes to trouble shoot that I wasn't pointing to the correct directory in Express server to serve static files. After discovering that, I finally had a working app.

Anyway, I'm exciting to finally see this in production. The UI/UX needs a little bit more work as of July 15th, 2023, but it's more than acceptable.

The next things on the list are to add a progress bar for when the user merges the audio/video, but currently the information is being displayed in the console. I also want the user to be able to enable their webcam, and to be able to select certain audio options like noise suppression and a few other things.
