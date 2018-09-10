// file thuc hien tro choi flappyFairy tuong tu nhu tro choi plappy bird

// b1: Khoi tao khung hexi va load du lieu duoc su dung trong tro choi
var thingsToLoad = ["/static/imgs/flappyFairy.json"];

var g = hexi(910, 512, setupTitleScreen, thingsToLoad);
g.start();

g.backgroundColor = "black";
g.scaleToWindow();

// dat dinh danh cho cac doi tuong hoat canh trong tro choi
var pointer = undefined,
    canvas = undefined,
    fairy = undefined,
    sky = undefined,
    blocks = undefined,
    title = undefined,
    goButton = undefined,
    finish = undefined,
    dust = undefined,
    dustFrames = undefined;

// b2: tao function setupTitleScreen khoi tao cac doi tuong hoat canh ban dau khi chua vao tro choi
function setupTitleScreen() {

    // tao doi tuong hoat canh bau troi
    sky = g.tilingSprite("sky.png", g.canvas.width, g.canvas.height);

    // tao ra doi tuong hien thi ten tro choi
    title = g.sprite("title.png");

    // cho ten tro choi duoc dat giua man hinh
    g.stage.putCenter(title, 0, -70);

    // tao doi tuong button
    goButton = g.button(["up.png", "over.png", "down.png"]);

    // xac dinh vi tri cho doi tuong button
    g.stage.putCenter(goButton, 0, 150);

    // thuc hien thao tac xu ly sau su kien nha chuot khi nhan button va chay ham setupGame
    goButton.release = function () {
        console.log("test");
        g.state = setupGame;
    };

    // thuc hien cho doi tuong hoat canh bau troi chay hieu ung parallax
    g.state = playTitleScreen;

}

// phuong thuc tao hieu ung parallax cho hinh nen
function playTitleScreen() {

    // cho bau troi di chuyen theo phuong ngang cua truc Ox va theo chieu tu phai sang trai
    sky.tileX -= 1;

}

// b3: phuong thuc setupGame thuc hien khoi tao cac doi tuong hoat canh trong tro choi
function setupGame() {

    // cho nhan ten tro choi va button duoc an di
    title.visible = false;
    goButton.visible = false;

    // vo hieu hoa button
    goButton.enabled = false;

    // nhom cac khoi chuong ngai vat
    blocks = g.group();

    // khoang cach ban dau cua cac cot la 4
    var gapSize = 4;

    // so luong cac cot chuong ngai vat
    var numberOfPillars = 15;

    // thuc hien vong lap 15 lan de tao ra 15 chuong ngai vat
    for (var i = 0; i < numberOfPillars; i++) {

        // tao ra cac doi tuong block va day cac doi tuong block nay vao trong nhom blocks
        var startGapNumber = g.randomInt(0, 8 - gapSize);

        if (i > 0 && i % 5 === 0) gapSize -= 1;

        for (var j = 0; j < 8; j++) {

            if (j < startGapNumber || j > startGapNumber + gapSize - 1) {
                var block = g.sprite("greenBlock.png");
                blocks.addChild(block);
                block.x = i * 384 + 512;
                block.y = j * 64;
            }

        }

        // them doi tuong finish vao trong blocks: doi tuong nay thong bao ket thuc tro choi
        // chu y: khi ca blocks nay di chuyen thi keo theo ca thang finish nay cung di chuyen theo vi finish nam trong blocks
        if (i === numberOfPillars - 1) {
            finish = g.sprite("finish.png");
            blocks.addChild(finish);
            finish.x = i * 384 + 896;
            finish.y = 192;
        }

    }

    // tao doi tuong hoat canh fairy
    var fairyFrames = ["0.png", "1.png", "2.png"]; // 3 anh dung de tao doi tuog dong
    fairy = g.sprite(fairyFrames);
    fairy.fps = 12; // 2 khung hinh tren giay de tao anh dong
    fairy.setPosition(232, 32); // xac dinh vi tri cua fairy
    fairy.vy = 0; // toc do di chuyen cua fairy
    fairy.oldVy = 0; // toc do truoc do cua fairy

    // tao ra mang chua cac hat theo sau fairy
    dustFrames = ["pink.png", "yellow.png", "green.png", "violet.png"];

    // thuc hien tao bui co tich
    dust = g.particleEmitter(

        300, // thoi gian tao bui lien tuc
        function () { // function tao bui co tich

            g.createParticles(

                fairy.x + 8,
                fairy.y + fairy.halfHeight + 8, // vi tri cua bui co tich
                function () {
                    return g.sprite(dustFrames); // tra ve ngau nhien cac hinh anh trong mang bui co tich
                },
                g.stage, // container ma bui co tich duoc dat vao
                3, // so luong bui co tich
                0, // trong luc
                true, // khoang cach cac bui duoc random
                2.4, 3.6, // goc lon nhat va goc nho nhat
                12, 18, // kich thuoc lon nhat va kich thuoc nho nhat
                1, 2, // toc do lon nhat va toc do nho nhat
                0.005, 0.01, //Min/max ti le
                0.005, 0.01, //Min/max do mo
                0.05, 0.1 //Min/max do quay

            )

        }

    );

    // cho bui co tich duoc chay
    dust.play();

    // moi khi nhan chuot vao man hinh thi tang toc do vy cho fairy
    g.pointer.tap = function () {
        fairy.vy += 1.5;
    };

    // thiet lap vong lap logic cho tro choi
    g.state = play;

}

// b4: thiet lap vong lap logic cho tro choi
function play() {

    // thuc hien hieu ung parallax cho doi tuong bau troi
    sky.tileX -= 1;

    // cho cac blocks duoc chay: y tuong, do finish nam trong blocks nen khi x cua finish con chua den giua man hinh thi ca blocks van di chuyen ve ben trai 2 pixel. Chu y: finish cung nam trong blocks cho nen khi blocks di chuyen thi finish cung di chuyen theo
    if (finish.gx > 256) {
        blocks.x -= 2;
    }

    // neu khong tap thi fairy se bi roi xuong
    fairy.vy += -0.05;
    fairy.y -= fairy.vy;

    // neu vy > oldvy thi cho chay hinh dong fairy
    if (fairy.vy > fairy.oldVy) {
        if (!fairy.playing) {
            fairy.playAnimation();
            if (fairy.visible && !dust.playing) dust.play();
        }
    }

    // con neu vy < oldvy thi cho hien thi fairy la hinh thu 0 trong mang chua cac hinh fairy
    if (fairy.vy < 0 && fairy.oldVy > 0) {
        if (fairy.playing) fairy.stopAnimation();
        fairy.show(0);
        if (dust.playing) dust.stop();
    }

    // luu tru gia tri toc do truoc do
    fairy.oldVy = fairy.vy;

    // gioi han chuyen dong cua fairy chi trong khung hexi
    var fairyVsStage = g.contain(fairy, g.stage);
    if (fairyVsStage) {
        if (fairyVsStage.has("bottom") || fairyVsStage.has("top")) {
            fairy.vy = 0;
        }
    }

    // duyet mag blocks kiem tra va cham voi fairy
    var fairyVsBlock = blocks.children.some(function (block) {
        return g.hitTestRectangle(fairy, block, true);
    });

    // neu co va cham va fairy van con duoc hien thi
    if (fairyVsBlock && fairy.visible) {

        // khong cho fairy hien thi
        fairy.visible = false;

        // tao hieu ung hat bui co tich
        g.createParticles(

            fairy.centerX, fairy.centerY, // dat gia tri x va y la trung tam cua fairy, tuc la vu no se xuat phat tu trung tam cua fairy
            function () {
                return g.sprite(dustFrames); // tra ve doi tuong mang bui co tich
            },
            g.stage, // noi bui co tich duoc dat vao
            20, // so luong bui co tich
            0, // trong luc
            false, // random khoang cach
            0, 6.28, //Min/max goc
            16, 32, //Min/max kich thuoc
            1, 3 //Min/max toc do

        );

        // cho bui co tich lien tuc ta da tao o phan tren nua dung lai
        dust.stop();

        // dung khoang 3 giay sau de reset lai tro choi
        g.wait(3000, reset);

    }
}

// b5: phuong thuc reset lai tro choi
function reset() {

    // cho hien thi fairy
    fairy.visible = true;
    // dat lai vi tri cho fairy
    fairy.y = 32;
    fairy.vy = 0;
    
    // cho bui co tich chay
    dust.play();

    // dat cac doi tuong chuong ngai vat ve vi tri cu
    blocks.x = 0;

}