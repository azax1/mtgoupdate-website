function getNextWeekSchedule(today, hourOffset) {
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
	let ret = monsterSched.slice(24 - hourOffset, 24 - hourOffset + 170);
	return ret;
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
				if (todayEvents[j]) {
					event = todayEvents[j];
					index = 24 * i + j;
					if (isReplacement) {
						monster[index] = event;
					} else {
						if (monster[index]) {
							monster[index] = event + "&" + monster[index];
						} else {
							monster[index] = event;
						}
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
		`Limited ${ch}`, null, `Standard ${ch}`, null, `Limited ${pr}`, null, null, null, null, null, null, null,
		`Pioneer ${pr}`, null, null, `Limited ${pr}`, null, null, null, `Modern ${pr}`, null, `Limited ${pr}`, null, `Legacy ${pr}`,
		null, null, null, `Modern ${pr}`, null, `Vintage ${pr}`, `Limited ${pr}`, `Pioneer ${pr}`, null, null, null, null,
		`Limited ${pr}`, null, null, `Modern ${pr}`, null, null, null, `Pioneer ${pr}`, null, `Limited ${pr}`, null, `Modern ${pr}`,
		null, null, null, `Pioneer ${pr}`, `Limited ${pr}`, null, null, `Legacy ${pr}`, null, null, null, null,
		`Limited ${pr}`, null, null, `Legacy ${pr}`, null, null, null, `Limited ${pr}`, null, null, null, `Pioneer ${pr}`,
		null, null, null, `Modern ${pr}`, `Limited ${pr}`, null, `Vintage ${pr}`, null, null, `Limited ${pr}`, null, null,
		`Modern ${pr}`, null, null, `Pioneer ${pr}`, null, null, null, `Limited ${pr}`, null, null, null, `Modern ${pr}`,
		`Limited ${pr}`, null, null, `Legacy ${pr}`, `Limited ${pr}`, null, null, `Modern ${pr}`, null, `Pioneer ${pr}`, null, null,
		`Legacy ${pr}`, null, `Limited ${pr}`, null, `Modern ${pr}`, null, null, `Legacy ${pr}`, null, null, `Limited ${pr}`, `Vintage ${pr}`,
		null, null, null, `Pioneer ${pr}`, `Limited ${ch} (32-player)`, null, `Modern ${ch} (32-player)`, null, null, null, null, null,
		`Pioneer ${pr}`, `Limited ${ch} (32-player)`, `Pauper ${ch}`, null, `Legacy ${ch} (32-player)`, null, `Standard ${ch}`, null, `Modern ${ch}`, null, `Vintage ${ch}`, null,
		`Limited ${ch}`, null, `Pioneer ${ch}`, null, `Limited ${pr}`, null, `Modern ${ch} (32-player)`, null, null, null, null, null];
	return ret;
}

// Events that don't replace other events at the same time
// Usually RCQs, but also for weird one-off events like Eternal Weekend
function getRCQs() {
	let ret = new Map();

	ret.set(
		new Date(2022, 11, 2).toDateString(), {7: "Limited (BRO) Super Qualifier"}
	);
	
	ret.set(
		new Date(2022, 11, 10).toDateString(), {1: "Eternal Weekend - Legacy"}
	);
	
	ret.set(
		new Date(2022, 11, 11).toDateString(), {1: "Eternal Weekend - Vintage"}
	);
	
	ret.set(
		new Date(2022, 11, 17).toDateString(), {7: "Limited (BRO) MOCS Showcase Open"}
	);
	
	ret.set(
		new Date(2022, 11, 18).toDateString(), {7: "Limited (BRO) MOCS Showcase Open"}
	);

	ret.set(
		new Date(2022, 11, 23).toDateString(), {7: "Limited (BRO) Super Qualifier"}
	);
	
	ret.set(
		new Date(2022, 11, 26).toDateString(), {7: "Modern Super Qualifier"}
	);
	
	ret.set(
		new Date(2022, 11, 27).toDateString(), {7: "Standard Super Qualifier"}
	);
	
	ret.set(
		new Date(2022, 11, 28).toDateString(), {7: "Pioneer Super Qualifier"}
	);
	
	ret.set(
		new Date(2022, 11, 29).toDateString(), {7: "Legacy Super Qualifier"}
	);
	
	ret.set(
		new Date(2022, 11, 30).toDateString(), {7: "Vintage Super Qualifier"}
	);
	
	ret.set(
		new Date(2023, 0, 1).toDateString(), {15: "Limited (BRO) Qualifier"}
	);
	
	ret.set(
		new Date(2023, 0, 21).toDateString(), {7: "Modern Super Qualifier"}
	);
	
	ret.set(
		new Date(2023, 0, 22).toDateString(), {7: "Limited (BRO) Super Qualifier"}
	);
	
	ret.set(
		new Date(2023, 0, 28).toDateString(), {7: "Pauper Qualifier"}
	);
	
	ret.set(
		new Date(2023, 0, 29).toDateString(), {7: "Vintage Super Qualifier"}
	);
	
	ret.set(
		new Date(2023, 1, 4).toDateString(), {7: "Legacy Qualifier"}
	);
	
	ret.set(
		new Date(2023, 1, 5).toDateString(), {7: "Modern Super Qualifier"}
	);
	
	ret.set(
		new Date(2023, 1, 17).toDateString(), {14: "Limited (ONE) Qualifier"}
	);
	
	ret.set(
		new Date(2023, 1, 18).toDateString(), {7: "Pioneer Super Qualifier"}
	);
	
	ret.set(
		new Date(2023, 1, 19).toDateString(), {7: "Limited (ONE) Super Qualifier"}
	);
	
	ret.set(
		new Date(2023, 1, 20).toDateString(), {7: "Limited (ONE) Qualifier"}
	);
	
	ret.set(
		new Date(2023, 2, 4).toDateString(), {7: "Limited (ONE) Super Qualifier"}
	);
	
	ret.set(
		new Date(2023, 2, 5).toDateString(), {1: "Limited (ONE) Super Qualifier", 12:"Modern Super Qualifier"}
	);
	
	ret.set(
		new Date(2023, 2, 10).toDateString(), {14: "Limited (ONE) Qualifier"}
	);
	
	ret.set(
		new Date(2023, 2, 12).toDateString(), {2: "DST"}
	);
	
	ret.set(
		new Date(2023, 2, 17).toDateString(), {7: "Limited (ONE) Super Qualifier"}
	);
	
	ret.set(
		new Date(2023, 2, 19).toDateString(), {15: "Vintage LCQ"}
	);
	
	ret.set(
		new Date(2023, 2, 21).toDateString(), {5: "Vintage LCQ", 13: "Vintage LCQ"}
	);

	return ret;
}

// Events that replace other events at the same time (Showcases replace Challenges, LCQs replace Prelims)
// Also useful for weird one-off changes to the schedule, e.g. cancelled Challenges due to nearby RCQs of the same format
function getShowcasesAndLCQs() {
	let ret = new Map();
	    	
	ret.set(
		new Date(2022, 11, 11).toDateString(), {0: null}
	);
	
	ret.set(
		new Date(2023, 0, 20).toDateString(), {16: null, 18: "Limited Prelim", 19: "Modern Prelim"}
	);
	
	ret.set(
		new Date(2023, 0, 21).toDateString(), {18: null}
	);
	
	ret.set(
		new Date(2023, 0, 23).toDateString(), {17: null}
	);
	
	ret.set(
		new Date(2023, 0, 25).toDateString(), {18: null}
	);
	
	ret.set(
		new Date(2023, 0, 7).toDateString(), {8: "Modern Showcase Challenge"}
	);
	
	ret.set(
		new Date(2023, 0, 8).toDateString(), {6: "Pioneer Showcase Challenge"}
	);
	
	ret.set(
		new Date(2023, 0, 14).toDateString(), {10: "Vintage Showcase Challenge"}
	);
	
	ret.set(
		new Date(2023, 0, 15).toDateString(), {8: "Legacy Showcase Challenge"}
	);
	
	ret.set(
		new Date(2023, 1, 11).toDateString(), {8: "Modern Showcase Challenge"}
	);
	
	ret.set(
		new Date(2023, 1, 12).toDateString(), {6: "Pioneer Showcase Challenge"}
	);
	
	ret.set(
		new Date(2023, 1, 25).toDateString(), {10: "Vintage Showcase Challenge"}
	);
	
	ret.set(
		new Date(2023, 1, 26).toDateString(), {8: "Legacy Showcase Challenge"}
	);
	
	ret.set(
		new Date(2023, 2, 11).toDateString(), {8: "Modern Showcase Challenge"}
	);
	
	ret.set(
		new Date(2023, 2, 12).toDateString(), {6: "Pioneer Showcase Challenge"}
	);
	
	ret.set(
		new Date(2023, 2, 18).toDateString(), {10: "Vintage Showcase Challenge"}
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
		ret.set(new Date(2023, 2, 19 + day).toDateString(), lcqs);
	}
	
	return ret;
}