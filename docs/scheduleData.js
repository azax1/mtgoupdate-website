function getBaseSchedule() {
	const ch = "Challenge";
	const pr = "Prelim";
    const tr = "Trial";
	const sun = [`Vintage ${ch} (32-player)`, `Phantom Sealed ${tr} (24-player)`, null, null, `Modern ${ch} (32-player)`, `plus&Commander ${tr} (16-player)&minus`,
        `Pioneer ${ch} (32-player)`, null, `Legacy ${ch} (32-player)`, `Modern ${pr}`, `Pauper ${ch} (32-player)`, null,
		`Limited ${ch} (32-player)`, `Pioneer ${ch} (32-player)`, `Standard ${ch} (32-player)`, null, null, `Limited ${pr}`,
        `Modern ${ch} (32-player)`, null, null, null, null, null];
    const mon = [null, null, null, `Limited ${pr}`, `Legacy ${pr}`, `Standard ${pr}`,
        null, `Modern ${ch}`, `Commander ${tr} (16-player)`, `Limited ${pr}`, null, `Pioneer ${pr}`,
		null, `Standard ${ch}`, null, `Modern ${pr}`, `Pioneer ${ch} (32-player)`, null,
        `Limited ${pr}`, null, null, `Modern ${pr}`, null, null];
    const tues = [`Limited ${pr}`, null, null, `Modern ${pr}`, null, null,
        null, null, `Phantom Sealed ${tr} (24-player)`, null, `Standard ${ch}`, null,
		null, `Modern ${ch}`, null, null, `Phantom Sealed ${tr} (24-player)`, `Modern ${pr}`,
        `Standard ${pr}`, `Pioneer ${pr}`, null, null, null, null];
    const wed = [`Limited ${pr}`, null, `Modern ${pr}`, `Legacy ${pr}`, null, null,
        null, `Limited ${pr}`, `Standard ${pr}`, `Modern ${ch}`, null, `Limited ${pr}`,
		`Standard ${pr}`, null, `Legacy ${ch} (32-player)`, null, `Phantom Sealed ${tr} (24-player)`, `Standard ${ch} (32-player)`,
        null, null, null, `Limited ${pr}`, null, null];
    const thur = [`Modern ${pr}`, null, null, null, `Pioneer ${pr}`, null,
        `Modern ${ch}`, `Limited ${pr}`, `Vintage ${ch} (32-player)`, `Commander ${tr} (16-player)`, null, `Pauper ${ch} (32-player)`,
		`Phantom Sealed ${tr} (24-player)`, `Modern ${pr}`, `Pioneer ${ch} (32-player)`, `Legacy ${pr}`, `Limited ${pr}`, `Standard ${ch} (32-player)`,
        null, `Modern ${pr}`, null, null, null, null];
    const fri = [`Pioneer ${pr}`, null, `Limited ${pr}`, null, `Modern ${pr}`, `Pioneer ${ch} (32-player)`,
        `Pauper ${ch} (32-player)`, `Legacy ${pr}`, `Modern ${ch}`, `Limited ${pr}`, `Standard ${ch} (32-player)`, null,
		`Commander ${tr} (16-player)`, null, `Pioneer ${ch} (32-player)`, `Vintage ${ch} (32-player)`, `Phantom Sealed ${tr} (24-player)`, `Legacy ${ch} (32-player)`,
        `Modern ${ch} (32-player)`, `Standard ${ch} (32-player)`, null, null, null, `Modern ${ch} (32-player)`];
    const sat = [null, `Phantom Sealed ${tr} (24-player)`, `Pauper ${ch} (32-player)`, null, `Legacy ${ch} (32-player)`, null,
        `Standard ${ch} (32-player)`, null, `plus&Modern ${ch}&minus`, `Commander ${tr} (16-player)`, `Vintage ${ch} (32-player)`, null,
		`Limited ${ch} (32-player)`, null, `Pioneer ${ch}`, null, `Limited ${pr}`, null,
        `Modern ${ch} (32-player)`, null, `Legacy ${ch} (32-player)`, null, null, null];
	return sun.concat(mon).concat(tues).concat(wed).concat(thur).concat(fri).concat(sat);
}

function getRCQData() {
    return [
            [12, 5, {7: "Limited (TLA) Super Qualifier"}],
            [12, 6, {8: "Modern Showcase Qualifier (invite-only)"}],
            [12, 7, {6: "Pioneer Showcase Qualifier (invite-only)"}],
            [12, 13, {6: "Standard Showcase Qualifier (invite-only)"}],
            [12, 14, {8: "Legacy Showcase Qualifier (invite-only)"}],
            [12, 21, {7: "Limited (TLA) MOCS Showcase Open"}],

            [12, 26, {7: "Modern Super Qualifier"}],
            [12, 27, {7: "Limited (TLA) MOCS Showcase Open"}],
            [12, 28, {7: "Pauper Super Qualifier"}],
            [12, 29, {7: "Standard Super Qualifier"}],
            [12, 30, {7: "Limited (TLA) Super Qualifier"}],

            [1, 2, {7: "Pioneer Super Qualifier"}],
            [1, 16, {14: "Modern Qualifier"}],
            [1, 19, {7: "Limited (TLA) Qualifier"}],
            [1, 24, {1: "Modern Super Qualifier"}],
            [1, 25, {7: "Vintage Super Qualifier"}],
            [1, 30, {14: "Limited (ECL) Super Qualifier"}],
            [1, 31, {1: "Limited (ECL) Super Qualifier"}],

            [2, 1, {7: "Standard Super Qualifier"}],
            [2, 6, {7: "Limited (ECL) Super Qualifier"}],
            [2, 16, {7: "Limited (ECL) Super Qualifier"}],
            [2, 21, {7: "Legacy Qualifier"}],
            [2, 22, {7: "Pauper Qualifier"}],

            [3, 8, {7: "Legacy Super Qualifier"}],

            [3, 28, {8: "Modern Showcase Qualifier (invite-only)"}],
            [3, 29, {8: "Standard Showcase Qualifier (invite-only)"}],
            [4, 4, {8: "Vintage Showcase Qualifier (invite-only)"}],
            [4, 5, {8: "Legacy Showcase Qualifier (invite-only)"}],
            [4, 11, {7: "Limited (TBD) MOCS Showcase Open"}],
            [4, 12, {7: "Limited (TBD) MOCS Showcase Open"}],
    ].map(supplyYearAndDecrementMonth);
}

function getShowcaseData() {
    return [
        [1, 3, {10: "Vintage Showcase Challenge"}],
        [1, 4, {8: "Legacy Showcase Challenge"}],
        [1, 11, {6: "Standard Showcase Challenge"}],

        [2, 7, {6: "Standard Showcase Challenge"}],
        [2, 8, {8: "Vintage Showcase Challenge"}],
        [2, 14, {8: "Modern Showcase Challenge"}],
        [2, 15, {7: "Legacy Showcase Challenge"}],

        [3, 1, {8: "Modern Showcase Challenge"}],
        [3, 14, {8: "Vintage Showcase Challenge"}],
        [3, 15, {8: "Legacy Showcase Challenge"}],
        [3, 21, {8: "Modern Showcase Challenge"}],
        [3, 22, {8: "Standard Showcase Challenge"}],
    ].map(supplyYearAndDecrementMonth);
}

function getHackishLCQCorrections() {
    return [
        // [11, 30, 9, "Modern LCQ"],
    ].map(supplyYearAndDecrementMonth);
}

function getCubeEvents() {
    return [
            [
                [ [7, 2], [7, 3], [7, 4], [7, 5], [7, 6], [7, 7], [7, 8],
                [7, 9], [7, 10], [7, 11], [7, 12], [7, 13], [7, 14], [7, 15], [7, 16]  ],
                [ 6.5, 10.5, 14.5, 18.5 ]
            ],
        ].map(([dates, times]) => [dates.map(supplyYearAndDecrementMonth), times]);
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
    return supplyYearAndDecrementMonth([3, 22]);
}
