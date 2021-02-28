const CONFIG_BASE = {
  title: "ArrowOS",
  subtitle: "ArrowOS builds For Galaxy S22 Plus",
  owner: "anderson",
  image: "https://avatars.githubusercontent.com/u/40351870?s=200&v=4"
};

const CONFIG_UI = {
  primary_color: "#64B5F6",
  picture_rounded: true,
}

const CONFIG_DATA = {
  show_gapps: false,
  donate: {
    enabled: false,
    title: "Did you like this project? Show your support!",
    btn_label: "Donate for Anderson",
    target: "https://www.paypal.com/paypalme/anderson",
  },
  tabs: [
    {
      id: "vanilla",
      title: "VANILLA",
      default: true,
    },
    {
      id: "gapps",
      title: "GAPPS",
      default: false,
    },
  ]
}
