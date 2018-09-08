// b1: Tao khung hexi va dong thoi load du lieu de tao cac doi tuong du lieu trong tro choi

// du lieu duoc tai len
var thingsToLoad = ["/static/imgs/treasureHunter.json", "/static/sounds/chimes.wav"];

// tao khung hexi
var g = hexi(512, 512, setup, thingsToLoad);

// can khung hexi o giua man hinh, nen man hinh toi mau
g.scaleToWindow();

// start hexi
g.start();

// dat dinh danh cho cac doi tuong du lieu trong tro choi
var dungeon = undefined,
    player = undefined,
    treasure = undefined,
    enemies = undefined,
    chimes = undefined,
    exit = undefined,
    healthBar = undefined,
    message = undefined,
    gameScene = undefined,
    gameOverScene = undefined;

// b2: thuc hien tao ham setup
function setup() {

    // tao doi tuong nhac
    chimes = g.sound("/static/sounds/chimes.wav");

    // tao doi tuong hinh nen
    dungeon = g.sprite("dungeon.png");

    // tao doi tuong cua thoat
    exit = g.sprite("door.png");
    exit.x = 32;

    // tao doi tuong nguoi choi
    player = g.sprite("explorer.png");
    player.x = 68;
    player.y = g.canvas.height / 2 - player.halfWidth;

    // tao doi tuong kho bau
    treasure = g.sprite("treasure.png");

    // xac dinh vi tri dat kho bau
    treasure.x = g.canvas.width - treasure.width - 40;
    treasure.y = g.canvas.height / 2 - treasure.halfHeight;

    // dat bien xac dinh lan dau nguoi choi cham vao kho bau de co the choi nhac ngay luc do
    treasure.pickedUp = false;

    // them cac doi tuong tren vao trong nho gameScene
    gameScene = g.group(dungeon, exit, player, treasure);

    // tao du lieu de phuc vu cho viec tao cac doi tuong quai vat
    var numberOfEnemies = 6,
        spacing = 48,
        xOffset = 150,
        speed = 2,
        direction = 1;

    // tao doi tuong cac quai vat
    enemies = [];

    // tao cac doi tuong cac quai vat
    for (var i = 0; i < numberOfEnemies; i++) {

        // tao doi tuong quai vat
        var enemy = g.sprite("blob.png");

        // xac dinh vi tri cua quai vat
        var x = spacing * i + xOffset;
        var y = g.randomInt(0, g.canvas.height - enemy.height);

        enemy.x = x;
        enemy.y = y;

        // xac dinh toc do di chuyen cho doi tuong quai vat
        enemy.vy = speed * direction;

        // doi huong chuyen dong cho doi tuong quai vat tiep theo
        direction *= -1;

        // them cac doi tuong quai vat vao trong mang quai vat
        enemies.push(enemy);

        // them doi tuong quai vat vao trong nhom gameScene
        gameScene.addChild(enemy);

    }

    // tao thanh suc khoe
    var outerBar = g.rectangle(128, 8, "black"),
        innerBar = g.rectangle(128, 8, "red");

    // tao nhom healthBar
    healthBar = g.group(outerBar, innerBar);

    // tham chieu den thanh suc khoe innerBar de sau nay de dang truy cap suc khoe
    healthBar.inner = innerBar;

    // xac dinh vi tri cua thanh suc khoe
    healthBar.x = g.canvas.width - 158;
    healthBar.y = 4;

    // them thanh suc khoe vao trong nhom gameScene
    gameScene.addChild(healthBar);

    // tao doi tuong text de hien thi ket qua cua tro choi
    message = g.text("Game Over!", "64px Futura", "black", 20, 20);
    message.x = 120;
    message.y = g.canvas.height / 2 - 64;

    // tao nhom gameOverScene
    gameOverScene = g.group(message);

    // khong cho nhom gameOverScene hien thi lan dau
    gameOverScene.visible = false;

    // cho phep dieu khien su di chuyen cua doi tuong nguoi choi bang keyboard
    g.arrowControl(player, 5);

    // thiet lap trang thai cua tro choi la play
    g.state = play;

}

// b3: tao ham play: la ham thuc hien logic tao chuyen dong cho tro choi
function play() {

    // cho phep nguoi choi co the chuyen dong: tuong tu nhu x + vx, y + vy
    g.move(player);

    // gioi han chuyen dong cua nguoi choi
    g.contain(player, {
        x: 32, y: 16,
        width: g.canvas.width - 32,
        height: g.canvas.height - 32
    });

    // thiet lap bien luu trang thai va cham cua nguoi choi va quai vat
    var playerHit = false;

    // duyet qua cac doi tuong quai vat
    enemies.forEach(function (enemy) {

        // cho phep di chuyen doi tuong quai vat
        g.move(enemy);

        // gioi han khong gian chuyen dong cac doi tuong quai vat
        var enemyHitsEdges = g.contain(enemy, {
            x: 32, y: 16,
            width: g.canvas.width - 32,
            height: g.canvas.height - 32
        });

        // kiem tra xem doi tuong quai vat co va cham vao cac vien tren va duoi hay khong, neu co thay doi chieu chuyen dong cua no
        if (enemyHitsEdges) {
            if (enemyHitsEdges.has("top") || enemyHitsEdges.has("bottom")) {
                enemy.vy *= -1;
            }
        }

        // kiem tra xem nguoi choi co va cham voi quai vat hay khong
        if (g.hitTestRectangle(player, enemy)) {
            playerHit = true;
        }

    });

    // neu nguoi choi va cham voi quai vat thi nguoi choi se mo di, suc khoe giam 1 pixel, neu khong thi thanh suc khoe va nguoi choi se binh thuong
    if (playerHit) {

        player.alpha = 0.5;

        healthBar.inner.width -= 1;

    } else {
        player.alpha = 1;
    }

    // kiem tra nguoi choi co va cham voi kho bau hay khong, neu co cho kho bau di chuyen cung nguoi choi, va chay nhac
    if (g.hitTestRectangle(player, treasure)) {

        treasure.x = player.x + 8;
        treasure.y = player.y + 8;

        if (!treasure.pickedUp) {

            chimes.play();
            treasure.pickedUp = true;

        }

    }

    // kiem tra dieu kien ket thuc tro choi
    // thanh suc khoe bi het
    if (healthBar.inner.width == 0) {
        g.state = end;
        message.content = "You lost!";
    }

    // kho bau va cham voi cua thoat
    if (g.hitTestRectangle(treasure, exit)) {
        g.state = end;
        message.content = "You won!";
    }

}

// b4: phuong thuc end xu ly su kien ket thuc tro choi
function end() {

    gameScene.visible = false;
    gameOverScene.visible = true;

}