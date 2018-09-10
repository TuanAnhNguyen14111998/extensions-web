// file nay demo cach lam hieu ung hat lien tuc, thuc hien vong lap tao hieu ung hat lien tuc

// khoi tao khung hexi va load du lieu duoc su dung trong tro choi
var g = hexi(256, 256, setup, ["/static/imgs/star.png"]);
g.start();

g.backgroundColor = "black";
g.scaleToWindow();

// ham setup: Thuc hien khoi tao cac doi tuong hoat canh trong khung hexi
function setup() {

    // goi den vong lap tao hieu ung hat lien tuc
    var particleStream = g.particleEmitter(
        100, // khoang thoi gian lap lai, tinh bang ms
        function () {
            return g.createParticles( // phuong thuc tao hieu ung hat bui
                g.pointer.x, g.pointer.y, function () {
                    return g.sprite("/static/imgs/star.png");
                }, g.stage, 50);
        }
    );

    // thuc hien vong lap tao hieu ung hat khi nguoi dung nhan chuot
    g.pointer.press = function () {
        return particleStream.play();
    };

    // dung lai khi nguoi dung chuot roi di
    g.pointer.release = function () {
        return particleStream.stop();
    };

    // them thong tin cho cac doan text
    g.text("Press and hold to make stars", "14px Futura", "white", 6, 4);

}