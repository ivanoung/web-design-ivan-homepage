"use strict";
// ### 3.8 Clicking first page to second page
$('body').on('click', '.key-message', function (event) {
    $(".page2").show();
    $(".page1, .page3").hide();
    $("body").attr("id", "theme2");
});
