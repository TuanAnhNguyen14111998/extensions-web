function draw() {
    // truy xuat phan tu canvas
    var canvas = document.getElementById('tutorial');

    // kiem tra canvas co duoc ho tro boi trinh duyet hay khong
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        // mang mang gia tri cua thuoc tinh lineJoin
        var lineJoin = ['round', 'bevel', 'miter'];

        // do dai cua duong net ve
        ctx.lineWidth = 10;
        for (var i = 0; i < lineJoin.length; i++) {

            ctx.lineJoin = lineJoin[i];
            ctx.beginPath();
            ctx.moveTo(-5, 5 + i * 40);
            ctx.lineTo(35, 45 + i * 40);
            ctx.lineTo(75, 5 + i * 40);
            ctx.lineTo(115, 45 + i * 40);
            ctx.lineTo(155, 5 + i * 40);
            ctx.stroke();
            
        }

    }
}