function isPremier(event) {
  return (
    event.includes("Qualifier") ||
    event.includes("Showcase") ||
    event.includes("LCQ") ||
    event.includes("Eternal Weekend") ||
    event.includes("Single Elim") ||
    event.includes("Vegas") ||
    event.includes("Madness") ||
    event.includes("NRG") // I hate my life
  );
}

function isMocsFormat(str) {
  return (
    str.includes("Standard") ||
    str.includes("Modern") ||
    str.includes("Legacy") ||
    str.includes("Pioneer")
  );
}

function getCubeEndTimestamp() {
  return new Date(Date.UTC(2025, 6, 17, 1, 30)).valueOf();
}

function getHourMode() {
  if (localStorage.getItem("hourMode") === "24") {
    return "24";
  } else {
    return "12";
  }
}

function getPrettyTime(hour, minuteOfHour) {
  if (getHourMode() === "12") {
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
  } else {
    if (minuteOfHour === 0) {
      if (hour < 10) {
        return "0" + hour + ":00";
      } else {
        return hour + ":00";
      }
    } else {
      if (hour < 10) {
        return "0" + hour + ":" + minuteOfHour;
      } else {
        return hour + ":" + minuteOfHour;
      }
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
  // let urlDate;
  // if (url.searchParams.get("date")) {
  //   urlDate = new Date(url.searchParams.get("date"));
  // }
  // window.alert(urlDate);
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
        formatChoices.filter((format) => {
          if (format === "Cube") {
            return event.includes(format) || event.includes("Vegas");
          } else if (format === "Limited") {
            return event.includes(format) || event.includes("Sealed");
          } else if (format !== "Vintage") {
            return event.includes(format);
          } else {
            return event.includes(format) && !event.includes("Cube");
          }
        }).length > 0
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
          if (eventType === "Challenge") {
            return event.includes(eventType) && !event.includes("Showcase Challenge");
          } else if (eventType === "Qualifier") {
            return event.includes(eventType) && !event.includes("Showcase Qualifier");
          } else if (eventType === "Showcase") {
            return event.includes("Showcase Qualifier");
          } else if (eventType !== "Hide") {
            return event.includes(eventType) || (eventType === "Showcase Challenge" && event.includes("Showcase Open"));
          } else {
            return (eventTypeChoices.length === 1) && !event.includes("Single Elim");
          }
        }).length > 0
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
  return event;
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
    let cost = (arr[arr.length - 3] == "Limited") ? 45 : 30;
    let format = (cost == 45) ? "Limited " : "";
    arr[arr.length - 2] = `
                            <span class=\"tooltip\">
                            <span class=\"tooltip-text\">${tail}</span>
                            <div class=\"tooltip-content\">
                            ${format} Challenge entry fee: ${cost}0 PPs or ${cost} tix.<fbr><fbr>
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
                            ${tail} entry fee: 400 PPs or 40 tix.<fbr><fbr>
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
  } else if (tail === "Single Elim") {
    arr[arr.length - 2] = `
                            <span class=\"tooltip\">
                            <span class=\"tooltip-text\">${tail}</span>
                            <div class=\"tooltip-content\">
                            ${tail} entry fee: Limited Championship token from a Cube Feeder league.<fbr><fbr>

                            Two back-to-back single-elim Vintage Cube drafts.<fbr><fbr>
                            6 wins: Qualifier token for a Vegas qualifier.
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
                              Limited ${tail} entry fee: 400 PPs or 40 tix.<fbr><fbr>

                              4-0: 40 QPs, 800 PPs.<fbr>
                              3-1: 20 QPs, 500 PPs.<fbr>
                              2-2: 10 QPs, 250 PPs.<fbr>
                              </div>
                              </span>
                            `;
      } else {
        arr[arr.length - 1] = `
                              <span class=\"tooltip\">
                              <span class=\"tooltip-text\">${tail}</span>
                              <div class=\"tooltip-content\">
                              Constructed ${tail} entry fee: 200 PPs or 20 tix.<fbr><fbr>

                              4-0: 40 QPs, 400 PPs, 5 treasure chests.<fbr>
                              3-1: 20 QPs, 200 PPs, 4 treasure chests.<fbr>
                              2-2: 10 QPs, 100 PPs, 1 treasure chest.<fbr>
                              </div>
                              </span>
                            `;
      }
    } else if (arr[arr.length - 2] === "Vegas") {
      arr[arr.length - 1] =  `
                              <span class=\"tooltip\">
                              <span class=\"tooltip-text\">${tail}</span>
                              <div class=\"tooltip-content\">
                              Entry fee: Vegas Qualifier invitation token.<fbr><fbr>
                              Single-Elim draft. Winner qualifies for the in-person Vegas Cube event.
                              </div>
                              </span>
                            `
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
      let cost = (arr[arr.length - 2] == "Limited") ? 45 : 30;
      let format = (cost == 45) ? "Limited " : "";
      arr[arr.length - 1] = `
                            <span class=\"tooltip\">
                            <span class=\"tooltip-text\">${tail}</span>
                            <div class=\"tooltip-content\">
                            ${format} ${tail} entry fee: ${cost}0 PPs or ${cost} tix.<fbr><fbr>
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
