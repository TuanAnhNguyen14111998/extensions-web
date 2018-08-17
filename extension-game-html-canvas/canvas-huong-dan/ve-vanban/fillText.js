function draw() {
    // truy xuat phan tu canvas
    var canvas = document.getElementById('tutorial');

    // kiem tra canvas co duoc ho tro boi trinh duyet hay khong
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        // tao font cho chuoi van ban
        ctx.font = '48px serif';

        // ve van ban
        ctx.fillText('Hello world', 10, 50);

        // tuy chon cuoi cung khong thiet lap co nghia la chieu rong cua chuoi van ban se duoc ap dung boi fontsize ta da thiet lap o tren

    }
}