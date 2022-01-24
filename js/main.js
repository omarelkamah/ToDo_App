/*global $, document, window*/
$(document).ready(function () {
    "use strict";

    // when enter in the keyboard
    var newTask = $(".form-todo .todo-input"); // to get the input

    $(".form-todo").on("submit", function (event) {
        event.preventDefault();
        if (newTask.val() != "") {
            $("<li>" + newTask.val() + "<i class='fas fa-check'></i>" + "<i class='fas fa-backspace'</i>"
                + "</li>").prependTo(".ul-todo-list");

            newTask.val("");
        }
    });

    // when click in the button who name click-input
    $(".form-todo .click-input").on("click", function () {
        if (newTask.val() != "") {
            $("<li>" + newTask.val() + "<i class='fas fa-check'></i>" + "<i class='fas fa-backspace'</i>"
                + "</li>").prependTo(".ul-todo-list");

            newTask.val("");
        }
    });

    // add active class to the check
    function addActiveClass(parentSelector, childSelector, className, speed) {
        parentSelector.on("click", childSelector, function () {
            $(this).addClass(className);
    
            $(this).parent("li").fadeOut(speed, function () {
                $(this).prependTo(".ul-active");
            }).fadeIn(speed);
            
        });
    }
    addActiveClass($(".ul-todo-list"), ".fa-check", "active", 400);


    // remove active class from the checked ul
    function removeActiveClass(parentSelector, childSelector, className, speed) {
        parentSelector.on("click", childSelector, function () {
            $(this).removeClass(className);
    
            $(this).parent("li").fadeOut(speed, function () {
                $(this).prependTo(".ul-todo-list");
            }).fadeIn(speed);
        });
    }

    removeActiveClass($(".ul-active"), ".fa-check", "active", 400);


    // remove items from the todo list
    function removeItems(parentSelector, childSelector) {
        parentSelector.on("click", childSelector, function () {
            $(this).parent("li").animate({
                right : "10%"
            }, 500).animate({
                left : "100%"
            }, 500, function () {
                $(this).remove();
            });
        });
    }
    removeItems($(".ul-todo-list"), ".fa-backspace");
    removeItems($(".ul-active"), ".fa-backspace");

    // play the niceScroll Plugin
    $("html").niceScroll({
        cursorborder: 0,
        cursorcolor: "#1abc9c",
        cursorwidth: "10px"
    });

});