function draw() {
    // truy xuat phan tu canvas
    var canvas = document.getElementById('tutorial');

    // kiem tra canvas co duoc ho tro boi trinh duyet hay khong
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        ctx.fillRect(0, 0, 150, 150);   // Draw a rectangle with default settings
        ctx.save();                  // Save the default state

        ctx.fillStyle = '#09F';      // Make changes to the settings
        ctx.fillRect(15, 15, 120, 120); // Draw a rectangle with new settings

        ctx.save();                  // Save the current state
        ctx.fillStyle = '#FFF';      // Make changes to the settings
        ctx.globalAlpha = 0.5;
        ctx.fillRect(30, 30, 90, 90);   // Draw a rectangle with new settings

        ctx.restore();               // Restore previous state
        ctx.fillRect(45, 45, 60, 60);   // Draw a rectangle with restored settings

        ctx.restore();               // Restore original state
        ctx.fillRect(60, 60, 30, 30);   // Draw a rectangle with restored settings

    }
}

// save() la phuong thuc chuc nang giup luu cac trang thai da duoc thiet lap cho canvas. Cac thanh phan canvas duoc su dung tiep sau do se thua ke cac kieu trang thai nay cua canvas da duoc luu.
// restore() la phuong thuc chuc nang doi nghich voi phuong thuc chuc nang save() o tren. No co tac dung lam cho cac trang thai cua canvas quay nguoc lai thoi diem truoc khi co trang thai vua luu. Va cac canvas sau cau lenh nay su dung trang thai truoc trang thai canvas vua duoc save do.
// Chu y: Cac trang thai cua canvas doc luu trong mot ngan xep, khi nao can no se them vao dinh cua ngan xep hay khi nao can thi xoa mot trang thai nao do o ngan xep