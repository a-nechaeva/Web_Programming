$(document).ready(function () {
    $.ajax({
        type: 'GET',
        url: 'php/my_handler.php',
        success: (data) => $("#result_table tbody").html(data)
    });

    $("#form #submit").click(function (event) {
        if (!validate_form()) {
            return false;
        }

        var formData = $("#form").serializeArray();
        formData.push({"name" : "type", "value" : "update"});
        formData.push({"name": "local_time", "value" : new Date().toLocaleString()});
        // console.log(formData);

        $.ajax({
            type: 'POST',
            url: 'php/my_handler.php',
            data: formData,
            success: (data) => $("#result_table tbody").html(data)
        });
        event.preventDefault();
    });

    $("#form #clear").click(function (event) {
        var formData = new Array();
        formData.push({"name" : "type", "value" : "clear"});
        console.log(formData);

        $.ajax({
            type: 'POST',
            url: 'php/my_handler.php',
            data: formData,
            success: (data) => $("#result_table tbody").html(data)
        });
        event.preventDefault();
    });
});
