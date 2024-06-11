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
					if (!isReplacement || (event != null && event.includes("Pauper"))) {
						if (monster[index]) {
							monster[index] = monster[index] + "&" + event;
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

function getBaseSchedule() {
	let ch = "Challenge";
	let pr = "Prelim";
	let ret = [`Vintage ${ch}`, `Limited ${pr}`, null, `Limited ${ch} (32-player)`, `Modern ${ch}`, null, `Pioneer ${ch}`, null, `Legacy ${ch}`, `Modern ${pr}`, `Pauper ${ch}`, null,
		`Limited ${ch} (32-player)`, `Pioneer ${ch}&plus&Pioneer ${ch} (32-player)&minus`, `Standard ${ch}`, null, `Limited ${pr}`, null, `Modern ${ch}`, null, null, null, null, null,
		`Pioneer ${pr}`, null, null, `Limited ${pr}`, `Legacy ${pr}`, null, null, `Modern ${pr}`, null, `Limited ${pr}`, `Pauper ${pr}`, `Legacy ${pr}`,
		null, null, `Standard ${pr}`, `Modern ${pr}`, `Pioneer ${ch}&plus&Pioneer ${ch} (32-player)&minus`, `Vintage ${pr}`, `Limited ${pr}`, `Pioneer ${pr}`, null, `Modern ${pr}`, null, null,
		`Limited ${pr}`, null, null, `Modern ${pr}`, null, null, null, `Pioneer ${pr}`, `Pauper ${pr}`, `Limited ${pr}`, `Standard ${pr}`, `Modern ${pr}`,
		null, `Modern ${ch}&plus&Modern ${ch} (32-player)&minus`, null, `Pioneer ${pr}`, `Limited ${pr}`, `Modern ${pr}`, `Standard ${pr}`, `Legacy ${pr}`, null, null, null, null,
		`Limited ${pr}`, null, `Modern ${pr}`, `Legacy ${pr}`, null, null, `Pioneer ${pr}`, `Limited ${pr}`, null, `Modern ${pr}`, null, `Limited ${pr}`,
		`Standard ${pr}`, `Pioneer ${pr}`, `Legacy ${ch} (32-player)`, `Modern ${pr}`, `Limited ${pr}`, null, `Vintage ${pr}`, null, null, `Limited ${pr}`, null, null,
		`Modern ${pr}`, null, null, `Pioneer ${pr}`, null, null, `Modern ${ch} (32-player)`, `Limited ${pr}`, `Vintage ${ch} (32-player)`, `Pauper ${pr}`, `Standard ${pr}`, `Modern ${pr}`,
		`Limited ${pr}`, null, `Pioneer ${ch}&plus&Pioneer ${ch} (32-player)&minus`, `Legacy ${pr}`, `Limited ${pr}`, `Modern ${ch} (32-player)`, `Pauper ${pr}`, `Modern ${pr}`, null, `Pioneer ${pr}`, null, null,
		`Limited ${pr}`, null, `Limited ${pr}`, null, `Modern ${pr}`, `Pioneer ${ch} (32-player)`, `Pauper ${ch} (32-player)`, `Legacy ${pr}`, `Modern ${ch} (32-player)`, `Standard ${pr}`, `Limited ${pr}`, `Vintage ${pr}`,
		null, `Modern ${pr}`, `Pioneer ${ch}`, `Vintage ${ch} (32-player)`, `Limited ${ch} (32-player)`, `Legacy ${ch} (32-player)`, `Modern ${ch}`, `Standard ${ch} (32-player)`, null, null, null, `Modern ${ch} (32-player)`,
		`Pioneer ${pr}`, `Limited ${pr}`, `Pauper ${ch}`, `Limited ${ch} (32-player)`, `Legacy ${ch} (32-player)`, null, `Standard ${ch} (32-player)`, null, `plus&Modern ${ch}&minus`, null, `Vintage ${ch}`, null,
		`Limited ${ch} (32-player)`, null, `Pioneer ${ch}`, null, `Limited ${pr}`, null, `Modern ${ch}`, null, `Legacy ${ch} (32-player)`, null, null, null];
	return ret;
}

// Events that don't replace other events at the same time
// Usually RCQs, but also for weird one-off events like Eternal Weekend
function getRCQs() {
	let ret = new Map();

	ret.set(
		new Date(2024, 2, 23).toDateString(), {8: "Modern Showcase Qualifier (invite-only)"}
	);

	ret.set(
		new Date(2024, 2, 24).toDateString(), {6: "Pioneer Showcase Qualifier (invite-only)"}
	);

	ret.set(
		new Date(2024, 2, 30).toDateString(), {10: "Vintage Showcase Qualifier (invite-only)"}
	);

	ret.set(
		new Date(2024, 2, 31).toDateString(), {8: "Legacy Showcase Qualifier (invite-only)"}
	);

	ret.set(
		new Date(2024, 3, 6).toDateString(), {7: "Limited (MKM) MOCS Showcase Open"}
	);
	
	ret.set(
		new Date(2024, 3, 7).toDateString(), {7: "Limited (MKM) MOCS Showcase Open"}
	);

	ret.set(
		new Date(2024, 3, 12).toDateString(), {14: "Limited (MKM) Qualifier"}
	);

	ret.set(
		new Date(2024, 3, 27).toDateString(), {7: "Limited (OTJ) Super Qualifier"}
	);

	ret.set(
		new Date(2024, 3, 28).toDateString(), {7: "Standard Super Qualifier"}
	);

	ret.set(
		new Date(2024, 4, 1).toDateString(), {5: "Modern Qualifier"}
	);

	ret.set(
		new Date(2024, 4, 4).toDateString(), {7: "Pioneer Super Qualifier"}
	);

	ret.set(
		new Date(2024, 4, 5).toDateString(), {7: "Vintage Qualifier"}
	);

	ret.set(
		new Date(2024, 4, 19).toDateString(), {7: "Modern Super Qualifier"}
	);

	ret.set(
		new Date(2024, 4, 17).toDateString(), {14: "Pioneer Super Qualifier"}
	);

	ret.set(
		new Date(2024, 4, 27).toDateString(), {7: "Limited (OTJ) Qualifier"}
	);

	ret.set(
		new Date(2024, 4, 31).toDateString(), {14: "Legacy Qualifier"}
	);

	ret.set(
		new Date(2024, 5, 1).toDateString(), {1: "Limited (OTJ) Qualifier"}
	);

	ret.set(
		new Date(2024, 5, 2).toDateString(), {1: "Legacy Qualifier"}
	);

	ret.set(
		new Date(2024, 5, 8).toDateString(), {7: "Pauper Super Qualifier"}
	);

	ret.set(
		new Date(2024, 5, 9).toDateString(), {7: "Limited (OTJ) Super Qualifier"}
	);

	ret.set(
		new Date(2024, 5, 16).toDateString(), {7: "Limited (MH3) Super Qualifier"}
	);

	ret.set(
		new Date(2024, 5, 21).toDateString(), {7: "Limited (MH3) Qualifier"}
	);

	ret.set(
		new Date(2024, 5, 29).toDateString(), {7: "Limited (MH3) Super Qualifier"}
	);

	ret.set(
		new Date(2024, 5, 30).toDateString(), {7: "Modern Super Qualifier"}
	);

	ret.set(
		new Date(2024, 6, 12).toDateString(), {7: "Limited (MH3) Super Qualifier"}
	);
	
	ret.set(
		new Date(2024, 6, 13).toDateString(), {8: "Modern Showcase Qualifier (invite-only)"}
	);

	ret.set(
		new Date(2024, 6, 14).toDateString(), {6: "Pioneer Showcase Qualifier (invite-only)", 12: "Modern Super Qualifier"}
	);

	ret.set(
		new Date(2024, 6, 20).toDateString(), {8: "Pauper Showcase Qualifier (invite-only)"}
	);

	ret.set(
		new Date(2024, 6, 21).toDateString(), {8: "Legacy Showcase Qualifier (invite-only)"}
	);

	ret.set(
		new Date(2024, 6, 27).toDateString(), {7: "Limited (MH3) MOCS Showcase Open"}
	);
	
	ret.set(
		new Date(2024, 6, 28).toDateString(), {7: "Limited (MH3) MOCS Showcase Open"}
	);

	addCurrentYearDSTDates(ret);
	addCubeEvents(ret);
	
	return ret;
}

// Events that replace other events at the same time (Showcases replace Challenges, LCQs replace Prelims)
// Also useful for weird one-off changes to the schedule, e.g. cancelled Challenges due to nearby RCQs of the same format
function getShowcasesAndLCQs() {
	let ret = new Map();
	
	ret.set(
		new Date(2024, 3, 13).toDateString(), {8: "Modern Showcase Challenge"}
	);
	
	ret.set(
		new Date(2024, 3, 14).toDateString(), {4: "Modern Challenge", 6: "Pioneer Showcase Challenge"}
	);
	
	ret.set(
		new Date(2024, 3, 20).toDateString(), {7: "Pauper Showcase Challenge"}
	);

	ret.set(
		new Date(2024, 3, 21).toDateString(), {4: "Modern Challenge", 8: "Legacy Showcase Challenge"}
	);

	ret.set(
		new Date(2024, 4, 11).toDateString(), {8: "Modern Showcase Challenge"}
	);
	
	ret.set(
		new Date(2024, 4, 12).toDateString(), {4: "Modern Challenge", 6: "Pioneer Showcase Challenge"}
	);

	ret.set(
		new Date(2024, 4, 25).toDateString(), {7: "Pauper Showcase Challenge"}
	);

	ret.set(
		new Date(2024, 4, 26).toDateString(), {4: "Modern Challenge", 8: "Legacy Showcase Challenge"}
	);

	ret.set(
		new Date(2024, 5, 22).toDateString(), {8: "Modern Showcase Challenge"}
	);
	
	ret.set(
		new Date(2024, 5, 23).toDateString(), {4: "Modern Challenge", 6: "Pioneer Showcase Challenge"}
	);
	
	ret.set(
		new Date(2024, 6, 6).toDateString(), {7: "Pauper Showcase Challenge"}
	);

	ret.set(
		new Date(2024, 6, 7).toDateString(), {4: "Modern Challenge", 8: "Legacy Showcase Challenge"}
	);

	let schedule = getBaseSchedule();
	// 9am Sunday until 7am Wednesday
	for (let day = 0; day < 4; day++) {
		let lcqs = {};
		if (day === 0) {
			lcqs[4] = "Modern Challenge";
			lcqs[8] = "Legacy Showcase Challenge";
		}
		for (let hour = 0; hour < 10 || (day < 3 && hour < 24); hour++) {
			let event = schedule[24 * day + hour];
			if (event && event.includes("Prelim") && isMocsFormat(event)) {
				lcqs[hour] = event.replace("Prelim", "LCQ");
			}
		}
		ret.set(new Date(2024, 6, 7 + day).toDateString(), lcqs);
	}

	return ret;
}

function addCurrentYearDSTDates(rcqs) {
	let year = new Date().getFullYear();
	let march = new Date(year, 2, 8 + ((7 - new Date(year, 2, 1).getDay()) % 7));
	let nov = new Date(year, 10, 1 + ((7 - new Date(year, 10, 1).getDay()) % 7));
	
	[march, nov].forEach(date =>
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
	const cube = "Vintage Cube 64-player Single Elim";


	addBulkEvents(
		rcqs,
		cube,
		[ new Date(2024, 5, 5)  ],
		[ 10.5, 12.5, 14.5, 16.5, 18.5, 20.5, 22.5 ],
	);

	addBulkEvents(
		rcqs,
		cube,
		[ new Date(2024, 5, 6), new Date(2024, 5, 7), new Date(2024, 5, 8),
		new Date(2024, 5, 9), new Date(2024, 5, 10)  ],
		[ 0.5, 2.5, 4.5, 6.5, 8.5, 10.5, 12.5,
		14.5, 16.5, 18.5, 20.5, 22.5 ],
	);

	addBulkEvents(
		rcqs,
		cube,
		[ new Date(2024, 5, 11)  ],
		[ 0.5, 2.5, 4.5, 6.5, 8.5 ],
	);
}

function addBulkEvents(map, event, dates, times) {
	for (let k = 0; k < dates.length; k++) {
		const day = dates[k];
		for (let time of times) {
			let events = map.get(day.toDateString());
			if (events === undefined) {
				events = {};
				map.set(day.toDateString(), events);
			}
			let eventToUse = event;
			if (!Number.isInteger(time)) {
				eventToUse = "plus&" + event + "&minus";
				time = Math.floor(time);
			}
			if (events[time]) {
				events[time] += "&" + eventToUse;
			} else {
				events[time] = eventToUse;
			}
		}
	}
}
