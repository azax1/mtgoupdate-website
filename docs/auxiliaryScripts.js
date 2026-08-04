// Timestamp (ms since epoch) before which a recorded donation prompt no longer
// counts as "recently asked". Anyone whose last prompt predates this -- which
// includes everyone who has never been prompted at all -- gets the popup once,
// after which their timestamp is reset to now. Bump this to the current time
// to start a fresh round of begging.
const DONATION_PROMPT_CUTOFF = 0;

function shouldPromptForDonation() {
  const lastPrompt = localStorage.getItem("lastDonationPrompt");
  return lastPrompt === null || Number(lastPrompt) < DONATION_PROMPT_CUTOFF;
}

$(function () {
  if (!shouldPromptForDonation()) {
    return;
  }
  localStorage.setItem("lastDonationPrompt", String(Date.now()));

  const modal = document.getElementById("donationModal");
  modal.style.display = "block";

  const dismiss = function () {
    modal.style.display = "none";
  };
  document.getElementById("donationClose").onclick = dismiss;
  document.getElementById("donationDismiss").onclick = dismiss;
  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      dismiss();
    }
  });
});

$(function () {
  var modal = document.getElementById("faq");
  var button = document.getElementById("info");
  var span = document.getElementById("faqClose");

  button.onclick = function () {
    modal.style.display = "block";
  };
  span.onclick = function () {
    modal.style.display = "none";
  };
  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
});

$(function() {
  const left = document.getElementById("leftButton");
  const right = document.getElementById("rightButton");

  left.onclick = function () {
    const dp = $("#datepicker");
    const newDate = dp.datepicker("getDate");
    newDate.setDate(newDate.getDate() - 7);
    dp.datepicker("setDate", newDate);
    displaySchedule(false);
  }

  right.onclick = function () {
    const dp = $("#datepicker");
    const newDate = dp.datepicker("getDate");
    newDate.setDate(newDate.getDate() + 7);
    dp.datepicker("setDate", newDate);
    displaySchedule(false);
  }
});

$(function () {
  var modal = document.getElementById("settingsModal");
  var button = document.getElementById("settings");
  var span = document.getElementById("settingClose");

  button.onclick = function () {
    modal.style.display = "block";
  };
  span.onclick = function () {
    modal.style.display = "none";
  };
  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
});

$(function () {
  $("#datepicker")
    .datepicker({
      dateFormat: "yy-mm-dd",
      minDate: new Date(2026, 6, 1),
      defaultDate: new Date(),
      setDate: new Date(),
      maxDate: new Date(2026, 11, 31),
      onClose: function () {
        var input = $(this).datepicker("getDate");
        if (!input || !(input instanceof Date)) {
          input = new Date();
          $(this).datepicker("setDate", input);
        }
        displaySchedule();
      },
    })
    .datepicker("setDate", new Date());
});

$(function () {
  $("#formatDropdown").change(function () {
    displaySchedule();
  });
});

$(function () {
  $("#eventTypeDropdown").change(function () {
    displaySchedule();
  });
});

$(function () {
  let checkbox = $("#colorModeCheckbox");;
  checkbox.click(function () {
    if (checkbox.prop("checked")) {
      localStorage.setItem("colorScheme", "dark");
    } else {
      localStorage.setItem("colorScheme", "light");
    }
    displaySchedule(false);
  });
});

$(function () {
  let checkbox = $("#hourModeCheckbox");
  checkbox.click(function () {
    if (checkbox.prop("checked")) {
      localStorage.setItem("hourMode", "24");
    } else {
      localStorage.setItem("hourMode", "12");
    }
    displaySchedule(false);
  });
});

$(function() {
  let checkbox = $("#rotatingCalendarCheckbox");
  checkbox.click(function() {
    if (checkbox.prop("checked")) {
      localStorage.setItem("calendarStyle", "rotating");
    } else {
      localStorage.setItem("calendarStyle", "fixed");
    }
    displaySchedule(false);
  });
})

$(document).ready(function () {
  $(".chosen-select").chosen();
});
