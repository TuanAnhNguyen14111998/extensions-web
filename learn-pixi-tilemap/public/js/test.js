// khoi tao khung hexi
var renderer = PIXI.autoDetectRenderer(800, 600);

// them khung pixi vao trong DOM
document.body.appendChild(renderer.view);

// dinh danh doi tuong hoat hoa
var stage, tilemap, dog;

// load du lieu
var loader = new PIXI.loaders.Loader();

// load du lieu len dong thoi dat dinh danh cho no luon, luc nay du lieu duoc dat trong mang resources
loader.add('atlas', '/static/imgs/atlas.json');
loader.add('dog', '/static/imgs/dog.png');

loader.load(function(load, resources) {

    // tao mot Container - day hien tai van la Container core cua pixi
    stage = new PIXI.Container();

    // phuong thuc doc du lieu tu file .json va file .png de co the ket xuat ra duoc hinh con
    // phuong thuc nay duoc dinh nghia trong thu vien pixi-tilemap
    tilemap = new PIXI.tilemap.CompositeRectTileLayer(0, [resources['atlas_image'].texture]);
    // them doi tuong tilemap nay vao trong Container stage
    stage.addChild(tilemap);

    // lay doi tuong dog va chuyen no ve kieu Sprite - day van la kien thuc cua pixi core
    dog = new PIXI.Sprite(resources['dog'].texture);
    
    // xac dinh vi tri cho dog va add no vao container stage
    dog.position.set(200, 100);
    stage.addChild(dog);

    buildTilemap();

});

function buildTilemap() {

    // xoa tat ca hinh hien thi trong tilemap - day la phuong thuc dinh nghia trong pixi-tilemap
    tilemap.clear();

    // load len du lieu da duoc tai len - trong pixi core
    var resources = loader.resources;

    // chuyen dang cac hinh du lieu - van trong pixi-core
    var textures = resources.atlas.textures;

    // xac dinh hinh anh nao duoc hien thi trong tilemap - trong pixi-tilemap (doi so sau la vi tri (x, y))
    tilemap.addFrame(textures["tough.png"], 30, 30);

    tilemap.addFrame(textures["grass.png"], 60, 30);

    // tra ve container stage va add no vao trong renderer
    renderer.render(stage)

}