function displaySchedule(fixSliders = true) {
  if (fixSliders) {
    let checkbox = $("#colorModeCheckbox");
    checkbox.prop("checked", getColorMode() === "dark");

    let checkbox2 = $("#hourModeCheckbox");
    checkbox2.prop("checked", getHourMode() === "24");
  }
  let today, timeZone, eventFilter;
  [today, timeZone, eventFilter] = initializePageAndParameters();
  if (
    moment.tz(timeZone).utcOffset() ===
    moment.tz("America/Los_Angeles").utcOffset()
  ) {
    document.getElementById("queryExample").href =
      "https://www.mtgoupdate.com/?timeZone=America/New_York";
  } else {
    document.getElementById("queryExample").href =
      "https://www.mtgoupdate.com/?timeZone=America/Los_Angeles";
  }

  document.getElementById("localTime").innerHTML =
    moment
      .unix(today.valueOf() / 1000)
      .tz(timeZone)
      .format("hh:mm:ss A") + ` (${timeZone})`;

  let end = new Date(Date.UTC(2023, 9, 18, 15, 30)).valueOf() / 1000;
  if (today.getTime() < end * 1000) {
    let start = new Date(Date.UTC(2023, 9, 5, 8)).valueOf() / 1000;
    let timeFormat;
    if (getHourMode() === "12") {
      timeFormat = "h:mma dddd [the] D[th]";
    } else {
      timeFormat = "HH:mm dddd [the] D[th]";
    }
    document.getElementById("banner").innerHTML = `
      <center>There are 64-player Single Elim Vintage Cube events every few hours from 
      ${moment.unix(start).tz(timeZone).format(timeFormat)} until ${moment.unix(end).tz(timeZone).format(timeFormat)}.<br>
      These are hidden to avoid clutter, but you can view them by unchecking "Hide Single Elim".</center>
      `;
  } else {
    document.getElementById("banner").innerHTML = `
      <center>
      mtgoupdate has a Patreon! <a href="https://www.patreon.com/mtgoupdate">Click here</a> to become a patron.
      </center>
      `;
  }

  let schedule = getMonsterSchedule(today);
  let heights = [-1, -1, -1, -1, -1, -1, -1]; // number of lines in each day so I can pad each textbox to be the same height
  let fieldSets = generateFieldsetsForWeek(
    schedule,
    new Date(today),
    timeZone,
    eventFilter
  ); // each day's textbox pre-padding
  let max = 0;
  for (let k = 0; k < 7; k++) {
    heights[k] = (fieldSets[k].match(/<br>/g) || []).length;
    if (heights[k] > max) {
      max = heights[k];
    }
  }
  for (let k = 0; k < 7; k++) {
    document.getElementById("day" + k).innerHTML =
      fieldSets[k].replaceAll("<fbr>", "<br>") + "<br>".repeat(max - heights[k]) + "</fieldset>";
  }

  let tooltips = document.querySelectorAll(".tooltip");
  tooltips.forEach(
    function(tooltip) {
      const tooltipContent = tooltip.querySelector(".tooltip-content");
      const tooltipText = tooltip.querySelector(".tooltip-text");
  
      tooltipText.addEventListener("mouseenter", function() {
        tooltipContent.classList.add("show"); // Show the tooltip on hover
      });
  
      tooltip.addEventListener("mouseleave", function() {
        tooltipContent.classList.remove("show"); // Hide the tooltip when the mouse leaves
      });
    });
}

function generateFieldsetsForWeek(schedule, today, timeZone, eventFilter) {
  let isDarkMode =
    document.querySelector("html").style.getPropertyValue("--bg-color") !==
    "white";

  let ret = [null, null, null, null, null, null, null];
  let schedules = getSchedulesForWeek(
    schedule,
    new Date(today),
    timeZone,
    eventFilter,
    isDarkMode
  );
  for (let i = 0; i < 7; i++) {
    let textboxColor = getTextboxColor(today, isDarkMode);
    let dayOfWeekTextColor = getDayOfWeekColor(today, isDarkMode);
    let suffix = getSuffix(today.getDate());
    ret[
      i
    ] = `<fieldset style=\"border: 1px ${textboxColor} solid; display: inline-block; min-width: 280px;\">
            <legend style=\"border: 1px ${textboxColor} solid;margin-left: 1em; border-radius: 15px; padding: 0.2em 0.8em \">
            <span style=\"color: ${dayOfWeekTextColor}\"> ${today.toLocaleDateString(
      "en-US",
      { weekday: "long" }
    )} ${today.getDate()}${suffix}</span></legend>
            ${schedules[i]}`;

    today.setDate(today.getDate() + 1);
  }
  return ret;
}

function getSchedulesForWeek(
  schedule,
  today,
  timeZone,
  eventFilter,
  isDarkMode
) {
  let startDate = new Date(today);
  startDate.setDate(startDate.getDate() - 1);
  let monthPadding = startDate.getMonth() < 9 ? "0" : "";
  let datePadding = startDate.getDate() < 10 ? "0" : "";
  let parseDate = `${startDate.getFullYear()}-${monthPadding}${
    startDate.getMonth() + 1
  }-${datePadding}${startDate.getDate()} 00:00`;
  let timestamp = moment.tz(parseDate, "America/Los_Angeles").unix();

  let schedules = {};
  for (let k = 0; k < schedule.length; k++) {
    if (k != 0) {
      timestamp += 60 * 60;
    }
    let events = schedule[k] ? schedule[k].split("&") : [null];
    for (let index = 0; index < events.length; index++) {
      let event = events[index];
      if (event) {
        if (event === "DST") {
          if (today.getMonth() < 6) {
            timestamp -= 60 * 60;
          } else {
            timestamp += 60 * 60;
          }
        } else if (event === "minus") {
          timestamp -= 30 * 60;
        } else if (event === "plus") {
          timestamp += 30 * 60;
        } else if (!eventFilter || eventFilter(event)) {
          let keyDate = moment.unix(timestamp).tz(timeZone);
          let day = parseInt(keyDate.format("DD"));
          let hour = parseInt(keyDate.format("HH"));
          let minute = parseInt(keyDate.format("mm"));

          color = getEventColor(event, isDarkMode, false, false);
          let eventString = `<font color= #COLOR>${getPrettyTime(
            hour,
            minute
          )} #EVENT</font><br>`;
          if (schedules[day] !== undefined) {
            schedules[day].push([eventString, event, color]);
          } else {
            schedules[day] = [[eventString, event, color]];
          }
        }
      }
    }
  }

  let ret = ["", "", "", "", "", "", "", "", ""];
  for (let i = 1; i < ret.length; i++) {
    let sched = schedules[today.getDate()];
    if (sched) {
      ret[i] = sched.map((x) => x[0].replace("#EVENT", addTooltip(x[1])).replace("#COLOR", x[2])).join("");
      let event = sched[0];
      if (event[0].includes("12am") || event[0].includes("00:00")) {
        ret[i - 1] += event[0]
          .replace("#EVENT", addTooltip(event[1]))
          .replace("12am", "Midnight")
          .replace("00:", "24:")
          .replace(
            "#COLOR",
            getEventColor(event[1], isDarkMode, true, i === 8)
          );
      }
    }
    today.setDate(today.getDate() + 1);
  }
  return ret.slice(1, 8);
}
