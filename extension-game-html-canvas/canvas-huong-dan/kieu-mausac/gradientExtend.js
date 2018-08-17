function draw() {
    // truy xuat phan tu canvas
    var canvas = document.getElementById('tutorial');

    // kiem tra canvas co duoc ho tro boi trinh duyet hay khong
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');


        // tao gradient xuyen tam thu 1
        var radgrad = ctx.createRadialGradient(45, 45, 10, 52, 50, 30);
        radgrad.addColorStop(0, '#A7D30C');
        radgrad.addColorStop(0.9, '#019F62');
        radgrad.addColorStop(1, 'rgba(1, 159, 98, 0)');

        // tao gradient xuyen tam thu 2
        var radgrad2 = ctx.createRadialGradient(105, 105, 20, 112, 120, 50);
        radgrad2.addColorStop(0, '#FF5F98');
        radgrad2.addColorStop(0.75, '#FF0188');
        radgrad2.addColorStop(1, 'rgba(255, 1, 136, 0)');

        // tao gradient xuyen tam thu 3
        var radgrad3 = ctx.createRadialGradient(95, 15, 15, 102, 20, 40);
        radgrad3.addColorStop(0, '#00C9FF'); // xanh duong
        radgrad3.addColorStop(0.8, '#00B5E2'); // xanh duong dam hon
        radgrad3.addColorStop(1, 'rgba(0, 201, 255, 0)'); // do mo cho xanh duong

        // tao gradient xuyen tam thu 4
        var radgrad4 = ctx.createRadialGradient(0, 150, 50, 0, 140, 90);
        radgrad4.addColorStop(0, '#F4F201'); // mau vang
        radgrad4.addColorStop(0.8, '#E4C700'); // mau vang dam
        radgrad4.addColorStop(1, 'rgba(228, 199, 0, 0)'); // vang dam - cung mau vang dam o tren, lam dieu nay de co the tao do mo cho mau vang

        // ve hinh
        ctx.fillStyle = radgrad4;
        ctx.fillRect(0, 0, 150, 150); // hinh cau vang
        ctx.fillStyle = radgrad3;
        ctx.fillRect(0, 0, 150, 150); // hinh cau xanh duong
        ctx.fillStyle = radgrad2; 
        ctx.fillRect(0, 0, 150, 150); // hinh cau mau hong tim
        ctx.fillStyle = radgrad;
        ctx.fillRect(0, 0, 150, 150); // hinh cau mau xanh
       
    }
}