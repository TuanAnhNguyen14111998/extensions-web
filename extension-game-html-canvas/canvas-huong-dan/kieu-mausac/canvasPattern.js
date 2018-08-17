function draw() {
    // truy xuat phan tu canvas
    var canvas = document.getElementById('tutorial');

    // kiem tra canvas co duoc ho tro boi trinh duyet hay khong
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        // tao ra mot doi tuong pattern co su dung hinh anh
        var img = new Image();
        img.src = 'https://hoavandecal.com/wp-content/uploads/2018/06/tranh-canvas-cp19-ray-tren-co-thach-100x100.jpg';

        // dam bao img duoc load xong thi moi thuc hien cac thao tac voi pattern
        img.onload = function() {

            // tao ra pattern
            var ptrn = ctx.createPattern(img, 'repeat');
            ctx.fillStyle= ptrn;
            ctx.fillRect(0, 0, 200, 200);
            

        }

    }
}