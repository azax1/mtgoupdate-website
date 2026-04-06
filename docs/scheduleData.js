function getBaseSchedule() {
	const ch = "Challenge";
	const pr = "Prelim";
    const tr = "Trial";
	const sun = [`Vintage ${ch} (32-player)`, `Phantom Sealed ${tr} (24-player)`, null, null, `Modern ${ch} (32-player)`, `plus&Commander ${tr} (16-player)&minus`,
        `Pioneer ${ch} (32-player)`, null, `Legacy ${ch} (32-player)`, `Modern ${pr}`, `Pauper ${ch} (32-player)`, null,
		`Limited ${ch} (32-player)`, `Pioneer ${ch} (32-player)`, `Standard ${ch}`, null, null, `Limited ${pr}`,
        `Modern ${ch} (32-player)`, null, null, null, null, null];
    const mon = [null, null, null, `Limited ${pr}`, `Legacy ${pr}`, `Standard ${pr}`,
        null, `Modern ${ch}`, `Commander ${tr} (16-player)`, `Limited ${pr}`, null, `Vintage ${pr}`,
		null, `Standard ${ch}`, null, `Modern ${pr}`, `Pioneer ${ch} (32-player)`, `Vintage ${pr}`,
        `Limited ${pr}`, null, null, `Modern ${pr}`, null, null];
    const tues = [`Limited ${pr}`, null, null, `Modern ${pr}`, null, null,
        null, null, `Phantom Sealed ${tr} (24-player)`, `Premodern ${ch} (32-player)`, `Standard ${ch}`, null,
		null, `Modern ${ch}`, null, null, `Phantom Sealed ${tr} (24-player)`, `Modern ${pr}`,
        `Standard ${pr}`, `Vintage ${pr}`, null, null, null, null];
    const wed = [`Limited ${pr}`, null, `Modern ${pr}`, `Legacy ${pr}`, null, null,
        null, `Limited ${pr}`, `Standard ${pr}`, `Modern ${ch}`, null, `Limited ${pr}`,
		`Standard ${pr}`, null, `Legacy ${ch} (32-player)`, null, `Phantom Sealed ${tr} (24-player)`, `Standard ${ch} (32-player)`,
        null, null, null, `Limited ${pr}`, null, null];
    const thur = [`Modern ${pr}`, null, null, null, `Vintage ${pr}`, null,
        `Modern ${ch}`, `Limited ${pr}`, `Vintage ${ch} (32-player)`, `Phantom Sealed ${tr} (24-player)`, `Premodern ${ch} (32-player)`, null,
		`Pauper ${ch} (32-player)`, `Modern ${pr}`, `Pioneer ${ch} (32-player)`, `Legacy ${pr}`, null, `Standard ${ch} (32-player)`,
        null, `Modern ${pr}`, null, null, null, null];
    const fri = [`Vintage ${pr}`, null, `Limited ${pr}`, null, `Modern ${pr}`, `Pioneer ${ch} (32-player)`,
        `Pauper ${ch} (32-player)`, `Legacy ${pr}`, `Modern ${ch}`, `Limited ${pr}`, `Standard ${ch}`, null,
		`Commander ${tr} (16-player)`, `Premodern ${ch} (32-player)`, `Pioneer ${ch} (32-player)`, `Vintage ${ch} (32-player)`, `Phantom Sealed ${tr} (24-player)`, `Legacy ${ch} (32-player)`,
        `Modern ${ch} (32-player)`, `Standard ${ch} (32-player)`, null, null, null, `Modern ${ch} (32-player)`];
    const sat = [null, `Phantom Sealed ${tr} (24-player)`, `Pauper ${ch} (32-player)`, null, `Legacy ${ch} (32-player)`, null,
        `Standard ${ch} (32-player)`, null, `plus&Modern ${ch}&minus`, `Commander ${tr} (16-player)`, `Vintage ${ch} (32-player)`, null,
		`Limited ${ch} (32-player)`, null, `Pioneer ${ch} (32-player)`, `plus&Premodern ${ch} (32-player)&minus`, `Limited ${pr}`, null,
        `Modern ${ch} (32-player)`, null, `Legacy ${ch} (32-player)`, null, null, null];
	return sun.concat(mon).concat(tues).concat(wed).concat(thur).concat(fri).concat(sat);
}

function getRCQData() {
    return [
            [3, 28, {8: "Modern Showcase Qualifier (invite-only)"}],
            [3, 29, {8: "Standard Showcase Qualifier (invite-only)"}],
            [4, 4, {8: "Vintage Showcase Qualifier (invite-only)"}],
            [4, 5, {8: "Legacy Showcase Qualifier (invite-only)"}],
            [4, 11, {7: "Limited (ECL) MOCS Showcase Open"}],
            [4, 12, {7: "Limited (ECL) MOCS Showcase Open"}],

            [4, 18, {7: "Legacy Qualifier"}],
            [4, 19, {7: "Pioneer Qualifier"}],

            [5, 1, {14: "Limited (SOS) Qualifier"}],
            [5, 2, {1: "Limited (SOS) Qualifier"}],
            [5, 3, {7: "Standard Super Qualifier"}],
            [5, 15, {14: "Modern Qualifier"}],
            [5, 16, {1: "Modern Super Qualifier"}],
            [5, 17, {7: "Pauper Qualifier"}],
            [5, 25, {7: "Limited (SOS) Super Qualifier"}],
            [5, 31, {7: "Legacy Super Qualifier"}],

            [6, 6, {7: "Limited (SOS) Super Qualifier"}],
            [6, 7, {7: "Modern Super Qualifier"}],
            [6, 21, {7: "Vintage Qualifier"}],
            [6, 27, {7: "Pauper Super Qualifier"}],
            [6, 28, {7: "Standard Super Qualifier"}],

            [7, 3, {7: "Limited (MSH) Super Qualifier"}],
            [7, 16, {7: "Limited (MSH) Super Qualifier"}],
            [7, 17, {14: "Limited (MSH) Qualifier"}],
            [7, 18, {7: "Limited (MSH) Qualifier"}],
            [7, 19, {7: "Modern Super Qualifier"}],

            [7, 25, {8: "Modern Showcase Qualifier (invite-only)"}],
            [7, 26, {8: "Pauper Showcase Qualifier (invite-only)"}],
            [8, 1, {6: "Standard Showcase Qualifier (invite-only)"}],
            [8, 2, {8: "Legacy Showcase Qualifier (invite-only)"}],
            [8, 8, {7: "Limited (MSH) MOCS Showcase Open"}],
            [8, 9, {7: "Limited (MSH) MOCS Showcase Open"}]
    ].map(supplyYearAndDecrementMonth);
}

function getShowcaseData() {
    return [
        [4, 25, {8: "Legacy Showcase Challenge"}],
        [4, 26, {7: "Standard Showcase Challenge"}],

        [5, 9, {8: "Modern Showcase Challenge&plus&minus"}],
        [5, 10, {8: "Pauper Showcase Challenge"}],
        [5, 23, {6: "Standard Showcase Challenge"}],
        [5, 24, {8: "Legacy Showcase Challenge"}],

        [6, 13, {8: "Modern Showcase Challenge&plus&minus"}],
        [6, 14, {8: "Pauper Showcase Challenge"}],

        [7, 4, {8: "Legacy Showcase Challenge"}],
        [7, 5, {8: "Pauper Showcase Challenge"}],
        [7, 11, {6: "Standard Showcase Challenge"}],
        [7, 12, {8: "Modern Showcase Challenge&plus&minus"}],
    ].map(supplyYearAndDecrementMonth);
}

function getHackishLCQCorrections() {
    return [
        // [3, 22, 11, "Modern"],
    ].map(supplyYearAndDecrementMonth);
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
    return supplyYearAndDecrementMonth([7, 19]);
}
