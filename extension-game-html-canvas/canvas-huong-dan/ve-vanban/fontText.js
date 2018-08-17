function draw() {
    // truy xuat phan tu canvas
    var canvas = document.getElementById('tutorial');

    // kiem tra canvas co duoc ho tro boi trinh duyet hay khong
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        // thiet lap font chu cho chuoi van ban sap duoc ve
        ctx.font='48px sans-serif';
        
        // ve chuoi van ban
        ctx.strokeText("Hello World", 50, 100);
        

    }
}