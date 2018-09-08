//b1: Tao khung hexi dong thoi thuc hien load cac doi tuong du lieu can su dung cho tro choi
var thingsToLoad = ["/static/imgs/explorer.png", "/static/imgs/dungeon.png", "/static/imgs/blob.png", "/static/imgs/treasure.png", "/static/imgs/door.png", "/static/sounds/chimes.wav"];

// tao khung hexi
var g = hexi(512, 512, setup, thingsToLoad);

// cho khung hexi vao giua va cho nen man hinh mau toi
g.scaleToWindow();

// start hexi
g.start();

// dat dinh danh cac doi tuong hoat canh trong tro choi
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

// b2: thiet lap setup, ham nay chay mot lan vao thich hop cho viec thiet lap cac doi tuong hoat canh
function setup() {

    // tao doi tuong am thanh
    chimes = g.sound("/static/sounds/chimes.wav");

    // tao doi tuong hinh nen
    dungeon = g.sprite("/static/imgs/dungeon.png");

    // tao doi tuong cua thoat
    exit = g.sprite("/static/imgs/door.png");
    exit.x = 32;

    // tao doi tuong nguoi choi
    player = g.sprite("/static/imgs/explorer.png");
    player.x = 68;
    player.y = g.canvas.height / 2 - player.halfWidth;

    // tao doi tuong kho bau
    treasure = g.sprite("/static/imgs/treasure.png");

    // thiet lap vi tri cho doi tuong kho bau
    treasure.x = g.canvas.width - treasure.width - 40;
    treasure.y = g.canvas.height / 2 - treasure.halfHeight;

    // thiet lap thuoc tinh de xac dinh lan dau goi nhac len khi nguoi choi va cham vao kho bau
    treasure.pickedUp = false;

    // tao nhom gameScene
    gameScene = g.group(dungeon, exit, player, treasure);

    // tao cac du lieu dung de tao quai vat
    var numberOfEnemies = 6,
        spacing = 48,
        xOffset = 150,
        speed = 2,
        direction = 1;

    // tao ra mang cac quai vat de sau nay duyet cac doi tuong quai vat duoc de dang
    enemies = [];

    // tao cac doi tuong quai vat
    for (var i = 0; i < numberOfEnemies; i++) {

        // tao doi tuong quai vat
        var enemy = g.sprite("/static/imgs/blob.png");

        // xac dinh vi tri cua cac doi tuong quai vat
        var x = spacing * i + xOffset;
        var y = g.randomInt(0, g.canvas.height - enemy.height);

        enemy.x = x;
        enemy.y = y;

        // xac dinh van toc chuyen dong cua cac doi tuong quai vat
        enemy.vy = speed * direction;

        // doi chieu chuyen dong cho doi tuong quai vat tiep theo
        direction *= -1;

        // them cac doi tuong quai vat vao trong mang quai vat
        enemies.push(enemy);

        // them doi tuong quai vat vao trong nhom gameScene
        gameScene.addChild(enemy);

    }

    // tao ra thanh suc khoe
    var outerBar = g.rectangle(128, 8, "black"),
        innerBar = g.rectangle(128, 8, "red");

    // tao nhom healthBar
    healthBar = g.group(outerBar, innerBar);

    // tao bien tham chieu den thanh outerBar de sau nay truy cap suc khoe de dang
    healthBar.inner = innerBar;

    // xac dinh vi tri cho thanh suc khoe
    healthBar.x = g.canvas.width - 158;
    healthBar.y = 4;

    // the thanh suc khoe vao nhom gameScene
    gameScene.addChild(healthBar);

    // them doi tuong text de hien thi ket qua tro choi
    message = g.text("Game Over!", "64px Futura", "black", 20, 20);
    message.x = 120;
    message.y = g.canvas.height / 2 - 64;

    // them doi tuong message vao trong nhom gameOverScene
    gameOverScene = g.group(message);

    // khong cho nhom gameOverScene hien thi dau tien
    gameOverScene.visible = false;

    // cho phep thuc hien di chuyen nguoi choi bang keyboard, moi lan di chuyen la 5 pixel
    g.arrowControl(player, 5);

    // thiet lap trang thai cho tro choi la ham play
    g.state = play;

}

// b3: thuc hien ham play: code trong ham play thuc hien tao ra hoat canh chuyen dong cho tro choi trong vong lap tro choi
function play() {

    // cho phep di chuyen nguoi choi, tuong tu nhu x + vx, y + vy
    g.move(player);

    // giu nguoi choi di chuyen trong mot khoang khong gian gioi han
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

