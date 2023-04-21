function isPremier(event) {
	return event.includes("Qualifier") || event.includes("Showcase") || event.includes("LCQ") || event.includes("Eternal Weekend");
}

function isMocsFormat(str) {
	return str.includes("Pioneer") || str.includes("Modern") || str.includes("Legacy") ||  str.includes("Pauper");
}

function getPrettyTime(hour, minuteOfHour) {
	if (minuteOfHour === 0) {
 		if (hour === 0) {
 			return "12am";
 		} else if (hour < 12) {
 			return hour + "am";
 		} else if (hour === 12) {
 			return "Noon";
 		} else if (hour < 24) {
 			return (hour - 12) + "pm";
 		} else {
 			return "Midnight";
 		}
 	} else {
 		if (hour === 0) {
 			return "12:" + minuteOfHour + "am";
 		} else if (hour < 12) {
 			return hour + ":" + minuteOfHour + "am";
 		} else if (hour === 12) {
 			return hour + ":" + minuteOfHour + "pm";
 		} else if (hour < 24) {
 			return (hour - 12) + ":" + minuteOfHour + "pm";
 		} else {
 			return ""; // shouldn't happen
 		}
 	}
}

function getSuffix(dayOfMonth) {
 	if (dayOfMonth % 20 === 1 || dayOfMonth === 31) {
 		return "st";
 	} else if (dayOfMonth % 20 === 2) {
 		return "nd";
 	} else if (dayOfMonth % 20 === 3) {
 		return "rd";
 	}
 	return "th";
}

function initializePageAndParameters() {
	setColorMode(getColorMode());
    let today = new Date();	
    let inputDate = $("#datepicker").datepicker("getDate");
    if (inputDate && (inputDate instanceof Date)) {
    	today.setFullYear(inputDate.getFullYear(), inputDate.getMonth(), inputDate.getDate());
    }
    let formatChoices = Array.from(document.getElementById("formatDropdown").options)
    						.filter(option => option.selected)
    						.map(option => option.value);
    let formatSelector;
    if (formatChoices.length === 0) { // default; no filter
    	formatSelector = (_) => { return true; };
    } else {
    	formatSelector = (event) =>
    		{
    			return formatChoices
    					.filter(format => event.includes(format))
    					.length > 0;
    		};
    }
    
    let eventTypeChoices = Array.from(document.getElementById("eventTypeDropdown").options)
    						.filter(option => option.selected)
    						.map(option => option.value);
    let eventTypeSelector;
    if (eventTypeChoices.length === 0) { // default; no filter
    	eventTypeSelector = (_) => { return true; };
    } else {
    	eventTypeSelector = (event) =>
    		{
	    		return eventTypeChoices
	    				.filter(eventType => event.includes(eventType))
	    				.length > 0;
    		};
    }
    let eventFilter = (event) =>
    	{
    		return formatSelector(event) && eventTypeSelector(event);
    	};
    
    let timeZone;
    try {
    	timeZone = Intl.DateTimeFormat(undefined, { timeZone: new URLSearchParams(window.location.search).get("timeZone") }).resolvedOptions().timeZone;
   	} catch (e) {
   		timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
   	}
    return [today, timeZone, eventFilter];
}