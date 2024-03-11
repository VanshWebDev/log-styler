<h1 align="center">
  <a href="https://www.bytescale.com/docs/sdks/javascript">
    <img alt="Logo" width="100" height="100"style="border-radius: 10px" src="https://github.com/VanshWebDev/log-styler/blob/main/images/logo.jpg">
  </a>
</h1>

  <a target="_blank" href="https://github.com/VanshWebDev" >
    <img alt="Twitter URL" src="https://github.com/VanshWebDev/log-styler/blob/main/images/insta.png" height="20" width="50"/>
  </a>

  <a target="_blank" href="https://twitter.com/intent/tweet?text=This%20was%20a%20great%20find...%0A%0Ahttps%3A%2F%2Fgithub.com%2Fbytescale%2Fbytescale-javascript-sdk">
    <img alt="Twitter URL" src="https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fgithub.com%2Fbytescale%2Fbytescale-javascript-sdk" />
  </a>

</p>

<hr/>

<p align="center">
  Use the log-styler to apply css on the console text.
</p>

<hr/>

<img alt="Bytescale JavaScript SDK Example" src="image.png">

## Installation

```bash
npm install log-styler
```

We have designed it in such a way that is very easy to use.

```javascript
import logStyler from "log-styler";

logStyler(
  {
    color: "red",
    backgroundColor: "white",
    fontFamily: "Dosis, sans-serif",
    fontSize: "30px",
    fontWeight: "bold",
    padding: "5px 15px",
    borderRadius: "5px",
    animation: "anim 0.5s infinite",
    border: "5px solid red",
  },
  "text here"
);
```

logStyler function takes these two parameters

| Parameter | Type     | Description  |
| :-------- | :------- | :----------- |
| `style`   | `object` | **Required** |
| `text`    | `string` | **Required** |

#### Auto style feature:

this code will apply css automatically for error/success/warning.

```javascript
logStyler(
  {
    error: {
      //support: error/success/warning.
      addEmoji: true, //Add an error emoji automatically,default value false
      size: "big", //increase font size to 50px
      overRide: true, //if true you can add you own css on outside error key,
    },
  },
  "Error"
);
```

## overRide

overRide give you power to change default CSS then you can add you own outside the success key.

```javascript
logStyler(
  {
    success: {
      overRide: true,
    },
    color: "blue",
    background: "green",
  },
  "Error"
);
```

Keys

| Key       | Type     |
| :-------- | :------- |
| `error`   | `object` |
| `success` | `object` |
| `warning` | `object` |

## 🌐 Process to Add Your Name in Contributors

**First:** [Fork This Repo](https://github.com/VanshWebDev/log-styler)\
**Second:** Contribute by adding valuable features, fixing bugs, or enhancing the codebase.\
**Third:** Create a pull request. Your contributions are highly appreciated and will be acknowledged. 🎯
Let's collaborate to make this project even better! 🚀

## Contributers

Currently, there are no contributors. Be the first to contribute and get your name listed here at the top! 🌟

## Authors

- [@VanshWebDev](https://github.com/VanshWebDev)

## About Me

**I'm a full stack developer...**

# Connect with Me

Follow me on Instagram [@devloper.mind\_](https://www.instagram.com/devloper.mind_/)

## License

[MIT](LICENSE)
