# 707 Drum Kit

### **A Cool 707 Drum Kit Built with vanilla JS**

---

> This Project is a clone of the project built by **wes bos** in his course *[Javascript30](https://www.javascript30.com)* 

This Project contains 3 files:
- index.html
- index.css
- index.js

The **index.html** file contains the markup of the project the you can change it to your needs.

The **index.css** file is styles of the project which I think it is cool and have a *retro* style.

The Logic of the project is in the **index.js** file that all the cool things happened there.

---

### **How this project works**

first I have to say this is not exactly like the **wes bos** code in his course, I change it a little bit.

I built a drum kit that you can trigger individual sounds of a drum kit (707 in this case) whit keyboard keys (Q,W,E,R,T,Y,U,I,O,P) and also with mouse clicks.

There is 10 audio files that you can see them in the `assets/wav-files`

You don't see them on the page because first they have `style="display: none;"` and they don't have `controls` attribute set on them.

The styles in the **index.css** file is straight forward and there is not any special thing about them.

Now it is time to talk about **index.js** file.

in the **index.js** file first we select all necessary elements in the DOM. then we have to add an event listener on the window to capture key events:
`window.addEventListener('keypress', function(e){})`

the `keypress` event have a prop called key, so we grab it and save it in a variable:
`let keyed = e.key`

The `e` is the event object that passed to every event listener function.

Then we switch over `keyed` and each case must be the key that we want to listen on the keyboard:

```
switch (keyed) {
  case "q":
  case "Q":
    <audioFile>.currentTime = 0;
    <audioFile>.play();
    break;
  
  case "w":
  case "W":
    <audioFile>.currentTime = 0;
    <audioFile>.play();
    break;

  // and continue to the "P" word on the keyboard
}
```

`<audioFile>` is the audio element that we selected and stored it in a variable for example:
`const kick = document.querySelector('#kick')`

And `<audioFile>.currentTime = 0` is for play audio from beginning every time we hit the keyboard.

Last but not least `<audioFile>.play()` is for playing audio every time we hit the keyboard.

There is another line of code here that says 
`.classList.add('is-pressed')` which is for adding a class to button that is target of the current key that we pressed.

The `window.addEventListener('keyup', function(e){})` is for removing class `is-pressed` from the buttons every time we didn't press any key with the `.classList.remove('is-pressed')` method.

---

### **How add click events on the buttons**

This is really easy and have 4 steps:

- Select all the buttons together with `document.querySelectorAll()` method.

- Loop through the buttons that we selected with `forEach()` loop.

- Add an event on every button with `addEventListener()` method.

- Make a switch block that check every button ID and do the things that we want to do (in this case `<audioFile>.currentTime = 0` and `<audioFile>.play()`)

**Now our Logic is finished and we reach the end.**

---

>***don't forget to clone the repo and use it any way you want.***