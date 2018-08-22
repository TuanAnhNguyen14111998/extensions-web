function draw() {
    // truy xuat phan tu canvas
    var canvas = document.getElementById('tutorial');

    // kiem tra canvas co duoc ho tro boi trinh duyet hay khong
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        // doi tuong qua bong
        var ball = {
            x: 100,
            y: 100,
            radius: 25,
            color: 'blue',

            // phuong thuc de ve qua bong
            draw: function () {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
                ctx.closePath();
                ctx.fillStyle = this.color;
                ctx.fill();
            }

        }

        ball.draw();

    }
}