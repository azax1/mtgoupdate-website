function getBaseSchedule() {
	const ch = "Challenge";
	const pr = "Prelim";
    const tr = "Trial";
	const sun = [`Vintage ${ch} (32-player)`, `Phantom Sealed ${tr} (24-player)`, null, null, `Modern ${ch} (32-player)`, `plus&Commander ${tr} (16-player)&minus`,
        `Pioneer ${ch} (32-player)`, null, `Legacy ${ch} (32-player)`, `Modern ${pr}`, `Pauper ${ch} (32-player)`, null,
		`Limited ${ch} (32-player)`, `Pioneer ${ch}`, `Standard ${ch}`, null, `Commander ${tr} (16-player)`, `Limited ${pr}`,
        `Modern ${ch} (32-player)`, null, null, null, null, null];
    const mon = [`Pioneer ${pr}`, null, null, `Limited ${pr}`, `Legacy ${pr}`, `Standard ${pr}`,
        null, `Modern ${ch}`, `Commander ${tr} (16-player)`, `Limited ${pr}`, null, `Legacy ${pr}`,
		null, `Standard ${ch}`, null, `Modern ${pr}`, `Pioneer ${ch} (32-player)`, `Vintage ${pr}`,
        `Limited ${pr}`, `Pioneer ${pr}`, null, `Modern ${pr}`, null, null];
    const tues = [`Limited ${pr}`, null, null, `Modern ${pr}`, null, null,
        null, null, `Phantom Sealed ${tr} (24-player)`, null, `Standard ${ch}`, `Modern ${pr}`,
		null, `Modern ${ch} (64-player)`, null, `Commander ${tr} (16-player)`, `Phantom Sealed ${tr} (24-player)`, `Modern ${pr}`,
        `Standard ${pr}`, `Legacy ${pr}`, null, null, null, null];
    const wed = [`Limited ${pr}`, null, `Modern ${pr}`, `Legacy ${pr}`, null, null,
        `Commander ${tr} (16-player)`, `Limited ${pr}`, `Standard ${pr}`, `Modern ${ch}`, null, `Limited ${pr}`,
		`Standard ${pr}`, `Commander ${tr} (16-player)`, `Legacy ${ch} (32-player)`, `Modern ${pr}`, `Phantom Sealed ${tr} (24-player)`, `Standard ${ch} (32-player)`,
        `Vintage ${pr}`, null, null, `Limited ${pr}`, null, null];
    const thur = [`Modern ${pr}`, null, null, `Pioneer ${pr}`, null, `Standard ${pr}`,
        `Modern ${ch}`, `Limited ${pr}`, `Vintage ${ch} (32-player)`, `Commander ${tr} (16-player)`, `Standard ${pr}`, `Modern ${pr}`,
		`Phantom Sealed ${tr} (24-player)`, null, `Pioneer ${ch}`, `Legacy ${pr}`, `Limited ${pr}`, `Standard ${ch} (32-player)`,
        null, `Modern ${pr}`, null, `Pioneer ${pr}`, null, null];
    const fri = [`Modern ${pr}`, null, `Limited ${pr}`, null, `Modern ${pr}`, `Pioneer ${ch} (32-player)`,
        `Pauper ${ch} (32-player)`, `Legacy ${pr}`, `Modern ${ch}`, `Limited ${pr}`, `Standard ${ch} (32-player)`, `Vintage ${pr}`,
		`Commander ${tr} (16-player)`, `Modern ${pr}`, `Pioneer ${ch} (32-player)`, `Vintage ${ch} (32-player)`, `Limited ${ch} (32-player)`, `Legacy ${ch} (32-player)`,
        `Modern ${ch} (32-player)`, `Standard ${ch} (32-player)`, null, null, null, `Modern ${ch} (32-player)`];
    const sat = [`Pioneer ${pr}`, `Phantom Sealed ${tr} (24-player)`, `Pauper ${ch} (32-player)`, null, `Legacy ${ch} (32-player)`, null,
        `Standard ${ch} (32-player)`, null, `plus&Modern ${ch}&minus`, `Commander ${tr} (16-player)`, `Vintage ${ch} (32-player)`, null,
		`Limited ${ch} (32-player)`, null, `Pioneer ${ch}`, null, `Limited ${pr}`, null,
        `Modern ${ch} (32-player)`, null, `Legacy ${ch} (32-player)`, null, null, null];
	return sun.concat(mon).concat(tues).concat(wed).concat(thur).concat(fri).concat(sat);
}

function getRCQData() {
    return [
            [11, 30, {8: "Modern Showcase Qualifier (invite-only)"}],
            [12, 1, {8: "Legacy Showcase Qualifier (invite-only)"}],
            [12, 7, {6: "Standard Showcase Qualifier (invite-only)"}],
            [12, 8, {6: "Pioneer Showcase Qualifier (invite-only)"}],
            [12, 14, {7: "Limited (DSK) MOCS Showcase Open"}],
            [12, 15, {7: "Limited (DSK) MOCS Showcase Open"}],

            [12, 20, {14: "Modern Qualifier"}],
            [12, 21, {14: "Pioneer Qualifier"}],
            [12, 22, {7: "Limited (FDN) Qualifier"}],
            [12, 26, {7: "Legacy Super Qualifier"}],
            [12, 27, {7: "Standard Super Qualifier"}],
            [12, 28, {7: "Vintage Super Qualifier"}],
            [12, 29, {7: "Limited (FDN) Super Qualifier"}],
            [12, 30, {7: "Modern Super Qualifier"}],

            [1, 4, {1: "Standard Qualifier"}],
            [1, 18, {7: "Modern Super Qualifier"}],
            [1, 19, {1: "Limited (FDN) Qualifier"}],
            [1, 20, {7: "Modern Qualifier"}],
            [1, 31, {14: "Limited (INR) Qualifier"}],
            
            [2, 8, {7: "Vintage Qualifier"}],
            [2, 14, {7: "Pioneer Qualifier"}],
            [2, 16, {7: "Limited (DFT) Super Qualifier"}],
            [2, 17, {7: "Limited (DFT) Qualifier"}],
            [2, 22, {7: "Pauper Qualifier"}],
            [2, 23, {7: "Standard Super Qualifier"}],
            [2, 28, {7: "Limited (DFT) Qualifier"}],
            
            [3, 16, {7: "Limited (DFT) Super Qualifier"}],
            [3, 17, {7: "Limited (DFT) Qualifier"}],
            [3, 21, {14: "Legacy Qualifier"}],
            [3, 23, {8: "Standard Showcase Challenge"}],

            [4, 5, {8: "Vintage Showcase Qualifier (invite-only)"}],
            [4, 6, {8: "Legacy Showcase Qualifier (invite-only)"}],

            [4, 12, {8: "Modern Showcase Qualifier (invite-only)"}],
            [4, 13, {8: "Standard Showcase Qualifier (invite-only)"}],

            [4, 19, {7: "Limited (TDM) MOCS Showcase Open"}],
            [4, 20, {7: "Limited (TDM) MOCS Showcase Open"}],

    ].map(supplyYearAndDecrementMonth);
}

function getShowcaseData() {
    return [
            [11, 27, {3: "Legacy LCQ", 6: "Pioneer LCQ", 8: "Standard LCQ"}],
            [1, 10, { 18 : null, 19 : null, 20 : null, 21 : null, 22 : null, 23 : null }],
            [1, 11, { 0 : null, 1 : null, 2 : null, 3 : null, 4 : null, 5 : null, 
                6 : null, 7 : null, 8 : null, 9 : null, 10 : null, 11 : null,
                12 : null, 13 : null, 14 : null }],
            [2, 1, {10: "Vintage Showcase Challenge"}],
            [2, 2, {8: "Legacy Showcase Challenge"}],
            [2, 9, {6: "Standard Showcase Challenge"}],
            [2, 15, {8: "Modern Showcase Challenge"}],

            [3, 1, {8: "Modern Showcase Challenge"}],
            [3, 2, {6: "Standard Showcase Challenge"}],
            [3, 8, {10: "Vintage Showcase Challenge"}],
            [3, 9, {8: "Legacy Showcase Challenge"}],

            [3, 22, {8: "Modern Showcase Challenge"}],
            [3, 29, {10: "Vintage Showcase Challenge"}],
            [3, 30, {8: "Legacy Showcase Challenge"}]
    ].map(supplyYearAndDecrementMonth);
}

function getHackishLCQCorrections() {
    return [
        [3, 29, 15, "Standard LCQ"],
        [3, 30, 15, "Vintage LCQ"],
        [3, 31, 19, "Standard LCQ"],
        [4, 1, 1, "Vintage LCQ"],
        [4, 1, 3, "Modern Prelim"],
        [4, 1, 4, "Modern LCQ"],
        [4, 1, 7, "Vintage LCQ"],
        [4, 1, 18, "Standard Prelim"],
        [4, 2, 2, "Standard LCQ"],
        [4, 2, 3, "Legacy LCQ"],
        [4, 2, 8, "Standard Prelim"],
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
    return supplyYearAndDecrementMonth([3, 30]);
}
