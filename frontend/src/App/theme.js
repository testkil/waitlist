import _ from "lodash";

const globals = {
  font: {
    family:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    monospaceFamily:
      'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  },
  logo: {},
};

const theme = {
  Light: _.merge({}, globals, {
    colors: {
      background: "#ffffff",
      text: "#4a4a4a",
      active: "#000000",
      lumFactor: 1,

      outline: "hsla(213, 100%, 40%, 0.2)",
      modal: "hsla(0, 0%, 0%, 0.80)",
      shadow: "hsla(0, 0%, 0%, 0.2)",

      input: {
        color: "#2020200d",
        text: "#4a4a4a",
        accent: "2020200d",
        disabled: "#cccccc",
      },
      success: {
        color: "#48c774",
        text: "white",
        accent: "#3ec46d",
        disabled: "#92ddac",
      },
      warning: {
        color: "#ffdd57",
        text: "#4a4a4a",
        accent: "#ffda47",
        disabled: "#cccccc",
      },
      danger: {
        color: "#f14668",
        text: "white",
        accent: "#f03a5f",
        disabled: "#f8a5b6",
      },
      primary: {
        color: "#47afff",
        text: "white",
        accent: "#38a9ff",
        disabled: "#addcff",
      },
      secondary: {
        color: "#e6e6e6",
        text: "#4a4a4a",
        accent: "#dbdbdb",
        disabled: "#cccccc",
      },
      highlight: {
        text: "#fc9936",
        active: "#ffad5c",
      },

      accent1: "#fafafa",
      accent2: "#dbdbdb",
      accent3: "#999999",
      accent4: "#666666",

      tdfShields: {
        red: "#d60015",
        green: "#19b915",
        blue: "#0076c2",
        yellow: "#d2bd00",
        purple: "#8b00c7",
        neutral: "#4b4b4b",
        cyan: "#1eabaa",
        text: "#ffffff",
      },
    },
  }),
  Dark: _.merge({}, globals, {
    logo: {
      filter: "invert(1)",
    },
    colors: {
      background: "#1f1f1f",
      text: "#cccccc",
      active: "#eeeeee",
      lumFactor: 0.6,

      outline: "hsla(213, 100%, 40%, 0.2)",
      modal: "hsla(0, 0%, 0%, 0.80)",
      shadow: "hsla(0, 0%, 0%, 0.5)",

      input: {
        color: "#ffffff0a",
        text: "#cccccc",
        accent: "#ffffff0a",
        disabled: "#999999",
      },
      success: {
        color: "#1f6538",
        text: "white",
        accent: "#226d3c",
        disabled: "#133e22",
      },
      warning: {
        color: "#977c0b",
        text: "white",
        accent: "#b89300",
        disabled: "#574500",
      },
      danger: {
        color: "#661425",
        text: "white",
        accent: "#6f1628",
        disabled: "#330a12",
      },
      primary: {
        color: "#005ca3",
        text: "white",
        disabled: "#cccccc",
        accent: "#002e52",
      },
      secondary: {
        color: "#404040",
        text: "white",
        accent: "#454545",
        disabled: "#202020",
      },
      highlight: {
        text: "#fc9936",
        active: "#ffad5c",
      },

      accent1: "#2e2e2e",
      accent2: "#454545",
      accent3: "#757575",
      accent4: "#ababab",

      tdfShields: {
        red: "#9a121f",
        green: "#21861e",
        blue: "#105b8b",
        yellow: "#968912",
        purple: "#69118e",
        neutral: "#777777",
        cyan: "#1c9493",
        text: "#cccccc",
      },
    },
  }),
};

theme.AMOLED = _.merge({}, theme.Dark, {
  colors: {
    text: "#f0f0f0",
    background: "#000000",
    modal: "hsla(55, 0%, 13%, 0.83)",
  },
});

theme["Midnight Blue"] = _.merge({}, theme.Dark, {
  colors: {
    background: "#0a0a2c",
    accent1: "#1e1e40",
  },
});

theme.Ninjaholic = _.merge({}, theme.Dark, {
  colors: {
    background: "#290052",
    accent1: "#380070",
    accent2: "#4f009e",
    accent3: "#8c1aff",
    accent4: "#bf80ff",

    secondary: {
      color: "#55008a",
      text: "white",
      accent: "#6e00b3",
      disabled: "#31084a",
    },
  },
});

theme["Specialist"] = _.merge({}, theme.Light, {
  colors: {
    text: "#666666",
    background: "#fdf3f9",
    accent1: "#ffcbe9",
    accent2: "#ffbcdf",
    accent3: "#d55f9d",
    active: "#e11891",

    outline: "hsla(306, 100%, 75%, 0.2)",
    modal: "hsla(0, 0%, 0%, 0.50)",
    shadow: "hsla(315, 100%, 90%, 0.4)",

    input: {
      color: "#ffc3e536",
      text: "#4a4a4a",
      accent: "#ffc3e536",
      disabled: "#757575",
    },

    primary: {
      color: "#d36ab9",
      text: "white",
      accent: "#b64a9b",
      disabled: "#e8e8e8",
    },
    secondary: {
      color: "#f1abd6",
      text: "white",
      accent: "#e58ac2",
      disabled: "#e8e8e8",
    },
    warning: {
      color: "#ffeb9f",
      text: "#363636",
      accent: "#ffda47",
      disabled: "#e8e8e8",
    },
    danger: {
      color: "#ff889f",
      text: "white",
      accent: "#f35e7b",
      disabled: "#f35e7b",
    },
    success: {
      color: "#d673af",
      text: "white",
      accent: "#c15496",
      disabled: "#e8e8e8",
    },
    tdfShields: {
      red: "#ff5676",
      yellow: "#f2d56d",
      green: "#50df4d",
      blue: "#2e91d1",
    },
  },
  logo: {
    filter: "hue-rotate(-55deg) drop-shadow(1px 2px 0.5px #ff8fc9) contrast(90%)",
  },
});

theme["Chocola"] = _.merge({}, theme.Dark, {
  colors: {
    background: "#30292c",
    active: "#FF357C",
    shadow: "hsla(0, 0%, 0%, 0.2)",
    outline: "hsla(339, 100%, 60%, 0.2)",

    secondary: {
      color: "#AE3F69",
      text: "white",
      accent: "#bc577d",
      disabled: "#e8e8e8",
    },
    input: {
      color: "#4f3d44",
      text: "#cccccc",
      accent: "#4f3d44",
      disabled: "#999999",
    },
    success: {
      color: "#1f6538",
      text: "white",
      accent: "#226d3c",
      disabled: "#133e22",
    },

    danger: {
      color: "#711818",
      text: "white",
      accent: "#6f1628",
      disabled: "#330a12",
    },
    accent1: "#4f3d44",
    accent2: "#5b4453",
    accent3: "#d15886",
  },
  logo: {
    filter: "invert(1) drop-shadow(1px 2px 0.5px #80173E)",
  },
  sticker: "https://i.imgur.com/ohDedR4.png",
});
theme["Vanilla"] = _.merge({}, theme.Dark, {
  colors: {
    background: "#2d2f43",
    active: "#9bf8ff",
    shadow: "rgba(0, 0, 0, .2)",
    outline: "hsla(203, 69%, 25%, 0.2)",
    text: "#6a96e9",

    secondary: {
      color: "#4b598a",
      text: "#e6e6e6",
      accent: "#5e6faa",
      disabled: "#b0a17f",
    },
    success: {
      color: "#1f6538",
      text: "#e4eff9 ",
      accent: "#226d3c",
      disabled: "#cccccc",
    },

    input: {
      color: "#3a425e",
      text: "#b0a17f",
      accent: "#3a425e",
      disabled: "#999999",
    },
    warning: {
      color: "#b79718",
      text: "white",
      accent: "#c8a51c",
      disabled: "#cccccc",
    },

    danger: {
      color: "#752626",
      text: "#cdcdcd ",
      accent: "#842c2c",
      disabled: "#330a12",
    },
    accent1: "#333557",
    accent2: "#3d5d86",
    accent3: "#9bf8ff",
    accent4: "#b0a17f",

    highlight: {
      text: "#fc9936",
      active: "#ffad5c",
    },
  },

  logo: {
    filter:
      "invert(62%) sepia(28%) saturate(325%) hue-rotate(4deg) brightness(100%) contrast(84%) drop-shadow(1px 1px 0.3px #000000)",
  },
  sticker: "https://i.imgur.com/8JN6udB.png",
});

export default theme;
