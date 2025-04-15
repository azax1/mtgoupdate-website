function getBaseSchedule() {
	const ch = "Challenge";
	const pr = "Prelim";
    const tr = "Trial";
    const thr = "Throwdown";
	const sun = [`Vintage ${ch} (32-player)`, `Phantom Sealed ${tr} (24-player)`, null, null, `Modern ${ch} (32-player)`, `plus&Commander ${tr} (16-player)&minus`,
        `Pioneer ${ch} (32-player)`, null, `Legacy ${ch} (32-player)`, `Modern ${pr}`, `Pauper ${ch} (32-player)`, null,
		`Limited ${ch} (32-player)`, `Pioneer ${ch} (32-player)`, `Standard ${ch}`, null, `Commander ${tr} (16-player)`, `Limited ${pr}`,
        `Modern ${ch} (32-player)`, null, null, null, null, null];
    const mon = [`Pioneer ${pr}`, null, null, `Limited ${pr}`, `Legacy ${pr}`, `Standard ${pr}`,
        null, `Modern ${ch}`, `Commander ${tr} (16-player)`, `Limited ${pr}`, null, `Legacy ${pr}`,
		null, `Standard ${ch}`, `Pauper ${thr}`, `Modern ${pr}`, `Pioneer ${ch} (32-player)`, `Vintage ${pr}`,
        `Limited ${pr}`, `Pioneer ${pr}`, null, `Modern ${pr}`, null, null];
    const tues = [`Limited ${pr}`, null, null, `Modern ${pr}`, null, null,
        `Pauper ${thr}`, null, `Phantom Sealed ${tr} (24-player)`, null, `Standard ${ch}`, null,
		null, `Modern ${ch} (32-player)`, null, `Commander ${tr} (16-player)`, `Phantom Sealed ${tr} (24-player)`, `Modern ${pr}`,
        `Standard ${pr}`, `Legacy ${pr}`, null, null, null, null];
    const wed = [`Limited ${pr}`, null, `Modern ${pr}`, `Legacy ${pr}`, null, null,
        `Commander ${tr} (16-player)`, `Limited ${pr}`, `Standard ${pr}`, `Modern ${ch}`, null, `Limited ${pr}`,
		`Standard ${pr}`, `Commander ${tr} (16-player)`, `Legacy ${ch} (32-player)`, `Pauper ${thr}`, `Phantom Sealed ${tr} (24-player)`, `Standard ${ch} (32-player)`,
        null, null, null, `Limited ${pr}`, null, null];
    const thur = [`Modern ${pr}`, null, null, `Pioneer ${pr}`, null, `Standard ${pr}`,
        `Modern ${ch}`, `Limited ${pr}`, `Vintage ${ch} (32-player)`, `Commander ${tr} (16-player)`, `Pauper ${thr}`, `Standard ${pr}`,
		`Phantom Sealed ${tr} (24-player)`, `Modern ${pr}`, `Pioneer ${ch} (32-player)`, `Legacy ${pr}`, `Limited ${pr}`, `Standard ${ch} (32-player)`,
        null, `Modern ${pr}`, null, `Pioneer ${pr}`, null, null];
    const fri = [`Modern ${pr}`, null, `Limited ${pr}`, null, `Modern ${pr}`, `Pioneer ${ch} (32-player)`,
        `Pauper ${ch} (32-player)`, `Legacy ${pr}`, `Modern ${ch}`, `Limited ${pr}`, `Standard ${ch} (32-player)`, `Vintage ${pr}`,
		`Commander ${tr} (16-player)`, `Pauper ${thr}`, `Pioneer ${ch} (32-player)`, `Vintage ${ch} (32-player)`, `Limited ${ch} (32-player)`, `Legacy ${ch} (32-player)`,
        `Modern ${ch} (32-player)`, `Standard ${ch} (32-player)`, null, null, null, `Modern ${ch} (32-player)`];
    const sat = [`Pioneer ${pr}`, `Phantom Sealed ${tr} (24-player)`, `Pauper ${ch} (32-player)`, null, `Legacy ${ch} (32-player)`, null,
        `Standard ${ch} (32-player)`, null, `plus&Modern ${ch}&minus`, `Commander ${tr} (16-player)`, `Vintage ${ch} (32-player)`, null,
		`Limited ${ch} (32-player)`, null, `Pioneer ${ch}`, null, `Limited ${pr}`, null,
        `Modern ${ch} (32-player)`, null, `Legacy ${ch} (32-player)`, null, null, null];
	return sun.concat(mon).concat(tues).concat(wed).concat(thur).concat(fri).concat(sat);
}

function getRCQData() {
    return [
            [4, 5, {8: "Vintage Showcase Qualifier (invite-only)"}],
            [4, 6, {8: "Legacy Showcase Qualifier (invite-only)"}],

            [4, 12, {8: "Modern Showcase Qualifier (invite-only)"}],
            [4, 13, {8: "Standard Showcase Qualifier (invite-only)"}],

            [4, 19, {7: "Limited (TDM) MOCS Showcase Open"}],
            [4, 20, {7: "Limited (TDM) MOCS Showcase Open"}],

            [4, 26, {7: "Standard Super Qualifier"}],
            [5, 3, {1: "Limited (TDM) Super Qualifier"}],
            [5, 10, {7: "Legacy Super Qualifier"}],
            [5, 11, {7: "Limited (TDM) Super Qualifier"}],
            [5, 16, {7: "Pauper Qualifier"}],
            [5, 17, {7: "Pioneer Qualifier"}],
            [5, 18, {7: "Vintage Qualifier"}],
            [5, 23, {14: "Modern Super Qualifier"}],
            [5, 26, {7: "Standard Qualifier"}],
            [5, 31, {1: "Modern Super Qualifier"}],

            [6, 1, {7: "Limited (TDM) Super Qualifier"}],
            [6, 15, {7: "Standard Super Qualifier"}],
            [6, 20, {7: "Legacy Qualifier"}],
            [6, 21, {7: "Limited (FIN) Qualifier"}],
            [6, 22, {7: "Limited (FIN) Qualifier"}],

            [7, 4, {6: "Limited (FIN) Super Qualifier"}],
            [7, 11, {7: "Standard Qualifier"}],
            [7, 12, {7: "Pauper Super Qualifier"}],
            [7, 13, {7: "Modern Super Qualifier"}],
            [7, 20, {6: "Limited (FIN) Super Qualifier"}],

            [8, 8, {14: "Limited (EOE) Qualifier"}],
            [8, 15, {7: "Modern Qualifier"}],

            [8, 16, {8: "Pauper Showcase Qualifier (invite-only)"}],
            [8, 17, {8: "Legacy Showcase Qualifier (invite-only)"}],

            [8, 22, {7: "Limited (EOE) Super Qualifier"}],
            
            [8, 23, {8: "Modern Showcase Qualifier (invite-only)"}],
            [8, 24, {8: "Standard Showcase Qualifier (invite-only)"}],

            [9, 1, {7: "Modern Super Qualifier"}],

            [9, 6, {7: "Limited (EOE) MOCS Showcase Open"}],
            [9, 7, {7: "Limited (EOE) MOCS Showcase Open"}],
    ].map(supplyYearAndDecrementMonth);
}

function getShowcaseData() {
    return [
        [5, 24, {8: "Modern Showcase Challenge"}],
        [5, 25, {8: "Standard Showcase Challenge"}],
        [6, 7, {8: "Pauper Showcase Challenge"}],
        [6, 8, {8: "Legacy Showcase Challenge"}],

        [6, 28, {8: "Modern Showcase Challenge"}],
        [6, 29, {8: "Standard Showcase Challenge"}],
        [7, 5, {8: "Pauper Showcase Challenge"}],
        [7, 6, {8: "Legacy Showcase Challenge"}],

        [8, 2, {8: "Pauper Showcase Challenge"}],
        [8, 3, {8: "Legacy Showcase Challenge"}],
        [8, 9, {8: "Modern Showcase Challenge"}],
        [8, 10, {8: "Standard Showcase Challenge"}],
    ].map(supplyYearAndDecrementMonth);
}

function getHackishLCQCorrections() {
    return [
        // [3, 29, 15, "Standard LCQ"],
    ].map(supplyYearAndDecrementMonth);
}

function getCubeEvents() {
    return [
            [
                [ [3, 12], [3, 13], [3, 14], [3, 15], [3, 16], [3, 17], [3, 18], [3, 19], [3, 20], 
                [3, 21], [3, 22], [3, 23], [3, 24], [3, 25], [3, 26], [3, 27], [3, 28], [3, 29],
                [3, 30], [3, 31], [4, 1] ],
                [ 6.5, 10.5, 14.5, 18.5 ]
            ],
            [
                [ [4, 2] ],
                [ 6.5, 10.5 ]
            ]
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
    return supplyYearAndDecrementMonth([8, 10]);
}
