document.addEventListener("DOMContentLoaded", function () {
    const aboutLink = document.getElementById("about-link");

    aboutLink.addEventListener("click", function (e) {
      e.preventDefault();
      window.location.href = "#bg-image1";
    });
  });