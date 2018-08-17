function draw() {
    // truy xuat phan tu canvas
    var canvas = document.getElementById('tutorial');

    // kiem tra canvas co duoc ho tro boi trinh duyet hay khong
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        // mang chua gia tri cua thuoc tinh lineCap
        var lineCap = ['butt', 'round', 'square'];

        // ve hai duong thang nam ngang de co the nhin ro duoc ranh gioi cua net dau va net cuoi cua duong net ve
        ctx.strokeStyle = '#09f';
        
        ctx.beginPath();
        ctx.moveTo(10, 10);
        ctx.lineTo(140, 10);

        ctx.moveTo(10, 140);
        ctx.lineTo(140, 140);
        ctx.stroke();

        // Ve lan luot ba net ve
        ctx.strokeStyle = 'black';
        for (var i = 0; i < lineCap.length; i++) {
            ctx.lineWidth = 15;
            ctx.lineCap = lineCap[i];
            ctx.beginPath();
            ctx.moveTo(25 + i * 50, 10);
            ctx.lineTo(25 + i * 50, 140);
            ctx.stroke();
        }

    }
}