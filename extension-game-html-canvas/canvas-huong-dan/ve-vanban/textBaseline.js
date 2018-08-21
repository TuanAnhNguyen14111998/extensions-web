function draw() {
// truy xuat phan tu canvas
var canvas = document.getElementById('tutorial'); 

    // kiem tra canvas co duoc ho tro boi trinh duyet hay khong
    if (canvas.getContext) {
    var ctx = canvas.getContext('2d'); 


    var baselines = ['top', 'hanging', 'middle', 'alphabetic', 'ideographic', 'bottom']; 
        ctx.font = '36px serif'; 
        ctx.strokeStyle = 'red';
        baselines.forEach(function (baseline, index) {
            ctx.textBaseline = baseline;
            var y = 75 + index * 75;
            ctx.beginPath(); ctx.moveTo(0, y + 0.5); ctx.lineTo(550, y + 0.5); ctx.stroke();
            ctx.fillText('Abcdefghijklmnop (' + baseline + ')', 0, y);
        });
    }
}