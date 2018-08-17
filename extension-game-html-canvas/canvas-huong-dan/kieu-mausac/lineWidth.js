function draw() {
    // truy xuat phan tu canvas
    var canvas = document.getElementById('tutorial');

    // kiem tra canvas co duoc ho tro boi trinh duyet hay khong
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        // ve cac duong net voi do rong khac nhau. Da phan cac net ve ve phia ben trai khong duoc net la do cac o pixel khong duoc dien day
        for (var i = 0; i < 10; i++) {
            ctx.lineWidth = 1 + i;
            ctx.beginPath();
            ctx.moveTo(5 + i * 14, 5);
            ctx.lineTo(5 + i * 14, 140);
            ctx.stroke();
        }

    }
}