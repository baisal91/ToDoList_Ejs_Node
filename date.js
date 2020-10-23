
//jshint esversion:6

//module.exports.getDate same as exports.getDate
exports.getDate =  function () {
    let today = new Date();

    //To know which day it is in JS
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    return today.toLocaleDateString("en-US", options);

}


exports.getDay = function () {
    let today = new Date();

    //To know which day it is in JS
    let options = {
        weekday: "long",
        day: "numeric",
    };

    return today.toLocaleDateString("en-US", options);

}
   