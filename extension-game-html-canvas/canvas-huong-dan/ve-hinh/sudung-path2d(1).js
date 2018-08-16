function draw() {
    // truy xuat phan tu canvas
    var canvas = document.getElementById('tutorial');

    // kiem tra canvas co duoc ho tro boi trinh duyet hay khong
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        // khoi tao path2D
        var path1 = new Path2D();

        // ve hinh chu nhat
        path1.rect(10, 10, 100, 100);

        // tao path2 voi tham so dau vao la path1
        var path2 = new Path2D(path1);

        // chuyen vi tri dat net ve den (220, 60)
        path2.moveTo(220, 60);

        // ve mot hinh tron
        path2.arc(170, 60, 50, 0, 2 * Math.PI);

        // ve hinh chi co duong vien, khong lap day khoang khong gian trong cac hinh
        ctx.stroke(path2);

    }
}