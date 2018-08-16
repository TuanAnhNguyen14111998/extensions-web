* Canvas la phan tu moi duoc them vao trong HTML5. No duoc phat trien boi apple va la mot trong nhung doi tuong duoc su dung de ve hinh cap thap gan nhat so voi cac cong cu lam game hien nay. Dieu nay lam cho viec viet ma tao do hoa tren canvas se nhieu hon, sau hon, nhung hieu nang ma no dem lai se la rat cao
* Canvas khong ve bang vecto ma no duoc ve bang cac pixel. Phu hop voi viec ve cac bieu do, so do dong, va ho tro cac tro choi video.
* Ngoai ra, se co nhieu thu vien khac ho tro canvas tao ra do hoa 3D nhu WebGL
* Canvas duoc khai bao trong HTML, thi DOM se tao ra mot khung hinh chu nhat cho canvas. Tat ca cac noi dung duoc ve se nam gioi han trong khung nay ma khong vuot ra ngoai.
* Do canvas duoc ve bang pixel, vao trong canvas khong co cay DOM, cho nen viec thiet lap CSS cho cac ban ve trong canvas la khong the, ta chi co the CSS cho khung bao boc canvas nhu viec them mau vien, chinh chieu dai chieu rong, ... doi voi khung nay thoi. Con noi dung duoc ve trong khung nay ta se khong the can thiep bang CSS 
* Chu y: Ta can phai nho: canvas la mot khung hinh chu nhat co chieu dai va rong ta co the chinh sua duoc. Con tat ca cac net ve deu duoc ve trong khung nay va khong the vuot ra khoi khung do. Khong CSS duoc cac net ve ma chi co the chinh sua kieu bang cac cau lenh trong canvas do apple cung cap.
* Canvas co lien quan den javascrip va HTML
* Kich thuoc mac dinh cua canvas la 300 * 150 px. Kich thuoc co the tuy chinh duoc bang thuoc tinh height va width trong HTML
* De ve do hoa tren canvas, ta su dung doi tuong boi canh javascript, tao do hoa khi dang di chuyen
-------------------------------------------------------
* Phan tu canvas duoc khai bao trong file HTML nhu sau:
`<canvas id="tutorial" width="150" height="150"></canvas>`
* chieu rong mac dinh la 300 * 150 px;
* Co the thay doi chieu rong va chieu cao bang CSS hoac thay doi truc tiep bang cac thuoc tinh cua the canvas.
* Khuyen cao: nen thay doi truc tiep bang cac thuoc tinh cua canvas. Boi vi neu thay bang CSS, viec khong dam bao ty le chieu dai va chieu rong se lam cho hinh bi meo hoac mat net ve cua hinh trong canvas.
* **id** la thuoc tinh khong cu the trong canvas vi noi dung cua canvas khong can thiep duoc bang CSS. tuy nhien day la cach tot nhat de xac dinh mot khung canvas trong file HTML. Khuyen cao la nen co thuoc tinh **id** nay.
* Khung canvas co the duoc CSS bang cac thuoc tinh CSS binh thuong nhu: margin, border, bottom, ... Tuy nhien, noi dung cua canvas thi CSS khog the can thiep duoc. Viec tao ra cac hieu ung cho noi dung trong canvas se duoc cac cau lenh trong canvas thuc hien.
* Khi khong co kieu nao duoc ap dung cho canvas. Canvas se hoan toan trong suot
* Do khong phai tat ca cac trinh duyet nao cung ho tro canvas, cho nen ta phai co mot doi tuong du phong cho canvas de tren trinh duyet khong ho tro, thi phan tu du phong nay se duoc hien thi ra. con doi voi trinh duyet ho tro canvas thi chi co phan tu canvas duoc hien thi ra ma thoi.
* vi du: `<canvas id="clock" width="150" height="150"><img src="images/clock.png" width="150" height="150" alt=""/></canvas`
* hoac: `<canvas id="stockGraph" width="150" height="150"> current stock price: $3.15 + 0.15 </canvas>`
* Canvas yeu cau phai co the dong `</canvas>`
* Phan khong gian trong khung cua canvas duoc goi la **ngu canh hien thi**. Chung ta se tao, va thao tac noi dung duoc hien thi trong vung khong gian nay.
* Hien tai ta nghien cuu ve ngu canh 2D con 3D hay tim hieu trong thu vien WebGL
------------------------------------------------------------
* Bat dau thuc hien thao tac voi canvas don gian
* canvas ban dau trong. De hien thi mot cai gi do trong khung cua canvas, thi ta can phai tu file HTML truy cap vao boi canh ve, tuc la khoang khong gian co trong canvas de co the dung hinh va ve len no.
* Phan tu canvas - khi duoc lay ra trong file HTML bang javascript dua vao id: co mot phuong thuc co ten la getContext(), duoc su dung lay boi canh ve cua canvas va lay tat ca cac ham ve cua canvas.
* Phuong tuc **getContext()** co mot tham so la loai ngu canh. Doi voi do hoa 2D ban chi dinh tham so la '2d' de co duoc 1 **CanvasRenderingContext2D**
* `var canvas = document.getElementById('tutorial'); var ctx = canvas.getContext('2d');`
* Tuy nhien, do khong phai tat cac cac loai trinh duyet deu ho tro cho canvas. Cho nen viec bat su kien co ho tro hay khong cug rat quan trong. Thay vi them cac phan tu thay the ta nen su dung phuong phap kiem tra if else sau:
`var canvas = document.getElementById('tutorial'); if (canvas.getContext) { var ctx = canvas.getContext('2d') // drawing code here } else { // canvas-unsupported code here }`
* Cau lenh **canvas.getContext) co tac dung ktra trinh duyet co ho tro canvas hay khong.
--------------------------------------------------------------
* Nhu vay ta se co mau toi gian sau. Va tat ca cac bai tap tiep theo ngay sau day se deu su dung tu mau toi gian nay de thuc hien cac doan code minh hoa
* xem trong file template.html
* Kich ban tren su dung su kien **load** tren file HTML. Nhu vay, HTML phai thuc hien load xong thi moi duoc thuc thi function draw(). Ngoai load ra, ta co the su dung cac phuong thuc co san trong javascript nhu **window.setTimeOut()** hoac **window.setInterval()**, hoac bat cu su kien nao khac. Mien sao thoa man dieu kien la trang phai duoc tai dau tien.
* xem vi du don gian trong file vidu-dongian.html