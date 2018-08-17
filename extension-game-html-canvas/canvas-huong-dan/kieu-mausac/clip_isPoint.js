function draw() {
    // truy xuat phan tu canvas
    var canvas1 = document.getElementById('tutorial1');
    var canvas2 = document.getElementById('tutorial2');

    // kiem tra canvas co duoc ho tro boi trinh duyet hay khong
    if (canvas1.getContext) {
        var ctx1 = canvas1.getContext('2d');

        // tao ra mot duong dan moi
        ctx1.beginPath();
        
        // tao ra mot hinh tron va ta se cat hinh trong nay boi mot hinh chu nhat
        ctx1.arc(100, 100, 75, 0, Math.PI * 2, false);

        // goi phuong thuc dung de cat mot hinh ve
        ctx1.clip();
        
        // su dung hinh chu nhat de cat hinh tron tren
        ctx1.fillRect(0, 0, 100,100);

        // luu y: ta chi co the su dung thuoc tinh clip() de cat hinh ve duoc ve bang duong dan nhu hinh tron o tren. Ta khong the thuc hien viec cat hinh bang phuong thuc chuc nang clip() de co the cat hinh chu nhat nguyen thuy. Neu muon cat mot hinh chu nhat ban phai su dung phuong thuc ve hinh chu nhat bang duong dan: do la rect()

    }

    if (canvas2.getContext) {
        
        var ctx2 = canvas2.getContext('2d');

        // thiet lap duong dan cho hinh chu nhat
        ctx2.rect(10, 10, 100, 100);

        // ve hinh chu nhat chi co duong vien
        ctx2.stroke();
        
        // kiem tra xem hinh diem co toa do (10, 10) co nam tren hinh chu nhat nay khong
        console.log(ctx2.isPointInPath(10, 10));
        
    }
}