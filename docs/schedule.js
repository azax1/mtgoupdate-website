function getMonsterSchedule(today) {
	// for PT exactly, compiling the schedule for the week requires consulting 7 different dates
	// for any other time zone, it's 8 different dates (6 full days and 2 partial days on either end)
	// as a practical matter, it's easiest to just get the 7 days we want + 2 days of buffer on either end
	// and then trim off the unwanted information later
	
	let base = getBaseSchedule();
	
	// a schedule lasting 3 weeks, from which we will slice the monster schedule of 9 days
	let monsterMonsterSched = base.concat(base).concat(base);
	
	// the monster schedule of 9 days, from which we will slice the desired 7 days + 1 hour
	let day = today.getDay();
	let monsterSched = monsterMonsterSched.slice(24 * (7 + day - 1), 24 * (7 + day + 8) + 1);

	insertRCQsShowcasesAndLCQs(monsterSched, today);
	return monsterSched;
}

function insertRCQsShowcasesAndLCQs(monster, today) {
	insertIntoMonsterSchedule(monster, today, getShowcasesAndLCQs(), true);
	insertIntoMonsterSchedule(monster, today, getRCQs(), false);
}

function insertIntoMonsterSchedule(monster, today, specialEvents, isReplacement) {
	let day = new Date(today);
	day.setDate(today.getDate() - 1);
	for (let i = 0; i < 9; i++) {
		let todayEvents = specialEvents.get(day.toDateString());
		if (todayEvents) {
			for (let j = 0; j < 24; j++) {
				if (todayEvents[j] !== undefined) {
					let event = todayEvents[j];
					index = 24 * i + j;
					if (!isReplacement || (event != null && event.includes("Pauper Showcase"))) {
						if (monster[index]) {
							monster[index] = event + "&" + monster[index];
						} else {
							monster[index] = event;
						}
					} else {
						monster[index] = event;
					}
				}
			}
		}
		day.setDate(day.getDate() + 1);
	}
}

// Events that don't replace other events at the same time
// Usually RCQs, but also for weird one-off events like Eternal Weekend
function getRCQs() {
	let ret = new Map();

	getRCQData().forEach(
		([year, month, day, events]) => ret.set(new Date(year, month, day).toDateString(), events)
	);
	addCurrentYearDSTDates(ret);
	addCubeEvents(ret);
	addVegasQualifiers(ret);
	
	return ret;
}

// Events that replace other events at the same time (Showcases replace Challenges, LCQs replace Prelims)
// Also useful for weird one-off changes to the schedule, e.g. cancelled Challenges due to nearby RCQs of the same format
function getShowcasesAndLCQs() {
	let ret = new Map();

	getShowcaseData().forEach(
		([year, month, day, events]) => ret.set(new Date(year, month, day).toDateString(), events)
	);

	const schedule = getBaseSchedule();
	const [lcqYear, lcqMonth, lcqDay] = getLCQStartDate();
	// 9am Sunday until 7am Wednesday
	for (let day = 0; day < 4; day++) {
		let lcqs = {};
		if (day > 0) {
			for (let hour = 0; hour < 8 || (day < 3 && hour < 24); hour++) {
				let event = schedule[24 * day + hour];
				if (event && event.includes("Prelim") && isMocsFormat(event)) {
					lcqs[hour] = event.replace("Prelim", "LCQ");
				}
			}
		}
		ret.set(new Date(lcqYear, lcqMonth, lcqDay + day).toDateString(), lcqs);
	}

	getHackishLCQCorrections().forEach(
		([year, month, day, hour, correctedEvent]) =>
		ret.get(new Date(year, month, day, hour).toDateString())[hour] = correctedEvent
	);

	return ret;
}

function addCurrentYearDSTDates(rcqs) {
	getCurrentYearDSTDates().forEach(date =>
		{
			if (rcqs.get(date.toDateString()) === undefined) {
				rcqs.set(date.toDateString(), {2: "DST"});
			} else {
				if (rcqs.get(date.toDateString())[2] === undefined) {
					rcqs.get(date.toDateString())[2] = "DST";
				} else {
					rcqs.get(date.toDateString())[2] = "DST&" + rcqs.get(date.toDateString())[2];
				}
			}
		}
	);
	
	return rcqs;
}

function addCubeEvents(rcqs) {
	getCubeEvents().forEach(([dates, times]) => addBulkEvents(rcqs, "Cube 64-player Single Elim", dates, times));
}

function addVegasQualifiers(rcqs) {
	getVegasQualifiers().forEach(([dates, times]) => addBulkEvents(rcqs, "Vegas Qualifier", dates, times));
}

function addBulkEvents(map, eventName, dates, times) {
	for (let k = 0; k < dates.length; k++) {
		const day = new Date(dates[k][0], dates[k][1], dates[k][2]).toDateString();
		for (let time of times) {
			let events = map.get(day);
			if (events === undefined) {
				events = {};
				map.set(day, events);
			}
			let eventNameToUse = eventName;
			if (!Number.isInteger(time)) {
				eventNameToUse = "plus&" + eventName + "&minus";
				time = Math.floor(time);
			}
			if (events[time]) {
				events[time] += "&" + eventNameToUse;
			} else {
				events[time] = eventNameToUse;
			}
		}
	}
}
