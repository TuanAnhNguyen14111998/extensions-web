// file thuc hien tao chuyen dong cho mot doi tuong hoat canh
// tuc la tim hieu cach tao mto sprite dong

// thuc hien tao khung hexi dong thoi tai du lieu voi nhieu anh la nhung anh cau tao nen chuyen dong
var g = hexi(256, 256, setup, ["/static/imgs/pixieFrames.png"]);
g.start();

g.scaleToWindow();

// dat dinh danh cho doi tuong hoat canh
var pixie = undefined;

// thuc hien file setup: khoi tao cac doi tuong co trong tro choi
function setup() {

    // cat cac hinh con trong cua hinh pixieFrames.png
    var pixieFrames = g.frames("/static/imgs/pixieFrames.png", // hinh me: pixieFrames
        [[0, 0], [48, 0], [96, 0]], // xac dinh vi tri cua cac hinh con trong hinh me
        48, 32 // chieu dai va chieu rong cua cac hinh con trong hinh me
    );

    // tao doi tuong hoat canh pixie
    pixie = g.sprite(pixieFrames);

    // toc do chuyen dong cua hoat canh pixie
    pixie.fps = 24;

    // cho chay anh dong
    pixie.playAnimation();

    // thuc hien ham play: logic vong lap cho tro choi
    g.state = play;

}

// thuc hien logic vong lap cho tro choi
function play() {

    // cho anh dong chay theo chuot tren man hinh
    g.followEase(pixie, g.pointer, 0.1);

}