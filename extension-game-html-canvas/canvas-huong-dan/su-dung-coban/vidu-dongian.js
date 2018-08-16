function draw() {
    // truy xuat phan tu canvas
    var canvas = document.getElementById('tutorial');

    // kiem tra canvas co duoc ho tro boi trinh duyet hay khong
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        // ve hinh chu nhat
        ctx.fillStyle='rgb(200, 0, 0)';
        ctx.fillRect(10, 10, 50, 50);

        ctx.fillStyle='rgba(0, 0, 200, 0.5)';
        ctx.fillRect(30, 30, 50, 50);
        
        
    }
}