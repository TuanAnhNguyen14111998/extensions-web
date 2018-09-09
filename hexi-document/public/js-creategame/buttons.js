// file thuc hien thao tac voi doi tuong button trong hexi.js

// load du lieu
var thingsToLoad = ["/static/imgs/buttonFrames.png", "/static/fonts/puzzler.otf", "/static/imgs/button.json"];

// khoi tao khung hexi
var g = hexi(256, 256, setup, thingsToLoad);
g.start();

g.scaleToWindow();

// dat dinh danh cac doi tuong co trong hexi
var button = undefined,
    stateMessage = undefined,
    actionMessage = undefined;

// function setup: khoi tao cac doi tuong hoat canh
function setup() {

    // mang chua hinh anh cac trang thai cua cac nut
    var buttonFrames = ["up.png", "over.png", "down.png"];

    // tao ra doi tuong button tu mang buttonFrames
    button = g.button(buttonFrames);

    // thuc hien cac hanh dong sau khi cac su kien chuot tac dong len button
    // su kien nhan button
    button.press = function () {
        return console.log("pressed");
    };

    // su kien nha chuot khoi button
    button.release = function () {
        return console.log("released");
    };

    // su kien cho chuot di qua button
    button.over = function () {
        return console.log("over");
    };

    // su kien cho chuot di qua khoi button
    button.out = function () {
        return console.log("out");
    };

    // su kien nhan hai lan chuot lien tiep vao button
    button.tap = function () {
        return console.log("tapped");
    };

    // xac dinh vi tri cua button trong khung hexi
    button.x = g.canvas.width / 2 - 96;
    button.y = g.canvas.height / 2 - 48;

    // mot so dong text hien thi trang thai cua button va hanh dong tren button do
    stateMessage = g.text("State not set", "14px puzzler", "black");
    stateMessage.x = 12;
    stateMessage.y = 12;

    actionMessage = g.text("Action not set", "14px puzzler", "black");
    actionMessage.x = 12;
    actionMessage.y = 32;

    // gan trang thai cho stage ham play: logic vong lap cua tro choi
    g.state = play;

}

// logic vong lap tro choi
function play() {

    // hien thi noi dung cua trang thai va hanh dong tren button ra man hinh
    stateMessage.content = "State: " + button.state;
    actionMessage.content = "Action: " + button.action;

}