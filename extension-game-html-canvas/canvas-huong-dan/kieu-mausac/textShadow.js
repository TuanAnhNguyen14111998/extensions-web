function draw() {
    // truy xuat phan tu canvas
    var canvas = document.getElementById('tutorial');

    // kiem tra canvas co duoc ho tro boi trinh duyet hay khong
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        // cho bong di chuyen sang phai 2 o pixel va xuong duoi 2 o pixel
        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 2;

        // lam mo bong cua chuoi van ban
        ctx.shadowBlur = 2;

        // dat mau cho bong cua chuoi van ban
        ctx.shadowColor='rgba(0, 0, 0, 0.5)';

        // dat font va kich thuoc cho chuoi van ban
        ctx.font='20px Times New Roman';
        
        // dat mau cho chuoi van ban
        ctx.fillStyle='black';
        
        // dien noi dung cho chuoi van ban tai vi tri (5, 30)
        ctx.fillText("Sample String", 5, 30);
        
    }
}