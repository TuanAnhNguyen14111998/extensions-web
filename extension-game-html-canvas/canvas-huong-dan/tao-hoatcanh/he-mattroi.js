// tao cac doi tuong anh
var sun = new Image();
var moon = new Image();
var earth = new Image();

// nhan du lieu anh
function init() {
    sun.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png';
    moon.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png';
    earth.src = 'https://mdn.mozillademos.org/files/1429/Canvas_earth.png';
    window.requestAnimationFrame(draw);
}

function draw() {
    // truy xuat phan tu canvas
    var canvas = document.getElementById('tutorial');

    // kiem tra canvas co duoc ho tro boi trinh duyet hay khong
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        // su dung cach phoi mau
        ctx.globalCompositeOperation = 'destination-over';

        // xoa canvas
        ctx.clearRect(0, 0, 300, 300);

        // thiet lap cac trang thai ve ban dau
        ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
        ctx.strokeStyle = 'rgba(0, 153, 255, 0.4)';
        ctx.save();

        // dich luoi
        ctx.translate(150, 150);

        // lay thoi gian hien tai
        var time = new Date();

        // ve trai dat

        // quay truc toa do
        ctx.rotate(((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds());
        // chuyen dich toa do
        ctx.translate(105, 0);
        // ve hinh chu nhat: de do bong
        ctx.fillRect(0, -12, 50, 24);
        // ve trai dat
        ctx.drawImage(earth, -12, -12);

        // ve mat trang
        // luu trang thai vua ve
        ctx.save();
        ctx.rotate(((2 * Math.PI) / 6) * time.getSeconds() + ((2 * Math.PI) / 6000) * time.getMilliseconds());
        ctx.translate(0, 28.5);
        ctx.drawImage(moon, -3.5, -3.5);
        ctx.restore();

        // quay ve duoc trang thai ve ban dau
        ctx.restore();

        // ve quy dao chuyen dong cua trai dat

        // thiet lap duong dan moi
        ctx.beginPath();
        ctx.arc(150, 150, 105, 0, Math.PI * 2, false);
        ctx.stroke();


        // ve hinh nen co mat troi
        ctx.drawImage(sun, 0, 0, 300, 300);

        // thuc hien phuong thuc chuc nang ve hoat canh
        window.requestAnimationFrame(draw);


    }
}

init();