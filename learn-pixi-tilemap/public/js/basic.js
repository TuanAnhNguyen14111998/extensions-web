// tao ra khung pixi
var renderer = PIXI.autoDetectRenderer(800, 600);
// them khung hexi vao trong document
document.body.appendChild(renderer.view);

// dat dinh danh doi tuong stage la Container bao ca ung dung, tilemap la container bao tat ca cac hinh hoat canh trong tro choi
var stage, tilemap;

// thuc hien load du lieu len
var loader = new PIXI.loaders.Loader();
// Lay cac du lieu duoc load len, dong thoi dat ten cho no
loader.add('atlas', '/static/imgs/atlas.json');
loader.add('button', '/static/imgs/button.png');

// sau khi load xong thuc hien function
loader.load(function(loader, resources) {
    // doi so dau tien la z-index, tham so nay chua duoc su dung
    // Doi so thu hai la danh sach cac ket cau (texture) - dang da chuyen doi cua anh tron Cached
    // tao stage la doi tuong Container
    stage = new PIXI.Container();
    // Danh sach cac ket cau (texture)
	tilemap = new PIXI.tilemap.CompositeRectTileLayer(0, [resources['atlas_image'].texture]);
    // them cac ket cau nay vao trong container stage
    stage.addChild(tilemap);

    // thuc hien phuong thuc thuc hien logic vong lap: sau khoang thoi gian co dinh nao do se day stage vao trong khung pixi
    animate();

    // thuc hien phuong thuc ve lai tro choi
    // su dung bien frame de xac dinh truong hop nao thi kho bau do, truong hop nao thi binh thuong, tao hieu ung nhap nhay cho kho bau, dong thoi phuong thuc buildTilemap cung thuc hien ve di ve lai cac hinh hoat canh sau khoang thoi gian 400ms
    var frame = 0;
    buildTilemap(frame++);

    // Tao ra doi tuong Sprite button
    var pic = new PIXI.Sprite(resources['button'].texture);
    // xac dinh vi tri cho button
    pic.position.set(200, 100);
    // them doi tuong button vao trong container stage
    stage.addChild(pic);

    // Thuc hien ham ve lai tro choi lien tuc sau khoang thoi gian 400ms
    setInterval(function() { buildTilemap(frame++) }, 400);
});

function buildTilemap(frame) {
    // Xoa tat ca moi hinh co trong tilemap
    tilemap.clear();
    // load len du lieu da duoc tai
    var resources = loader.resources;

    var size = 32;
    // Chay vong lap de day cac hinh con vao trong tilemap thong qua phuong thuc chuc nang addFrame
    for (var i=0;i<7;i++)
        for (var j=0;j<7;j++) {
            tilemap.addFrame("grass.png", i*size, j*size);
            if (i%2==1 && j%2==1)
                tilemap.addFrame("tough.png", i*size, j*size);
        }

    // su dung ket cau texture tu ten goi ta da dat cho du lieu khi load len
    var textures = resources.atlas.textures;
    tilemap.addFrame(textures["brick.png"], 2*size, 2*size);
    tilemap.addFrame(textures["brick_wall.png"], 2*size, 3*size);

    // kho bau se duoc nhap nhay
    tilemap.addFrame(textures[frame%2==0 ? "chest.png": "red_chest.png"], 4*size, 4*size);

    // the button vao trong tro choi, button nay khong nam trong Container stage, ma no la hinh doc lap
    tilemap.addFrame(resources.button.texture, 6*size, 2*size);
}

// sau mot khoang thoi gian nao do thi tro choi se duoc ve lai hoan toan
function animate() {
    requestAnimationFrame(animate);
    renderer.render(stage);
}
