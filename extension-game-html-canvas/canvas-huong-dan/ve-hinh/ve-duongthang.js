function draw() {
    // truy xuat phan tu canvas
    var canvas = document.getElementById('tutorial');

    // kiem tra canvas co duoc ho tro boi trinh duyet hay khong
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        // khai bao mot duong dan moi
        ctx.beginPath();

        // chuyen vi tri dat but den toa do (25, 25)
        ctx.moveTo(25, 25);

        // ve duong thang tu vi tri dat but (25, 25) den vi tri co toa do (105, 25)
        ctx.lineTo(105, 25);

        // ve duong thang tu vi tri (105, 25) den vi tri co toa do (25, 105)
        ctx.lineTo(25, 105);

        // ve hinh theo duong dan bang cach lap day khoang trong bang mau den mac dinh
        ctx.fill();

        // tuong tu ta se ve hinh tam giac chi co vien, khoang trong duoc de trong suot
        ctx.beginPath();
        
        ctx.moveTo(125, 125);
       
        ctx.lineTo(125, 45);
        
        ctx.lineTo(45, 125);
        
        ctx.closePath();
        
        ctx.stroke();

    }
}