function isPremier(event) {
  return (
    event.includes("Qualifier") ||
    event.includes("Showcase") ||
    event.includes("LCQ") ||
    event.includes("Eternal Weekend")
  );
}

function isMocsFormat(str) {
  return (
    str.includes("Pioneer") ||
    str.includes("Modern") ||
    str.includes("Legacy") ||
    str.includes("Standard")
  );
}

function getPrettyTime(hour, minuteOfHour) {
  if (minuteOfHour === 0) {
    if (hour === 0) {
      return "12am";
    } else if (hour < 12) {
      return hour + "am";
    } else if (hour === 12) {
      return "Noon";
    } else if (hour < 24) {
      return hour - 12 + "pm";
    } else {
      return "Midnight";
    }
  } else {
    if (hour === 0) {
      return "12:" + minuteOfHour + "am";
    } else if (hour < 12) {
      return hour + ":" + minuteOfHour + "am";
    } else if (hour === 12) {
      return hour + ":" + minuteOfHour + "pm";
    } else if (hour < 24) {
      return hour - 12 + ":" + minuteOfHour + "pm";
    } else {
      return ""; // shouldn't happen
    }
  }
}

function getSuffix(dayOfMonth) {
  if (dayOfMonth % 20 === 1 || dayOfMonth === 31) {
    return "st";
  } else if (dayOfMonth % 20 === 2) {
    return "nd";
  } else if (dayOfMonth % 20 === 3) {
    return "rd";
  }
  return "th";
}

function initializePageAndParameters(
  formatDropdownName = "formatDropdown",
  eventTypeDropdownName = "eventTypeDropdown",
  suppliedDate = null
) {
  suppliedDate || setColorMode(getColorMode());
  let today = new Date();
  let inputDate = suppliedDate || $("#datepicker").datepicker("getDate");
  if (inputDate && inputDate instanceof Date) {
    today.setFullYear(
      inputDate.getFullYear(),
      inputDate.getMonth(),
      inputDate.getDate()
    );
  }
  let formatChoices = Array.from(
    document.getElementById(formatDropdownName).options
  )
    .filter((option) => option.selected)
    .map((option) => option.value);
  let formatSelector;
  if (formatChoices.length === 0) {
    // default; no filter
    formatSelector = null;
  } else {
    formatSelector = (event) => {
      return (
        formatChoices.filter((format) => event.includes(format)).length > 0
      );
    };
  }

  let eventTypeChoices = Array.from(
    document.getElementById(eventTypeDropdownName).options
  )
    .filter((option) => option.selected)
    .map((option) => option.value);
  let eventTypeSelector;
  if (eventTypeChoices.length === 0) {
    // default; no filter
    eventTypeSelector = null;
  } else {
    eventTypeSelector = (event) => {
      return (
        eventTypeChoices.filter((eventType) =>
        {
          if (eventType !== "WAB") {
            return event.includes(eventType);
          } else {
            return (eventTypeChoices.length === 1) && !event.includes("Win-a-Box");
          }
        })
          .length > 0
      );
    };
  }
  let eventFilter = null;
  if (formatSelector || eventTypeSelector) {
    eventFilter = (event) => {
      return (
        (!formatSelector || formatSelector(event)) &&
        (!eventTypeSelector || eventTypeSelector(event))
      );
    };
  }

  let timeZone;
  try {
    timeZone = Intl.DateTimeFormat(undefined, {
      timeZone: new URLSearchParams(window.location.search).get("timeZone"),
    }).resolvedOptions().timeZone;
  } catch (e) {
    timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  }
  return [today, timeZone, eventFilter];
}

function verbosify(event) {
  if (event.includes("Super")) {
    return "RC Super Qualifier";
  } else if (event.includes("Qualifier")) {
    return "RC Qualifier";
  } else if (event.includes("LCQ")) {
    return "MOCS LCQ";
  } else {
    return event;
  }
}

function addTooltip(event) {
  let arr = event.split(" ");
  tail = arr[arr.length - 2] + " " + arr[arr.length - 1];
  if (tail === "Showcase Challenge") {
    arr[arr.length - 2] = `
                            <span class=\"tooltip\">
                            <span class=\"tooltip-text\">${tail}</span>
                            <div class=\"tooltip-content\">
                            ${tail} entry fee: 40 QPs.<fbr><fbr>
                            Top 8 competitors qualify for the end-of-season ${arr[arr.length - 3]} Showcase Qualifier,
                            a 30-person event whose winner qualifies for a PT and a MOCS.
                            </div>
                            </span>
                          `;
    arr[arr.length - 1] = "";
  } else if (tail === "Super Qualifier") {
    let fee = 40;
    if (arr[arr.length - 3] === "(LTR)") {
      fee = 50;
    }
    arr[arr.length - 2] = `
                            <span class=\"tooltip\">
                            <span class=\"tooltip-text\">${tail}</span>
                            <div class=\"tooltip-content\">
                            ${tail} entry fee: 40 QPs or ${fee}0 PPs or ${fee} tix.<fbr><fbr>
                            Top 4 competitors each qualify for their region's RC.
                            </div>
                            </span>
                          `;
    arr[arr.length - 1] = "";
  } else if (tail === "Challenge (32-player)") {
    arr[arr.length - 2] = `
                            <span class=\"tooltip\">
                            <span class=\"tooltip-text\">${tail}</span>
                            <div class=\"tooltip-content\">
                            Challenge entry fee: 300 PPs or 30 tix.<fbr><fbr>
                            A standalone event unconnected to broader Organized Play.
                            </div>
                            </span>
                          `;
    arr[arr.length - 1] = "";
  } else if (tail === "Showcase Open") {
    arr[arr.length - 2] = `
                            <span class=\"tooltip\">
                            <span class=\"tooltip-text\">${tail}</span>
                            <div class=\"tooltip-content\">
                            ${tail} entry fee: 500 PPs or 50 tix.<fbr><fbr>
                            A Sealed tourament with draft top 8. The winner qualifies directly for the MOCS.
                            </div>
                            </span>
                          `;
    arr[arr.length - 1] = "";
  } else if (tail === "Win-a-Box Sealed") {
    arr[arr.length - 2] = `
                            <span class=\"tooltip\">
                            <span class=\"tooltip-text\">${tail}</span>
                            <div class=\"tooltip-content\">
                            ${tail} entry fee: 350 PPs or 35 tix or 20 QPs.<fbr><fbr>

                            A 4-round non-Phantom Sealed tournament.<fbr><fbr>
                            4-0: 36 LTR boosters.<fbr>
                            3-1: 6 LTR boosters.<fbr>
                            </div>
                            </span>
                          `;
    arr[arr.length - 1] = "";
  } else {
    tail = arr[arr.length - 1];
    if (tail === "Prelim") {
      if (arr[arr.length - 2] === "Limited") {
        arr[arr.length - 1] = `
                              <span class=\"tooltip\">
                              <span class=\"tooltip-text\">${tail}</span>
                              <div class=\"tooltip-content\">
                              Limited ${tail} entry fee: 350 PPs or 35 tix.<fbr><fbr>

                              A 4-round event whose primary purpose is to earn QPs to enter various Qualifier events.<fbr><fbr>
                              4-0: 40 QPs, 700 PPs.<fbr>
                              3-1: 20 QPs, 450 PPs.<fbr>
                              2-2: 10 QPs, 200 PPs.<fbr>
                              </div>
                              </span>
                            `;
      } else {
        arr[arr.length - 1] = `
                              <span class=\"tooltip\">
                              <span class=\"tooltip-text\">${tail}</span>
                              <div class=\"tooltip-content\">
                              Constructed ${tail} entry fee: 200 PPs or 20 tix.<fbr><fbr>

                              A 4-round event whose primary purpose is to earn QPs to enter various Qualifier events.<fbr><fbr>
                              4-0: 40 QPs, 400 PPs, 5 treasure chests.<fbr>
                              3-1: 20 QPs, 200 PPs, 3 treasure chests.<fbr>
                              2-2: 10 QPs, 100 PPs, 1 treasure chest.<fbr>
                              </div>
                              </span>
                            `;
      }
    } else if (tail === "Qualifier") {
      arr[arr.length - 1] = `
                            <span class=\"tooltip\">
                            <span class=\"tooltip-text\">${tail}</span>
                            <div class=\"tooltip-content\">
                            ${tail} entry fee: 40 QPs.<fbr><fbr>
                            Top 2 competitors each qualify for their region's RC.
                            </div>
                            </span>
                          `;
    } else if (tail === "Challenge") {
      arr[arr.length - 1] = `
                            <span class=\"tooltip\">
                            <span class=\"tooltip-text\">${tail}</span>
                            <div class=\"tooltip-content\">
                            ${tail} entry fee: 300 PPs or 30 tix.<fbr><fbr>
                            A standalone event unconnected to broader Organized Play.
                            </div>
                            </span>
                          `;
    } else if (tail === "LCQ") {
      arr[arr.length - 1] = `
                            <span class=\"tooltip\">
                            <span class=\"tooltip-text\">${tail}</span>
                            <div class=\"tooltip-content\">
                            ${tail} entry fee: 40 QPs AND either 300 PPs or 30 tix.<fbr><fbr>
                            The last chance to spend QPs before the season ends. 5-0 players qualify for the ${arr[arr.length - 2]}
                            Showcase Qualifier, a 30-person event whose winner qualifies for a PT and a MOCS.
                            </div>
                            </span>
                          `;
    }
  }
  return arr.join(" ").trim();
}
