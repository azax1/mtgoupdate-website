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

$(function () {
  var modal = document.getElementById("settings");
  var button = document.getElementById("gearIcon");
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
      minDate: new Date(2023, 6, 1),
      defaultDate: new Date(),
      setDate: new Date(),
      maxDate: new Date(2023, 11, 31),
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
