// b1: Thiet lap va khoi dong hexi
// - tao mot mang liet ke cac tep ma ban muon tai: project nay tai mot hinh anh, mot font chu va mot file nhac, neu khong co file nao can duoc tai thi co the bo qua buoc nay
let thingsToLoad = [
    "/static/imgs/cat.png",
    "/static/fonts/puzzler.otf",
    "/static/sounds/music.wav"
];

// - Khoi tao hexi voi ham hexi: ham nay cho phep ta tao ra mot khung ve co kich thuoc la 512x512 pixel.
// No cho Hexi tai cac tep trong thingsToLoad, chay mot ham chuc nang load trong khi tai cac tep du lieu nay va cuoi cung chay mot ham chuc nang setup khi moi thu da san sang:
// hai tham so thingsToLoad va load la hai tham so tuy chon
let g = hexi(512, 512, setup, thingsToLoad, load);

// - dat toc do ve lai cac khung hinh trong hoat canh, mac dinh thi thuoc tinh nay cua hexi se la 60 khung hinh / giay
g.fps = 30; // viec dat < 60 giay lam hieu suat tro choi duoc hieu qua hon

// ban co the chon duong vien va mau nen cho hexi g
g.border = "2px red dashed";
g.backgroundColor = 0x000000;

// - neu ban muon cho hexi g co kich thuoc toi da la bang kich thuoc man hinh ban su dung thuoc tinh
g.scaleToWindow();

// - cuoi cung va cung la yeu to quan trong nhat, ban hay goi phuong thuc start de khoi chay hexi. Neu khong goi ham start thi hexi se khong duoc hien thi len man hinh
g.start();

// b2: neu ban da cung cap ham chuc nang load thi de khoi tao mot thanh tien trinh tai, chi can tao mot ham load nhu sau:
function load() {

    // Hien thi tep dang duoc tai
    console.log("loading: " + g.loadingFile);

    // Hien thi phan tram tep duoc tai
    console.log("progress: " + g.loadingProgress);

    // Them thanh tai
    g.loadingBar();
}

// b3: Tao ra ham setup: ham nay co nhiem vu khoi tao va tao ra doi tuong cua ban
// - khai bao cac sprite duoc su dung, bat ky khai bao cho doi tuong nao deu duoc dat ben ngoai ham setup
var cats = undefined,
    message = undefined;

// khoi tao function de khoi tao moi thu
function setup() {

    // thuc hien cac doan code tao ra moi thu o day

    // thuc hien nhom hinh anh cac chu meo vao
    cats = g.group();

    // y tuong thuc hien: nhap chuot vao dau thi them hinh anh cats o do: day la tac dung cua ham tu dinh nghia: makeCat
    let makeCat = function makeCat(x, y) {

        // tao hinh anh con meo bang phuong thuc sprite
        // voi doi so truyen vao la duong dan cua cat.png ma chung ta da load
        let cat = g.sprite("/static/imgs/cat.png");
        // thiet lap vi tri dat sprite cat
        cat.setPosition(x, y);

        // them ham tao hoat canh
        // su dug ham breathe de thay doi scale cua cat sprite
        // su dung ham pulse de cho cat sprite dao dong
        // hai ham nay la hai ham duoc lay tu thu vien Charm
        g.breathe(cat, 2, 2, 20);
        g.pulse(cat, 10, 0.5);

        // dat toc do cho cat sprite tu 10 den -10
        cat.vx = g.randomInt(-10, 10);
        cat.vy = g.randomInt(-10, 10);

        // them cat sprite vao trong cats group
        cats.addChild(cat);

    }

    // them mot text sprite de hien thi text tren man hinh
    message = g.text("Tap for cats!", "38px puzzler", "red");
    // lam cho van ban duoc can giua trong stage
    g.stage.putCenter(message);

    //cho van ban duoc xoay dua vao tam cua message
    message.pivotX = 0.5;
    message.pivotY = 0.5;

    // thuc hien phuong thuc tap vao man hinh thi anh con meo se duoc hien thi ra man hinh, dong thoi hien thi ca so luong con meo co trong stage
    g.pointer.tap = function () {
        makeCat(g.pointer.x, g.pointer.y);
        message.content = "" + cats.children.length;
    }

    // cho them tep am nhac vao trong stage, cho thuoc tinh loop = true de co the lap lai doan am nhac khi no ket thuc
    let music = g.sound("/static/sounds/music.wav");
    music.loop = true;
    music.play();

    // thuc hien code logic hoat dong cho stage
    g.state = play;

}

// b4: Code ham play: logic cho vong lap: no se tu dong lap fps khung hinh tren 1 giay
function play() {
    // xoay chu
    message.rotation += 0.1;

    // lap qua tat ca cac con meo
    cats.children.forEach(cat => {
        // kiem tra va cham, neu con meo no co va cham vao man hinh thi cho no chuyen dong nguoc lai
        let collision = g.contain(cat, g.stage, true);
        // con meo di chuyen xung quanh man hinh dua vao phuong thuc move: no cap nhat (x, y) thong qua hai gia tri (vx, vy)
        g.move(cat);
    });


}

