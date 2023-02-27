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
		document.querySelector("html").style.setProperty("--bg-color", "#121212");
		document.querySelector("html").style.setProperty("--text-color", "yellow");
		
		// info button wizardry
		document.querySelector("button").style.backgroundColor = "#303030";
		document.querySelector("button").style.borderColor = "#505050";
		document.querySelector("button").style.transform = "rotate(180deg)";
		document.getElementById("infoButtonText").style.transform = "rotate(180deg)";
	} else {
		document.querySelector("html").style.setProperty("--bg-color", "white");
		document.querySelector("html").style.setProperty("--off-bg-color", "#f0f0f0");
		document.querySelector("html").style.setProperty("--text-color", "black");
		
		// info button wizardry
		document.querySelector("button").style.backgroundColor = "#f0f0f0";
		document.querySelector("button").style.borderColor = "#e0e0e0";
		document.querySelector("button").style.transform = "rotate(0deg)";
		document.getElementById("infoButtonText").style.transform = "rotate(0deg)";
	}
}

function getTextboxColor(today, isDarkMode) {
	let weekdayColor = isDarkMode ? "yellow" : "black";
	let weekendColor = isDarkMode ? "#0f0" : "blue";
	return (today.getDay() == 0 || today.getDay() == 6) ? weekendColor : weekdayColor;
}

function getDayOfWeekColor(today, isDarkMode) {
	if (!isDarkMode) {
		return "black";
	}
	return (today.getDay() == 0 || today.getDay() == 6) ? "#00ff00" : "yellow";
}

function getEventColor(event, isDarkMode, j, k) {
	let ret;
	if (isDarkMode) {
		ret = "yellow";
		if (isPremier(event)) {
			ret = "magenta";
		} else if (event.includes("Challenge")) {
			ret = "cyan";
		}
		if (j == 24 && !(k == 168 && color !== "yellow")) {
			// midnight events are greyed out, 12am events aren't:  except for midnight on the final day,
			// when special events have their normal color since they're not otherwise on the schedule
			color = "grey";
		}
	} else {
		ret = "black";
		if (isPremier(event)) {
			ret = "red";
		} else if (event.includes("Challenge")) {
			ret = "green";
		}
		if (j == 24 && !(k == 168 && color !== "black")) {
			// midnight events are greyed out, 12am events aren't:  except for midnight on the final day,
			// when special events have their normal color since they're not otherwise on the schedule
			color = "grey";
		}
	}
	return ret;
}