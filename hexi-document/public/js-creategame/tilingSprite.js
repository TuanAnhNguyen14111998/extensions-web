// file huong dan tao ra mot hinh cuon, no tuong tu nhu hieu ung parallax, day la mot hieu ung gia 3D

// tao khung hexi va load du lieu tao doi tuong hoat canh trong tro choi
var g = hexi(256, 256, setup, ["/static/imgs/tile.png"]);
g.start();

g.scaleToWindow();

// dat dinh danh cho cac doi tuong tro choi
var box = undefined;

// thuc hien ham setup de khoi tao doi tuong tro choi
function setup() {

    // khoi tao doi tuong duoc cuon
    box = g.tilingSprite("/static/imgs/tile.png", 128, 128);

    // dat doi tuong cuon nay vao giua khung hinh hexi
    g.stage.putCenter(box);

    // cho tro choi thuc hie vong lap logic
    g.state = play;

}

// thuc hien vong lap logic tao chuyen dong cho hoat canh trong tro choi
function play() {

    // su dung hai thuoc tinh tileX va tileY de co the cuon duoc hoat canh box: no tuong tu nhu viec di chuyen ngang theo chieu Ox va doc theo chieu Oy thi se tro thanh di chuyen cheo tu trai sang phai va tu tren xuong duoi
    box.tileX += 1;
    box.tileY += 1;

}