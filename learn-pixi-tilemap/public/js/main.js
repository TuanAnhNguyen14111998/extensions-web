/**
 * Created by Liza on 30.10.2015.
 */

// dat dinh danh cho cac doi tuong duoc su dung trong tro choi
var _renderer;
var rpgMakerLoader = requireRpgMaker();

// doi tuon stage (la doi tuong trong pixi core) va doi tuong tilemap (duoc su dung trong pixi-tilemap)
var stage = null;
var tilemap = null;

// ty le: nhan gia tri tuy chon, duoc xu ly boi function getOptionValue, scale nay co tac dung lam cho tro choi duoc phong to hay thu nho: 1 la lam tro choi tran het man hinh.
// phuong thuc getOptionValue nay co tac dung lam cho tro choi tuong tich duoc voi nhieu man hinh - cai nay ap dung cho cac thiet bi khac
var scale = +(getOptionValue('scale') || 1);

// do phan giai: cung dong vai tro phong to hay thu nho tro choi - cai nay ap dung cho may tinh
var resolution = +(getOptionValue('resolution') || window.devicePixelRatio);
var ratio = window.devicePixelRatio / resolution;

// Thay doi kich thuoc cua tilemap, co tac dung lam cho tro choi phu hop voi cac thiet bi
function resizeTilemap() {
    // neu khong ton tai tilemap thi return luon
    if (!tilemap) return;
    // Xac dinh chieu cao va chieu rong cua tilemap dua vao scale va _renderer cua pixi core
    tilemap.width = (_renderer.width + 2*tilemap._margin) * scale;
    tilemap.height = (_renderer.height + 2*tilemap._margin) * scale;
    stage.scale.x = 1.0/scale;
    stage.scale.y = 1.0/scale;
    stage.filterArea = new PIXI.Rectangle(0, 0, _renderer.width*scale, _renderer.height*scale);
}

// phuong thuc resize nay la phuong thuc lam cho tro choi phu hop voi man hinh may tinh
function resize() {
    var r = ratio;
    _renderer.resize(window.innerWidth * r | 0, window.innerHeight * r | 0);
    resizeTilemap();
}

// co tac dung xac dinh duoc ty le phong to hay thu nho danh cho cac thiet bi khac nhau
function getOptionValue(name) {

    // tim kiem trong location (duong dan), cat chung ra dua vao ky tu '&'
    var params = location.search.slice(1).split('&');
    for (var i=0;i<params.length;i++) {
        if (params[i].substring(0, name.length) === name && params[i][name.length] === "=") {
            return params[i].substring(name.length+1);
        }
    };
    return null;
};

function isOptionValid(name) {
    return location.search.slice(1).split('&').indexOf(name) >= 0;
};

// phuong thuc khoi tao khung pixi
function setupView() {
    var backCanvas = document.querySelector('#backCanvas');
    // kiem tra webGL co duoc ho tro hay khong, neu khong thi tao khung pixi bang autoDetectRenderer
    if (isOptionValid('canvas'))
        _renderer = new PIXI.CanvasRenderer(backCanvas.width, backCanvas.height, {view: backCanvas, resolution: resolution, antialias: 1, autoresize: true});
    else
        _renderer = PIXI.autoDetectRenderer(backCanvas.width, backCanvas.height, {view: backCanvas, resolution: resolution, antialias: 1, autoresize: true});
    
    // resize lai kich thuoc cua _renderer
    resize();
    window.addEventListener('resize', resize)
}

// phuong thuc khoi tao game
function setupGame() {
    // sau mot thoi gian se thuc hien phuong thuc update
    update();
    // load du lieu bang rpgMakerLoader
    rpgMakerLoader.load('Map001', function(err, map) {

        // neu co loi thi return luon
        if (err) return;
        // dat tilemap thanh doi tuong du lieu map duoc tra ve
        tilemap = map;

        tilemap.roundPixels = (scale==1);

        // stage la Container trong pixi core
        stage = new PIXI.Container();
        // them doi tuong tilemap vao trong Container stage
        stage.addChild(tilemap);
        // resize lai tilemap
        resizeTilemap();
    });
}

//window.requestAnimationFrame = function(cb) {
//    return setTimeout(cb, 500);
//}

// animTime: thoi gian hoat hinh
var dt = 0, last = 0, animTime = 0;

// phuong thuc update lai khung pixi sau mot khoang thoi gian
function update() {
    var now = Date.now();
    var dt = Math.min(1000, now-last);
    dt/=1000;
    
    last = now;

    if (stage) {
        // tilemap la doi tuong map duoc tra ve trong function load du lieu MAP001 - xem cau tao cua tilemap nay trong class rpgMakerLoader de tim hieu phuong thuc update cua tilemap la nhu the nao, tac dung cua no ra sao
        tilemap.update();

        // code thuc hien xac dinh cac gia tri x2, y2 lam cho tilemap moi lan update co the tao ra hieu ung di chuyen anh de ta nhin duoc hinh cua tro choi o moi vi tri
        var dt2 = dt;
        var w1 = tilemap._tileWidth * tilemap._mapWidth;
        var h1 = tilemap._tileHeight * tilemap._mapHeight;
        var x1 = tilemap.origin.x, y1 = tilemap.origin.y;
        var x2=0, y2=0;
        for (var i=0;i<30;i++) {
            var at2 = animTime + dt2;
            x2 = Math.max(0, w1 - _renderer.width * scale / resolution) * (Math.cos(at2*0.5) + 1)/2;
            y2 = Math.max(0, h1 - _renderer.height * scale / resolution) * (Math.sin(at2*0.4) + 1)/2;
            var d = Math.sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1));
            if (d>5*scale / resolution) {
                dt2 = dt2 / (d / 5 / scale / ratio );
            } else break;
        }
        animTime += dt2;
        // phuong thuc di chuyen tilemap
        tilemap.origin.x = x2;
        tilemap.origin.y = y2;
        // day stage Container vao trong _renderer de hien thi ra man hinh
        _renderer.render(stage);
        _renderer.gl.flush();
    }

    // sau mot khoang thoi gian thuc hien function update
    requestAnimationFrame(update);
}


window.go = function () {
    setupView();
    setupGame();
}