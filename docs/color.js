const black = "#000000";
const blue = "#0000ff";
const cyan = "#00cccc";
const darkModeGreen = "#00cc00";
const green = "#008000";
const grey = "#808080";
const magenta = "cc00cc";
const offBlack = "#121212";
const red = "#ff0000";
const yellow = "#bbbb00";

function getColorMode() {
  if (localStorage.getItem("colorScheme") === "dark") {
    return "dark";
  } else if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches &&
    localStorage.getItem("colorScheme") !== "light"
  ) {
    return "dark";
  } else {
    return "light";
  }
}

function setColorMode(mode) {
  if (mode === "dark") {
    document.querySelector("html").style.setProperty("--bg-color", offBlack);
    document.querySelector("html").style.setProperty("--text-color", yellow);
    document.querySelector("html").style.setProperty("--banner-color", "#023020");

    document.querySelectorAll(".faqAnswer").forEach(elem => elem.style.color = "#DCDCDC");

    document
      .querySelector("html")
      .style.setProperty("--fresh-link-color", "#ADD8E6");
    document
      .querySelector("html")
      .style.setProperty("--visited-link-color", "#49759C");

    // info button wizardry
    ["info", "settings"].forEach(button => {
      document.getElementById(button).style.backgroundColor = "#303030";
      document.getElementById(button).style.borderColor = "#505050";
      document.getElementById(button).style.transform = "rotate(180deg)";
      document.getElementById(button + "ButtonText").style.transform = "rotate(180deg)";
    });
  } else {
    document.querySelector("html").style.setProperty("--bg-color", "white");
    document
      .querySelector("html")
      .style.setProperty("--off-bg-color", "#f0f0f0");
    document.querySelector("html").style.setProperty("--text-color", black);
    document.querySelector("html").style.setProperty("--banner-color", red);

    document.querySelectorAll(".faqAnswer").forEach(elem => elem.style.color = black);

    document
      .querySelector("html")
      .style.setProperty("--fresh-link-color", "-webkit-link");
    document
      .querySelector("html")
      .style.setProperty("--visited-link-color", "#551A8B");

    // info button wizardry
    ["info", "settings"].forEach(button => {
      document.getElementById(button).style.backgroundColor = "#f0f0f0";
      document.getElementById(button).style.borderColor = "#e0e0e0";
      document.getElementById(button).style.transform = "rotate(0deg)";
      document.getElementById(button + "ButtonText").style.transform = "rotate(0deg)";
    });
  }
}

function getTextboxColor(today, isDarkMode) {
  let weekdayColor = isDarkMode ? yellow : black;
  let weekendColor = isDarkMode ? darkModeGreen : blue;
  return today.getDay() === 0 || today.getDay() === 6
    ? weekendColor
    : weekdayColor;
}

function getDayOfWeekColor(today, isDarkMode) {
  if (!isDarkMode) {
    return black;
  }
  return today.getDay() === 0 || today.getDay() === 6 ? darkModeGreen : yellow;
}

function getEventColor(event, isDarkMode, isMidnight, overrideGrey) {
  let ret = isDarkMode ? yellow : black;
  if (isPremier(event)) {
    ret = isDarkMode ? magenta : red;
  } else if (event.includes("Challenge") || event.includes("Trial")) {
    ret = isDarkMode ? cyan : green;
  }
  if (isMidnight) {
    // midnight events are greyed out, 12am events aren't:  except for midnight on the final day,
    // when special events have their normal color since they're not otherwise on the schedule
    if (ret === (isDarkMode ? yellow : black) || !overrideGrey) {
      ret = grey;
    }
  }
  return ret;
}
