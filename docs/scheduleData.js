function getBaseSchedule() {
	const ch = "Challenge";
	const pr = "Prelim";
    const tr = "Trial";
	const sun = [`Vintage ${ch} (32-player)`, `Phantom Sealed ${tr} (24-player)`, null, null, `Modern ${ch} (32-player)`, `plus&Commander ${tr} (16-player)&minus`,
        `Pioneer ${ch} (32-player)`, null, `Legacy ${ch} (32-player)`, `Modern ${pr}`, `Pauper ${ch} (32-player)`, null,
		`Limited ${ch} (32-player)`, `Pioneer ${ch} (32-player)`, `Standard ${ch}`, null, `Commander ${tr} (16-player)`, `Limited ${pr}`,
        `Modern ${ch} (32-player)`, null, null, null, null, null];
    const mon = [null, null, null, `Limited ${pr}`, `Legacy ${pr}`, `Standard ${pr}`,
        null, `Modern ${ch}`, `Commander ${tr} (16-player)`, `Limited ${pr}`, null, `Pioneer ${pr}`,
		null, `Standard ${ch}`, null, `Modern ${pr}`, `Pioneer ${ch} (32-player)`, null,
        `Limited ${pr}`, null, null, `Modern ${pr}`, null, null];
    const tues = [`Limited ${pr}`, null, null, `Modern ${pr}`, null, null,
        null, null, `Phantom Sealed ${tr} (24-player)`, null, `Standard ${ch}`, null,
		null, `Modern ${ch} (32-player)`, null, `Commander ${tr} (16-player)`, `Phantom Sealed ${tr} (24-player)`, `Modern ${pr}`,
        `Standard ${pr}`, `Pioneer ${pr}`, null, null, null, null];
    const wed = [`Limited ${pr}`, null, `Modern ${pr}`, `Legacy ${pr}`, null, null,
        `Commander ${tr} (16-player)`, `Limited ${pr}`, `Standard ${pr}`, `Modern ${ch}`, null, `Limited ${pr}`,
		`Standard ${pr}`, `Commander ${tr} (16-player)`, `Legacy ${ch} (32-player)`, null, `Phantom Sealed ${tr} (24-player)`, `Standard ${ch} (32-player)`,
        null, null, null, `Limited ${pr}`, null, null];
    const thur = [`Modern ${pr}`, null, null, null, `Pioneer ${pr}`, null,
        `Modern ${ch}`, `Limited ${pr}`, `Vintage ${ch} (32-player)`, `Commander ${tr} (16-player)`, null, `Standard ${pr}`,
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
            [4, 5, {8: "Vintage Showcase Qualifier (invite-only)"}],
            [4, 6, {8: "Legacy Showcase Qualifier (invite-only)"}],

            [4, 12, {8: "Modern Showcase Qualifier (invite-only)"}],
            [4, 13, {8: "Standard Showcase Qualifier (invite-only)"}],

            [4, 19, {7: "Limited (TDM) MOCS Showcase Open"}],
            [4, 20, {7: "Limited (TDM) MOCS Showcase Open"}],

            [4, 26, {7: "Standard Super Qualifier"}],
            [4, 27, {7: "Modern Madness Finals"}],
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
            [7, 5, {7: "Modern Super Qualifier"}],
            [7, 11, {7: "Standard Qualifier"}],
            [7, 13, {7: "Pauper Super Qualifier"}],
            [7, 15, {5: "Pioneer Prelim"}],
            [7, 16, {5: "Pioneer Prelim"}],
            [7, 19, {7: "Pioneer Championship Week Finals"}],
            [7, 20, {6: "Limited (FIN) Super Qualifier"}],

            [8, 8, {14: "Limited (EOE) Qualifier"}],
            [8, 15, {7: "Modern Qualifier"}],

            [8, 16, {8: "Pauper Showcase Qualifier (invite-only)"}],
            [8, 17, {8: "Legacy Showcase Qualifier (invite-only)"}],

            [8, 22, {7: "Limited (EOE) Super Qualifier"}],
            
            [8, 23, {8: "Modern Showcase Qualifier (invite-only)"}],
            [8, 24, {8: "Standard Showcase Qualifier (invite-only)"}],

            [9, 6, {7: "Limited (EOE) MOCS Showcase Open"}],
            [9, 7, {7: "Limited (EOE) MOCS Showcase Open"}],

            // begin fake events
            // [8, 30, {7: "Limited (EOE) Super Qualifier"}],
            // [8, 31, {7: "Limited (EOE) Super Qualifier"}],
            // [9, 1, {7: "Modern Super Qualifier"}],
            // [9, 21, {7: "Vintage Super Qualifier"}],
            // [9, 27, {14: "Limited (TBD) Super Qualifier"}],
            // [9, 28, {3: "Limited (TBD) Super Qualifier"}],

            // [10, 3, {7: "Standard Super Qualifier"}],
            // [10, 18, {1: "Modern Super Qualifier"}],
            // [10, 19, {7: "Standard Super Qualifier"}],
            // [10, 25, {7: "Legacy Super Qualifier"}],

            // [11, 1, {7: "Pioneer Super Qualifier"}],
            // [11, 8, {7: "Limited (TBD) Super Qualifier"}],
            // [11, 9, {7: "Pauper Super Qualifier"}],
            // [11, 11, {7: "Pauper Super Qualifier"}],
            // [11, 28, {7: "Limited (TLA) Super Qualifier"}],

            // [12, 5, {7: "Limited (TLA) Super Qualifier"}],
            // [12, 6, {8: "Modern Showcase Qualifier (invite-only)"}],
            // [12, 7, {6: "Pioneer Showcase Qualifier (invite-only)"}],
            // [12, 13, {6: "Standard Showcase Qualifier (invite-only)"}],
            // [12, 14, {8: "Legacy Showcase Qualifier (invite-only)"}],
            // [12, 20, {7: "Limited (TLA) MOCS Showcase Open"}],
            // [12, 21, {7: "Limited (TLA) MOCS Showcase Open"}],
    ].map(supplyYearAndDecrementMonth);
}

function getShowcaseData() {
    return [
        [ 4, 15, { 14: null, 15: null, 16: null, 17: null, 18: null, 19: null, 20: null, 21: null, 22: null, 23: null } ],
        [ 4, 16, { 0: null, 1: null, 2: null, 3: null, 4: null, 5: null, 6: null, 7: null, 8: null, 9: null, 10: "Modern Challenge (32-player)"} ],
        [5, 24, {8: "Modern Showcase Challenge"}],
        [5, 25, {8: "Standard Showcase Challenge"}],
        [6, 7, {8: "Pauper Showcase Challenge"}],
        [6, 8, {8: "Legacy Showcase Challenge"}],

        [6, 28, {8: "Modern Showcase Challenge"}],
        [6, 29, {8: "Standard Showcase Challenge"}],
        [7, 6, {8: "Legacy Showcase Challenge"}],
        [7, 12, {8: "Pauper Showcase Challenge"}],

        [7, 29, {10: "plus&Limited Prelim&minus", 12: "Standard Challenge"}],

        [8, 2, {8: "Pauper Showcase Challenge"}],
        [8, 3, {8: "Legacy Showcase Challenge"}],
        [8, 9, {8: "Modern Showcase Challenge"}],
        [8, 10, {8: "Legacy Challenge&Standard Showcase Challenge"}],

        [8, 19, {19: "Legacy Prelim"}],

        // [9, 13, {6: "Standard Showcase Challenge"}],
        // [9, 14, {8: "Modern Showcase Challenge"}],

        // [10, 4, {8: "Modern Showcase Challenge"}],
        // [10, 5, {8: "Legacy Showcase Challenge"}],
        // [10, 11, {8: "Standard Showcase Challenge"}],
        // [10, 12, {8: "Pioneer Showcase Challenge"}],

        // [10, 26, {8: "Legacy Showcase Challenge"}],
        // [11, 2, {8: "Pioneer Showcase Challenge"}],

        // [11, 16, {8: "Legacy Showcase Challenge"}],
        // [11, 23, {8: "Standard Showcase Challenge"}],
        // [11, 29, {8: "Modern Showcase Challenge"}],
        // [11, 30, {6: "Pioneer Showcase Challenge"}],
    ].map(supplyYearAndDecrementMonth);
}

function getHackishLCQCorrections() {
    return [
        [8, 9, 17, "Pauper LCQ"],
        [8, 10, 15, "Standard LCQ"],
        [8, 11, 8, "Pauper LCQ"],
        [8, 11, 19, "Standard LCQ"],
        [8, 12, 1, "Pauper LCQ"],
        [8, 12, 3, null],
        [8, 12, 4, "Modern LCQ"],
        [8, 12, 7, "Pauper LCQ"],
        [8, 12, 11, "Modern LCQ"],
        [8, 12, 18, null],
        [8, 13, 2, "Standard LCQ"],
        [8, 13, 8, "Standard Prelim"]
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
    return supplyYearAndDecrementMonth([8, 10]);
}
