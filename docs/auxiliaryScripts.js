// Timestamp (ms since epoch) marking the start of the current round of
// begging. Anyone whose last prompt predates this -- which includes everyone
// who has never been prompted at all -- is due to see the popup again. Bump it
// to the current time to start a fresh round.
const DONATION_PROMPT_CUTOFF = 0;

// Visits within the current round before the popup may appear, so that nobody
// gets asked for money the moment they land on the site. The tally is scoped
// to the round rather than being lifetime, so a new round has to earn its
// welcome from newcomers and regulars alike.
const DONATION_PROMPT_MIN_VISITS = 3;

// A public client-side identifier rather than a secret. The suggested amounts
// and the fill-in-your-own field belong to the button itself, configured over
// at paypal.com/donate/buttons, so changing what's offered doesn't mean
// touching this file.
const PAYPAL_DONATE_BUTTON_ID = "X39WJG25KUL6L";
const PAYPAL_DONATE_SDK_SRC =
  "https://www.paypalobjects.com/donate/sdk/donate-sdk.js";

// Fetches PayPal's SDK on demand, rather than on every page load, since most
// visits never open the popup and the SDK is a third-party script that sets
// its own cookies. If it's blocked or fails, the container is left empty and
// the ko-fi and Patreon links below it still work.
function renderPaypalButton() {
  const script = document.createElement("script");
  script.src = PAYPAL_DONATE_SDK_SRC;
  script.charset = "UTF-8";
  script.onload = function () {
    PayPal.Donation.Button({
      env: "production",
      hosted_button_id: PAYPAL_DONATE_BUTTON_ID,
      image: {
        src: "https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif",
        title: "Donate with PayPal",
        alt: "Donate with PayPal",
      },
    }).render("#paypalDonateContainer");
  };
  document.head.appendChild(script);
}

// Counts this visit against the current round, starting the tally over if the
// round has changed since last time, and returns the resulting visit count.
function recordDonationRoundVisit() {
  const round = String(DONATION_PROMPT_CUTOFF);
  if (localStorage.getItem("donationVisitRound") !== round) {
    localStorage.setItem("donationVisitRound", round);
    localStorage.setItem("donationRoundVisits", "0");
  }
  // capped so the stored number can't run away over years of visits
  const visits = Math.min(
    Number(localStorage.getItem("donationRoundVisits")) + 1,
    DONATION_PROMPT_MIN_VISITS
  );
  localStorage.setItem("donationRoundVisits", String(visits));
  return visits;
}

function shouldPromptForDonation(roundVisits) {
  if (roundVisits < DONATION_PROMPT_MIN_VISITS) {
    return false;
  }
  // Whether we've begged yet is tracked by round rather than by comparing the
  // stored timestamp against the cutoff. Those agree whenever the cutoff is in
  // the past, but a cutoff accidentally set in the future would make every
  // timestamp we write compare as older than it, and the popup would then come
  // back on every single page load until that date arrived.
  return (
    localStorage.getItem("donationPromptedRound") !==
    String(DONATION_PROMPT_CUTOFF)
  );
}

$(function () {
  if (!shouldPromptForDonation(recordDonationRoundVisit())) {
    return;
  }
  localStorage.setItem(
    "donationPromptedRound",
    String(DONATION_PROMPT_CUTOFF)
  );
  // not read by anything above; kept because it's the one piece of this state
  // that's legible at a glance when poking at a real browser's localStorage
  localStorage.setItem("lastDonationPrompt", String(Date.now()));

  const modal = document.getElementById("donationModal");
  modal.style.display = "block";
  renderPaypalButton();

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
