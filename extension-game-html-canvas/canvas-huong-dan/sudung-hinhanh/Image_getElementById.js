function draw() {
    // truy xuat phan tu canvas
    var canvas = document.getElementById('tutorial');

    // kiem tra canvas co duoc ho tro boi trinh duyet hay khong
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        var image = document.getElementById('source');

        ctx.drawImage(image, 33, 71, 104, 124, 21, 20, 87, 104);

    }
}