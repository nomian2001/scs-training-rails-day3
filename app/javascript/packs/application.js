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





window.onload = function(){
    
    var items = new Array;
    var index = 1;

    $('#item_form').off('submit').on("submit",function(e) {
        e.preventDefault();
        if (!this.checkValidity()) return;
        let item = {};
        let input = $(this).serializeArray();
        for(let i = 1; i < input.length; i++ ){
            item[input[i].name] = input[i].value;
        }
        alert(Array.isArray(items))
        items.push(item);
        $('#form_container table tr:last').after(`
            <tr class="item_result">
                <td>${index}</td>
                <td>${input[1].value}</td>
                <td>${input[2].value}</td>
                <td>${input[3].value}</td>
                <td>${input[4].value}</td>
                <td>cm</td>
                <td>${input[5].value}</td>
                <td>ton </td>
                <td>${input[7].value}</td>
                <td>cm</td>
                <td>
                    <button type="button" onclick="onDelete(this)"> <i class="fas fa-trash-alt"></i></button>
                    <input type="hidden" value="${input[0].value}" name="${input[0].name}">
                    <input type="hidden" value="${input[1].value}" name="${input[1].name}">
                    <input type="hidden" value="${input[2].value}" name="${input[2].name}">
                    <input type="hidden" value="${input[3].value}" name="${input[3].name}">
                    <input type="hidden" value="${input[4].value}" name="${input[4].name}">
                    <input type="hidden" value="${input[5].value}" name="${input[5].name}">
                    <input type="hidden" value="${input[6].value}" name="${input[6].name}">
                    <input type="hidden" value="${input[7].value}" name="${input[7].name}">
                </td>
            </tr>
        `)

        $(this).get(0).reset()
        index++;
    });

    $('#form_container').off('submit').on('submit',function(e) {
        e.stopImmediatePropagation();
        e.preventDefault();
        let link = $(this).attr('action')
        let input = {}
        let container_type =  $('#container_container_type').val();
        input['container_type'] = container_type;
        input['items_attributes'] = items
        submitContainer(input,link);
    });
    
    function submitContainer(input,link){
        $.ajax({
           url: link,
           type: "POST",
           dataType: 'json',
           data: {container: input},
           success: function(data){
                
                
           },
           error: function(data){
               
              
           }
        });
    }

    $('#add-btn').on('click',function() {
        $('#item_form').toggle();
        $('#form_container').css("filter","blur(1rem)")
    })

    $('#btn-cancel').on('click',function(){
        $('#item_form').toggle();
        $('#form_container').css("filter","");
    })

};


Rails.start()
Turbolinks.start()
ActiveStorage.start()
