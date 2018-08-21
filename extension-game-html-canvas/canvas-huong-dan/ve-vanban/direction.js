function draw() {
    // truy xuat phan tu canvas
    var canvas = document.getElementById('tutorial');

    // kiem tra canvas co duoc ho tro boi trinh duyet hay khong
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        ctx.font = '48px serif';
        ctx.direction = 'ltr';
        ctx.strokeText('Hello world', 0, 100);

    }
}