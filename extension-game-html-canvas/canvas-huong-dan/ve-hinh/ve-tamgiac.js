function draw() {
    // truy xuat phan tu canvas
    var canvas = document.getElementById('tutorial');

    // kiem tra canvas co duoc ho tro boi trinh duyet hay khong
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        // khai bao duong dan moi
        ctx.beginPath();
        
        // dat net but tai diem co toa do (75, 50)
        ctx.moveTo(75, 50);
        
        // ve duong thang tu toa do vi tri dang dat cua net but den vi tri co toa do (100, 75)
        ctx.lineTo(100, 75);

        ctx.lineTo(100, 25);
        
        // ve hinh bang cach lap day khoang trong cua hinh bang mau den mac dinh
        ctx.fill();

    }
}