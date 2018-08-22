// tao ra mot doi tuong anh moi
var img = new Image();

// lay nguon anh
img.src = 'https://mdn.mozillademos.org/files/4553/Capitan_Meadows,_Yosemite_National_Park.jpg';

// kich thuoc cua canvas
var CanvasXSize = 800;
var CanvasYSize = 200;

// toc do: thap hon la nhanh hon, vi so ms cang it ve cang nhieu lan
var speed = 30;

// tang ti le
var scale = 1.05;

// toan canh theo chieu doc
var y = -4.5;

var dx = 0.75;
var imgW;
var imgH;
var x = 0;
var clearX;
var clearY;
var ctx;

// neu anh duoc load len thi thuc hien hanh dong
img.onload = function () {

    imgW = img.width * scale;
    imgH = img.height * scale;

    if (imgW > CanvasXSize) {
        x = CanvasXSize - imgW;
    }

    if (imgW > CanvasXSize) {
        clearX = imgW;
    }
    else {
        clearX = CanvasXSize;
    }

    if (imgH > CanvasYSize) {
        // image height larger than canvas
        clearY = imgH;
    } else {
        clearY = CanvasYSize;
    }

    // set refresh rate
    return setInterval(draw, speed);

}

function draw() {
    // truy xuat phan tu canvas
    var canvas = document.getElementById('tutorial');

    // kiem tra canvas co duoc ho tro boi trinh duyet hay khong
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        ctx.clearRect(0, 0, clearX, clearY); // clear the canvas

        // if image is <= Canvas Size
        if (imgW <= CanvasXSize) {
            // reset, start from beginning
            if (x > CanvasXSize) {
                x = -imgW + x;
            }
            // draw additional image1
            if (x > 0) {
                ctx.drawImage(img, -imgW + x, y, imgW, imgH);
            }
            // draw additional image2
            if (x - imgW > 0) {
                ctx.drawImage(img, -imgW * 2 + x, y, imgW, imgH);
            }
        }

        // image is > Canvas Size
        else {
            // reset, start from beginning
            if (x > (CanvasXSize)) {
                x = CanvasXSize - imgW;
            }
            // draw aditional image
            if (x > (CanvasXSize - imgW)) {
                ctx.drawImage(img, x - imgW + 1, y, imgW, imgH);
            }
        }
        // draw image
        ctx.drawImage(img, x, y, imgW, imgH);
        // amount to move
        x += dx;

    }
}