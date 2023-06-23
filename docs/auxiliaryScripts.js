$(function () {
  var modal = document.getElementById("faq");
  var button = document.getElementById("info");
  var span = document.getElementsByClassName("close")[0];

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
      minDate: new Date(2023, 2, 1),
      defaultDate: new Date(),
      setDate: new Date(),
      maxDate: new Date(2023, 6, 31),
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
  $("#darkModeSlider").click(function () {
    let checkbox = $('input[type="checkbox"]');
    if ($(checkbox).prop("checked")) {
      localStorage.setItem("colorScheme", "light");
      displaySchedule(false);
    } else {
      localStorage.setItem("colorScheme", "dark");
      displaySchedule(false);
    }
  });
});

$(document).ready(function () {
  $(".chosen-select").chosen();
});
