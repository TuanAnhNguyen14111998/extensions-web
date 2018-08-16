# Huong dan ve cac hinh co ban
* Trong bai truoc, ta da thiet lap moi truong canvas de co khong gian ve hinh.
* Trong bai nay chung ta se tim hieu chi tiet ve cach ve tren canvas.
* Muc tieu bai nay:
1. ve hinh chu nhat, hinh tam giac, duong thang, duong cung va duong cong. Cung cap su quen thuoc voi mot so hinh dang co ban.
2. Lam viec voi duong dan (path) khi ve cac doi tuong vao khung ve - dieu nay la het suc can thiet va quan trong. Chung ta se hoc ve cach su dung path de ve hinh trong khug hinh.
---------------------------------------------------------
## Luoi
* ta se tim hieu ve luoi, hay toa do Oxy trong khung ve.
* Trong thiet lap moi truong, ta da tao ra bo khung ve co chieu rog = chieu dai = 150px
* ![Luoi mac dinh](https://mdn.mozillademos.org/files/224/Canvas_default_grid.png)
* trong hinh, ta thay canvas nay duoc phu len boi mot luoi mac dinh.
* Thong thuong, 1 don vi trong luoi la 1 pixel tren canvas.
* Goc O(0, 0) cua luoi hay toa do Oxy nay nam o **goc tren cung ben trai**.
* Tat ca vi tri cua cac yeu to deu duoc can chinh boi goc toa do nay
* Do do, hinh vuong mau xanh co goc tren cung ben trai cach x pixel ve phia ben trai va y pixel ve phia tren.
* Sau nay, chung ta se thay cach de dich goc toa do nay sang mot vi tri khac, xoay luoi, tham chi la chia ty le cho luoi
* Nhung bay gio ta chi thao tac voi luoi co goc toa do mac dinh la vi tri tren cung goc ben trai cua khung canvas.
---------------------------------------------------------
## Ve hinh chu nhat
* Trong canvas, chi ho tro loai hinh khoi nguyen thuy duy nhat la hinh chu nhat.
* tat ca cac hinh phuc tap khac: tu hinh tron, hinh cung, hinh tam giac ... neu muon tao ra deu phai ve bang cach ket hop mot hoac nhieu duong dan, danh sach cac diem trong duong dan do duoc noi voi nhau bang duong ke de tao hinh.
* Trong canvas, chung toi co mot loai tao chuc nang ve bang duong dan nhu vay, va co the tao ra duoc cac hinh khoi rat phuc tap
* Truoc tien, hay nhin vao hcn:
* Co ba cach ve hinh chu nhat trong canvas:
1. `fillRect(x, y, width, height)`: tac dung ve mot hinh chu nhat day du, tuc la ve hinh chu nhat voi khoang trong ben trong hinh chu nhat duoc do day bang mau den mac dinh
2. `strokeRect(x, y, width, height)`: ve duong vien cua hcn: tuc la chi ve duong vien, con khoang trong ben trong cua hinh chu nhat la trong suot
3. `clearRect(x, y, width, height)`: xoa mot hinh chu nhat: tuc la lam khoang khong trong hinh chu nhat duoc ve nay tro nen trong suot
* Moi ham tren deu co 3 tham so:
* x, y: chi toa do vi tri cua dinh tren cung ben trai cua hcn so voi goc toa do
* width, height: cung cap lan luot chieu dai, chieu rong cua hinh chu nhat
* Code vi du duoc trinh bay trong file ve-hcn.html va ve-hcn.js. Cac giai thich ve code cung duoc trinh bay trong hai file vi du nay.
* trong vi du nay, ta thay hinh chong hinh la hoan toan kha thi

* Chu y:
1. Trong phan tiep theo, ta se hoc hai phuong phap co the thay the duoc ham `clearRect()`.
2. Chung ta se hoc cach lam the nao de co the thay doi mau sac va kieu cho cac hinh ve duoc hien thi trong khung canvas.
3. Trong bai hoc nay, 3 phuong thuc ve hinh chu nhat co dac diem la ve ngay lap tuc hinh ve vao trong khung canvas. Trong phan tiep theo, dieu nay se khong con ton tai nua, ma ta phai ve tung net mot. Do la cach ve theo duong dan ma ta se duoc tiep can de tao ra cac hinh phuc tap hon ngoai hinh chu nhat nguyen thuy - day cung la cach duy nhat de tao ra cac hinh ve phuc tap ngoai hinh chu nhat nguyen thuy duy nhat.
---------------------------------------------------------------
## Ve bang duong dan
* Hinh chu nhat nguyen thuy la hinh duy nhat duoc ve khong su dung duong dan (path).
* Duong dan la danh sach cac diem, duoc noi voi nhau bang cac doan duong co the co hinh dang khac nhau: co the la duong thang, duong cong, hoac khog, co do day net ve khac nhau va mau sac net ve cung co the khac nhau.
* Mot con duong co the duoc dong lai tao thanh mot hinh khoi kin.
* De tao hinh khoi bang duong dan, hay thuc hien cac buoc sau day:
1. Dau tien, ban hay tao duong dan.
2. Sau do, ban hay su dung **lenh ve** de ve hinh theo duong dan nay.
3. Khi duong dan da duoc tao, ban co the tao mau, tao do day, tao net ve dut, lien cho net ve
* Duoi day la cac ham chuc nang phuc vu cac cong viec tren:
* **beginPath()**: Khao bao rang ta se ve mot hinh bang duong dan. Khi khai bao xong thi ta se thuc hien lan luot cac ham chuc nang ve theo duong dan. Sau khi khai bao xong duong dan: duong dan hien tai dang la trong.
* Cac phuong thuc dung de ve tren duong dan:
1. **closePath()**: Them mot duong thang vao duong dan: tuc la tu mot diem dang dat net ve, se noi voi diem dau cua duong dan luc moi dat net ve => dieu nay lam cho hinh ve tro thanh hinh kin.
2. **stroke()**: Ve hinh bang cach ve theo duong dan: thuc hien xong phuong thuc nay, hinh duoc ve chi la hinh co vien, khoang khong gian trong hinh la trong suot
3. **fill()**: cung co tac dung ve hinh bang cach ve theo duong dan: nhung khi thuc hien xong phuong thuc nay, hinh ve la hinh day: duoc lap day khoang khong gian ben trong bang mau den mac dinh
* chu y: Noi la ve theo duong dan - khong co nghia la ta phai tao mot mang danh sach toa do duong dan bang phuong thuc beginPath(). beginPath() chi la khai bao voi trinh duyet rang, toi chuan bi ve hinh theo duong dan ma thoi. Tuy khong ve truc tiep nhung beginPath() luon luon phai co va dat o dau tien.
* Cac ham stroke(), fill() duoc dat sau tat ca cac ham chuc nang ve khac. Hai ham nay co tac dung chot lai cac duong dan do cac ham chuc nang o tren khai bao va thuc su moi bat dau ve. neu khong co mot trong hai ham nay thi duong dan se khong duoc ve tren khug hinh
* Ngay sau khi goi phuong thuc **beginPath()** ta goi them ham **moveTo()** de co the chuyen vi tri dat net ve tai toa do (x, y) nao do de ve. Dieu nay la dieu ma lap trinh vien deu muon thuc hien.
* Chuc nang **closePath()** se co gang dong hinh bang cach ve mot duong thang tu diem hien tai den diem bat dau. Lam cho hinh la kin. Neu hinh dang da bi dong, hoac net ve chi co mot diem, hoac chi co mot duong thang thi chuc nang nay se khong lam gi ca.
* Chu y: khi goi ham fill(), moi hinh dang se tu dong dong ma ta khong phai goi chuc nang closePath() nua.
* Nhung dieu nay se khong dung neu ban goi ham stroke(): tuc la chi ve vien cua hinh ve thoi.

======================================
* Nhu vay:
* phuong thuc **beginPath()** co tac dung khai bao mot duong dan moi
* phuong thuc **moveTo()** dung de dat net ve tai vi tri co toa do (x, y) nao do
* ... cac phuong thuc set duong dan ...
* phuong thuc **closePath()** co tac dung noi diem dau va diem cuoi cua duong dan
* phuong thuc **fill()**, **stroke()**: co tac dung tong ket va thuc su ve hinh vao khung cua canvas
-------------------------------------------------------------------------------
## Ve hinh tam giac
* Xem trong file .html, .js co cung ten goi
* cac giai thich da co o trong 2 file nay
-------------------------------------------------------------------------------
## Di chuyen vi tri dat net but
* Mot ham rat huu ich trong duong dan, tuy thuc su no khong ve ra bat cu net nao ca, nhung no cu ky quan trong, do la ham di chuyen net but va dat net but tai vi tri co toa do (x, y) nao do.
* Ban hay lien tuong no giong nhu viec de ve duoc tai vi tri nao do, ban phai nhac but chi tu vi tri nay len va dat but chi xuong tai vi tri can ve. Ham ta sap noi den day co y tuong va tac dung tuong tu
* **moveTo()**: di chuyen but den toa do (x, y);
* Hay xem trong vi du ve file ve hinh mat cuoi, neu khong co phuong thuc moveTo() thi cac net ve se bi lien nhau: mat, mieng va dau se lien net voi nhau.
-------------------------------------------------------------------------------
## Ve net thang
* De ve duong thang, ta su dung phuong thuc **lineTo()**
* lineTo(x, y): ve mot duong thang tu vi tri toa do dat net but den vi tri co toa do (x, y).
* diem bat dau khi ve duong thang bang lineTo() cung co the duoc thay doi bang cach su dung ham moveTo()
* xem trong file ve-duongthang.html va ve-duongthang.js
* Chu y: doi voi cac phuong thuc ve ma chua xac dinh duoc diem dat but la diem nao vi du nhu ham lineTo() thi viec dat ham moveTo() la **bat buoc**, neu khong ham lineTo() se khong ve ra bat cu mot net nao ca.
--------------------------------------------------------------------------------
## Ve vong cung hoac vong tron
* De ve vong cung hoac vong tron, ta co hai phuong thuc chuc nang thuc hien cong viec nay
1. **arc(x, y, R, Goc bat dau, Goc ket thuc, nguoc chieu kim dong ho (true / false))**:
* Ve mot duong tron voi tam nam o vi tri (x, y), ban kinh R, diem dat net ve tai vi tri goc bat dau, va ket thuc net ve o vi tri goc ket thuc. Huong ve duoc chi ra theo chieu kim dong ho hoac nguoc cieu kim dong ho, tuy thuoc vao gia tri true hoac false cua tham so thu 6. Mac dinh la ve theo chieu kim dong ho.
2. **arcTo(x1, y1, x2, y2, radius)**:
* Ve mot vong cung voi cac diem va ban kinh da cho, duoc ket noi voi diem truoc do bang duong thang
* co ban, diem x1, y1, x2, y2 la cac diem dieu khien cho viec ve hinh, day khong phai la cac diem bat dau ve. Tu vi tri dat but ve mot duong thang tai vi tri co toa do (x, y) nao do bang lineTo() thi 2 diem dieu khien tren va dua vao ban kinh radius se lam cong duong thang nay theo mot duong cong.
* Xem them huong dan trong [link](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arcTo)

* Chu y: goc trong arc() khong tinh bang do ma duoc tinh theo radian. De chuyen doi tu do sang radian ta su dung bieu thuc javascript sau day:
* **radians = (Math.PI/180)*degrees**

* Xem vi du trong file ve-duongtron.html va file js co ten tuong ung.
* Chu y: Khi ve nhieu hinh va cac hinh nay khong co moi lien quan nao den nhau thi sau moi hinh ve ta phai set mot duong dan moi cho hinh tiep theo bang beginPath() neu khong hinh ve se bi noi lien va khong dat nhu mong muon ban dau.
* Tai sao, trong truong hop ve duong tron, co diem ve ban dau trong no roi sao lai phai beginPath():
* Boi vi khi ve xong mot hinh tron, diem dat but dang o mot vi tri, no phai di chuyen den vi tri dat moi cua hinh tron ke tiep nhung khi no di chuyen, viec ve no van duoc ve cho nen moi co tinh trang chong chap hinh ve.
* Vay tai sao khong su dung moveTo(): boi vi trong viec ve hinh tron, ta da co diem bat dau ve duoc xac dinh roi. Thu nua la vie su dung beginPath() de thiep lap mot duong dan moi: co tac dung thong bao cho trinh duyet biet duoc rang duong dan cu da het va khong duoc ve tu duong dan cu nua, ma phai den duong dan moi thi moi co the ve duoc.
--------------------------------------------------------------------------------------
## Bezier và đường cong bậc hai
* Duong cong bezier la cach ve duoc su dung trong do hoa may tinh. No co tac dung tao ra cac duong cong muot. Giup cho viec phong to thu nho duong cong nay khong bi vo.
* Y tuong: cac toa do cac diem duoc tinh dua vao mot ham chua tham so va cac dau vao la cac toa do cua cac diem dieu khien. Cang nhieu diem dieu khien thi ta se ve duoc cac duong cong cang min, cang cong.
* Xem them ve duong cong bezier theo [link](https://viblo.asia/p/cach-tao-ra-mot-duong-cong-min-bezier-path-curve-924lJX30KPM)
* Quay lai cach ve duong cong bezier
* duong cong bezier trong canvas co hai loai: bac 1 va bac 2. Chung duoc su dung de ve cac duong con phuc tap
* Co hai ham chuc nang tuong ung voi hai loai bac 1 va bac 2
1. **quadraticCurveTo(cp1x, cp1y, x, y)**:
* Ve duong cong bezier bac hai tu vi tri net ve dang dat den diem cuoi cung duoc chi dinh boi (x, y), su dung diem dieu khien duoc chi dinh boi (cp1x, cp1y);
* Xem vi du thong qua [link](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/quadraticCurveTo)
2. **bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)**: ve mot duong cong bezier tu vi tri net ve dang dat den diem cuoi duoc chi dinh boi (x, y), su dung cac diem dieu khien duoc chi dinh la (cp1x, cp1y), (cp2x, cp2y)

* Su khac biet cua hai loai duong cong nay duoc the hien rat ro trong hinh ve:
![duong cong bezier](https://mdn.mozillademos.org/files/223/Canvas_curves.png)

* Su dung duong cong bezier co the se kha kho khan. Boi vi no khong giong nhu trong phan mem ve vecto nhu Adobe Illustrator, canvas khong co phan hoi truc quan ve loai duong cong nay. Dieu nay lam cho no kho khan trong viec ve cac hinh dang phuc tap. Tuy nhien, bang su kien nhan, va ti mi thi co the tao ra duoc cac hinh dang phuc tap cua rieng ban.
* Vi du sau la the hien cach thuc hien cua duong cong bezier
* xem trong file duongcong-bezier.html va file .js cung ten.

------------------------------------------------------------------------------
## Hinh chu nhat (mo rong)
* Ngoai ba phuong phap chung ta da nghien cuu trong viec tao hinh chu nhat nguyen thuy o dau bai - cach ve hinh chu nhat truc tiep len canvas, cung co phuong thuc **rect()**, them mot duong dan hinh chu nhat vao duong dan hien dang mo.
* **rect(x, y, width, height)**: ve hinh chu nhat co dinh tren cung goc ben trai co toa do (x, y) voi chieu rong va chieu cao duoc truyen vao la hai tham so cuoi cua phuong thuc nay.
* Trước khi phương thức này được thực thi, moveTo()phương thức này được tự động gọi với các tham số (x, y). Nói cách khác, vị trí bút hiện tại sẽ tự động được đặt lại về tọa độ mặc định.

* Su khac biet cua ham chuc nang nay doi voi ba ham chuc nang da nghien cuu khong co nhieu khac biet lam. Chung chi khac nhau ve viec ve truc tiep va ve bang duong dan thoi!

-------------------------------------------------------------------------------
## Tao su ket hop
* Cho đến nay, mỗi ví dụ trên trang này chỉ sử dụng một loại hàm đường dẫn cho mỗi hình dạng. Tuy nhiên, không có giới hạn về số lượng hoặc loại đường dẫn mà bạn có thể sử dụng để tạo hình dạng. Vì vậy, trong ví dụ cuối cùng này, hãy kết hợp tất cả các hàm đường dẫn để tạo một tập hợp các nhân vật trò chơi rất nổi tiếng.

* Xem vi du trong file ve-tonghop.html va file .js cung ten. Vi du nay tao ra nhan vat packman trong tro choi noi tieng cung ten.

--------------------------------------------------------------------------------
## Doi tuong Path2D
* Nhu chung ta da thay o cac vi du truoc, ta co the ve hinh ve bang mot loat duong dan va cac lenh ve len doi tuong khung hinh canvas cua chung ta.
* Tuy nhien de don gian hoa ma va cai thien hieu suat, **Path2D** la doi tuong, co san trong cac phien ban trinh duyet hien nay, cho phep ban luu tru hoac ghi lai cac lenh ve nay. Ban co the phat duong dan mot cach nhanh chong.
* Hay xem cach ta xay dung mot doi tuong path2D:
* **Path2D**:
* ham **Path2D()** khoi tao tra ve mot doi tuong path2D moi, tuy chon voi mot duong dan khac lam doi so (tao ra mot ban sao cho duong dan do), hoac tuy chon voi mot chuoi chua du lieu SVG:
`new Path2D();     // empty path object`
`new Path2D(path); // copy from another Path2D object`
`new Path2D(d);    // path from SVG path data`
* Tất cả các phương pháp con đường như moveTo, rect, arc hoặc quadraticCurveTo, vv, mà chúng ta đã biết ở trên, có sẵn trên cac doi tuong Path2D
* vi du ve path2d: xem trong file sudung-path2d(1).html va file .js cung ten
* Các Path2D API cũng cho biết thêm một cách để kết hợp những con đường bằng cách sử dụng phuong phap addPath. Điều này có thể hữu ích khi bạn muốn xây dựng cho duong dan da co them cac duong dan khac de su dung duoc toi da loi ich tu cac doi tuong thanh phan da tao trong duong dan truoc.
* **Path2D.addPath(path [, transform])**
Thêm đường dẫn đến đường dẫn hiện tại với ma trận chuyển đổi tùy chọn.

--------------------------------------------------------------------------------
## Su dung duong dan SVG trong canvas
* Mot tinh nang manh me khac cua path2D API canvas la su dung doi so la duong dan SVG de khoi tao duong dan tren canvas cua ban. Dieu nay cho phep ban truyen du lieu duong dan va tai su dung chung trong ca hai, SVG va canvas
* vi du: Con đường sẽ di chuyển đến điểm ( M10 10) và sau đó di chuyển theo chiều ngang 80 điểm sang phải ( h 80), sau đó 80 điểm xuống ( v 80), sau đó 80 điểm sang trái ( h -80), và sau đó quay lại điểm bắt đầu ( z).
* `var p = new Path2D('M10 10 h 80 v 80 h -80 Z');`

* **Doi voi phan svg, ta co the su dung cac phan mem do hoa, tao hinh anh va xuat svg ra de nhung truc tiep svg vao trong du an. Dieu nay se duoc the hien trong viec thao tac voi thanh phan svg. Doi tuong nay ta se tu hoc sau**