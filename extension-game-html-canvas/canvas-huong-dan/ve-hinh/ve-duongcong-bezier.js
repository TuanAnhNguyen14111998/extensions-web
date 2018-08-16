function draw() {
    // truy xuat phan tu canvas
    var canvas = document.getElementById('tutorial');

    // kiem tra canvas co duoc ho tro boi trinh duyet hay khong
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        // duong cong chi co vien
        ctx.beginPath();

        ctx.moveTo(75, 25);

        ctx.quadraticCurveTo(25, 25, 25, 62.5);

        ctx.quadraticCurveTo(25, 100, 50, 100);

        ctx.quadraticCurveTo(50, 120, 30, 125);

        ctx.quadraticCurveTo(60, 120, 65, 100);

        ctx.quadraticCurveTo(125, 100, 125, 62.5);

        ctx.quadraticCurveTo(125, 25, 75, 25);

        ctx.stroke();

        // Duong cong duoc lap day
        ctx.beginPath();

        ctx.moveTo(75, 40);

        ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);

        ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);

        ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);

        ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);

        ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
        
        ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);

        ctx.fill();

        // huong dan: hay comment mot hinh cong de co the nhin hinh cong con lai de dang hon

    }
}