function draw() {
    // truy xuat phan tu canvas
    var canvas = document.getElementById('tutorial');

    // kiem tra canvas co duoc ho tro boi trinh duyet hay khong
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                ctx.save();
                ctx.fillStyle = 'rgb(' + (51 * i) + ', ' + (255 - 51 * i) + ', 255)';
                ctx.translate(10 + j * 50, 10 + i * 50);
                ctx.fillRect(0, 0, 25, 25);
                ctx.restore();
            }
        }

    }
}

// translate(): Day la phuong thuc chuc nang cho phep ban dich chuyen ca luoi cua canvas di den mot vi tri bat ky tren man hinh.
// Dieu nay dac biet co loi khi ban muon ve mot hinh nao do tai mot vi tri (x, y) bat ky tren man hinh. Ban khong can phai xac dinh rat vat va tren mot canvas nua.
// Vi du nay se cho ban mot phuong phap de thuc hien dieu do - Thay vi chi ve ba hinh chu nhat tren cung mot canvas, thiet lap toa do ve cho hinh chu nhat dua vao i va j trong vong lap thi ban set toa do cua hinh chu nhat la co dinh. Ban chi can xac dinh vi tri toa do cua canvas ma ban muon dat vao.
// Chu y quan trong: Khong phai nhu luc dau ta nghi no se ve tren nhieu canvas va moi canvas se duoc dat tai mot vi tri bat ky nao do tren man hinh: ma thuc ra no thao tac tren cung mot canvas. Co dieu viec chuyen vi tri toa do O(0, 0) cua no tren canvas do la khac thoi. Con neu dat cac canvas tai mot vi tri (x, y) bat ky thi day la cong viec khai bao the thanh phan <canvas> cua HTML