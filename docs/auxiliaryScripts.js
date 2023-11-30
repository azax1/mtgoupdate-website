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
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
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
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});

$(function () {
  $("#datepicker")
    .datepicker({
      dateFormat: "yy-mm-dd",
      minDate: new Date(2023, 10, 26),
      defaultDate: new Date(),
      setDate: new Date(),
      maxDate: new Date(2024, 3, 31),
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
      displaySchedule(false);
    } else {
      localStorage.setItem("colorScheme", "light");
      displaySchedule(false);
    }
  });
});

$(function () {
  let checkbox = $("#hourModeCheckbox");;
  checkbox.click(function () {
    if (checkbox.prop("checked")) {
      localStorage.setItem("hourMode", "24");
      displaySchedule(false);
    } else {
      localStorage.setItem("hourMode", "12");
      displaySchedule(false);
    }
  });
});

$(document).ready(function () {
  $(".chosen-select").chosen();
});
