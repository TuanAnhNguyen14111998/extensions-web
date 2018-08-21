function draw() {
    // truy xuat phan tu canvas
    var canvas = document.getElementById('tutorial');

    // kiem tra canvas co duoc ho tro boi trinh duyet hay khong
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        var img = new Image();
        img.onload = function () {
            for (var i = 0; i < 4; i++) {
                for (var j = 0; j < 3; j++) {
                    ctx.drawImage(img, j * 50, i * 38, 50, 38);
                }
            }
        };
        img.src = 'https://mdn.mozillademos.org/files/5397/rhino.jpg';

    }
}