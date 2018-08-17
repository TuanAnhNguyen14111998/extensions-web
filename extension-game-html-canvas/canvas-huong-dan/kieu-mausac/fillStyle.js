function draw() {
    // truy xuat phan tu canvas
    var canvas = document.getElementById('tutorial');
    var canvas_extend = document.getElementById('tutorial-extend');

    // kiem tra canvas co duoc ho tro boi trinh duyet hay khong
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        // khai bao mau cho hinh ve luon luon phai duoc dat truoc khi thao tac ve hinh duoc dien ra
        ctx.fillStyle = 'blue';

        // ve hinh chu nhat
        ctx.fillRect(10, 10, 100, 100);

    }

    if (canvas_extend.getContext) {
        var ctx_extend = canvas_extend.getContext('2d');

        // ve mot bang mau su dung gia tri color trong thuoc tinh fillStyle. Gia tri color o day duoc thiet lap bang rgb
        for (var i = 0; i < 6; i++) {

            for (var j = 0; j < 6; j++) {
                
                ctx_extend.fillStyle = 'rgb(' + Math.floor(255 - 42.5 * i) + ',' + Math.floor(255 - 42.5 * j) + ',0)';
                ctx_extend.fillRect(j * 25, i * 25, 25, 25);

            }

        }
    }
}