// file nay demo cach lam tao ra cac hieu ung hat

// khoi tao khung hexi va load doi tuong du lieu duoc su dung trong tro choi
var g = hexi(256, 256, setup, ["/static/imgs/star.png"]);
g.start();

g.backgroundColor = "black";
g.scaleToWindow();

// thuc hien phuong thuc setup: khoi tao cac doi tuong hoat canh trong tro choi
function setup() {

    // khi nhan chuot
    g.pointer.press = function () {
        
        // tao ra hieu ung hat voi doi so: vi tri dat hat (x, y) la vi tri dat chuot, hinh anh cho hat la hinh anh star.png, hat duoc dat trong container g.stage, so luong hat duoc phat ra
        g.createParticles(g.pointer.x, g.pointer.y, function () {
            return g.sprite("/static/imgs/star.png");
        }, g.stage, 10);
    };


    // them text huong dan tao hat
    g.text("Tap to make stars", "14px Futura", "white", 6, 4);

}