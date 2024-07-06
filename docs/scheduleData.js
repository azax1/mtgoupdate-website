function getBaseSchedule() {
	let ch = "Challenge";
	let pr = "Prelim";
	let ret = [`Vintage ${ch}`, `Limited ${pr}`, null, `Limited ${ch} (32-player)`, `Modern ${ch}`, null, `Pioneer ${ch}`, null, `Legacy ${ch}`, `Modern ${pr}`, `Pauper ${ch}`, null,
		`Limited ${ch} (32-player)`, `Pioneer ${ch}&plus&Pioneer ${ch} (32-player)&minus`, `Standard ${ch} (32-player)`, null, `Limited ${pr}`, null, `Modern ${ch}`, null, null, null, null, null,
		`Pioneer ${pr}`, null, null, `Limited ${pr}`, `Legacy ${pr}`, null, null, `Modern ${pr}`, null, `Limited ${pr}`, `Pauper ${pr}`, `Legacy ${pr}`,
		null, null, `Standard ${pr}`, `Modern ${pr}`, `Pioneer ${ch}&plus&Pioneer ${ch} (32-player)&minus`, `Vintage ${pr}`, `Limited ${pr}`, `Pioneer ${pr}`, null, `Modern ${pr}`, null, null,
		`Limited ${pr}`, null, null, `Modern ${pr}`, null, null, null, `Pioneer ${pr}`, `Pauper ${pr}`, `Limited ${pr}`, `Standard ${pr}`, `Modern ${pr}`,
		null, `Modern ${ch}&plus&Modern ${ch} (32-player)&minus`, null, `Pioneer ${pr}`, `Limited ${pr}`, `Modern ${pr}`, `Standard ${pr}`, `Legacy ${pr}`, null, null, null, null,
		`Limited ${pr}`, null, `Modern ${pr}`, `Legacy ${pr}`, null, null, `Pioneer ${pr}`, `Limited ${pr}`, null, `Modern ${pr}`, null, `Limited ${pr}`,
		`Standard ${pr}`, `Pioneer ${pr}`, `Legacy ${ch} (32-player)`, `Modern ${pr}`, `Limited ${pr}`, null, `Vintage ${pr}`, null, null, `Limited ${pr}`, null, null,
		`Modern ${pr}`, null, null, `Pioneer ${pr}`, null, null, `Modern ${ch} (32-player)`, `Limited ${pr}`, `Vintage ${ch} (32-player)`, `Pauper ${pr}`, `Standard ${pr}`, `Modern ${pr}`,
		`Limited ${pr}`, null, `Pioneer ${ch}&plus&Pioneer ${ch} (32-player)&minus`, `Legacy ${pr}`, `Limited ${pr}`, `Modern ${ch} (32-player)`, `Pauper ${pr}`, `Modern ${pr}`, null, `Pioneer ${pr}`, null, null,
		`Limited ${pr}`, null, `Limited ${pr}`, null, `Modern ${pr}`, `Pioneer ${ch} (32-player)`, `Pauper ${ch} (32-player)`, `Legacy ${pr}`, `Modern ${ch} (32-player)`, `Standard ${pr}`, `Limited ${pr}`, `Vintage ${pr}`,
		null, `Modern ${pr}`, `Pioneer ${ch}`, `Vintage ${ch} (32-player)`, `Limited ${ch} (32-player)`, `Legacy ${ch} (32-player)`, `Modern ${ch}`, `Standard ${ch} (32-player)`, null, null, null, `Modern ${ch} (32-player)`,
		`Pioneer ${pr}`, `Limited ${pr}`, `Pauper ${ch}`, `Limited ${ch} (32-player)`, `Legacy ${ch} (32-player)`, null, `Standard ${ch} (32-player)`, null, `plus&Modern ${ch}&minus`, null, `Vintage ${ch}`, null,
		`Limited ${ch} (32-player)`, null, `Pioneer ${ch}`, null, `Limited ${pr}`, null, `Modern ${ch}`, null, `Legacy ${ch} (32-player)`, null, null, null];
	return ret;
}

function getRCQData() {
    // TODO infer year data
    return [
            [2024, 2, 23, {8: "Modern Showcase Qualifier (invite-only)"}],
            [2024, 2, 24, {6: "Pioneer Showcase Qualifier (invite-only)"}],
            [2024, 2, 30, {10: "Vintage Showcase Qualifier (invite-only)"}],
            [2024, 2, 31, {8: "Legacy Showcase Qualifier (invite-only)"}],
            [2024, 3, 6, {7: "Limited (MKM) MOCS Showcase Open"}],
            [2024, 3, 7, {7: "Limited (MKM) MOCS Showcase Open"}],
            [2024, 3, 12, {14: "Limited (MKM) Qualifier"}],
            [2024, 3, 27, {7: "Limited (OTJ) Super Qualifier"}],
            [2024, 3, 28, {7: "Standard Super Qualifier"}],
            [2024, 4, 1, {5: "Modern Qualifier"}],
            [2024, 4, 4, {7: "Pioneer Super Qualifier"}],
            [2024, 4, 5, {7: "Vintage Qualifier"}],
            [2024, 4, 19, {7: "Modern Super Qualifier"}],
            [2024, 4, 17, {14: "Pioneer Super Qualifier"}],
            [2024, 4, 27, {7: "Limited (OTJ) Qualifier"}],
            [2024, 4, 31, {14: "Legacy Qualifier"}],
            [2024, 5, 1, {1: "Limited (OTJ) Qualifier"}],
            [2024, 5, 2, {1: "Legacy Qualifier"}],
            [2024, 5, 8, {7: "Pauper Super Qualifier"}],
            [2024, 5, 9, {7: "Limited (OTJ) Super Qualifier"}],
            [2024, 5, 16, {7: "Limited (MH3) Super Qualifier"}],
            [2024, 5, 21, {7: "Limited (MH3) Qualifier"}],
            [2024, 5, 29, {7: "Limited (MH3) Super Qualifier"}],
            [2024, 5, 30, {7: "Modern Super Qualifier"}],
            [2024, 6, 12, {7: "Limited (MH3) Super Qualifier"}],
            [2024, 6, 13, {8: "Modern Showcase Qualifier (invite-only)"}],
            [2024, 6, 14, {6: "Pioneer Showcase Qualifier (invite-only)", 12: "Modern Super Qualifier"}],
            [2024, 6, 20, {8: "Pauper Showcase Qualifier (invite-only)"}],
            [2024, 6, 21, {8: "Legacy Showcase Qualifier (invite-only)"}],
            [2024, 6, 27, {7: "Limited (MH3) MOCS Showcase Open"}],
            [2024, 6, 28, {7: "Limited (MH3) MOCS Showcase Open"}],
    ];
}

function getShowcaseData() {
    // TODO infer year data
    return [
            [2024, 3, 13, {8: "Modern Showcase Challenge"}],
            [2024, 3, 14, {4: "Modern Challenge", 6: "Pioneer Showcase Challenge"}],
            [2024, 3, 20, {7: "Pauper Showcase Challenge"}],
            [2024, 3, 21, {4: "Modern Challenge", 8: "Legacy Showcase Challenge"}],
            [2024, 4, 11, {8: "Modern Showcase Challenge"}],
            [2024, 4, 12, {4: "Modern Challenge", 6: "Pioneer Showcase Challenge"}],
            [2024, 4, 25, {7: "Pauper Showcase Challenge"}],
            [2024, 4, 26, {4: "Modern Challenge", 8: "Legacy Showcase Challenge"}],
            [2024, 5, 22, {8: "Modern Showcase Challenge"}],
            [2024, 5, 23, {4: "Modern Challenge", 6: "Pioneer Showcase Challenge"}],
            [2024, 6, 6, {8: "Pauper Showcase Challenge"}]
    ];
}

function getHackishLCQCorrections() {
    // TODO infer year data
    return [
        [2024, 6, 7, 4, "Modern Challenge"],
        [2024, 6, 7, 8, "Legacy Showcase Challenge"],
        [2024, 6, 7, 9, null],
        [2024, 6, 7, 11, "Modern LCQ"],
        [2024, 6, 8, 15, "Modern LCQ&plus&Pauper LCQ&minus"],
        [2024, 6, 9, 11, null],
        [2024, 6, 9, 12, "plus&Legacy LCQ&minus"],
        [2024, 6, 9, 16, null],
        [2024, 6, 9, 18, "Pauper LCQ"],
        [2024, 6, 10, 2, null],
        [2024, 6, 10, 5, "Pauper LCQ"]
    ];
}

function getCubeEvents() {
    // TODO infer year data
    return [
            [
                [ [2024, 6, 2] ],
                [ 12.5, 14.5, 16.5, 18.5, 20.5, 22.5 ]
            ],
            [
                [ [2024, 6, 3], [2024, 6, 4], [2024, 6, 5], [2024, 6, 6], [2024, 6, 7], [2024, 6, 8] ],
                [ 0.5, 2.5, 4.5, 6.5, 8.5, 10.5, 12.5, 14.5, 16.5, 18.5, 20.5, 22.5 ],
            ],
            [
                [ [2024, 6, 9] ],
                [ 0.5, 2.5, 4.5, 6.5, 8.5, 10.5, 12.5, 14.5, 16.5, 18.5 ],
            ]
        ];
}

function getCurrentYearDSTDates() {
	let year = new Date().getFullYear();
	let march = new Date(year, 2, 8 + ((7 - new Date(year, 2, 1).getDay()) % 7));
	let nov = new Date(year, 10, 1 + ((7 - new Date(year, 10, 1).getDay()) % 7));
    return [march, nov];
}
