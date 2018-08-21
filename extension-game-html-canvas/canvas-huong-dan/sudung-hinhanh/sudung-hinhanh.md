# Huong dan su dung hinh anh trong canvas
* Trong phan nghien cuu truoc, chung ta da biet cach ve cac hinh co ban, cac hinh phuc tap va nang cao hon. Ngoai ra con biet cach chinh cac hieu ung cho chung. Tuy nhien con mot tinh nang thu vi nua trong canvas do la kha nang su dung hinh anh.
* Hinh anh trong canvas co the duoc su dung de lam hinh anh tong hop, anh dong, cac hinh lam phong nen cho cac bieu do, cac hinh anh duoc su dung trong cac tro choi.
* Hinh anh co the duoc su dung o moi dinh dang ma trinh duyet dang su dung ho tro nhu jpeg, png, gif. Tham chi nguon anh ta co the lay truc tiep tu cac ban ve canvas ma ta vua ve o cac doan code tren.

### Nhap mot hinh anh vao trong mot khung hinh cua canvas la mot qua trinh gom co hai buoc:
1. Lay mot tham chieu den mot HTMLImageElement hoac mot phan tu canvas khac de lam nguon. No cung co the su dung mot URL cua hinh anh de lam nguon.
2. Ve hinh anh tren canvas bang cach su dung phuong thuc chuc nang la **drawImage()**.
Chung ta hay xem lam dieu nay nhu the nao:

## Bat hinh anh de ve (tuc) la lay nguon cua hinh anh
* Canvas co the su dung bat ky nguon du lieu nao lam nguon cua hinh anh
* **HTMLImageElement**: Day la nhung hinh anh duoc tao ra bang cach su dung ham phuong thuc image() cung nhu bat ky `<img>` nao.
* **SVGImageElement**: day la hinh anh duoc nhung bang phan tu `<image>`
* **SVGImageElement**: Su dunng phan tu `<video>` de lam nguon hinh anh. Tuc la lay khung hinh video de lam hinh anh cho canvas
* **HTMLCanvasElement**: Su dung mot phan tu `<canvas>` khac de lam nguon hinh anh.

## Su dung hinh anh tu cung mot trang
* Chung ta co the tham chieu den tat ca cac hinh anh duoc su dung trong cung mot trang voi canvas
1. SU dung bo suu tap: document.images: tra ve mot mang cac hinh anh
2. document.getElementByTagName(): Cung tra ve mot mang cac phan tu HTML anh
3. Su dung document.getElementByID() dung de truy xuat mot hinh anh voi ID cu the nao do

## SU dung hinh anh tu ten mien khac (tuc la lay anh online)
* Su dung thuoc tinh crossorigin cua phan tu `<img>`. Ban co the yeu cau quyen tai hinh anh tu mot ten mien khac de su dung khi ban goi den phuong thuc chuc nang drawImage().
* Ne ten mien luu tru cho phep truy cap den hinh anh, hinh anh co the duoc su dung trong canvas ma khong lam xao tron no. Con neu khong duoc thi hinh anh se bi lam mo.


* Cac kien thuc con lai ban hay xem trong trang web theo link sau: [link](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Using_images)

* Xem cac vi du lan luot tu vidu:
1. Image_getElementById.html va file .js cung ten