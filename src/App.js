import React, { useState } from "react";
import "./styles.css";

var emojiPedia = {

  "😀": "Grinning Face",
  "😃": "Grinning Face with Big Eyes",
  "😄": "Grinning Face with Smiling Eyes",
  "😁": "Beaming Face with Smiling Eyes",
  "😆": "Grinning Squinting Face",
  "😅": "Grinning Face with Sweat",
  "🤣": "Rolling on the Floor Laughing",
  "😂": "Face with Tears of Joy",
  "🙂": "Slightly Smiling Face",
  "🙃": "Upside-Down Face",
  "😊": "smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance",
  "😉": "Winking Face",
"😇": "Smiling Face with Hearts",
"😍": "Smiling Face with Heart-Eyes",
"🤩": "Star-Struck",
"😘": "Face Blowing a Kiss",
"😗": "Kissing Face",
"😚": "Kissing Face with Closed Eyes",
"😙": "Kissing Face with Smiling Eyes"
};

var emojisWeKnow = Object.keys(emojiPedia);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {

    var userInput = event.target.value;

    var meaning = emojiPedia[userInput];

    if (meaning === undefined) {
      meaning = "This emoji is new for us!!";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiPedia[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>EmojiPedia</h1>

      <input onChange={emojiInputHandler} />

      <h2> {meaning} </h2>

      <h3 style={{color: "#824596"}}> Emojis We Know </h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}>
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
