function draw() {
    // truy xuat phan tu canvas
    var canvas = document.getElementById('tutorial');

    // kiem tra canvas co duoc ho tro boi trinh duyet hay khong
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        // tao doi tuong gradient
        var gradient = ctx.createLinearGradient(0, 0, 200, 0);

        // them mau o dau va o cuoi
        // 1 la o vi tri bat dau, 0 la o vi tri ket thuc, neu dao nguoc lai, thay vi mau trang o ben phai no se o ben trai
        gradient.addColorStop(0, 'green');
        gradient.addColorStop(1, 'white');

        // them vao fillStyle
        ctx.fillStyle = gradient;
        
        // ve hinh chu nhat
        ctx.fillRect(10, 10, 200, 100);
        
        
    }
}