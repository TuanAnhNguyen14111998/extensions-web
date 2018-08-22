function draw() {
    // truy xuat phan tu canvas
    var canvas = document.getElementById('tutorial');

    // kiem tra canvas co duoc ho tro boi trinh duyet hay khong
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        // lay thoi gian hien tai
        var now = new Date();

        // luu trang thai ve ban dau
        ctx.save();

        // xoa het canvas
        ctx.clearRect(0, 0, 150, 150);

        // dich chuyen luoi
        ctx.translate(75, 75);

        // gap doi net ve
        ctx.scale(0.4, 0.4);

        // quay luoi truc
        ctx.rotate(-Math.PI / 2);

        // them cac dinh dang cho trang thai ve
        ctx.strokeStyle = 'black';
        ctx.fillStyle = 'white';
        ctx.lineWidth = 8;
        ctx.lineCap = 'round';

        // ve nhan gio
        // luu trang thai ve
        ctx.save();

        // ve nhan h (vach chi h)
        for (var i = 0; i < 12; i++) {
            ctx.beginPath();
            ctx.rotate(Math.PI / 6);
            ctx.moveTo(100, 0);
            ctx.lineTo(120, 0);
            ctx.stroke();
        }


        // quay ve trang thai ve ban dau
        ctx.restore();

        // ve vach chi phut
        ctx.save();
        ctx.lineWidth = 5;

        for (i = 0; i < 60; i++) {
            if (i % 5 != 0) {
                ctx.beginPath();
                ctx.moveTo(117, 0);
                ctx.lineTo(120, 0);
                ctx.stroke();
            }
            ctx.rotate(Math.PI / 30);
        }
        ctx.restore();

        // lay h, m, s
        var sec = now.getSeconds();
        var min = now.getMinutes();
        var hr = now.getHours();

        // quy doi h sang he 0 - 12
        hr = hr >= 12 ? hr - 12 : hr;

        ctx.fillStyle = 'black';

        // ve kim h
        ctx.save();
        ctx.rotate(hr * (Math.PI / 6) + (Math.PI / 360) * min + (Math.PI / 21600) * sec);
        ctx.lineWidth = 14;
        ctx.beginPath();
        ctx.moveTo(-20, 0);
        ctx.lineTo(80, 0);
        ctx.stroke();
        ctx.restore();

        // ve kim phut
        ctx.save();
        ctx.rotate((Math.PI / 30) * min + (Math.PI / 1800) * sec);
        ctx.lineWidth = 10;
        ctx.beginPath();
        ctx.moveTo(-28, 0);
        ctx.lineTo(112, 0);
        ctx.stroke();
        ctx.restore();

        // ve kim giay
        ctx.save();
        ctx.rotate(sec * Math.PI / 30);
        ctx.strokeStyle = '#D40000';
        ctx.fillStyle = '#D40000';
        ctx.lineWidth = 6;
        ctx.beginPath();
        ctx.moveTo(-30, 0);
        ctx.lineTo(83, 0);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(0, 0, 10, 0, Math.PI * 2, true);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(95, 0, 10, 0, Math.PI * 2, true);
        ctx.stroke();
        ctx.fillStyle = 'rgba(0, 0, 0, 0)';
        ctx.arc(0, 0, 3, 0, Math.PI * 2, true);
        ctx.fill();
        ctx.restore();

        ctx.beginPath();
        ctx.lineWidth = 14;
        ctx.strokeStyle = '#325FA2';
        ctx.arc(0, 0, 142, 0, Math.PI * 2, true);
        ctx.stroke();

        ctx.restore();

        // thuc hien phuong thuc tao hoat canh
        window.requestAnimationFrame(draw);

    }
}