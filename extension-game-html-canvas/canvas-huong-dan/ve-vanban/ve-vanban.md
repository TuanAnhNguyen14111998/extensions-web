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
2. **textAlign = value**: Cai dat cac hieu ung can chinh text. Gia tri co the su dung la start, end, left, right, hoac center. Gia tri mac dinh la start.
Do viec can chinh nay co lien quan den gia tri x trong fillText cho nen toa do cua text sau khi dat textAlign vi du le center la x = x - (width / 2)
* Xem vi du trong file textAlign.html va file .js cung ten
3. **textBaseline = value**: xac dinh text se duoc dat nhu the nao tren mot dong ke co so
* Xem vi du trong file textBaseline.html va file .js cung ten
* Cac gia tri co the co: top, hanging, middle, alphabetic, ideographic, bottom. Gia tri mac dinh la alphabetic
4. **direction = value**: Xac dinh huong van ban duoc ve. Co ba gia tri co the co cho thuoc tinh nay:
* ltr: ve tu trai sang phai
* rtl: ve tu phai sang trai
* inherit: thua ke kieu mac dinh cua cac phan tu o tren
* Vi du: xem trong file direction.html va file .js cung ten

* Cac thuoc tinh nay co tac dung tuong tu nhu cac thuoc tinh trong CSS.
* Ban co the xem cac quy uoc chuan cua HTML trong link sau: [link](https://whatwg.org/)
* Cac duong co so danh cho viec dinh dang ban ve text duoc the hien trong hinh sau day:

![duong ke co so](http://www.whatwg.org/specs/web-apps/current-work/images/baselines.png)

* Ngoai ra ban con co the do luong duoc cac gia tri thuoc tinh cua ban ve text, vi du nhu chieu cao hay chieu rong. Ban co the xem them tai link: [link](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/measureText)