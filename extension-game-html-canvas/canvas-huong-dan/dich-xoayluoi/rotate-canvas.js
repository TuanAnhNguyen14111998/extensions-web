function draw() {
    // truy xuat phan tu canvas
    var canvas = document.getElementById('tutorial');

    // kiem tra canvas co duoc ho tro boi trinh duyet hay khong
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        // left rectangles, rotate from canvas origin
        ctx.save();
        // blue rect
        ctx.fillStyle = '#0095DD';
        ctx.fillRect(30, 30, 100, 100);
        ctx.rotate((Math.PI / 180) * 25);
        // grey rect
        ctx.fillStyle = '#4D4E53';
        ctx.fillRect(30, 30, 100, 100);
        ctx.restore();

        // right rectangles, rotate from rectangle center
        // draw blue rect
        ctx.fillStyle = '#0095DD';
        ctx.fillRect(150, 30, 100, 100);

        ctx.translate(200, 80); // translate to rectangle center 
        // x = x + 0.5 * width
        // y = y + 0.5 * height
        ctx.rotate((Math.PI / 180) * 25); // rotate
        ctx.translate(-200, -80); // translate back

        // draw grey rect
        ctx.fillStyle = '#4D4E53';
        ctx.fillRect(150, 30, 100, 100);

    }
}

// rotate(): Day la phuong thuc chuc nang cho phep xoay truc Ox, Oy cua luoi di mot goc radian nao do. Chu y la su dung goc la radian va goc quay la quay theo chieu kim dong ho.
// Trong vi du nay ta se ve bon hinh chu nhat, voi hai hinh ben duoi la luoi binh thuong va hai hinh ben tren la luoi da duoc xoay. Chu y them mot dieu la co su dung ham tranlate de dich luoi den vi tri (x, y) nao do. Va su dung ham save() va restore() de co the luu tru hay quay ve cac thiet lap cho canvas