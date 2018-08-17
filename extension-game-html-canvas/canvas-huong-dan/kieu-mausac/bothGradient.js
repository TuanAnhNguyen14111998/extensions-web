function draw() {
    // truy xuat phan tu canvas
    var canvas = document.getElementById('tutorial');

    // kiem tra canvas co duoc ho tro boi trinh duyet hay khong
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        // tao ra gradient tuyen tinh cho hinh chu nhat dau tien
        var lingrad = ctx.createLinearGradient(0, 0, 0, 150);
        lingrad.addColorStop(0, '#00ABEB'); // xanh troi nhat
        lingrad.addColorStop(0.5, '#fff'); // xanh dam
        lingrad.addColorStop(0.5, '#26C000'); // xanh cay dam
        lingrad.addColorStop(1, '#fff'); // xanh troi dam

        // tao ra gradient tuyen tinh cho duong ke
        var lingrad2 = ctx.createLinearGradient(0, 50, 0, 95);
        lingrad2.addColorStop(0.5, '#000'); // mau den
        lingrad2.addColorStop(1, 'rgba(0, 0, 0, 0)'); // trong suot

        // them cac thuoc tinh fillStyle va strokeStyle
        ctx.fillStyle = lingrad;
        ctx.strokeStyle = lingrad2;

        // ve hinh
        ctx.fillRect(10, 10, 130, 130);
        ctx.strokeRect(50, 50, 50, 50);


    }
}