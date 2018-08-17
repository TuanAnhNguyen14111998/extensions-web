# Huong dan ve van ban trong canvas
* Sau khi da xem cach ap dung cac kieu va mau sac cho cac doi tuong hinh ve trong canvas, trong bai nay, chung ta se xem xet cach ve van ban tren canvas
----------------------------------------------------------------------
## Ve van ban
* Canvas cung cap cho ta hai phuong thuc chuc nang dung de ve van ban tuong tu nhu hai phuong thuc chuc nang dung de ve hinh la fill() va stroke():
1. **fillText(text, x, y [, maxWidth])**: Dien van ban text vao vi tri co dinh co toa do (x, y), voi tuy chon cho van ban la chieu rong toi da co the do nguoi dung tu thiet lap. Phuong thuc nay tao ra van ban voi khoang khong gian ben trong no duoc lap day bang mau den mac dinh
2. **strokeText(text, x, y [, maxWidth])**: Dien van ban text vao vi tri co dinh co toa do (x, y), voi tuy chon cho van ban la chieu rong toi da co the do nguoi dung tu thiet lap. Phuong thuc nay tao ra van ban chi co vien, khoang trang ben trong chuoi van ban la trong suot

* Xem vi du ve phuong thuc fillText trong file fillText.html va file .js co cung ten
* Xem vi du ve phuong thuc strokeText trong file strokeText.html va file .js co cung ten

------------------------------------------------------------------------
## Tao kieu cho chuoi van ban
* Trong cac file vi du tren, chung toi da su dung thuoc tinh **font** de lam cho chuoi van ban co kich thuoc lon hon mot chut so voi mac dinh.
* Con co mot so thuoc tinh khac cho phep ban co the chinh sua cach hien thi cua chuoi van ban tren khung cua canvas
1. **font = value**: thiet lap font cho chuoi van ban chuan bi duoc ve. Chuoi nay su dung cu phap hoan toan giong thuoc tinh font-family cua CSS. Phong chu mac dinh cua chuoi van ban la **10px sans-serif**.
* Xem vi du trong file fontText.html va file .js cung ten
* Ngoai ra, voi su tro giup cua **FontFace** API, ban co the tai mot phong chu mot cach ro rang truoc khi su dung font chu do de ve chuoi van ban trong canvas.
* Xem vi du ve **FontFace** API trong file fontFaceText.html va file .js cung ten
* Do day la phien ban thu nghiem nen ta se nghien cuu sau. Trong hai file fontFaceText.html va fontFaceText.js chua viet code gi ca. Viec code trong file nay se duoc ta thuc hien sau khi ban thu nghiem cho FontFace thanh cong