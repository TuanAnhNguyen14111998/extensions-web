# Huong dan su dung thu vien pixi.js de tao web game

* Lay thu vien pixi.min.js ve project
* Nhung thu vien nay vao trong cac file views cua project, neu muon su dung pixi.js
* Kiem tra xem pixi.min.js co thuc su duoc nhung trog view hay khong? xem kq trong index1.ejs


* Cac buoc tao ra mot ung dung pixi:
* b1: tao mot vung hcn ma ban dug de hien thi hinh anh tren do:
      - Doi tuong PIXI.Apllication tao ra khung hcn nay
      - No tao ra mot doi tuog HTML canvas - va no se tim cach de hien thi h.anh tren doi tuong canvas nay
      - PIXI.Aplication la thang bao boc lon nhat. De hien thi tat ca cac hien thi trong canvas len man hinh phai su dung doi tuong PIXI.Applition.view
      - Ban can tao mot doi tuong container cac doi tuong hien thi hinh anh nhu canvas hay webGL. Doi tuong nay la stage
      - State la thang to thu ba va duoc truy cap bang PIXI.Appliction.stage
      - xem kqua trong code cua file index2.ejs
      - Kich thuoc canvas duoc tao la (256, 256) pixel
      - Cach thuc lam cua PIXI.Application la no ktra xem trinh duyet co duoc ho tro boi webGL hay khong? Neu co doi tuong PIXI.Application se tra ve webGL de hien thi do hoa, con neu khong thi no tra ve doi tuog canvas co cac API duoc su dung de ve hinh.
      - cac option (tham so dau vao cho viec khoi tai PIXI.Application) de thiet lap cac thuoc tinh cho khung duoc tra ra boi doi tuong PIXI.Application
      - Neu PIXI.Application tra ve webGL thi doi tuong tra ve duoc dai dien cho webGL la doi tuong renderer
      - Trong truong hop ban khong muon su dung webGL ma ban muon su dung cac API cua canvas de ve hinh anh thi ban co the dat foreCanvas = true;
      - Va neu ban muon thay doi mau nen cho khung ma ban vua tao ra thi ban su dung thuoc tinh backgroundColor trong doi tuong app.renderer (day chinh la webGL)
      - de thay doi chieu dai va rong cua khung nay ta can dat autoResize = true de dam bao khung hinh van giu dc su tuong quan voi do phan giai cua man hinh.
      - C1: app.renderer.resize(512, 512);
      - C2: su dung: app.renderer.view.width va app.renderer.view.height
      - nhu vay ta rut ra duoc KL: stage chinh la app - day la doi tuong PIXI.Application
                                   stage chua app.view (day la webGL, cung co the la canvas)
                                   app.view co the la app.renderer.view khi khung tra ve la khung webGL
                                   con neu ep app.view phai tra ve canvas thi ta phai dat thuoc tinh forcCanvas = true
      - Va nhung gi ta se lam viec de ve tren khung canvas la cong viec ta phai thao tac voi app.renderer nay
      - Cho khung ve day man hinh tren may tinh (nhu cau noi o tren thi ta phai thao tac voi app.renderer.view.style. .... = "cac gia tri") - xem trog file index2.ejs
      - Nhu vay doi tuong PIXI.Application.renderer la thang to thu ba, no dai dien cho doi tuong webGL va day la doi tuong de ta co the thao tac truc tiep viec ve hinh anh len no.

      => `Tom lai:
      app = new PIXI.Application ({ doi so }) => tao ra duoc mot khung hinh de ve
      app.view (bao boc tat ca) > app.stage (bao boc lon thu hai) > app.renderer (chinh la doi tuong webGL de nguoi dung co the ve truc tiep len do duoc)`

      - Do app.stage la cha cua app.renderer cho nen muon hien thi mot cai gi do thi ta phai day no vao trong app.stage. Bat cu thu gi ben trong stage thi no deu duoc hien thi tren canvas.
      - Cac thu duoc dat trong app.stage do la cac doi tuong luu hinh anh duoc goi la PIXI.sprites.
      
      => `nhu vay tom lai:
       app = new PIXI.Application ({ doi so }) => tao ra duoc mot khung hinh tong de ve
       app.view (bao boc tat ca) > app.stage (bao boc lon thu hai) > app.renderer (chinh la doi tuong webGL de nguoi dung co the ve truc tiep len do duoc) > { PIXI.sprites (cac doi tuong hinh ve cu the) }`

       - Co ba cach de tao ra mot hinh anh trong PIXI.sprites:
        + Tu duy nhat mot tep hinh anh
        + Tu mot tep anh phu tren mot anh bricket. Anh bricket la mot anh gom nhieu cac hinh con trong mot anh, va ta co the lay bat ky hinh con nao co trong hinh anh bricket lon do
        + Từ tập bản đồ kết cấu (tệp JSON xác định kích thước và vị trí của hình ảnh trên bảng kê).

       - De hien thi duoc hinh anh len PIXI.sprite thi ta phai hieu cach anh duoc xu ly trog webGL:
        + Vi pixi dua vao GPU de xu ly anh va hien thi len webGL cho nen truoc khi thao tac duoc gi do voi anh, ta phai chuyen anh ve dang co the xu ly duoc boi GPU - do la ket cau webGL.
        + De co the thuc hien va xu ly nhanh, thi PIXI cho phep chuyen dinh danh anh ve dinh dang cua GPU, vua cho dinh dang nay luu vao trong bo nho dem va se rat de lay ra ma ko phai convert nhieu lan
        + Cach de co the chuyen dinh dang sang dinh dang cua GPU co the xu ly:
         * Su dung loader cua PIXI de tai hinh anh
         * Sau do thuc hien ham setup de chuyen doi anh tu duong dan trong doi tuong resourse thanh dang texture:
         PIXI.loader
            .add("images/anyImage.png")
            .load(setup);

            function setup() {
            let sprite = new PIXI.Sprite(
                PIXI.loader.resources["images/anyImage.png"].texture
            );
            }

        trong ham setup() nay da sau khi chuyen dang hinh anh thanh hinh anh co the xu ly boi webGL ta co the truyen dinh dang nay (tuc la doi tuong texture vua tao o tren) vao trong sprite: let sprite =  new  PIXI.Sprite (PIXI.loader.resources["images/anyImage.png"].texture);
        + de lay duoc hinh anh da duoc chuyen dang va duoc luu trong bo nho TextureCache, ta su dung cau lenh texture =  PIXI.utils.TextureCache['ten cac hinh anh da duoc chuyen dang va duoc luu trong bo nho dem TextureCache'];
        + va de day hinh anh duoc chuyen dinh dang vao trong sprite thi ta co the su dung cau lenh:
        let sprite = new PIXI.Sprite(texture);

        => tom lai:
        `app = new PIXI.Application ({ doi so }) => tao ra duoc mot khung hinh tong de ve
        app.view (bao boc tat ca) > app.stage (bao boc lon thu hai) > app.renderer (chinh la doi tuong webGL de nguoi dung co the ve truc tiep len do duoc) > { PIXI.sprites (cac doi tuong hinh ve cu the) }`.
        Day imgs vao trong sprite, ta phai chuyen dinh dang cua no ve dang ma GPU co the xu ly:
        b1: thuc hien load cac imgs
        b2: thuc hien chuyen dinh dang cua imgs thanh dang texture
        b3: day texture vua duoc chuyen dang vao trong sprite
        PIXI.loader
            .add("images/anyImage.png")
            .load(setup);

            function setup() {
            let sprite = new PIXI.Sprite(
                PIXI.loader.resources["images/anyImage.png"].texture
            );
            }

        b4: chu y, sau khi chuyen dang, trong bo nho dem TextureCache se co mot mang cac hinh anh da duoc chuyen dang. De co the lay duoc cac hinh anh nay va truyen vao trong sprite thi ta su dung cau lenh sau:
        b1: truy cap hinh anh co trong mang cua TextureCache
        b2: day texture vua lay duoc vao trong sprite:
        let texture = PIXI.utils.TextureCache["images/anySpriteImage.png"];
        let sprite = new PIXI.Sprite(texture);`

        * Ngoai ra ta co the thuc hien dinh dang mot luc nhieu cac hinh anh thanh dinh dang co the xu ly duoc cua GPU.
        
* Hien thi cac sprite vua duoc day hinh anh vao trong stage: ta se su dug phuong thuc appChild cua stage de them con la sprite vao trong cha la stage
* `app.stage.addChild(sprite);`
* nen nho stage = { sprite }, neu khong them sprite vao trong stage thi sprite nay se khong duoc hien thi tren khung canvas
* De ap dung nhung gi ta da hoc: tu viec load hinh anh -> chuyen dang hinh anh -> day hinh anh duoc chuyen dang vao trong mot sprite moi -> day sprite nay vao trong stage, va hien thi stage len khung canvas: xem demo trong file index3.ejs
* Neu ban can loai bo mot sprite nao do khoi stage thi ban co the su dung phuong thuc removeChild(ten sprite);
* Nhung thuong ta nen su dung thuoc tinh lam an/hien sprite tren stage hon la xoa han no di. Thuoc tinh do la: name_sprite.visible = false;


* Tiep theo la ky thuat dat bi danh, do moi lan phai khai bao cac doi tuong trong PIXI de dung thi ta lai phai go rat nhieu ky tu, vi du nhu PIXI.Application, ... . Thay vao do ta se dat cac bi danh cho cac doi tuong nay, va nhung doan code sau ta chi can goi ten cac bi danh nay la xong

* vi du:
let TextureCache = PIXI.utils.TextureCache

va sau do de goi cac hinh anh da duoc chuyen dang trong TextureCache ta su dung cau lenh:
let texture = TextureCache["images/cat.png"];

* file index4.ejs se thuc hien viec dat bi danh nay va thuc hien lai cong viec hien thi hinh anh len khung canvas bang cach su dung cac bi danh, day cung la file chuan co the su dung cho nhung lan code sau

### Dinh vi vi tri cua sprite trong khung ve webGL
* ta se tim hieu cach dinh vi vi tri (x, y) va thay doi kich thuoc cua cac sprite da xay dung o tren
* xet cung vi du ve cat sprite da duoc xay dung o tren:
* thay doi vi tri cua sprite nay:
dat doan code nay trong function setup - hai dong code nay co the them o bat cu noi dau trong function setup, ke ca sau cau lenh app.stage.addChild(cat);
cat.x = 96;
cat.y = 96;
* xem demo trong file index5.ejs


* kich thuoc va ty le cua sprite:
* ban co the thay doi chieu rong va chieu cao cua sprite
* vi du, xem trong file index5.ejs

* thuoc tinh scale, hay xem demo trong file index5.ejs

* tuong tu ban cung co the thuc hien duoc tac vu quay sprite di mot goc bao nhieu do. Xem demo trong file index5.ejs

## Tao mot sprite tu mot hinh anh tileet
* Bay gio, ban da biet cach tao mot sprite tu mot anh duy nhat. Tuy nhien voi tu cach la nha thiet ke mot tro choi, ban thuong xuyen phai tao ra cac sprites cua minh bang cach su dung cac brickets (hay con duoc goi la spritesheets).
* PIXI co mot so cach tich hop san de giup ban lam duoc dieu nay.
* Bricket la mot tep hinh anh chua rat nhieu cac hinh anh con co trong do.
* Cac hinh anh con nay la hinh anh dai dien cho cac hinh anh do hoa ma ban muon su dung trong tro choi cua minh.
* Duoi day la mot so vi du ve hinh anh brickets (hinh anh co lat gach) co chua cac nhan vat tro choi va cac doi tuong tro choi duoi dang hinh anh con duoc chua trong hinh anh brickets

* hinh anh tileset.png la mot hinh anh 192 * 192 pixe. moi hinh anh con nam trong mot o co kich thuoc la 32 * 32 pixel.
* Luu tru va truy cap tat ca do hoa duoc dung trong tro choi cua ban tren tileet la mot ky thuat xu ly rat hieu qua va quan ly bo nho rat hieu qua de lam viec voi do hoa. Va PIXI duoc toi uu hoa trong viec su dung cac ky thuat nay
Ban co the lay ra duoc mot hinh anh con va hien thi no ra khung webGL ma ta da thuc hanh cach tao nhu trong cac phan truoc. Duoi day la mot vi du ve viec boc tach ra duoc hinh anh con la hinh anh ten lua tu hinh anh tileet va hien thi no vao trong khung webGL
* De thuc hien dieu nay, ta phai thuc hien lan luot cac buoc sau:
* Xem file demo trong file index6.ejs
* b1: thuc hien load hinh anh tileset.png
* b2: cach lam o day la ta tao mot hinh chu nhat co kich thuoc dung bang 1 o chua hinh anh con (32 * 32) va co toa do la toa do cua o chua hinh con trong hinh tileset.png.
* b3: Yeu cau hinh anh tileset.png su dung hinh chu nhat vua tao tren, no tuong tu nhu la viec ta su dung hinh chu nhat vua tao o tren de cat hinh con ma ta mong muon => khi do ta se co mot hinh anh duoc chuyen dang chi con chua hinh anh con ma ta muon trich xuat
* b4: Hinh anh vua duoc trich xuat dong thoi hinh anh nay cung da duoc chuyen dang, ta se day hinh anh nay vao trong strite va day thang strite nay vao trong stage de co the hien thi ra man hinh

* Di ta phai trich xuat cac hinh anh do hoa trong bricket rat nhieu, va dong thoi de xay dung len duoc mot tro choi thi cac hinh anh con trong bricket la mot so luong rat lon cac hinh ve. Chinh vi vay, viec doc toa do thu cong cac hinh con trong bricket nhu tren se lam cho nguoi lap trinh mat rat nhieu thoi gian. Pixi co cach thuan loi hon cho ban co the lay toa do cac hinh mot cach thuan loi - Chung ta hay xem xem cach pixi lam la nhu the nao.

### Su dung ban do ket cau (texture atlas)
* Neu ban phai lam viec tren mot tro choi rat lon, viec trich xuat cac hinh anh con tren bricket se vo cung phuc tap, vi bricket luc nay se chua rat nhieu cac hinh con, va moi hinh con khong phai luc nao cung co kich thuoc giong nhau.
* Va tap ban do ket cau (texture atlas) duoc ra doi. No thuc chat la mot tep du lieu JSON. Tep du lieu JSON nay luu tru thong tin ve vi tri va kich thuoc cac hinh anh con trong bricket.
* Neu ban su dung tep ket cau, nhung gi ban can lam la chi can phai nho ten cua cac hinh anh con ma thoi.
* Ban co the sap xep cac hinh anh con theo bat cu thu tu nao trong anh bricket va tep JSON se theo doi vi tri va kich thuoc cac hinh anh con cua no.
* Dieu nay thuc su la rat thuan tien. Boi vi ta khong lay hinh anh bricket mot cach tho, va fix cung du lieu cho anh bricket, ma ta thao tac voi anh bricket thong qua tep JSON nay. Neu ta co su thay doi voi hinh anh bricket nhu them hinh anh con, xoa hinh anh con, ... thi ta chi can xuat lai tep JSON nay la duoc, va chuong trinh van chay mot cach binh thuong. Va ban se khong phai thay doi lai code cua minh.
* Pixi tuong thich voi dinh dang ban do ket cau JSON chuan duoc xuat boi mot cong cu phan mem pho bien co ten la Texture Packer.
* Hay tim hieu cach su dung phan mem nay de tao ra duoc cac ban do ket cau (texture atlas) va tai ban do ket cau vao trong pixi.

* Cach su dung phan mem Texture Packer:
* b1: Chuan bi mot bo suu tap cac hinh anh con rieng le ma ban muon su dung trong tro choi cua minh
* b2: Mo Texture Packer va chon JSON Hash lam loai khung de thao tac.
* b3: Keo hinh con cua ban vao khong gian lam viec cua Texture Packer
* b4: Khi da hoan thanh cac buoc tren hay nhap vao nut publish (xuat ban). Dat ten tep va vi tri luu cho cac tep. Texture Packer se dua ra hai tep, mot tep la .png va mot tep dinh dang JSON. Trong truong hop nay ta dat ten la treasureHunter.

* Tep JSON vua duoc tao o tren mo ta ten, kich thuoc va vi tri cua hinh anh con trong hinh anh treasureHunter.png
* Tep JSON chua cac doi tuong hinh anh con, voi ten cua no la ten cua hinh anh con ta vua tai, dong thoi luu tru cac thuoc tinh w, h, x, y cho tung doi tuong hinh anh con.
* Moi cau truc mo ta tung hinh anh con ma ta vua noi o tren duoc goi la khung (frames). Co du lieu nay cho nen se rat huu ich cho ban khi ban khong can phai nho vi tri va kich thuoc cua cac hinh anh con nua.
* Tat ca nhung gi ban can phai nho do la id cac khung (id_frame). O day chung la ten cac anh ma chung ta da dat khi tai ve: vi du nhu "blob.png", ...
* Tao hinh anh bricket bang Texture Packer thi ban khong con gap tinh trang cac hinh anh con duoc luu chong len nhau, vien hinh anh nay duoc ve de len vien cua hinh anh kia trong file bricket. Su dung Texture Packer thi cac hinh anh con se duoc luu cach nhau tu 1 cho den 2 pixel cho nen khong xay ra tinh trang chong cheo cac hinh anh con len nhau.

* Bay gio, ban da biet cach tao ra mot hinh anh bricket va tep JSON mo ta cac hinh anh con co trong no. Nhiem vu tiep theo cua ban la ban phai tim cach xem tai hai doi tuong bricket va tep JSON vua tao ra vao trong code tro choi cua chung ta nhu the nao.

### Tai ban do ket cau (Texture atlas - day chinh la tep JSON cua chung ta)
* Xem demo trong file index7.ejs
* De dua ban do ket cau (JSON) vao trong Pixi, hay tai no bang loader. Va do tep JSON nay duoc tao ra boi Texture Packer thi trinh bien dich se dien giai du lieu va tu dong tao cac ket noi tren moi khung cua tep png.
* Day la cach tai tep .json vao trong code tro choi va sau khi nap xong tep .json thi chay ham setup

loader
  .add("images/treasureHunter.json")
  .load(setup);


* Moi hinh anh trong hinh anh .png dang la texture (ket cau ca nhan - da duoc chuyen dang) trong bo nho cache cua pixi. Ban co the truy cap tung texture trong cache voi tung ten hinh anh con ma ban da luu.

### Tao cac sprite tu ban do ket cau da luu (tuc la tu tep JSON cua chung ta)
* Pixi cung cap cho ta ba cach tong quat de co the tao ra mot sprite tu ban do ket cau (JSON):
* C1: Su dung TextureCache:
let texture = TextureCache["frameId.png"],
    sprite = new Sprite(texture);
* C2: Neu ban da su dung loader de tai file JSON len roi thi ban co the su dung trinh tai cua resources:
let sprite = new Sprite(
  resources["images/treasureHunter.json"].textures["frameId.png"]
);
* C3: Neu cac cach tren ban cho la cach viet code qua dai thi ban co the su dung cach thu 3 nay:
+ dat dinh danh cho file JSON da duoc chuyen dang:
let id = PIXI.loader.resources["images/treasureHunter.json"].textures;
+ Khi do id chua tat cac cac doi tuong hinh anh con trong no, va no se la mot mang
+ Sau do, ban chi can tao ra mot sprite moi giong nhu:
let sprite = new Sprite(id["frameId.png"]);

* Trong file index7.ejs la cach ban su dung ca ba ky thuat de tai duoc ba hinh anh vao trong code tro choi cua minh

* trong viec xac dinh duoc vi tri de dat cac hinh anh con vao trong khung canvas ta co su dung chieu rong va chieu cao cua stage: app.stage.height va app.stage.width

* Hoc cach tao va hien thi cac sprite bang cach su dung ban do ket cau la mot trong nhung ky thuat chuan va rat quan trong.
* Vi vay, truoc khi hoc cac ky thuat tiep theo, chung ta co the them mot vai cac sprite blob va door vao trong khung canvas. Luu y viec tao ra sprites blob la viec ta dung mot vong lap de co the tao ra nhieu sprite de co the co nhieu hinh con blob trong khung canvas.
* Xem trong file index7.ejs de co the thay ro duoc dieu nay.
* Phuong thuc randomInt la mot phuong thuc tuyet voi dung de ramdom vi tri cua cac sprite trong khung canvas ma chung ta se su dung nhieu sau nay.

