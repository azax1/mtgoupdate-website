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
    let ret = [`Vintage ${ch}`, `Limited ${ch} (32-player)`, null, null, `Modern ${ch}`, null, `Pioneer ${ch}`, null, `Legacy ${ch}`, null, `Pauper ${ch}`, null,
		`Limited ${ch}`, null, `Standard ${ch} (32-player)`, null, `Limited ${pr}`, null, null, null, null, null, null, null,
		`Pioneer ${pr}`, null, null, `Limited ${pr}`, null, null, null, `Modern ${pr}`, null, `Limited ${pr}`, null, `Legacy ${pr}`,
		null, null, null, `Modern ${pr}`, null, `Vintage ${pr}`, `Limited ${pr}`, `Pioneer ${pr}`, null, null, null, null,
		`Limited ${pr}`, null, null, `Modern ${pr}`, null, null, null, `Pioneer ${pr}`, null, `Limited ${pr}`, null, `Modern ${pr}`,
		null, null, null, `Pioneer ${pr}`, `Limited ${pr}`, null, null, `Legacy ${pr}`, null, null, null, null,
		`Limited ${pr}`, null, null, `Legacy ${pr}`, null, null, null, `Limited ${pr}`, null, null, null, null,
		null, `Pioneer ${pr}`, null, `Modern ${pr}`, `Limited ${pr}`, null, `Vintage ${pr}`, null, null, `Limited ${pr}`, null, null,
		`Modern ${pr}`, null, null, `Pioneer ${pr}`, null, null, null, `Limited ${pr}`, null, null, null, `Modern ${pr}`,
		`Limited ${pr}`, null, null, `Legacy ${pr}`, `Limited ${pr}`, null, null, `Modern ${pr}`, null, `Pioneer ${pr}`, null, null,
		`Limited ${pr}`, null, `Limited ${pr}`, null, `Modern ${pr}`, null, null, `Legacy ${pr}`, null, null, `Limited ${pr}`, `Vintage ${pr}`,
		null, null, null, `Pioneer ${pr}`, `Limited ${ch} (32-player)`, null, `Modern ${ch}`, null, null, null, null, null,
		`Pioneer ${pr}`, `Limited ${ch} (32-player)`, `Pauper ${ch}`, null, `Legacy ${ch} (32-player)`, null, `Standard ${ch} (32-player)`, null, `Modern ${ch}`, null, `Vintage ${ch}`, null,
		`Limited ${ch}`, null, `Pioneer ${ch}`, null, `Limited ${pr}`, null, `Modern ${ch}`, null, null, null, null, null];
	return ret;
}

// Events that don't replace other events at the same time
// Usually RCQs, but also for weird one-off events like Eternal Weekend
function getRCQs() {
	let ret = new Map();
	
	ret.set(
		new Date(2023, 3, 8).toDateString(), {7: "Limited (ONE) MOCS Showcase Open"}
	);
	
	ret.set(
		new Date(2023, 3, 9).toDateString(), {7: "Limited (ONE) MOCS Showcase Open"}
	);
	
	ret.set(
		new Date(2023, 3, 15).toDateString(), {7: "Pauper Super Qualifier"}
	);
	
	ret.set(
		new Date(2023, 3, 16).toDateString(), {7: "Vintage Super Qualifier"}
	);
	
	ret.set(
		new Date(2023, 3, 28).toDateString(), {14: "Limited (MOM) Qualifier"}
	);
	
	ret.set(
		new Date(2023, 4, 1).toDateString(), {1: "Modern Qualifier"}
	);
	
	ret.set(
		new Date(2023, 4, 7).toDateString(), {7: "Standard Qualifier"}
	);
	
	ret.set(
		new Date(2023, 4, 20).toDateString(), {1: "Limited (MOM) Qualifier"}
	);
	
	ret.set(
		new Date(2023, 4, 21).toDateString(), {7: "Limited (MOM) Qualifier"}
	);
	
	ret.set(
		new Date(2023, 4, 27).toDateString(), {5: "Pioneer Qualifier"}
	);

	ret.set(
		new Date(2023, 4, 28).toDateString(), {7: "Limited (MOM) Super Qualifier"}
	);
	
	ret.set(
		new Date(2023, 5, 2).toDateString(), {7: "Legacy Super Qualifier"}
	);
	
	ret.set(
		new Date(2023, 5, 9).toDateString(), {14: "Pioneer Super Qualifier"}
	);
	
	ret.set(
		new Date(2023, 5, 30).toDateString(), {7: "Limited (LTR) Qualifier", 15: "LTR Win-a-Box Sealed", 17: "LTR Win-a-Box Sealed",
												19: "LTR Win-a-Box Sealed", 21: "LTR Win-a-Box Sealed", 23: "LTR Win-a-Box Sealed"}
	);

	ret.set(
		new Date(2023, 6, 1).toDateString(), {3: "LTR Win-a-Box Sealed", 5: "LTR Win-a-Box Sealed", 7: "LTR Win-a-Box Sealed",
												9: "LTR Win-a-Box Sealed", 11: "LTR Win-a-Box Sealed",
												12: "minus", 13: "LTR Win-a-Box Sealed&plus",
												15: "LTR Win-a-Box Sealed", 17: "Pauper LCQ", 19: "LTR Win-a-Box Sealed",
												21: "LTR Win-a-Box Sealed", 23: "LTR Win-a-Box Sealed"}
	);

	ret.set(
		new Date(2023, 6, 2).toDateString(), {3: "LTR Win-a-Box Sealed", 5: "LTR Win-a-Box Sealed", 7: "LTR Win-a-Box Sealed",
												9: "LTR Win-a-Box Sealed", 17: "LTR Win-a-Box Sealed", 19: "LTR Win-a-Box Sealed",
												21: "LTR Win-a-Box Sealed", 23: "LTR Win-a-Box Sealed"}
	);

	ret.set(
		new Date(2023, 6, 3).toDateString(), {1: "LTR Win-a-Box Sealed", 5: "Pauper LCQ", 6: "LTR Win-a-Box Sealed",
												12: "LTR Win-a-Box Sealed", 14: "LTR Win-a-Box Sealed", 16: "LTR Win-a-Box Sealed",
												21: "LTR Win-a-Box Sealed"}
	);

	ret.set(
		new Date(2023, 6, 4).toDateString(), {1: "LTR Win-a-Box Sealed", 5: "LTR Win-a-Box Sealed", 10: "LTR Win-a-Box Sealed",
												12: "LTR Win-a-Box Sealed", 13: "Pauper LCQ", 14: "LTR Win-a-Box Sealed",
												17: "LTR Win-a-Box Sealed", 21: "LTR Win-a-Box Sealed", 23: "Pauper LCQ"}
	);

	ret.set(
		new Date(2023, 6, 5).toDateString(), {1: "LTR Win-a-Box Sealed", 5: "LTR Win-a-Box Sealed",
												15: "LTR Win-a-Box Sealed", 17: "LTR Win-a-Box Sealed"}
	);

	ret.set(
		new Date(2023, 6, 8).toDateString(), {8: "Modern Showcase Qualifier (invite-only)"}
	);

	ret.set(
		new Date(2023, 6, 9).toDateString(), {6: "Pioneer Showcase Qualifier (invite-only)"}
	);

	ret.set(
		new Date(2023, 6, 15).toDateString(), {8: "Pauper Showcase Qualifier (invite-only)"}
	);

	ret.set(
		new Date(2023, 6, 16).toDateString(), {8: "Legacy Showcase Qualifier (invite-only)"}
	);

	ret.set(
		new Date(2023, 6, 22).toDateString(), {7: "Limited (LTR) MOCS Showcase Open"}
	);
	
	ret.set(
		new Date(2023, 6, 23).toDateString(), {7: "Limited (LTR) MOCS Showcase Open"}
	);

	ret.set(
		new Date(2023, 6, 30).toDateString(), {7: "Modern Super Qualifier"}
	);

	ret.set(
		new Date(2023, 7, 5).toDateString(), {3: "Limited (LTR) Super Qualifier"}
	);

	ret.set(
		new Date(2023, 7, 6).toDateString(), {7: "Limited (LTR) Super Qualifier"}
	);
	
	addCurrentYearDSTDates(ret);
	
	return ret;
}

// Events that replace other events at the same time (Showcases replace Challenges, LCQs replace Prelims)
// Also useful for weird one-off changes to the schedule, e.g. cancelled Challenges due to nearby RCQs of the same format
function getShowcasesAndLCQs() {
	let ret = new Map();
	    	
	ret.set(
		new Date(2023, 3, 29).toDateString(), {8: "Modern Showcase Challenge"}
	);
	
	ret.set(
		new Date(2023, 3, 30).toDateString(), {6: "Pioneer Showcase Challenge"}
	);

	ret.set(
		new Date(2023, 4, 13).toDateString(), {8: "Pauper Showcase Challenge"}
	);
	
	ret.set(
		new Date(2023, 4, 14).toDateString(), {8: "Legacy Showcase Challenge"}
	);
	
	ret.set(
		new Date(2023, 5, 3).toDateString(), {8: "Modern Showcase Challenge"}
	);
	
	ret.set(
		new Date(2023, 5, 4).toDateString(), {6: "Pioneer Showcase Challenge"}
	);
	
	ret.set(
		new Date(2023, 5, 10).toDateString(), {8: "Pauper Showcase Challenge"}
	);
	
	ret.set(
		new Date(2023, 5, 11).toDateString(), {8: "Legacy Showcase Challenge"}
	);
	
	ret.set(
		new Date(2023, 5, 24).toDateString(), {8: "Modern Showcase Challenge"}
	);
	
	ret.set(
		new Date(2023, 5, 25).toDateString(), {6: "Pioneer Showcase Challenge"}
	);
	
	ret.set(
		new Date(2023, 6, 1).toDateString(), {8: "Pauper Showcase Challenge"}
	);
	
	ret.set(
		new Date(2023, 7, 12).toDateString(), {8: "Modern Showcase Challenge"}
	);
	
	ret.set(
		new Date(2023, 7, 13).toDateString(), {6: "Pioneer Showcase Challenge"}
	);
	
	ret.set(
		new Date(2023, 7, 19).toDateString(), {6: "Standard Showcase Challenge"}
	);

	ret.set(
		new Date(2023, 7, 20).toDateString(), {8: "Legacy Showcase Challenge"}
	);

	let schedule = getBaseSchedule();
	// 12am Sunday until 7am Wednesday
	for (let day = 0; day < 4; day++) {
		let lcqs = {};
		if (day === 0) {
			lcqs[8] = "Legacy Showcase Challenge";
		}
		for (let hour = 0; hour < 8 || (day < 3 && hour < 24); hour++) {
			let event = schedule[24 * day + hour];
			if (event && event.includes("Prelim") && isMocsFormat(event)) {
				lcqs[hour] = event.replace("Prelim", "LCQ");
			}
		}
		ret.set(new Date(2023, 6, 2 + day).toDateString(), lcqs);
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
				rcqs.get(date.toDateString())[2] = "DST";
			}
		}
	);
	
	return rcqs;
}