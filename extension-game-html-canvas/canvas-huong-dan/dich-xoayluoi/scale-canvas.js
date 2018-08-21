function draw() {
    // truy xuat phan tu canvas
    var canvas = document.getElementById('tutorial');

    // kiem tra canvas co duoc ho tro boi trinh duyet hay khong
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        // draw a simple rectangle, but scale it.
        ctx.save();
        ctx.scale(10, 3);
        ctx.fillRect(1, 10, 10, 10);
        ctx.restore();

        // mirror horizontally
        ctx.scale(-1, 1);
        ctx.font = '48px serif';
        ctx.fillText('MDN', -135, 120);

    }
}

// scale(): phuong thuc chuc nang nay cho phep ban co the phong to, thu nho cac hinh ve, cac net ve theo mot ty le nao do. Vi du mac dinh cac net ve thuong co do day la 1.0 pixel thi ban co the cho cac net ve nay len 2.0 pixel, hay tham chi giam xuong 0.5 pixel.
// scale(x, y): cho phep ban phong to, thu nho theo ca chieu rong va chieu cao
// scale(1,-1): cho phep ban tao ra duoc mot he toa do Descartes noi tieng. Tuc la ban se dich chuyen goc toa do cua luoi sang vi tri o goc duoi cung ben trai cua luoi canvas mac dinh
// vi du nay cho ta thay duoc luoi kieu nay.
// Day cung la cach ban co the ve nguoc tat ca cac hinh ve co tren canvas