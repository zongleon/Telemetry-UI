//////////////////////////////////////////////////////////
// Modal Dialog manager
// Handles a simple modal for error and status messages.
// Requires jQuery.
//////////////////////////////////////////////////////////

import $ from 'jquery';

// On initialization, make sure the modal is hidden.
$(function(){
    hideModal();
});

// Shows a modal with the provided title and message.
export function showModal(title,message){
    $("#modal-title").text(title);
    $("#modal-body").html(message);
    $("#modal-overlay").show();
}

// Hides the modal, if it's visible.
export function hideModal(){
    $("#modal-overlay").hide();
}

//////////////////////////////////////////////////////////
// End of File
//////////////////////////////////////////////////////////
