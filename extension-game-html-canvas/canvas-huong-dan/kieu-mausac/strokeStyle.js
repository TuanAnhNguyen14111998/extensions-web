function draw() {
    // truy xuat phan tu canvas
    var canvas = document.getElementById('tutorial');

    var canvas_extend = document.getElementById('tutorial-extend')

    // kiem tra canvas co duoc ho tro boi trinh duyet hay khong
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        // set mau vien cho hinh ve
        ctx.strokeStyle = 'green';

        // ve hinh chu nhat
        ctx.strokeRect(10, 10, 100, 100);

    }

    // hien thi mot danh sach cac hinh mau sac duong vien khac nhau
    if (canvas_extend.getContext) {

        var ctx_extend = canvas_extend.getContext('2d');

        for (var i = 0; i < 6; i++) {

            for (var j = 0; j < 6; j++) {

                ctx_extend.strokeStyle = 'rgb(0,' + Math.floor(255 - 42.5 * i) + ',' + Math.floor(255 - 42.5 * j) + ')';
                ctx_extend.beginPath();
                ctx_extend.arc(12.5 + j * 25, 12.5 + i * 25, 10, 0, Math.PI * 2, true);
                ctx_extend.stroke();

            }
            
        }

    }
}