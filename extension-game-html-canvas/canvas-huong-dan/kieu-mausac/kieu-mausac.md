# Huong dan ap dung cac kieu va mau sac doi voi cac ban ve duoc ve trong doi tuong canvas
* Trong cac bai truoc ve ve cac hinh dang cua cac hinh ve tu co ban den phuc tap, chung ta chi su dung cac kieu va mau sac mac dinh de ap dung cho chung.
* Trong bai nay, chung ta se kham pha them ve cac tuy chon tren canvas ma chung ta co the su dung chung de xu ly cac ban ve duoc hap dan hon.
* Ban se tim hieu ve:
1. Cach them cac kieu, mau sac khac nhau cho hinh ve
2. Them cac kieu ve duong (hay noi cach khac la tuy chon ve cac net ve, day mong, bo tron dau hay la de vuong dau, ...)
3. Gradient
4. Tao hieu ung bong cho ban ve
----------------------------------------------------------------------------
## Mau sac
* Cho den bay gio, chung ta chi moi nghien cuu ve cac ham chuc nang phuc vu cho viec ve cac net ve de tao hinh.
* Neu chung ta muon ap dung mau sac cho mot hinh ve, co hai thuoc tinh quan trong ma chung ta co the su dung
1. fillStyle
2. strokeStyle
* **fillStyle = color**: do day mau vao khong gian trong cua hinh ve voi mau la color
* **strokeStyle = color**: dat mau cho cac duong vien cua hinh ve
* Color la mot chuoi dai dien cho doi tuong color trong CSS, mot doi tuong gradient hay mot doi tuong mau. Chung ta se xem xet doi tuong gradient va doi tuong mau sau nay.
* Theo mac dinh, thi gia tri mau cua duong vien va mau trong khong gian ben trong cua hinh ve la mau den (Gia tri may CSS la #000000).
* Chu y: sau khi ban dat gia tri mau cho cac thuoc tinh fillStyle va strokeStyle, thi cac mau nay se tro thanh mac dinh tu phan code do tro ve sau. Cac hinh ve nao ma duoc ve sau cac hinh vua duoc ap dung hai thuoc tinh nay se mang cac gia tri mau nhu chung. De thay doi mau cho bat cu hinh ve nao tro ve sau, thi ta phai set lai gia tri cho cac thuoc tinh nay.
* Gia tri hop le cho color la mot chuoi hop le mang gia tri mau trong CSS
* Chu y: neu muon ap dung kieu mau sac cho mot hinh ve nao do, ta phai khai bao cac thuoc tinh fillStyle, hay strokeStyle truoc khi ve hinh, neu khai bao sau, thi hinh truoc duoc ve voi mau mac dinh roi thi mau duoc khai bao sau se khong duoc ap dung cho hinh ay ma chi co the ap dung cho cac hinh duoc khai bao sau doan code ta set mau.
* Xem xet vi du cho tung thuoc tinh tren
1. **fillStyle**:
- fillStyle = "color | gradient | pattern"
- Thuoc tinh: color: gia tri mau cho hinh ve
- gradient: cho mot gradient tuyen tinh hoac xuyen tam (tim hieu sau)
- pattern: thuoc tinh cho phep mot doi tuong hinh anh co the duoc lap di lap lai
- vi du don gian ve fillStyle: xem trong file fillStyle.html va file .js cung ten
2. **strokeStyle**:
- strokeStyle = "color | gradient | pattern"
- gradient: cho mot gradient tuyen tinh hoac xuyen tam (tim hieu sau)
- pattern: thuoc tinh cho phep mot doi tuong hinh anh co the duoc lap di lap lai
- vi du don gian ve fillStyle: xem trong file strokeStyle.html va file .js cung ten

-------------------------------------------------------------------
## Transparency - tinh minh bach (hay hieu don gian la lam mo hinh ve)
* De lam mo hinh ve ta su dung thuoc tinh: **globalAlpha**
* thuoc tinh nay co the lam cho hinh tro nen bat trong suot hoac trong suot hoan toan
* globalAlpha = Gia tri do trong suot
* Gia tri cua do trong suot nam trong khoang:
* 0: hoan toan trong suot
* 1.0: hoan toan mo duc
* Gia tri do trong suot co gia tri mac dinh la 1.0 (hoan toan mo duc)
* globalAlpha se co tac dung khi ban ve nhieu hinh chong len nhau, nhung lai khong huu ich trong truong hop ban muon tac rieng cac hinh ra khoi nhau, moi ca nhan mot hinh la mot ca the doc lap khong lien quan den nhau
* Chu y: neu muon su dung luon gia tri cua globalAlpha trong cac ham strokeStyle hay fillStyle thi thay vi ban su dung rgb() de set gia tri mau, thi ban co the su dung rgba(0, 0, 0, 0.5): voi gia tri cuoi la gia tri cua do trong suot globalAlpha. Con neu khong muon su dung theo cach tich hop nay ban co the goi rieng thuoc tinh globalAlpha de co the set duoc do trong suot cho hinh.
* **Chu y quan trong**: globalAlpha khac hoan toan so voi gradient. gradient chung ta se nghien cuu trong phan sau cua bai hoc nay
* Xem vi du trong file globalAlpha.html va file .js cung ten

---------------------------------------------------------------------
## Kieu duong
* Co cac thuoc tinh cho phep ta co the tao kieu cho cac net ve
1. lineWidth = value: dat chieu rong cho cac duong duoc ve trong tuong lai
2. lineCap = type: Dat hinh dang cho cac dau cua net ve: dau duoc bo tron, de vuong goc, ... 
3. lineJoin = type: Dat hinh dang cho cac doan noi cua cac duong thang: tuc la cac doan noi ay la duoc bo tron goc, net sac, ...
4. miterLimit = value: xem trong link: [link](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/miterLimit): chac la dung de lam dai ra va sac them cac doan noi giua cac duong thang
5. getLineDash(): tra ve cac duong ve la dau gach ngang
6. setLineDash(segments): tra ve duong ve la cac duong net lien
7. ineDashOffset = value: chinh vi tri bat dau cua duong net dut cua net ve

--------------------------------------------------------------------
## Giai thich ve cac thuoc tinh duoc neu trong kieu duong
### lineWidth
* Thuoc tinh nay thiet lap do day cho net ve hien tai. Gia tri cua do day nay phai la so duong. Theo mac dinh, gia tri cho do day la 1.0
* Do rong duong net = 2 * chieu rong cua net ve o giua va keo dai ve hai ben
* Do trong canvas, cac net ve khong phai luc nao cung duoc ve day trong cac o pixel khi ap dung thuoc tin set do rong cho net ve. Cho nen, neu ta khong thiet lap dung cho do rong cua net ve bang dung cac o pixel phu hop, thi net ve se bi mo, do net ve khong duoc day cac o pixel, phan con lai cua o pixel se dien mot luong net xap xi va nhu the tao ra mot net mo chu khong phai la mot net sac, net ve se khong dut khoat va chinh xac
* De giai thich cho hien tuong nay, ta xem vi du trong file lineWidth.html va file .js co cung ten
* **Giai thich cho hien tuong tren**:
* Viec lay duong sac net doi hoi su hieu biet ve cac duong net ve duoc ve nhu the nao trong luoi.
* Trong hinh anh duoi day, luoi nay bieu thi cac toa do trong canvas. Cac o vuong duoc coi nhu mot o pixel tren man hinh.
* Trong hinh dau tien:

![lineWidth1](https://mdn.mozillademos.org/files/201/Canvas-grid.png)

* Mot hinh chu nhat tu toa do (2, 1) den (5, 5) lap day cac o pixel. Toan bo khu vuc giua chung (mau do nhat) roi tren cac ranh gioi pixel, do do hinh chu nhat nay co canh la sac net.
* Doi voi hinh thu 2, mot net ve duoc ve tu vi tri co toa do (3, 1) den (3, 5) voi do day duong thang la 1.0.

![lineWidth2](https://mdn.mozillademos.org/files/201/Canvas-grid.png)

* Vung thuc te duoc lap day (mau xanh dam) chi rong mot nua chung so voi cac o pixel ve hai ben cua net ve. Do do, mot cach ve xap xi duoc ap dung trong truong hop nay, cac khoang trong tu net ve den phan vien cua o pixel con de trong lai se duoc lap day bang cac net ve xap xi, va mau sac, net ve khong duoc dut khoat do may tinh phai tinh xap xi gia tri mau cua duong ve nay. Tuc la so voi thuc te, cac stroke co do net la 1.0 thi do net cua phan con lai trong o pixel chi con mo la 0.5. Do do, ca net ve trong hinh 2 se bi mo, khong net.

* De khac phuc duoc dieu nay, ban phai rat chinh xac trong viec tao do day trong cac duong net ve.

![lineWidth2](https://mdn.mozillademos.org/files/201/Canvas-grid.png)

* Biet rang, 1.0 la do day cua duong net ve, va do rong nay duoc ve bang cach mo rong ra hai ben cua net ve. Do day = 2 * chieu rong cua mot nua net ve
* Viec tao net ve nhu trong hinh thu 3, net ve duoc ve tu toa do (3.5, 1) den (3.5, 5) ta se mot net ve chinh xac. Do day cua net ve la 1.0 va net ve duoc lap day cac o pixel tuong ung chua net ve.

* Chu y: trong cac bai truoc:
* Viec ve hinh chu nhat do duoc thuc hien truc tiep va may tinh thuc hien cho cho nen cac net ve cua hinh chu nhat la chinh xac - ngoai tru viec ve hinh chu nhat bang duong dan su dung phuong thuc chuc nang la rect()
* Tuy nhien, viec ve cac hinh phuc tap khac nhu hinh tam giac, hinh tron, hinh chu nhayt (duoc ve bang phuong thuc chuc nang rect()), ... thi cac net ve chua duoc net. Ly do nhu ta da chi ra trong truong hop cua hinh anh thu 2.

* Cho nen, doi voi viec ve cac duong net trong canvas thi ta phai de y mot cach chinh xac do day cua no, cung nhu cach ma no lap day cac o pixel. Co nhu vay ta moi duoc cac duong ve sac net

* Chu y: trong vi du ve duong thang duoc ve doc o tren, vi tri net ve tai truc Oy duoc ve den dung duong vien cua luoi. Neu khong chung ta se thay hien tuong tuog tu doi voi chieu rong cho net ve tai diem dau va diem cuoi cua net ve. Nhug cung phai chu y rang, diem dau va diem cuoi cua net ve con phu thuoc rat nhieu vao thuoc tinh **lineCap**. Kieu chung ta dang thay cua diem dau va diem cuoi cua net ve la kieu mac dinh **butt** (mong) cua lineCap. Ban co the dat gia tri cho thuoc tinh lineCap la **square** de no co the mo rong duong vien cua chieu rong nay ra day cac o pixel de duoc net ve sac net.
* Cung luu y rang, hien tuong nay chi xay ra cho diem dau va diem cuoi cua net ve. Con neu ta da thuc hien phuong thuc chuc nang closePath() thi se khong con diem dau va diem cuoi nua. Tuy nhien de ve chinh xac va sac net trong truong hop nay ta phai chu y den thuoc tinh lineJoin
* De lam ro hon chu y quan trong nay, chung ta hay nghien cuu ve cac hai thuoc tinh lineCap va lineJoin
-------------------------------------------------------------------------------------------
### lineCap
* **lineCap** la thuoc tinh dung de xac dinh duoc hinh dang cua diem dau va diem cuoi cua net ve
* **lineCap** co the mang mot trong ba gia tri sau:
1. **butt**: Dinh dang net ve dau va net ve cuoi chi co mot net va nam tren duong vien cua luoi, khong mo rong ve hai ben. Day la thuoc tinh lam cho net ve dau va net ve cuoi tro nen chinh xac, khong bi mo
2. **round**: bo tron cac net ve dau va cuoi cua net ve. Thuoc tinh nay khong lam cho net ve tro nen chinh xac vi no khong lam day cac o pixel chua net ve
3. **square**: Cac net ve dau va cuoi cua net ve duoc keo dai ra lam day cac o pixel. Do rong duoc keo ra nay bang mot nua chieu rong cua net ve. thuoc tinh nay cung co the su dung de lam chinh xac net dau va net cuoi cua duong net ve. Noi la co the boi vi do dai mo rong cua net dau va net cuoi cua duong net ve con phu thuoc vao chieu rong cua duong net ve. Cho nen, neu 1/2 do rong cua duong net ve ma khong lam cho phan mo rong cua net dau va net cuoi lap day o pixel thi net ve dau va net ve cuoi cua duong net ve cung van bi moi nhu binh thuong.
* Vi du: ban hay xem vi du trong file lineCap.html va file .js cung ten.
* Y tuong la lam noi bat nen duoc su khac nhau giua ba gia tri nay cua net ve

--------------------------------------------------------------------------------------------------
### lineJoin
* **lineJoin** la thuoc tinh xac dinh cach hai doan ket noi voi nhau: tuc la net ve cuoi cua duong net ve nay noi voi net ve dau cua duong net ve kia. Do rong cua doan noi hai duong net ve nay co the khac khong.
* Co ba gia tri cho thuoc tinh **lineJoin** nay:
1. **round**: Lam tron doan ket noi giua hai duong thang. Ban kinh cua cac goc bang mot nua chieu rong cua duong.
2. **bevel**: dien vao doan ket noi mot duong thang cat ngang de tao thanh mot hinh tam giac
3. **mitter**: Cac doan ket noi se duoc mo rong ra cac canh ngoai cua chung, no su dung hieu ung lap hinh thoi. Hieu ung nay bat nguon tu hieu ung **miterLimit** duoc noi o phan sau.

* Ban hay xem vi du minh hoa o file lineJoin.html va file .js cung ten
------------------------------------------------------------------------------------------------------
* Sau thuoc tinh lineJoin ta chua thay duoc cach lam net cac net ve dau va net ve cuoi cua duong net ve. Hay thu xem viec nay co duoc khac phuc boi miterLimit
-----------------------------------------------------------------------------------------------------
### miterLimit
* Nhu ban da thay trong vi du truoc, khi su dung gia tri mitter cho thuoc tinh lineJoin, cac dau net cuoi - dau cua hinh ve duoc noi den diem mo rong cua chung.
* Khi cac goc cua cac net ve la lon thi viec tim duoc giao cua chung trong duong keo dai cua hai duong net ve se rat gan so voi cac net ve. Tuy nhien khi goc nay lon, thi doan giao cua hai duong net ve nay se tim kho hon, va do dai cua no se tang theo cap so nhan. 
* Thuoc tinh **miterLimit** giup giai quyet duoc truong hop hai. Neu gia tri goc vuot qua mot gia tri nao do, thi thay vi noi hai duong thang o mot khoang cach rat xa bang mot hinh tam giac co cac canh co do dai rat lon, no se su dung gia tri bevel nhu gia tri bevel trong thuoc tinh lineJoin
* Gia tri mac dinh cua miterLimit la 10.0: loai bo tat cac cac hinh tam giac mo rong bang thuoc tinh bevel neu hai duong net ve co goc duoi 11 do.
* Gia tri miter bang 1.0 mac du la hop le nhung se vo hieu hoa tat ca cac miter
* Gia tri miter < 1.0 la gia tri khong hop le trong miter.
* Gia tri cua miter co the la tu > 1.0 cho den cac gia tri bat ky ma ban muon. Va moi gia tri no dua vao goc duoi gia tri do de co the ap dung duoc miter hay la khong.
* Ban hay xem ban demo trong trang web huong dan theo link sau: [link](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors)
----------------------------------------------------------------------------------------------------
## Su dung dau gach ngang cho duong net ve
* Cac phuong thuc **setLineDash** va **lineDashOffset** chi dinh mau gach ngang cho cac duong net ve
* **setLineDash** chap nhan mot danh sach cac so ma xac dinh khoang cach de luan phien ve mot duong gach va do dai cua cac duong gach do.
* **lineDashOffset** co tac dung dat mot offset: vi tri duong gach dau tien duoc bat dau tu dau trong duong net ve

* Trong vi du minh hoa sau day, ta se tao ra mot hieu ung animation kieu dieu hanh. No la mot ky thuat hoat hinh thuong duoc thay trong cac cong cu lua chon cac doi tuong trong cac chuong trinh do hoa may tinh. No giup cho nguoi dung phan biet duoc ranh gioi lua chon tu nen hinh anh bang cach lam dong duong vien.
* Trong khoa hoc nay, ngoai cach lam hieu ung nay ra, ta se con nghien cuu mot vai hoat canh co ban khac.
* Xem vi du trong file setLineDash.html va file .js mang cung ten

----------------------------------------------------------------------------------------------
## Gradient
* Cung giong nhu bat ky chuong trinh ve thong thuong nao, trong canvas ta cung co the dien vao cac hinh ve cac gradient tuyen tinh hoac xuyen tam.
* Chung ta co the tao ra cac gradient tuyen tinh hoac xuyen tam bang mot trong hai cach sau:
1. **createLinearGradient(x1, y1, x2, y2)**: Tao doi tuong gradient tuyen tinh voi diem bat dau la (x1, y1) va diem ket thuc la (x2, y2)
* createLinearGradient() tao mot gradient doc theo dong duoc xac dinh boi toa do hai diem (x1, y1) va (x2, y2)
* Phuong thuc nay tra ve mot canvas gradient tuyen tinh
* Chu y la cac toa do xac dinh gradient (x1, y1), (x2, y2) la cac toa do toan cuc, tuc la no khong phu thuoc vao hinh ve ma no phu thuoc ca vao luoi cua canvas
* Sau khi ban tao theo createLinearGradient(), ban co the su dung phuong thuc CanvasGradient.addColorStop() de xac dinh cac diem dung moi tren gradient voi cac offset mau duoc chi dinh. Gradient se duoc su dung neu ban dat no trong fillStyle va duoc ve len canvas truoc khi su dung phuong thuc fillRect().
* Xem vi du trong file createLinearGradient.html va file .js cung ten
2. **createRadialGradient(x1, y1, r1, x2, y2, r2)**: Tao ra mot gradient xuyen tam. Cac tham so dai dien cho hai vong tron la (x1, y1, r1) va (x2, y2, r2).
* createRadialGradient ta ra mot gradient xuyen tam duoc tao ra boi hai vong tron dai dien boi cac hai bo thong so tren.
* Xem vi du trong file createRadialGradient.html va file .js cung ten
* Ung dung cua vi du nay la ta co the tao ra mat troi trong do hoa may tinh

* Trong ca hai vi du tren ta deu su dung phuong thuc **addColorStop**: no thong bao cho gradient biet mau nao duoc ap dung. Cac thong so 0: la mau cua toa do diem duo khai bao truoc trong gradient, 1 la mau duoc ap dung cho toa do diem duoc khai bao sau trong gradient.

* vi du ap dung ca hai cach nay: xem trong file bothGradient.html va file .js cung ten
* vi du ve gradient phuc tap hon: xem trong gradientExtend.html va file .js cung ten

------------------------------------------------------------------------------------
## Mau (pattern)
* Mot trong cac vi du truoc, chung ta da su dung mot vong lap de tao ra nhieu hinh ve. Nhung co mot cach don gian hon rat nhieu, do la phuong phap createPattern() ma ta se hoc trog phan nay:
* **createPattern(image, type)**: Tao va tra ve mot hinh ve moi cua canvas. 
* img: la CanvasImageSource (co nghia la viec ho tro mot HTMLImageElement, mot canvas khac, mot video hoac cac loai phan tu tuong tu).
* type: la mot chuoi neu ra cach xu ly hinh anh
* type la chuoi su dung quy dinh su dung image de tao hinh ve va phai nhan mot trong cac gia tri sau:
1. repeat: Lap hinh anh theo ca huong doc va ngang
2. repeat-x: lap hinh anh theo chieu ngang nhung khong lap theo chieu doc
3. repeat-y: lap hinh anh theo chieu doc nhung khong lap theo chieu ngang
4. no-repeat: khong lap hinh anh, hinh anh chi duoc su dung mot lan trong hinh ve

* Cach chung ta su dung doi tuon canvasPattern cung giong hoan toan nhu cach su dung cua doi tuong canvasGradient ma ta vua hoc o tren: tuc la sau khi khoi tao ra doi tuong canvasPattern xong, chung ta phai gan no lam gia tri cho mot trong hai thuoc tinh fillStyle va strokeStyle de co the lam viec duoc voi doi tuong canvasPattern khi ve hinh.
* Chu y: khi su dung hinh anh trong pattern, ta phai dam bao la sau khi anh duoc load xong thi pattern moi duoc su dung. Con neu khong thi viec thuc hien pattern se bi loi va khong hoat dong trong khung cua canvas
* Xem vi du trong file canvasPattern.html va file .js cung ten
-------------------------------------------------------------------------
## Shadows (thuoc tinh do bong)
* De su dung hieu ung do bong, ta phai su dung mot trong bon thuoc tinh sau:
1. **shadowOffsetX = float**: chi ra khoang cach ngang bong se mo rong tu doi tuong hinh ve. Gia tri nay mac dinh la 0.
2. **shadowOffsetY = float**: chi ra khoang cach doc ma bong cua hinh ve se mo rong ra tu hinh ve. Gia tri nay mac dinh la 0.
3. **shadowBlur = float**: chi ra bong cua hinh duoc lam mo theo bon phia. Gia tri mac dinh la 0
4. **shadowColor = color**: chi ra bong duoc do voi mot mau CSS chinh xac. Ket hop voi cac thuoc tinh shadowOffsetX hoac Y, Blur de co the thao tac duoc tot voi thuoc tinh nay. Hieu mot cach don gian, day la cach set mau cho bong cua hinh ve
* Chu y, de di chuyen bong cua hinh ve sang trai thi cho gia tri float < 0, con neu muon no chuyen dong sang ben phai thi cho float > 0

* xem vi du su dung tong hop cac thuoc tinh tren de lam hieu ung do bong: xem trong file fourShadow.html va file .js cung ten

* Mot vi du khac ve do bong: Y tuong la ta se do bong mot chuoi ky tu: Xem trong file textShadow.html va file .js cung ten
* Trong vi du nay, ta co su dung ve cac thuoc tinh text va fillText: day la cac phuong thuc xu ly text trong canvas. Cac phuong thuc chuc nang va thuoc tinh nay se duoc nghien cuu trong cac bai hoc sau.

-------------------------------------------------------------------------------
## Quy tac dien canvas
* Day la phuong phap lay cac phan chung giua hai hinh ve hoac dung de xac dinh mot diem nao do co thuoc mot hinh ve nao do hay khong.
* De lam duoc dieu nay, ta su dung phuong thuc chuc nang **fill** hoac **clip** hoac **isPointinPath**. Su dung cac phuong thuc chuc nang nay, ban co the duoc cung cap mot thuat toan dung de xac dinh xem mot diem co nam trong mot hinh ve hay khong, hay lay cac phan chung cua hai hinh ve.
* Dieu nay se rat huu ich khi mot hinh ve co the se bi cat mot phan de tao ra mot hinh ve khac.
* Co hai gia tri cho thuoc tinh **fill**, do la:
1. nonezero: Day la quy tac mac dinh
2. evenodd:

* Ta se xem vi du ve hai phuong thuc clip va isPointinPath truoc: Xem trong file clip_isPoint.html vaf file .js cung ten
* vi du thu hai: Ta se dung phuong thuc chuc nang **fill()** de co the su dung mot hinh tron cat mot hinh tron (hay noi cach khac la lay phan chung cua hinh tron do): xem trong file fillClip.html va file .js cung ten

* Chu y:
* phuong thuc chuc nang fill() nay co hai tham so truyen vao
* tham so nonzero: la tham so giong nhu phep toan hoac: lay thang lon nhat, trong truong hop nay ta thay tren hinh ve chi co hinh tron 1 duoc hien thi len, boi hinh tron 1 bao lay hinh tron 2
* tham so evenodd: la tham so giong nhu phep toan giao: lay phan chung cua hai hinh ve
* chu y: de su dung duoc phuong thuc chuc nang fill() nay, cac hinh duoc cat phai duoc ve bang cac duong dan.  * Phuong thuc chuc nang fill() khong ap dung de cat cac hinh chu nhat nguyen thuy. Neu muon su hinh chu nhat thi phai ve hinh chu nhat do bang phuong thuc rect(). Ta noi la cac hinh bi cat boi vi hinh chu nhat nguyen thuy co the tham gia vao lam hinh cat, con no khong the la hinh bi cat boi mot hinh khac