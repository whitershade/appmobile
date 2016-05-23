"use strict";

$(function () {
  //SVG Fallback
  if (!Modernizr.svg) {
    $("img[src*='svg']").attr("src", function () {
      return $(this).attr("src").replace(".svg", ".png");
    });
  }

  //E-mail Ajax Send
  //Documentation & Example: https://github.com/agragregra/uniMail
  $("form").submit(function () {
    //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize()
    }).done(function () {
      alert("Thank you!");
      setTimeout(function () {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });

  //Chrome Smooth Scroll
  try {
    $.browserSelector();
    if ($("html").hasClass("chrome")) {
      $.smoothScroll();
    }
  } catch (err) {}

  //Нельзя дергать картинки
  $("img, a").on("dragstart", function (event) {
    event.preventDefault();
  });
});
$(document).ready(function () {});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLEVBQUUsWUFBWTs7QUFFWixNQUFJLENBQUMsVUFBVSxHQUFmLEVBQW9CO0FBQ2xCLE1BQUUsaUJBQUYsRUFBcUIsSUFBckIsQ0FBMEIsS0FBMUIsRUFBaUMsWUFBWTtBQUMzQyxhQUFPLEVBQUUsSUFBRixFQUFRLElBQVIsQ0FBYSxLQUFiLEVBQW9CLE9BQXBCLENBQTRCLE1BQTVCLEVBQW9DLE1BQXBDLENBQVA7QUFDRCxLQUZEO0FBR0Q7Ozs7QUFJRCxJQUFFLE1BQUYsRUFBVSxNQUFWLENBQWlCLFlBQVk7O0FBQzNCLFFBQUksS0FBSyxFQUFFLElBQUYsQ0FBVDtBQUNBLE1BQUUsSUFBRixDQUFPO0FBQ0wsWUFBTSxNQUREO0FBRUwsV0FBSyxVQUZBLEU7QUFHTCxZQUFNLEdBQUcsU0FBSDtBQUhELEtBQVAsRUFJRyxJQUpILENBSVEsWUFBWTtBQUNsQixZQUFNLFlBQU47QUFDQSxpQkFBVyxZQUFZOztBQUVyQixXQUFHLE9BQUgsQ0FBVyxPQUFYO0FBQ0QsT0FIRCxFQUdHLElBSEg7QUFJRCxLQVZEO0FBV0EsV0FBTyxLQUFQO0FBQ0QsR0FkRDs7O0FBaUJBLE1BQUk7QUFDRixNQUFFLGVBQUY7QUFDQSxRQUFJLEVBQUUsTUFBRixFQUFVLFFBQVYsQ0FBbUIsUUFBbkIsQ0FBSixFQUFrQztBQUNoQyxRQUFFLFlBQUY7QUFDRDtBQUNGLEdBTEQsQ0FLRSxPQUFPLEdBQVAsRUFBWSxDQUViOzs7QUFHRCxJQUFFLFFBQUYsRUFBWSxFQUFaLENBQWUsV0FBZixFQUE0QixVQUFVLEtBQVYsRUFBaUI7QUFDM0MsVUFBTSxjQUFOO0FBQ0QsR0FGRDtBQUdELENBeENEO0FBeUNBLEVBQUUsUUFBRixFQUFZLEtBQVosQ0FBa0IsWUFBWSxDQUFFLENBQWhDIiwiZmlsZSI6ImNvbW1vbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZnVuY3Rpb24gKCkge1xuICAvL1NWRyBGYWxsYmFja1xuICBpZiAoIU1vZGVybml6ci5zdmcpIHtcbiAgICAkKFwiaW1nW3NyYyo9J3N2ZyddXCIpLmF0dHIoXCJzcmNcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuICQodGhpcykuYXR0cihcInNyY1wiKS5yZXBsYWNlKFwiLnN2Z1wiLCBcIi5wbmdcIik7XG4gICAgfSk7XG4gIH1cblxuICAvL0UtbWFpbCBBamF4IFNlbmRcbiAgLy9Eb2N1bWVudGF0aW9uICYgRXhhbXBsZTogaHR0cHM6Ly9naXRodWIuY29tL2FncmFncmVncmEvdW5pTWFpbFxuICAkKFwiZm9ybVwiKS5zdWJtaXQoZnVuY3Rpb24gKCkgeyAvL0NoYW5nZVxuICAgIHZhciB0aCA9ICQodGhpcyk7XG4gICAgJC5hamF4KHtcbiAgICAgIHR5cGU6IFwiUE9TVFwiLFxuICAgICAgdXJsOiBcIm1haWwucGhwXCIsIC8vQ2hhbmdlXG4gICAgICBkYXRhOiB0aC5zZXJpYWxpemUoKVxuICAgIH0pLmRvbmUoZnVuY3Rpb24gKCkge1xuICAgICAgYWxlcnQoXCJUaGFuayB5b3UhXCIpO1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIERvbmUgRnVuY3Rpb25zXG4gICAgICAgIHRoLnRyaWdnZXIoXCJyZXNldFwiKTtcbiAgICAgIH0sIDEwMDApO1xuICAgIH0pO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSk7XG5cbiAgLy9DaHJvbWUgU21vb3RoIFNjcm9sbFxuICB0cnkge1xuICAgICQuYnJvd3NlclNlbGVjdG9yKCk7XG4gICAgaWYgKCQoXCJodG1sXCIpLmhhc0NsYXNzKFwiY2hyb21lXCIpKSB7XG4gICAgICAkLnNtb290aFNjcm9sbCgpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG5cbiAgfVxuXG4gIC8v0J3QtdC70YzQt9GPINC00LXRgNCz0LDRgtGMINC60LDRgNGC0LjQvdC60LhcbiAgJChcImltZywgYVwiKS5vbihcImRyYWdzdGFydFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9KTtcbn0pO1xuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge30pOyJdfQ==
