function readFile(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('.preview').croppie('bind', {
                url: e.target.result
            });
        }

        reader.readAsDataURL(input.files[0]);
    }
}

$('#upload').on('change', function () {
    readFile(this);
});

var $uploadCrop = $('.preview').croppie({
    viewport: {
        width: 500,
        height: 525,
        type: 'square'
    },
    boundary: {
        width: 500,
        height: 525
    }
});