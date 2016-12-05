$(document).ready(function() {

    $("#region a.add_fields").
      data("association-insertion-position", 'before').
      data("association-insertion-node", 'this');

    $('#region').bind('cocoon:before-insert', function(e,task_to_be_added) {
        console.log(task_to_be_added);
        task_to_be_added.fadeIn('slow');
    });

    $('#region').bind('cocoon:before-remove', function(e, task) {
        $(this).data('remove-timeout', 1000);
        task.fadeOut('slow');
    })
    
        $("#country a.add_fields").
      data("association-insertion-position", 'before').
      data("association-insertion-node", 'this');

    $('#country').bind('cocoon:before-insert', function(e,task_to_be_added) {
        console.log(task_to_be_added);
        task_to_be_added.fadeIn('slow');
    });

    $('#country').bind('cocoon:before-remove', function(e, task) {
        $(this).data('remove-timeout', 1000);
        task.fadeOut('slow');
    })

    //$('body').tabs();
});