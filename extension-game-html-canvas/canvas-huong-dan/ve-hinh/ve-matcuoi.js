function draw() {
    // truy xuat phan tu canvas
    var canvas = document.getElementById('tutorial');

    // kiem tra canvas co duoc ho tro boi trinh duyet hay khong
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        // khai bao duong dan moi
        ctx.beginPath();
        
        // ve vong tron ben ngoai
        ctx.arc(75, 75, 50, 0, Math.PI * 2, true);
        
        // chuyen vi tri dat net ve
        ctx.moveTo(110, 75);

        // ve mieng (theo chieu kim dong ho)
        ctx.arc(75, 75, 35, 0, Math.PI, false);

        // chuyen vi tri dat net ve
        ctx.moveTo(65, 65);

        // ve mat trai
        ctx.arc(60, 65, 5, 0, Math.PI * 2, true);

        // chuyen vi tri dat net ve
        ctx.moveTo(95, 65);

        // ve mat phai
        ctx.arc(90, 65, 5, 0, Math.PI * 2, true);

        // ve hinh bang cach ve duong vien, khong lap day hinh
        ctx.stroke();

    }
}