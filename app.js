$(document).ready(function() {
    clearInput();
    $('#textInput').keyup(function() {
        $textInput = $(this).val();
        $textInput ? $('#btnSubmit').prop('disabled', false) : $('#btnSubmit').prop('disabled', true);
    });

    $('#btnSubmit').click(function(event) {
        event.preventDefault();
        alert($textInput);
        $li = $(`<li>${$textInput}</li>`);
        $li.click(function() {
            $(this).css('color', randomColor());
        });
        $li.dblclick(function() {
            $(this).remove();
        })
        $('#list').append($li);
        clearInput();
        // console.log(randomColor());
    });

    $('body').append('<div id="container"></div>');
    $('body').append('<ul id="list"></ul>');
});

function clearInput() {
    $('#textInput').val('');
    $('#btnSubmit').prop('disabled', true);
}

function randomColor() {
    color = []
    for (i = 0; i < 3; i++) {
        color.push(Math.floor(Math.random() * 255));
    }
    return `rgb(${color})`;
}
