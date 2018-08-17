function draw() {
    // truy xuat phan tu canvas
    var canvas1 = document.getElementById('tutorial1');
    var canvas2 = document.getElementById('tutorial2');

    // kiem tra canvas co duoc ho tro boi trinh duyet hay khong
    if (canvas1.getContext) {
        var ctx1 = canvas1.getContext('2d');

        // tao mau cho bong cua hinh ve
        ctx1.shadowColor = 'black';

        // cho bong cua hinh ve dich chuyen 10 pixel sang ben phai cua truc Ox
        ctx1.shadowOffsetX = 10;

        // lam mo mau cua bong
        ctx1.shadowBlur = 10;

        // cho hinh chu nhat co mau xanh cay
        ctx1.fillStyle = 'green';

        // ve hinh chu nhat
        ctx1.fillRect(10, 10, 100, 100);

    }

    if (canvas2.getContext) {
        var ctx2 = canvas2.getContext('2d');

        // tao mau cho bong cua hinh ve
        ctx2.shadowColor = 'black';

        // cho bong cua hinh ve dich chuyen 10 pixel sang ben phai cua truc Ox
        ctx2.shadowOffsetY = 10;

        // lam mo mau cua bong
        ctx2.shadowBlur = 10;

        // cho hinh chu nhat co mau xanh cay
        ctx2.fillStyle = 'green';

        // ve hinh chu nhat
        ctx2.fillRect(10, 10, 100, 100);
    }   
}