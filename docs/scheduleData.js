function getBaseSchedule() {
	const ch = "Challenge";
	const pr = "Prelim";
    const tr = "Trial";
	const sun = [`Vintage ${ch} (32-player)`, `Phantom Sealed ${tr} (24-player)`, null, null, `Modern ${ch}`, `plus&Commander ${tr} (16-player)&minus`,
        `Pioneer ${ch} (32-player)`, null, `Legacy ${ch} (32-player)`, `Modern ${pr}`, `Pauper ${ch} (32-player)`, null,
		`Limited ${ch} (32-player)`, `Pioneer ${ch} (32-player)`, `Standard ${ch} (32-player)`, null, null, `Limited ${pr}`,
        `Modern ${ch}`, null, null, null, null, null];
    const mon = [null, null, null, `Limited ${pr}`, `Legacy ${pr}`, `Standard ${pr}`,
        null, `Modern ${ch} (96-player)`, `Commander ${tr} (16-player)`, `Limited ${pr}`, null, `Pauper ${pr}`,
		null, `Standard ${ch} (32-player)`, null, `Modern ${pr}`, `Pioneer ${ch} (32-player)`, `Pauper ${pr}`,
        `Limited ${pr}`, null, null, `Modern ${pr}`, null, null];
    const tues = [`Limited ${pr}`, null, null, `Modern ${pr}`, null, null,
        null, null, `Phantom Sealed ${tr} (24-player)`, `Premodern ${ch} (32-player)`, `Standard ${ch} (32-player)`, null,
		null, `Modern ${ch}`, null, null, `Phantom Sealed ${tr} (24-player)`, `Modern ${ch} (32-player)`,
        `Standard ${pr}`, `Pauper ${pr}`, null, null, null, null];
    const wed = [`Limited ${pr}`, null, `Modern ${pr}`, `Legacy ${pr}`, null, null,
        null, `Limited ${pr}`, `Standard ${pr}`, `Modern ${ch} (96-player)`, null, `Limited ${pr}`,
		`Standard ${pr}`, null, `Legacy ${ch} (32-player)`, null, `Phantom Sealed ${tr} (24-player)`, `Standard ${ch} (32-player)`,
        null, null, null, `Limited ${pr}`, null, null];
    const thur = [`Modern ${pr}`, null, null, null, `Pauper ${pr}`, null,
        `Modern ${ch}`, `Limited ${pr}`, `Vintage ${ch} (32-player)`, `Phantom Sealed ${tr} (24-player)`, `Premodern ${ch} (32-player)`, null,
		`Pauper ${ch} (32-player)`, `Modern ${pr}`, `Pioneer ${ch} (32-player)`, `Legacy ${pr}`, null, `Standard ${ch} (32-player)`,
        null, `Modern ${pr}`, null, null, null, null];
    const fri = [`Pauper ${pr}`, null, `Limited ${pr}`, null, `Modern ${pr}`, `Pioneer ${ch} (32-player)`,
        `Pauper ${ch} (32-player)`, `Legacy ${pr}`, `Modern ${ch}`, `Limited ${pr}`, null, `Standard ${ch} (32-player)`,
		`Commander ${tr} (16-player)`, `Premodern ${ch} (32-player)`, `Pioneer ${ch} (32-player)`, `Vintage ${ch} (32-player)`, `Phantom Sealed ${tr} (24-player)`, `Legacy ${ch} (32-player)`,
        `Modern ${ch}`, `Standard ${ch} (32-player)`, null, null, null, `Modern ${ch} (32-player)`];
    const sat = [null, `Phantom Sealed ${tr} (24-player)`, `Pauper ${ch} (32-player)`, null, `Legacy ${ch} (32-player)`, null,
        `Standard ${ch} (32-player)`, null, `plus&Modern ${ch}&minus`, `Commander ${tr} (16-player)`, `Vintage ${ch} (32-player)`, null,
		`Limited ${ch} (32-player)`, null, `Pioneer ${ch} (32-player)`, `plus&Premodern ${ch} (32-player)&minus`, `Limited ${pr}`, null,
        `Modern ${ch}`, null, `Legacy ${ch} (32-player)`, null, null, null];
	return sun.concat(mon).concat(tues).concat(wed).concat(thur).concat(fri).concat(sat);
}

function getRCQData() {
    return [
            [7, 25, {8: "Modern Showcase Qualifier (invite-only)"}],
            [7, 26, {8: "Pauper Showcase Qualifier (invite-only)"}],
            [8, 1, {6: "Standard Showcase Qualifier (invite-only)"}],
            [8, 2, {8: "Legacy Showcase Qualifier (invite-only)"}],
            [8, 8, {7: "Limited (MSH) MOCS Showcase Open"}],
            [8, 9, {7: "Limited (MSH) MOCS Showcase Open"}],

            [8, 15, {7: "Modern Super Qualifier"}],
            
            [9, 5, {14: "Limited (MSH) Qualifier"}],
            [9, 6, {7: "Pioneer Super Qualifier"}],
            [9, 7, {7: "Limited (MSH) Super Qualifier"}],
            [9, 13, {0: "Pioneer Qualifier"}],
            [9, 19, {7: "Modern Qualifier"}],
            [9, 20, {7: "Pauper Super Qualifier"}],
            [9, 27, {7: "Vintage Qualifier"}],

            [10, 3, {7: "Modern Super Qualifier"}],
            [10, 4, {7: "Limited (FRA) Super Qualifier"}],
            [10, 11, {7: "Limited (FRA) Qualifier"}],
            [10, 16, {7: "Limited (RC) Super Qualifier"}],
            [10, 18, {0: "Limited (FRA) Qualifier"}],
            [10, 24, {1: "Limited (FRA) Super Qualifier"}],
            [10, 30, {7: "Pioneer Super Qualifier"}],

            [11, 8, {7: "Legacy Super Qualifier"}],
            [11, 14, {1: "Standard Qualifier"}],
            [11, 15, {7: "Standard Super Qualifier"}],
            [11, 26, {7: "Modern Qualifier"}],
            [11, 27, {7: "Limited (TRK) Super Qualifier"}],

            [12, 5, {8: "Modern Showcase Qualifier (invite-only)"}],
            [12, 6, {6: "Pioneer Showcase Qualifier (invite-only)"}],
            [12, 12, {6: "Standard Showcase Qualifier (invite-only)"}],
            [12, 13, {8: "Legacy Showcase Qualifier (invite-only)"}],
            [12, 19, {7: "Limited (TRK) MOCS Showcase Open"}],
            [12, 20, {7: "Limited (TRK) MOCS Showcase Open"}],

    ].map(supplyYearAndDecrementMonth);
}

function getShowcaseData() {
    return [
        [8, 22, {6: "Standard Showcase Challenge"}],
        [8, 23, {8: "Legacy Showcase Challenge"}],
        [8, 29, {8: "Modern Showcase Challenge&plus&minus"}],
        [8, 30, {6: "Pioneer Showcase Challenge"}],

        [10, 17, {8: "Modern Showcase Challenge&plus&minus"}],
        [10, 25, {8: "Legacy Showcase Challenge"}],
        [10, 31, {6: "Standard Showcase Challenge"}],
        [11, 1, {6: "Pioneer Showcase Challenge"}],

        [11, 21, {6: "Standard Showcase Challenge"}],
        [11, 22, {8: "Legacy Showcase Challenge"}],
        [11, 28, {8: "Modern Showcase Challenge&plus&minus"}],
        [11, 29, {8: "Pioneer Showcase Challenge"}],
    ].map(supplyYearAndDecrementMonth);
}

function getHackishLCQCorrections() {
    const rotating = ["Vintage", "Pauper", "Pioneer"].find(isMocsFormat) ?? "Vintage";
	const [_, lcqMonth, lcqDay] = getLCQStartDate();
    return [
        [lcqDay, 11, "Modern"],
        [lcqDay, 19, "Standard"],

        [lcqDay + 1, 0, "Modern"],
        [lcqDay + 1, 4, "Legacy"],
        [lcqDay + 1, 8, "Standard"],
        [lcqDay + 1, 12, rotating],
        [lcqDay + 1, 16, "Modern"],
        [lcqDay + 1, 20, "Legacy"],

        [lcqDay + 2, 0, "Standard"],
        [lcqDay + 2, 4, rotating],
        [lcqDay + 2, 8, "Modern"],
        [lcqDay + 2, 12, "Legacy"],
        [lcqDay + 2, 16, rotating],
        [lcqDay + 2, 20, "Standard"],

        [lcqDay + 3, 0, rotating],
        [lcqDay + 3, 4, "Legacy"]
    ].map(data => [ lcqMonth + 1, ...data.slice(0) ]).map(supplyYearAndDecrementMonth); // a beautiful game
}

function getCubeEvents() {
    return [
            [
                [ [12, 23], [12, 24], [12, 25], [12, 26], [12, 27], [12, 28], [12, 29], [12, 30], [12, 31],
                    [1, 1], [1, 2], [1, 3], [1, 4], [1, 5], [1, 6] ],
                [ 6.5, 10.5, 14.5 ]
            ],
            [
                [ [1, 7], [1, 8], [1, 9], [1, 10], [1, 11], [1, 12], [1, 13] ],
                [ 10.5, 14.5 ]
            ]
        ].map(([dates, times]) => [dates.map(supplyYearAndDecrementMonth), times]);
}

function getCubeEndTimestamp() {
  return new Date(Date.UTC(2026, 0, 13, 22, 30)).valueOf();
}

function getVegasQualifiers() {
    return [
        // [
        //     [ [ 8, 3 ] ],
        //     [ 9.5, 13.5 ]
        // ],
        // [
        //     [ [ 8, 17 ] ],
        //     [ 9.5 ]
        // ],
        // [
        //     [ [ 8, 24 ] ],
        //     [ 9.5 ]
        // ],
        // [
        //     [ [ 8, 31 ] ],
        //     [ 9.5 ]
        // ],
        // [
        //     [ [ 9, 7 ] ],
        //     [ 9.5 ]
        // ],
        // [
        //     [ [ 9, 21 ] ],
        //     [ 9.5 ]
        // ],
        // [
        //     [ [ 9, 28 ] ],
        //     [ 9.5 ]
        // ]
    ].map(([dates, times]) => [dates.map(supplyYearAndDecrementMonth), times]);
}

function getInferredYear(today, proposedMonth) {
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth() + 1;
    if (proposedMonth - currentMonth > 5) {
        return currentYear - 1;
    } else if (currentMonth - proposedMonth > 5) {
        return currentYear + 1;
    }
    return currentYear;
}

function supplyYearAndDecrementMonth(data) {
    return [getInferredYear(new Date(), data[0]), data[0] - 1, ...data.slice(1)];
}

function getCurrentYearDSTDates() {
	let year = new Date().getFullYear();
	let march = new Date(year, 2, 8 + ((7 - new Date(year, 2, 1).getDay()) % 7));
	let nov = new Date(year, 10, 1 + ((7 - new Date(year, 10, 1).getDay()) % 7));
    return [march, nov];
}

function getLCQStartDate() {
    return supplyYearAndDecrementMonth([11, 29]);
}
