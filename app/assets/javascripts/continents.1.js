$(document).ready(function() {
    $("#region a.add_fields").
      data("association-insertion-position", 'before').
      data("association-insertion-node", 'this');

    $('#region').bind('cocoon:after-insert',
         function() {
           $("#region_from_list").hide();
           $("#region a.add_fields").hide();
         });
    $('#region').bind("cocoon:after-remove",
         function() {
           $("#region_from_list").show();
           $("#region a.add_fields").show();
         });

    $("#region a.add_fields").
      data("association-insertion-position", 'before').
      data("association-insertion-node", 'this');

    $('#region').bind('cocoon:after-insert',
         function(e, tag) {
             console.log('inserting new tag ...');
             $(".project-tag-fields a.add-tag").
                 data("association-insertion-position", 'after').
                 data("association-insertion-node", 'this');
             $(this).find('.project-tag-fields').bind('cocoon:after-insert',
                  function() {
                    console.log('insert new tag ...');
                    console.log($(this));
                    $(this).find(".tag_from_list").remove();
                    $(this).find("a.add_fields").hide();
                  });
         });

    $('.region').bind('cocoon:after-insert',
        function(e) {
            console.log('replace OLD tag ...');
            e.stopPropagation();
            console.log($(this));
            $(this).find(".tag_from_list").remove();
            $(this).find("a.add_fields").hide();
        });


    $('#region').bind('cocoon:before-insert', function(e,task_to_be_added) {
        console.log(task_to_be_added);
        task_to_be_added.fadeIn('slow');
    });

    $('#region').bind('cocoon:after-insert', function(e, added_task) {
        //added_task.css("background","red");
    });

    $('#region').bind('cocoon:before-remove', function(e, task) {
        $(this).data('remove-timeout', 1000);
        task.fadeOut('slow');
    })

    //$('body').tabs();
});