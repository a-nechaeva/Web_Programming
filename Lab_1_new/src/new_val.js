$(document).ready(function () {
    $.ajax({
        type: 'POST',
        url: 'my_handler.php',
        success: (data) => $("#reqTable").html(data)
    });

    $("#subForm #submitButton").click(function (event) {
        if (!validateForm()) {
            return false;
        }

        var formData = $("#subForm").serializeArray();
        formData.push({"name" : "type" , "value" : "update"});
        formData.push({"name" : "local_time", "value" : new Date().toLocaleString()});

        $.ajax({
            type: 'POST',
            url: 'my_handler.php',
            data: formData,
            success: (data) => $("#reqTable").html(data)
        });
        event.preventDefault();
    })
})