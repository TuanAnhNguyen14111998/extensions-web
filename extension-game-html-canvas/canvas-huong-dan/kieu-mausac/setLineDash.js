// thiet lap vi tri bat dau cua net dut trong duong net ve
var offset = 0;

function draw() {

    // truy xuat phan tu canvas
    var canvas = document.getElementById('tutorial');

    // kiem tra canvas co duoc ho tro boi trinh duyet hay khong
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        // xoa tat ca cac noi dung tron khung canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // thuc hien cong viec chuyen net ve lien sang net ve dut
        // tham so dau tien la khoang cach cac net dut
        // tham so thu hai la do dai cac net dut
        ctx.setLineDash([4, 2]);

        // su dung lineDashOffset de tao ra mot luong bu dap, tuc la cu hieu tham so nay neu co gia tri khac nhau, thi cac net ve trong moi truong hop lai khac nhau
        ctx.lineDashOffset = -offset;

        // ve hinh chu nhat
        ctx.strokeRect(10, 10, 100, 100);

    }
}

// phuong thuc giup sau mot khoang thoi gian ve lai hinh chu nhat dong thoi chuyen doi gia tri offset lam vi tri cac net dut trong duong lan co offset truoc khac so voi lan co offset nay
function march() {
    offset++;
    if (offset > 16) {
        offset = 0
    };

    draw();

    setTimeout(march, 20)
}

march();
