function draw() {
    // truy xuat phan tu canvas
    var canvas = document.getElementById('tutorial');

    // kiem tra canvas co duoc ho tro boi trinh duyet hay khong
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        // ve hinh chu nhat day du: khoang trong ben trong duoc lap day boi mau den mac dinh
        ctx.fillRect(25, 25, 100, 100);

        // xoa hinh chu nhat: lam cho khoang trong ben trong no trong suot
        ctx.clearRect(45, 45, 60, 60);
        
        // ve duong vien cua hinh chu nhat: khoang trong ben trong hinh chu nhat trong suot
        ctx.strokeRect(50, 50, 50, 50);
        
        
    }
}