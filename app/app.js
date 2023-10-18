import { changePageContent } from "./model.js";

function changeRoute(){
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#", "");
    // console.log(hashTag + " " + pageID);
    changePageContent(pageID);
}
function initURLListener(){
    $(window).on("hashchange", changeRoute);
    changeRoute();
}
$(document).ready(function(){
    initURLListener();
})