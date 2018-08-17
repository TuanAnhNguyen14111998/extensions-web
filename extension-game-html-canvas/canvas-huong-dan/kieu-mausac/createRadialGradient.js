function draw() {
    // truy xuat phan tu canvas
    var canvas = document.getElementById('tutorial');

    // kiem tra canvas co duoc ho tro boi trinh duyet hay khong
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        // tao doi tuong gradient vong tron
        var gradient = ctx.createRadialGradient(100, 100, 50, 100, 100, 100);

        gradient.addColorStop(0, 'white');
        gradient.addColorStop(1, 'green');

        // them gradient vao trong ctx
        ctx.fillStyle = gradient;

        // ve hinh chu nhat
        ctx.fillRect(0, 0, 200, 200);
        

    }
}