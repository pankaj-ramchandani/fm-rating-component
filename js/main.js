$(function () {
  let rating = 0;

  function fetchRating() {
    $(".ratings")
      .find("div")
      .each(function () {
        if (rating == $(this).text()) {
          $("#r_" + rating).css({
            "background-color": "hsl(217, 12%, 63%)",
            color: "white",
          });
        }
      });
  }

  function resetRating() {
    $("#r_" + rating).css({
      "background-color": "hsl(213, 19%, 18%)",
      color: "hsl(217, 12%, 63%)",
    });
  }

  fetchRating();

  $('div[id^="r_"]').click(function () {
    resetRating();
    rating = parseInt($(this).text());
    fetchRating();
  });

  $('div[id^="r_"]').hover(
    function () {
      $(this).css({
        "background-color": "hsl(25, 97%, 53%)",
        color: "white",
      });
    },
    function () {
      if (parseInt($(this).text()) != rating) {
        $(this).css({
          "background-color": "hsl(213, 19%, 18%)",
          color: "hsl(217, 12%, 63%)",
        });
      } else {
        $(this).css({
          "background-color": "hsl(217, 12%, 63%)",
          color: "white",
        });
      }
    }
  );

  $(".btn-submit").click(function () {
    $(".rating-view").hide();
    if (rating == 0) {
      $(".rating-results").hide();
    } else {
      $("#results").text(`You selected ${rating} out of 5`);
    }
    $(".submit-view ").show();
  });
});
