function getHourAndMinuteOffset(PTOffset, localOffset) {
	let hourOffset =  PTOffset - Math.floor(localOffset / 60);
    let minuteOffset = localOffset % 60;
    if (minuteOffset !== 0) {
    	if (minuteOffset > 0) {
    		// Localities like St. John's with fractional offsets that are west of Greenwich have getTimezoneOffset() > 0.
    		// Instead of e.g. "3 hours and 45 minutes behind Greenwich",
    		// this is more naturally thought of as "4 hours behind and 15 minutes ahead of Greenwich".
    		// Because we incremented the integer part of the time difference (represented above by the negative floor), we have to decrement hourOffset.
    		minuteOffset = 60 - minuteOffset;
    		hourOffset--;
    	} else {
    		// Localities like Central Australia with fractional offsets that are east of Greenwich have getTimezoneOffset() < 0.
    		// A minuteOffset of e.g. -15 here means 15 minutes ahead of Greenwich, so we have to negate that variable.
    		// Offset is decremented because floor() rounds towards -infinity, when we want it to round towards 0;
    		// for non-integers this results in an off-by-one error.
    		minuteOffset = -minuteOffset;
    		hourOffset--;
    	}
    }
    return [hourOffset, minuteOffset];
}

function isPremier(event) {
	return event.includes("Qualifier") || event.includes("Showcase") || event.includes("LCQ") || event.includes("Eternal Weekend");
}

function isMocsFormat(str) {
	return str.includes("Pioneer") || str.includes("Modern") || str.includes("Legacy") ||  str.includes("Vintage");
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

function displayDSTBanner(dstTime) {
	if (dstTime) {
		let contents =
			`The US is moving its clocks forward 1 hour on ${dstTime}. ` +
			"If your locality is not changing its clocks, scheduled events after this time are 1 hour earlier than displayed.";
		document.getElementById("bannerContainer").innerHTML = `<div id=\"banner\"><p>${contents}</p></div>`;
		document.getElementById("bannerContainer").style.setProperty("position", "relative");
	} else {
		document.getElementById("bannerContainer").innerHTML = null;
		document.getElementById("bannerContainer").style.setProperty("position", "absolute");
	}
}

function initializePageAndParameters() {
	setColorMode(getColorMode());
	displayDSTBanner(null);
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
    return [today, eventFilter];
}

function getUnixTime(date, hour) {
	let PTOffset = (date.getTime() <= 1678611600000) ? 8 : 7;
	return Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), hour + PTOffset, 0, 0, 0);
}