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
	let monsterSched = monsterMonsterSched.slice(24 * (day + 7 - 1), 24 * (day + 7 + 8) + 1);

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
	let ret = [`Vintage ${ch}`, `Limited ${ch} (32-player)`, null, null, `Modern ${ch}  (96-player)`, null, `Pioneer ${ch}  (96-player)`, null, `Legacy ${ch} (96-player)`, null, `Pauper ${ch}`, null,
		`Limited ${ch} (32-player)`, null, `Standard ${ch}`, null, `Limited ${pr}`, null, null, null, null, null, null, null,
		`Pioneer ${pr}`, null, null, `Limited ${pr}`, `Standard ${pr}`, null, null, `Modern ${pr}`, null, `Limited ${pr}`, null, `Legacy ${pr}`,
		null, null, null, `Modern ${pr}`, null, `Vintage ${pr}`, `Limited ${pr}`, `Pioneer ${pr}`, null, `Standard ${pr}`, null, null,
		`Limited ${pr}`, null, null, `Modern ${pr}`, null, null, null, `Pioneer ${pr}`, null, `Limited ${pr}`, null, `Modern ${pr}`,
		null, null, null, `Pioneer ${pr}`, `Limited ${pr}`, `Standard ${pr}`, null, `Legacy ${pr}`, null, null, null, null,
		`Limited ${pr}`, null, null, `Legacy ${pr}`, null, null, null, `Limited ${pr}`, null, `Standard ${pr}`, null, null,
		null, `Pioneer ${pr}`, null, `Modern ${pr}`, `Limited ${pr}`, null, `Vintage ${pr}`, null, null, `Limited ${pr}`, null, null,
		`Modern ${pr}`, null, null, `Pioneer ${pr}`, null, null, null, `Limited ${pr}`, null, null, null, `Modern ${pr}`,
		`Limited ${pr}`, null, null, `Legacy ${pr}`, `Limited ${pr}`, `Standard ${pr}`, null, `Modern ${pr}`, null, `Pioneer ${pr}`, null, null,
		`Limited ${pr}`, null, `Limited ${pr}`, null, `Modern ${pr}`, null, null, `Legacy ${pr}`, null, null, `Limited ${pr}`, `Vintage ${pr}`,
		null, null, `Pioneer ${ch}`, null, `Limited ${ch} (32-player)`, null, `Modern ${ch}`, null, null, null, null, null,
		`Pioneer ${pr}`, `Limited ${ch} (32-player)`, `Pauper ${ch}`, null, `Legacy ${ch} (32-player)`, null, `Standard ${ch} (32-player)`, null, `Modern ${ch} (96-player)`, null, `Vintage ${ch}`, null,
		`Limited ${ch} (32-player)`, null, `Pioneer ${ch} (96-player)`, null, `Limited ${pr}`, null, `Modern ${ch}`, null, null, null, null, null];
	return ret;
}

// Events that don't replace other events at the same time
// Usually RCQs, but also for weird one-off events like Eternal Weekend
function getRCQs() {
	let ret = new Map();

	// const cube = "Vintage Cube 64-player Single Elim";
	// addBulkEvents(
	// 	ret,
	// 	cube,
	// 	[ new Date(2023, 10, 22), ],
	// 	[10.5, 11.5, 12.5, 13.5, 14.5, 15.5, 16.5, 17.5, 18.5, 19.5, 20.5, 22.5],
	// );

	ret.set(
		new Date(2023, 11, 2).toDateString(), {8: "Modern Showcase Qualifier (invite-only)"}
	);

	ret.set(
		new Date(2023, 11, 3).toDateString(), {8: "Legacy Showcase Qualifier (invite-only)"}
	);

	ret.set(
		new Date(2023, 11, 9).toDateString(), {6: "Standard Showcase Qualifier (invite-only)"}
	);

	ret.set(
		new Date(2023, 11, 10).toDateString(), {6: "Pioneer Showcase Qualifier (invite-only)"}
	);

	ret.set(
		new Date(2023, 11, 16).toDateString(), {7: "Limited (LCI) MOCS Showcase Open"}
	);
	
	ret.set(
		new Date(2023, 11, 17).toDateString(), {7: "Limited (LCI) MOCS Showcase Open"}
	);

	ret.set(
		new Date(2023, 11, 23).toDateString(), {7: "Pioneer Super Qualifier"}
	);
	
	ret.set(
		new Date(2023, 11, 25).toDateString(), {14: "Limited (LCI) Super Qualifier"}
	);
	
	ret.set(
		new Date(2023, 11, 26).toDateString(), {1: "Modern Super Qualifier"}
	);
	
	ret.set(
		new Date(2023, 11, 27).toDateString(), {7: "Modern Super Qualifier"}
	);

	ret.set(
		new Date(2023, 11, 28).toDateString(), {7: "Legacy Super Qualifier"}
	);

	ret.set(
		new Date(2023, 11, 29).toDateString(), {7: "Pioneer Super Qualifier"}
	);

	ret.set(
		new Date(2023, 11, 30).toDateString(), {7: "Limited (LCI) Super Qualifier"}
	);

	ret.set(
		new Date(2024, 0, 1).toDateString(), {7: "Standard Qualifier"}
	);

	ret.set(
		new Date(2024, 0, 14).toDateString(), {1: "Modern Qualifier"}
	);

	ret.set(
		new Date(2024, 0, 15).toDateString(), {7: "Modern Qualifier"}
	);

	ret.set(
		new Date(2024, 0, 27).toDateString(), {7: "Pioneer Qualifier"}
	);

	ret.set(
		new Date(2024, 0, 28).toDateString(), {7: "Limited (RVR) Super Qualifier"}
	);

	ret.set(
		new Date(2024, 1, 2).toDateString(), {14: "Limited (RVR) Qualifier"}
	);

	ret.set(
		new Date(2024, 1, 19).toDateString(), {7: "Limited (MKM) Qualifier"}
	);

	ret.set(
		new Date(2024, 1, 23).toDateString(), {14: "Legacy Qualifier"}
	);

	ret.set(
		new Date(2024, 1, 24).toDateString(), {7: "Limited (MKM) Super Qualifier"}
	);

	ret.set(
		new Date(2024, 1, 25).toDateString(), {1: "Limited (MKM) Super Qualifier"}
	);

	ret.set(
		new Date(2024, 2, 2).toDateString(), {7: "Pauper Qualifier"}
	);

	ret.set(
		new Date(2024, 2, 3).toDateString(), {7: "Vintage Super Qualifier"}
	);

	ret.set(
		new Date(2024, 2, 8).toDateString(), {14: "Limited (MKM) Qualifier"}
	);

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

	addCurrentYearDSTDates(ret);
	
	return ret;
}

// Events that replace other events at the same time (Showcases replace Challenges, LCQs replace Prelims)
// Also useful for weird one-off changes to the schedule, e.g. cancelled Challenges due to nearby RCQs of the same format
function getShowcasesAndLCQs() {
	let ret = new Map();
	
	ret.set(
		new Date(2024, 0, 6).toDateString(), {8: "Modern Showcase Challenge"}
	);
	
	ret.set(
		new Date(2024, 0, 7).toDateString(), {6: "Pioneer Showcase Challenge"}
	);
	
	ret.set(
		new Date(2024, 0, 20).toDateString(), {10: "Vintage Showcase Challenge"}
	);

	ret.set(
		new Date(2024, 0, 21).toDateString(), {8: "Legacy Showcase Challenge"}
	);

	ret.set(
		new Date(2024, 1, 10).toDateString(), {8: "Modern Showcase Challenge"}
	);
	
	ret.set(
		new Date(2024, 1, 11).toDateString(), {6: "Pioneer Showcase Challenge"}
	);
	
	ret.set(
		new Date(2024, 1, 17).toDateString(), {10: "Vintage Showcase Challenge"}
	);

	ret.set(
		new Date(2024, 1, 18).toDateString(), {8: "Legacy Showcase Challenge"}
	);


	ret.set(
		new Date(2024, 2, 9).toDateString(), {8: "Modern Showcase Challenge"}
	);
	
	ret.set(
		new Date(2024, 2, 10).toDateString(), {6: "Pioneer Showcase Challenge"}
	);
	
	ret.set(
		new Date(2024, 2, 16).toDateString(), {10: "Vintage Showcase Challenge"}
	);

	let schedule = getBaseSchedule();
	// 12am Sunday until 7am Wednesday
	for (let day = 0; day < 4; day++) {
		let lcqs = {};
		if (day === 0) {
			lcqs[8] = "Legacy Showcase Challenge";
		}
		for (let hour = 0; hour < 10 || (day < 3 && hour < 24); hour++) {
			let event = schedule[24 * day + hour];
			if (event && event.includes("Prelim") && isMocsFormat(event)) {
				lcqs[hour] = event.replace("Prelim", "LCQ");
			}
		}
		ret.set(new Date(2024, 2, 17 + day).toDateString(), lcqs);
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
