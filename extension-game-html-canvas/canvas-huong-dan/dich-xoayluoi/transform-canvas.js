function draw() {
    // truy xuat phan tu canvas
    var canvas = document.getElementById('tutorial');

    // kiem tra canvas co duoc ho tro boi trinh duyet hay khong
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        var sin = Math.sin(Math.PI / 6);
        var cos = Math.cos(Math.PI / 6);
        ctx.translate(100, 100);
        var c = 0;
        for (var i = 0; i <= 12; i++) {
            c = Math.floor(255 / 12 * i);
            ctx.fillStyle = 'rgb(' + c + ', ' + c + ', ' + c + ')';
            ctx.fillRect(0, 0, 100, 10);
            ctx.transform(cos, sin, -sin, cos, 0, 0);
        }

        ctx.setTransform(-1, 0, 0, 1, 100, 100);
        ctx.fillStyle = 'rgba(255, 128, 255, 0.5)';
        ctx.fillRect(0, 50, 100, 100);

    }
}

// transform(): Phuong thuc chuc nang nay cho phep ta ket hop hai phuong thuc chuc nang la rotate va translate: tuc la vua co kha nang cho hinh ve quay, vua co kha nang cho hinh ve duoc phong to theo chieu ngang hay chieu doc
// chu y trong vi du nay, thi cac tham so cua transform() co the mang gia tri am, luc do ta se tao ra he toa do nguoc so voi he toa do luoi mac dinh. Cho nen hinh ve se bi ve nguoc.