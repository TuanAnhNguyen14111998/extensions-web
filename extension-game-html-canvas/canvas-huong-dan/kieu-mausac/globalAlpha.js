function draw() {
    // truy xuat phan tu canvas
    var canvas = document.getElementById('tutorial');

    var canvas_extend = document.getElementById('tutorial-extend')
    var canvas_extend_continue = document.getElementById('tutorial-extend-continue')

    // kiem tra canvas co duoc ho tro boi trinh duyet hay khong
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        // thiet lap do trong suot cho hinh ve
        ctx.globalAlpha = 0.5;

        // ve hai hinh vuong
        ctx.fillStyle = 'green';
        ctx.fillRect(10, 10, 100, 100);

        ctx.fillStyle = 'blue';

        ctx.fillRect(50, 50, 100, 100);

    }

    // y tuong: ve 4 hinh vuong lam nen. Sau do ve tren cac hinh vuong nay cac vong tron dc thiet lap do trong suot la 0.2. Cac vong tron sau ve long len vong tron truoc lam cac vong tron sau co do mo tang dan
    if (canvas_extend.getContext) {

        var ctx_extend = canvas_extend.getContext('2d');

        // ve bon hinh vuong lam hinh nen
        ctx_extend.fillStyle = '#FD0';
        ctx_extend.fillRect(0, 0, 75, 75);

        ctx_extend.fillStyle = '#6C0';
        ctx_extend.fillRect(75, 0, 75, 75);

        ctx_extend.fillStyle = '#09F';
        ctx_extend.fillRect(0, 75, 75, 75);

        ctx_extend.fillStyle = '#F30';
        ctx_extend.fillRect(75, 75, 75, 75);

        ctx_extend.fillStyle = '#FFF';

        // thiet lap do trong suot
        ctx_extend.globalAlpha = 0.2;

        // ve cac duong tron dong tam long len nhau
        for (i = 0; i < 7; i++) {

            ctx_extend.beginPath();
            ctx_extend.arc(75, 75, 10 + 10 * i, 0, Math.PI * 2, true);
            ctx_extend.fill();

        }

    }

    // y tuong: ve mot day hinh chu nhat mo tren cac hinh chu nhat nen - khong su dung thuoc tinh globalApha nua ma su dung cach set mau bang phuong thuc rgba
    if (canvas_extend_continue.getContext) {

        var ctx_extend_continue = canvas_extend_continue.getContext('2d');

        // tao ra hinh nen
        ctx_extend_continue.fillStyle = 'rgb(255, 221, 0)';
        ctx_extend_continue.fillRect(0, 0, 150, 37.5);

        ctx_extend_continue.fillStyle = 'rgb(102, 204, 0)';
        ctx_extend_continue.fillRect(0, 37.5, 150, 37.5);

        ctx_extend_continue.fillStyle = 'rgb(0, 153, 255)';
        ctx_extend_continue.fillRect(0, 75, 150, 37.5);

        ctx_extend_continue.fillStyle = 'rgb(255, 51, 0)';
        ctx_extend_continue.fillRect(0, 112.5, 150, 37.5);

        // ve cac hinh chu nhat tren cac hinh chu nhat nen voi rgbs()
        for (var i = 0; i < 10; i++) {

            ctx_extend_continue.fillStyle = 'rgba(255, 255, 255, ' + (i + 1) / 10 + ')';

            for (var j = 0; j < 4; j++) {
                ctx_extend_continue.fillRect(5 + i * 14, 5 + j * 37.5, 14, 27.5);
            }

        }

    }

}