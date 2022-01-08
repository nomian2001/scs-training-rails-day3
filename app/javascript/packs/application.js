// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import "bootstrap"

import "../stylesheets/application"
import "@fortawesome/fontawesome-free/css/all"


window.onload = function() {
    $('.add-btn').on("click",function() {
        $('#form_container').css("filter","blur(1rem)");
        $('#item_form').fadeTo(1000,1)
    });
    $('.add-btn').trigger("click");
    $('.btn-cancel').on("click",function() {
        $('#form_container').css("filter","");
        $('#item_form').hide();
    });
    $('.btn-cancel').trigger("click");
};


Rails.start()
Turbolinks.start()
ActiveStorage.start()
