# Huong dan tao hoat canh trong canvas
* Vi chung ta su dung javascript de kiem soat cac yeu to trong canvas, nen viec tao hoat canh va su tuong tac voi cac hoat canh cung tuong doi de dang. Trong chuong nay, ta se nghien cuu mot so buoc thuc hien viec tao hoat canh
* Co le, nhuoc diem lon nhat la mot khi hinh dang da duoc ve thi no van co hinh dang nhu vay. Neu chung ta can di chuyen no, chung ta phai ve lai no va moi thu duoc ve truoc no phai duoc xoa di. Phai mat rat nhieu thoi gian de ve lai cac khung phuc tap va hieu suat phu thuoc rat nhieu vao toc do may tinh ma no dang chay.

## Cac buoc tao hoat canh co ban
* Day la cac buoc ma ban can de ve mot khung canh hoat canh:
1. Xoa canvas: Tru cac mau nen ma ban da ve, thi ban phai xoa tat ca cac hoat canh ma ban da ve truoc do. Cach de hieu nhat la ban su dung phuong thuc chuc nang clearRect()
2. Luu trang thai canvas: Neu ban dang thuc hien thay doi bat ky trang thai nao cho ban ve (kieu dang, bien doi) cho hoat dong nay, xong cac hoat dong sau do ban lai muon su dung trang thai da duoc thiet lap truoc do cua canvas thi truoc khi ban ve ban ve lam thay doi trang thai ban phai thuc hien luu trang thai cua canvas vao de cac hanh dong sau ban co the restore lai trang thai ban dau duoc
3. Ve cac hinh dong: Giai doan nay la ban thuc su ve cac ban ve
4. Khoi phuc lai trang thai canvas: Neu ban da luu trang thai cua canvas, ban hay khoi phuc lai trang thai nay truoc khi thuc hien ve mot ban ve moi

## Kiem soat hoat canh
* Cac hinh dang duoc ve len canvas bang cach su dung cac phuong thuc ve tren canvas mot cach truc tiep. Va cac ham nay sau mot thoi gian se thuc thi va khong thuc hien lai nua. Va ket qua cua cac ham nay chi duoc thuc hien khi co cac phuong thuc ve cuoi cung duoc goi, vi du nhu stroke() hay fill(). Ngoai ra, do la hoat canh nen ta phai thuc hien ve lai sau mot khoang thoi gian nao do. Va vong lap for cung khong dap ung duoc dieu nay.
* Dieu do co nghia rang, chung ta can phai co mot cach thuc hien cac chuc nang ve cua chung ta trong mot khoang thoi gian ngan.
* Co 2 cach de thuc hien duoc dieu nay:

### Cap nhat theo lich
* Su dung cac ham chuc nang: window.setInterval(), window.setTimeout(), window.requestAnimationFrame(): Cac ham chuc nang nay co the goi mot hanh dong thuc hien sau moi khoang thoi gian nao do.
1. setInterval(function, delay): Bat dau lap lai cac hanh dong duoc chi dinh trong function trong khoang thoi gian delay ms
2. setTimeout(function, delay): Thuc hien chuc nang theo quy dinh cua function trong khoang thoi gian delay ms
3. requestAnimationFrame(callback): Cho trinh duyet biet rang, ban muon thuc hien hoat canh va yeu cau trinh duyet goi den mot ham duoc chi dinh de cap nhat hoat canh truoc lan lap lai tiep theo.

* Neu ban khong muon bat ky nguoi dung thuc hien tuong tac nao doi voi hoat canh thi ban nen su dung ham chuc nang setInterval(): Ham nay se lap di lap lai viec thuc thi doan code da duoc cung cap trong function
* Neu chung ta muon tao tro choi, chung ta co the su dung cac su kien ban phim hoac chuot de dieu khien anh va su dung ham chuc nang setTimeOut(): Bang cach nay ban co the thiet lap EventListener, chung ta co the bat bat ky tuong tac nao cua nguoi dung va thuc thi cac su kien ma ta bat duoc do

* Trong cac vi du sau day: Chung ta su dung ham chuc nang requestAnimationFrame(): Day la mot phuong phap dung de kiem soat duoc cac ban ve. Cac phuong phap cua requestAnimationFrame cung cap mot cach muot ma va hieu qua hon cho cac hieu ung dong bang cach goi khung hinh anh dong khi khung canvas da san sang duoc ve. So cuoc goi lai hoat dong ve thuong la 60 lan/s va co the giam xuong muc thap hon khi chay trong cac tab nen. De biet them thong tin ve vong lap hoat canh, dac biet la cac vong lap hoat canh cho cac tro choi, hay xem bai [giai phau ve tro choi](https://developer.mozilla.org/en-US/docs/Games/Anatomy) trong [khu vuc phat trien tro choi](https://developer.mozilla.org/en-US/docs/Games) cua chung toi

* Bay gio chung ta se tim hieu ve tung ham chuc nang trong viec thuc hien kiem soat hinh anh duoc neu o tren

## setInterval()
* ham chuc nang setInterval() thuc thi mot hanh dong nao do, voi viec thuc hien cac hanh dong do sau mot khoan tre thoi gian ms nao do giua hai lan goi lien tiep. No tra ve mot interval ID xac dinh duy nhat mot khoang thoi gian. Vi vay sau nay, ban co the loai bo viec lap nay bang cach loai bo ID nay voi viec su dung ham chuc nang clearInterval(). Phuong thuc nay la phuong thuc cua window va cua Worker (Worker se tim hieu sau)
* Cau truc goi ham:
* var intervalID = scope.setInterval(func, delay[, param1, param2, ...]);
* var intervalID = scope.setInterval(code, delay);
* Giai thich:
* func: Mot function se duoc thuc hien sau moi delay ms. Ham nay khong truyen duoc bat ky mot tham so nao va khong tra ve mot gia tri mong doi nao cho nguoi dung
* code: Mot cu phap tuy chon cho phep ban bao gom mot chuoi thay vi phai goi ham, duoc bien dich va thuc thi sau moi ms. Cu phap nay khuyen nghi khong nen dung vi ly do rui ro ve bao mat khi nguoi khac co the lay duoc noi dung hanh dong.
* delay: Thoi gian tinh bang ms: bo dem thoi gian giua hai lan hanh dong trong function duoc thuc hien. Neu tham so nay nho hon hoac bang 10 thi gia tri 10ms se duoc su dung. Luu y rang, do tre nay co the dai hon delay mot chut trong thuc te.
* param1, param2, ...: Cac thong so bo sung duoc chuyen toi ham khi bo hen gio het thoi han. Cac tham so nay la khong bat buoc

### Gia tri tra ve return:
* Gia tri tra ve cho ham nay la mot intervalID la mot gia tri so, khac khong. No la ID nen dung de phan biet viec lap lai hanh dong nao do trong mot chuoi cac hanh dong cua chuong trinh. Ma ID nay duoc chuyen den Window hoac Worker.clearInterVal() de xac dinh duoc bo lap va co the xoa bo lap nay di neu ban khong con muon su dung hanh dong lap nay nua
* Gioi han cua tham so delay la 2147483647ms

### Vi du
#### Vi du co ban
* Vi du 1: ban hay xem trong file red-blue-setInterVal().html
* vi du 2: ban hay xem trong file maydanhchu-setInterval().html
