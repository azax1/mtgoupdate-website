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
	} else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
				&& localStorage.getItem("colorScheme") !== "light") {
  		return "dark";
	} else {
  		return "light";
	}
}

function setColorMode(mode) {
	if (mode === "dark") {
		document.querySelector("html").style.setProperty("--bg-color", offBlack);
		document.querySelector("html").style.setProperty("--text-color", yellow);
		document.querySelector("html").style.setProperty("--banner-color", blue);
		
		// info button wizardry
		document.querySelector("button").style.backgroundColor = "#303030";
		document.querySelector("button").style.borderColor = "#505050";
		document.querySelector("button").style.transform = "rotate(180deg)";
		document.getElementById("infoButtonText").style.transform = "rotate(180deg)";
	} else {
		document.querySelector("html").style.setProperty("--bg-color", "white");
		document.querySelector("html").style.setProperty("--off-bg-color", "#f0f0f0");
		document.querySelector("html").style.setProperty("--text-color", black);
		document.querySelector("html").style.setProperty("--banner-color", red);
		
		// info button wizardry
		document.querySelector("button").style.backgroundColor = "#f0f0f0";
		document.querySelector("button").style.borderColor = "#e0e0e0";
		document.querySelector("button").style.transform = "rotate(0deg)";
		document.getElementById("infoButtonText").style.transform = "rotate(0deg)";
	}
}

function getTextboxColor(today, isDarkMode) {
	let weekdayColor = isDarkMode ? yellow : black;
	let weekendColor = isDarkMode ? darkModeGreen : blue;
	return (today.getDay() === 0 || today.getDay() === 6) ? weekendColor : weekdayColor;
}

function getDayOfWeekColor(today, isDarkMode) {
	if (!isDarkMode) {
		return black;
	}
	return (today.getDay() === 0 || today.getDay() === 6) ? darkModeGreen : yellow;
}

function getEventColor(event, isDarkMode, j, k) {
	let ret = isDarkMode ? yellow : black;
	if (isPremier(event)) {
		ret = isDarkMode ? magenta : red;
	} else if (event.includes("Challenge")) {
		ret = isDarkMode ? cyan : green;
	}
	if (j === 24) {
		if (k !== 168) {
			ret = grey;
		} else {
			// midnight events are greyed out, 12am events aren't:  except for midnight on the final day,
			// when special events have their normal color since they're not otherwise on the schedule
			if (ret === (isDarkMode ? yellow : black)) {
				ret = grey;
			}
		}
	}
	return ret;
}