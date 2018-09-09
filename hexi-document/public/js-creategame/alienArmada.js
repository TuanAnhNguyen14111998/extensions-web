// b1: Khoi tao khung hexi va load du lieu tao cac doi tuong trong tro choi
var thingsToLoad = [
    "/static/imgs/alienArmada.json",
    "/static/sounds/explosion.mp3",
    "/static/sounds/music.mp3",
    "/static/sounds/shoot.mp3",
    "/static/fonts/emulogic.ttf" //<- The custom font
];

var g = hexi(480, 320, setup, thingsToLoad, load);

g.scaleToWindow();

g.start();

// dat dinh danh cho cac doi tuong co trong tro choi
var cannon = undefined,
    scoreDisplay = undefined,
    music = undefined,
    bullets = undefined,
    winner = undefined,
    shootSound = undefined,
    explosionSound = undefined,
    aliens = undefined,
    score = undefined,
    scoreNeededToWin = undefined,
    alienFrequency = undefined,
    alienTimer = undefined,
    gameOverMessage = undefined;

// thuc hien ham load de tao ra thanh load khi tro choi dang load du lieu
function load() {

    // tao ra thanh load tro choi
    g.loadingBar();

}

// b2: Tao ham setup thuc hien viec khoi tao cac doi tuong hoat canh lan dau
function setup() {

    // tao ra doi tuong hinh nen
    var background = g.sprite("background.png");

    // tao doi tuong phao
    cannon = g.sprite("cannon.png");

    // xac dinh vi tri cua phao
    g.stage.putBottom(cannon, 0, -40);

    // mang cac vien dan
    bullets = [];

    // mang cac nguoi ngoai hanh tinh
    aliens = [];

    // tao ra doi tuong text hien thi diem so
    scoreDisplay = g.text("0", "20px emulogic", "#00FF00", 400, 10);

    // tao doi tuong nhac nen
    music = g.sound("/static/sounds/music.mp3");

    // cho nhac nen chay
    music.play();

    // tao ra doi tuong nhac khi ban nguoi ngoai hanh tinh
    shootSound = g.sound("/static/sounds/shoot.mp3");

    // xac dinh duoc loa ben trai hay phai duoc phat (dao dong tu -1: loa ben trai, 1 la loa ben phai)
    shootSound.pan = -0.5;

    // tao ra doi tuong nhac phat no
    explosionSound = g.sound("/static/sounds/explosion.mp3");

    // 75% la am thanh duoc phat tu loa phai
    explosionSound.pan = 0.5;

    // xac dinh cac bien cho viec nhan cac phim tren ban phim
    var leftArrow = g.keyboard(37),
        rightArrow = g.keyboard(39),
        spaceBar = g.keyboard(32);

    // xu ly khi nhan phim mui ten trai
    leftArrow.press = function () {

        // xac dinh van toc chuyen dong cho phao
        cannon.vx = -5;
        cannon.vy = 0;

    }

    // xu ly khi ko nhan phim trai: ko nhan phim trai va phim phai khong duoc nhan thi cho van toc di chuyen = 0
    leftArrow.release = function () {

        if (!rightArrow.isDown && cannon.vy === 0) {
            cannon.vx = 0;
        }

    }

    // tuong tu khi nhan phim mui ten phai
    rightArrow.press = function () {
        cannon.vx = 5;
        cannon.vy = 0;
    };

    rightArrow.release = function () {

        if (!leftArrow.isDown && cannon.vy === 0) {
            cannon.vx = 0;
        }

    };

    // xu ly su kien khi nhan dau cach
    spaceBar.press = function () {

        // thuc hien su kien shoot
        g.shoot(
            cannon, // doi tuong duoc thuc hien shoot
            4.71, // goc de ban dan len
            cannon.halfWidth, // vi tri x dan duoc dat duoc xuat hien
            0, // vi tri y dan duoc xuat hien
            g.stage, // noi dan duoc dat vao
            7, // toc do di chuyen cua dan
            bullets, // dan duoc them vao mang bullets
            function () {
                return g.sprite("bullet.png"); // ham tra ve doi tuong vien dan de hien thi trong chuc nang ban
            }
        )

        // thuc hien choi nhac shoot
        shootSound.play();

    }

    // cac bien cua tro choi
    score = 0;
    scoreNeededToWin = 60;
    alienTimer = 0;
    alienFrequency = 100;
    winner = "";

    // dat trang thai play cho tro choi
    g.state = play;

}

// b2: Tao phuong thuc play: xu ly logic vong lap tao hoat canh cho tro choi
function play() {

    // cho doi tuong phao co the di chuyen
    g.move(cannon);

    // doi tuong phao di chuyen trong gioi han cua khung hexi
    g.contain(cannon, g.stage);

    // cho doi tuong dan di chuyen
    g.move(bullets);

    // tang thoi gian de co the tao ra doi tuong nguoi ngoai hanh tinh
    alienTimer++;

    // neu alienTimer == alienFrequency thi duoc quyen tao ra mot nguoi ngoai hanh tinh moi
    if (alienTimer === alienFrequency) {

        // ten cac doi tuong nguoi ngoai hanh tinh
        var alienFrames = ["alien.png", "explosion.png"];

        // tao ra sprite doi tuong nguoi ngoai hanh tinh
        var alien = g.sprite(alienFrames);

        // dat ten de hien thi cac doi tuong nguoi ngoai hanh tinh
        alien.states = {
            normal: 0,
            destroyed: 1
        };

        // xac dinh vi tri cua nguoi ngoai hanh tinh
        alien.y = 0 - alien.height;

        alien.x = g.randomInt(0, 14) * alien.width;

        // xac dinh toc do di chuyen cua nguoi ngoai hanh tinh
        alien.vy = 1;

        // them nguoi ngoai hanh tinh vao mang cua no
        aliens.push(alien);

        // dat alienTimer ve gia tri 0
        alienTimer = 0;

        // tang toc do tao nguoi ngoai hanh tinh
        if (alienFrequency > 2) {
            alienFrequency--;
        }

    }

    // cho phep di chuyen nguoi ngoai hanh tinh
    g.move(aliens);

    // duyet qua mang mang nguoi ngoai hanh tinh
    aliens = aliens.filter(function (alien) {

        // bien xac dinh nguoi ngoai hanh tinh da chet hay chua
        var alienIsAlive = true;

        // duyet qua mang dan
        bullets = bullets.filter(function (bullet) {

            // neu co su va cham giua nguoi ngoai hanh tinh va dan
            if (g.hitTestRectangle(alien, bullet)) {

                // loai dan ra khoi hexi
                g.remove(bullet);

                // hien thi nguoi ngoai hanh tinh o trang thai destroyed
                alien.show(alien.states.destroyed);

                // cho chay nhac no
                explosionSound.play();

                // dung chuyen dong cua nguoi ngoai hanh tinh
                alien.vy = 0;

                // trang thai nguoi ngoai hanh tinh da chet
                alienIsAlive = false;

                // doi sau 1 giay se loai bo nguoi ngoai hanh tinh khoi hexi
                g.wait(1000, function () {
                    return g.remove(alien);
                });

                // tang diem len 1
                score += 1;

                // loai bo doi tuong dan trong vong lap hien tai khoi mang dan
                return false;

            } else {

                // neu khong co va cha thi se giu vien dan trong mang cac vien dan
                return true;

            }



        })

        // tra ve trang thai alienIsAlive: neu da chet thi la false, tra ve false de loai bo doi tuong nguoi ngoai hanh tinh nay khoi mang cac nguoi ngoai hanh tinh, nguoc lai la true thi giu lai doi tuong nguoi ngoai hanh tinh
        return alienIsAlive;

    });

    // cap nhat noi dung diem
    scoreDisplay.content = score;

    // xac dinh dieu kien ket thuc tro choi
    // neu ban du 60 nguoi ngoai hanh tinh thi ket thuc tro choi
    if (score === scoreNeededToWin) {

        // xac dinh trang thai thang
        winner = "player";

        // trang thai ket thuc
        g.state = end;

    }

    // neu nguoi ngoai hanh tinh di qua khung hexi thi dung tro choi
    aliens.forEach(function (alien) {

        if (alien.y > g.canvas.height) {

            winner = "aliens";

            g.state = end;

        }

    })

}

// b3: ham thuc hien xu ly logic khi tro choi ket thuc
function end() {

    // cho dung vong lap logic cua tro choi
    g.pause();

    // tao doi tuong text hien thi ket qua cua tro choi
    gameOverMessage = g.text("", "20px emulogic", "#00FF00", 90, 120);

    // giam am luong cua tro choi
    music.volume = 0.5;

    // neu nguoi choi thang
    if (winner === "player") {
        gameOverMessage.content = "Earth Saved!";
        gameOverMessage.x = 120;
    }

    // neu nguoi ngoai hanh tinh thang
    if (winner === "aliens") {
        gameOverMessage.content = "Earth Destroyed!";
    }

    // doi khoang 3s de tro choi khoi dong lai thong qua phuong thuc reset
    g.wait(3000, function () {
        return reset();
    });

}

// b4: thuc hien logic phuong thuc reset de tro choi khoi dong lai
function reset() {

    // cac thong so cua tro choi duoc thiet lap lai
    score = 0;
    alienFrequency = 100;
    alienTimer = 0;
    winner = "";

    // thiet lap lai am luong cua tro choi
    music.volume = 1;

    // loai bo tat ca cac doi tuong trong hai mang sau:
    g.remove(aliens);
    g.remove(bullets);

    // xoa doi tuong hien thi doi tuong nao thang tro choi
    g.remove(gameOverMessage);
    
    // thiet lap lai vi tri cho phao
    g.stage.putBottom(cannon, 0, -40);

    // thuc hien lai vong lap tro choi play
    g.state = play;

    // cho tro choi duoc tiep tuc
    g.resume();

}