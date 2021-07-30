'use strict'

let btnMenu         = $('#btn-menu');
let btnCloseMenu    = $('#btn-close-Menu');
let divMenu         = $('#div-menu');

$(btnMenu).click(e => {
    $(btnMenu).hide();
    $(divMenu).show();
    $(btnCloseMenu).show();
})

$(btnCloseMenu).click(e => {
    $(btnCloseMenu).hide();
    $(divMenu).hide();
    $(btnMenu).show();
})