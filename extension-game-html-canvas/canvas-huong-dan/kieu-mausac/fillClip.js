function draw() {
    // truy xuat phan tu canvas
    var canvas = document.getElementById('tutorial');

    // kiem tra canvas co duoc ho tro boi trinh duyet hay khong
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        // thiet lap mot duong dan moi
        ctx.beginPath();

        // ve lan luot hai duong tron
        ctx.arc(50, 50, 30, 0, Math.PI * 2, true);
        ctx.arc(50, 50, 15, 0, Math.PI * 2, true);

        // su dung phuong thuc chuc nang fill() de dung hinh tron 2 cat hinh tron 1
        ctx.fill('evenodd');

        // phuong thuc chuc nang fill() nay co hai tham so truyen vao
        // tham so nonzero: la tham so giong nhu phep toan hoac: lay thang lon nhat, trong truong hop nay ta thay tren hinh ve chi co hinh tron 1 duoc hien thi len, boi hinh tron 1 bao lay hinh tron 2
        // tham so evenodd: la tham so giong nhu phep toan giao: lay phan chung cua hai hinh ve
        // chu y: de su dung duoc phuong thuc chuc nang fill() nay, cac hinh duoc cat phai duoc ve bang cac duong dan. Phuong thuc chuc nang fill() khong ap dung de cat cac hinh chu nhat nguyen thuy. Neu muon su hinh chu nhat thi phai ve hinh chu nhat do bang phuong thuc rect(). Ta noi la cac hinh bi cat boi vi hinh chu nhat nguyen thuy co the tham gia vao lam hinh cat, con no khong the la hinh bi cat boi mot hinh khac

    }
}