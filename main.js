$("document").ready(() => {
  $(".container-img").each((i, e) => {
    $(e).on("mouseenter", () => {
      $(".container-img .icon")[i].style.display = "flex";
    });

    $(e).on("mouseleave", () => {
      $(".container-img .icon")[i].style.display = "none";
    });
  });
});
