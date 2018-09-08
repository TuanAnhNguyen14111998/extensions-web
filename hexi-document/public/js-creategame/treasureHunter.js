// b1: Tao khung hexi va load am nhac
let g = hexi(512, 512, setup, ["/static/sounds/chimes.wav"]);

// cho khugn hexi nam giau man hinh dong thoi nen cua man hinh la mau den
g.scaleToWindow();

// start hexi
g.start();

// dat dinh danh cho cac doi tuong hoat canh se duoc su dung trong tro choi
let dungeon, player, treasure, enemies, chimes, exit,
  healthBar, message, gameScene, gameOverScene;

// b2: thiet lap ham setup, ham nay se dc chay mot lan va thich hop cho viec khoi tao cac doi tuong hoat canh
function setup() {

  // tao doi tuong am nhac
  chimes = g.sound("/static/sounds/chimes.wav");

  // tao nhom gameScene
  gameScene = g.group();

  // tao ra doi tuong cua thoat
  exit = g.rectangle(48, 48, "green");
  exit.x = 8;
  exit.y = 8;
  gameScene.addChild(exit);

  // tao doi tuong nguoi choi
  player = g.rectangle(32, 32, "blue");
  player.x = 68;
  player.y = g.canvas.height / 2 - player.halfHeight;
  gameScene.addChild(player);

  // tao kho bau
  treasure = g.rectangle(16, 16, "gold");

  // thiet lap vi tri cho kho bau
  treasure.y = g.canvas.height / 2 - treasure.halfHeight;

  // dat vi tri can giua cho kho bau
  g.stage.putCenter(treasure, 208, 0);

  // thiet lap thuoc tinh de xac lan thu nhat nguoi choi va cham voi kho bau
  treasure.pickedUp = false;

  // them kho bau vao trong nhom gameScene
  gameScene.addChild(treasure);

  // tao quai vat
  let numberOfEnemies = 6,
    spacing = 48,
    xOffset = 150,
    speed = 2,
    direction = 1;

  // tao mang quai vat de sau nay duyet qua tung quai vat
  enemies = [];

  // tao vong lap de tao 6 quai vat
  for (let i = 0; i < numberOfEnemies; i++) {

    // tao quai vat mau do
    let enemy = g.rectangle(32, 32, "red");

    // thiet lap vi tri cho quai vat
    let x = spacing * i + xOffset;
    let y = g.randomInt(0, g.canvas.height - enemy.height);

    enemy.x = x;
    enemy.y = y;

    // thiet lap van toc cho quai vat
    enemy.vy = speed * direction;

    // chuyen huong cho quai vat tiep theo
    direction *= -1;

    // them quai vat vao trong mang quai vat
    enemies.push(enemy);

    // them quai vat vao trong nhom gameScene
    gameScene.addChild(enemy);

  }

  // tao thanh suc khoe
  let outerBar = g.rectangle(128, 16, "black"),
    innerBar = g.rectangle(128, 16, "yellowGreen");

  // tao group cho hai thanh suc khoe
  healthBar = g.group(outerBar, innerBar);

  // them dinh danh tham chieu den doi tuong innerBar de ve sau cap nhat width cho suc khoe
  healthBar.inner = innerBar;

  // xac dinh vi tri cho thanh suc khoe
  healthBar.x = g.canvas.width - 148;
  healthBar.y = 16;

  // them thanh suc khoe vao trong gameScene
  gameScene.addChild(healthBar);

  // them doi tuong text hien thi thong bao ket qua cua tro choi
  message = g.text("Game Over!", "64px Futura", "black", 20, 20);
  message.x = 120;
  message.y = g.canvas.height / 2 - 64;

  // tao nhom gameOverScene chua doi tuong text
  gameOverScene = g.group(message);

  // khong cho gameOverScene hien thi dau tien
  gameOverScene.visible = false;

  // cho doi tuong nguoi choi duoc di chuyen bang ban phim moi lan di chuyen 5 pixel
  g.arrowControl(player, 5);

  // dat trang thai cho hexi la ham play
  g.state = play;

}

// b3: Tao ham play thuc hien doan code tao cac hieu ung hoat canh trong vong lap tao hoat canh
function play() {

  // cho phep doi tuong nguoi choi co the di chuyen, no tuong tu nhu x + vx, y + vy
  g.move(player);

  // giu cho doi tuong tro choi chi chay trong gioi han cua khung hexi
  g.contain(player, g.stage);

  // thiet lap thuoc tinh xac dinh nguoi choi da va cham voi quai vat hay chua
  let playerHit = false;

  // thuc hien duyet qua vong lap cac quai vat
  enemies.forEach(enemy => {

    // cho phep doi tuong quai vat co the di chuyen
    g.move(enemy);

    // gioi han doi tuong quai vat khong di chuyen ra ngoai ra khoi khung hexi
    let enemyHitsEdges = g.contain(enemy, g.stage);

    // kiem tra xem doi tuong quai vat cham vao vien tren hay duoi de chuyen doi huong chuyen dong cua no
    if (enemyHitsEdges) {
      if (enemyHitsEdges.has("top") || enemyHitsEdges.has("bottom")) {
        enemy.vy *= -1;
      }
    }

    // kiem tra xem doi tuong nguoi choi co va cham voi doi tuong quai vat hay khong
    if (g.hitTestRectangle(player, enemy)) {
      playerHit = true;
    }

  });

  // neu co va cham giua nguoi choi va quai vat cho nguoi choi mo di va suc khoe giam 1 pixel neu khong thi hien thi nguoi choi va thanh suc khoe binh thuong
  if (playerHit) {

    player.alpha = 0.5;

    healthBar.inner.width -= 1;

  } else {

    player.alpha = 1;

  }

  // kiem tra xem doi tuong nguoi choi co va cham voi kho bau hay khong, neu co cho kho bau di theo doi tuong nguoi choi va phat am thanh mot lan dau
  if (g.hitTestRectangle(player, treasure)) {

    treasure.x = player.x + 8;
    treasure.y = player.y + 8;

    if (!treasure.pickedUp) {

      chimes.play();
      treasure.pickedUp = true;

    }

  }

  // xac dinh khi nao tro choi ket thuc
  // khi suc khoe het thi hien thi thua
  if (healthBar.inner.width ==  1) {

    g.state = end;
    message.content = "You lost!";

  }

  // neu kho bau duoc va cham voi cua thoat thi hien thi thang cuoc
  if (g.hitTestRectangle(treasure, exit)) {
    g.state = end;
    message.content = "You won!";
  }

}

// phuong thuc trang thai thuc hien code ket thuc tro choi
function end() {

  gameScene.visible = false;
  gameOverScene.visible = true;

}