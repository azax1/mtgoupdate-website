function getBaseSchedule() {
	const ch = "Challenge";
	const pr = "Prelim";
	const sun = [`Vintage ${ch} (32-player)`, `Commander ${ch} (32-player)`, null, `Limited ${ch} (32-player)`, `Modern ${ch}`, null,
        `Pioneer ${ch} (32-player)`, null, `Legacy ${ch}`, `Modern ${pr}`, `Pauper ${ch} (32-player)`, null,
		`Limited ${ch} (32-player)`, `Pioneer ${ch}`, `Standard ${ch} (32-player)`, null, `Commander ${ch} (32-player)`, `Limited ${pr}`,
        `Modern ${ch}`, null, null, null, null, null];
    const mon = [`Pioneer ${pr}`, null, null, `Limited ${pr}`, `Legacy ${pr}`, `Standard ${pr}`,
        null, `Modern ${pr}`, `Pioneer ${pr}`, `Limited ${pr}`, null, `Legacy ${pr}`,
		null, `Standard ${ch} (32-player)`, null, `Modern ${pr}`, `Pioneer ${ch}&plus&Pioneer ${ch} (32-player)&minus`, `Vintage ${pr}`,
        `Limited ${pr}`, `Pioneer ${pr}`, null, `Modern ${pr}`, null, null];
    const tues = [`Limited ${pr}`, null, null, `Modern ${pr}`, null, null,
        null, `Pioneer ${pr}`, null, `Limited ${pr}`, `Standard ${ch} (32-player)`, `Modern ${pr}`,
		null, `Modern ${ch}`, null, `Pioneer ${pr}`, `Limited ${pr}`, `Modern ${pr}`,
        `Standard ${pr}`, `Legacy ${pr}`, null, null, null, null];
    const wed = [`Limited ${pr}`, null, `Modern ${pr}`, `Legacy ${pr}`, null, null,
        `Pioneer ${pr}`, `Limited ${pr}`, `Standard ${pr}`, `Modern ${pr}`, null, `Limited ${pr}`,
		`Standard ${pr}`, `Pioneer ${pr}`, `Legacy ${ch} (32-player)`, `Modern ${pr}`, `Limited ${pr}`, `Standard ${ch} (32-player)`,
        `Vintage ${pr}`, null, null, `Limited ${pr}`, null, null];
    const thur = [`Modern ${pr}`, null, null, `Pioneer ${pr}`, null, `Standard ${pr}`,
        `Modern ${ch} (32-player)`, `Limited ${pr}`, `Vintage ${ch} (32-player)`, `Pioneer ${pr}`, `Standard ${pr}`, `Modern ${pr}`,
		`Limited ${pr}`, null, `Pioneer ${ch}`, `Legacy ${pr}`, `Limited ${pr}`, `Modern ${ch} (32-player)`,
        null, `Modern ${pr}`, null, `Pioneer ${pr}`, null, null];
    const fri = [`Modern ${pr}`, null, `Limited ${pr}`, null, `Modern ${pr}`, `Pioneer ${ch} (32-player)`,
        `Pauper ${ch} (32-player)`, `Legacy ${pr}`, `Modern ${ch} (32-player)`, `Limited ${pr}`, `Standard ${ch} (32-player)`, `Vintage ${pr}`,
		`Limited ${pr}`, `Modern ${pr}`, `Pioneer ${ch} (32-player)`, `Vintage ${ch} (32-player)`, `Limited ${ch} (32-player)`, `Legacy ${ch} (32-player)`,
        `Modern ${ch}`, `Standard ${ch} (32-player)`, null, null, null, `Modern ${ch} (32-player)`];
    const sat = [`Pioneer ${pr}`, `Commander ${ch} (32-player)`, `Pauper ${ch} (32-player)`, `Limited ${ch} (32-player)`, `Legacy ${ch} (32-player)`, null,
        `Standard ${ch} (32-player)`, null, `plus&Modern ${ch}&minus`, `Commander ${ch} (32-player)`, `Vintage ${ch} (32-player)`, null,
		`Limited ${ch} (32-player)`, null, `Pioneer ${ch}`, null, `Limited ${pr}`, null,
        `Modern ${ch}`, null, `Legacy ${ch} (32-player)`, null, null, null];
	return sun.concat(mon).concat(tues).concat(wed).concat(thur).concat(fri).concat(sat);
}

function getRCQData() {
    return [
            [6, 13, {8: "Modern Showcase Qualifier (invite-only)"}],
            [6, 14, {6: "Pioneer Showcase Qualifier (invite-only)", 12: "Modern Super Qualifier"}],
            [6, 20, {8: "Pauper Showcase Qualifier (invite-only)"}],
            [6, 21, {8: "Legacy Showcase Qualifier (invite-only)"}],
            [7, 26, {7: "Limited (MH3) Super Qualifier"}],
            [7, 27, {7: "Limited (MH3) MOCS Showcase Open"}],
            [7, 28, {7: "Limited (MH3) MOCS Showcase Open"}],
            [8, 4, {7: "Modern Super Qualifier"}],
            [8, 11, {7: "Limited (BLB) Super Qualifier"}],
            [8, 23, {14: "Limited (BLB) Super Qualifier"}],
            [8, 30, {14: "Modern Super Qualifier"}],
            [8, 31, {7: "Vintage Qualifier"}],
            [9, 1, {7: "Limited (BLB) Qualifier"}],
            [9, 2, {7: "Pioneer Qualifier"}],
            [9, 7, {1: "Limited (BLB) Qualifier"}],
            [9, 8, {7: "Modern Super Qualifier"}],
            [9, 14, {7: "Limited (BLB) Super Qualifier"}],
            [9, 15, {7: "Standard Super Qualifier"}],
            [9, 29, {7: "Pioneer Super Qualifier"}],
            [10, 5, {1: "Limited (DSK) Super Qualifier"}],
            [10, 6, {7: "Legacy Super Qualifier"}],
            [10, 12, {7: "Pauper Qualifier"}],
            [10, 13, {7: "Limited (DSK) Super Qualifier"}],
            [10, 25, {14: "Limited (DSK) Qualifier"}],
            [10, 26, {1: "Limited (DSK) Qualifier"}],
            [10, 27, {1: "Standard Qualifier"}],
            [11, 30, {8: "Modern Showcase Qualifier (invite-only)"}],
            [12, 1, {8: "Legacy Showcase Qualifier (invite-only)"}],
            [12, 7, {6: "Standard Showcase Qualifier (invite-only)"}],
            [12, 8, {6: "Pioneer Showcase Qualifier (invite-only)"}],
            [12, 14, {7: "Limited (TBD) MOCS Showcase Open"}],
            [12, 15, {7: "Limited (TBD) MOCS Showcase Open"}],
    ].map(supplyYearAndDecrementMonth);
}

function getShowcaseData() {
    return [
            [8, 17, {8: "Modern Showcase Challenge"}],
            [8, 18, {6: "Pioneer Showcase Challenge"}],
            [8, 24, {6: "Standard Showcase Challenge"}],
            [8, 25, {8: "Legacy Showcase Challenge"}],
            [9, 16, {5: null, 8: null}],
            [9, 18, {8: null, 17: null}],
            [9, 19, {5: null, 9: null}],
            [9, 23, {5: null, 8: null}],
            [9, 22, {8: "Legacy Showcase Challenge"}],
            [10, 19, {6: "Standard Showcase Challenge"}],
            [10, 20, {6: "Pioneer Showcase Challenge"}],
            [11, 2, {8: "Modern Showcase Challenge"}],
            [11, 16, {8: "Modern Showcase Challenge"}],
            [11, 17, {8: "Legacy Showcase Challenge"}],
            [11, 23, {6: "Standard Showcase Challenge"}],
            [11, 24, {6: "Pioneer Showcase Challenge"}],
    ].map(supplyYearAndDecrementMonth);
}

function getHackishLCQCorrections() {
    return [
        [11, 24, 6, "Pioneer Showcase Challenge"],
    ].map(supplyYearAndDecrementMonth);
}

function getCubeEvents() {
    return [
            [
                [ [10, 29], [10, 30], [10, 31], [11, 1],
                [11, 2], [11, 3], [11, 4], [11, 5] ],
                [ 0.5, 2.5, 4.5, 6.5, 8.5, 10.5,
                12.5, 14.5, 16.5, 18.5, 20.5, 22.5 ]
            ],
            [
                [ [11, 6] ],
                [ 0.5, 2.5 ]
            ]
        ].map(([dates, times]) => [dates.map(supplyYearAndDecrementMonth), times]);
}

function getVegasQualifiers() {
    return [
        [
            [ [ 8, 3 ] ],
            [ 9.5, 13.5 ]
        ],
        [
            [ [ 8, 17 ] ],
            [ 9.5 ]
        ],
        [
            [ [ 8, 24 ] ],
            [ 9.5 ]
        ],
        [
            [ [ 8, 31 ] ],
            [ 9.5 ]
        ],
        [
            [ [ 9, 7 ] ],
            [ 9.5 ]
        ],
        [
            [ [ 9, 21 ] ],
            [ 9.5 ]
        ],
        [
            [ [ 9, 28 ] ],
            [ 9.5 ]
        ]
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
    return supplyYearAndDecrementMonth([11, 24]);
}
