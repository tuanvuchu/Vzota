## 🚀 Vzota

<div align="center">

![Icon-128](https://raw.githubusercontent.com/tuanvuchu/Vzota/refs/heads/main/public/images/icon-128.png)

**Một tiện ích mở rộng trình duyệt mạnh mẽ được thiết kế để nâng cao trải nghiệm của bạn trên nền tảng Azota bằng cách mở khóa các tính năng cao cấp và cung cấp điểm không giới hạn.**

</div>

## 📖 Tổng quan

Vzota là một tiện ích được phát triển dưới dạng tiện ích mở rộng trình duyệt (extension), được thiết kế đặc biệt để tương tác với nền tảng giáo dục Azota. Mục tiêu chính của nó là mang lại cho người dùng trải nghiệm tốt hơn bằng cách vượt qua một số hạn chế VIP và cấp quyền truy cập vào các chức năng cao cấp, bao gồm cả việc không giới hạn "điểm" trong nền tảng.

## ✨ Tính năng

- 🎯 **Mở khóa tính năng VIP:** Truy cập các chức năng của Azota thường chỉ dành riêng cho người dùng VIP.
- 💰 **Điểm không giới hạn:** Nhận nguồn cung cấp "điểm" không giới hạn trong nền tảng cho nhiều mục đích sử dụng khác nhau.

## 🖥️ Ảnh chụp màn hình

![Screenshot 1](https://raw.githubusercontent.com/tuanvuchu/Vzota/e24077736b12e95c8d300749abfd732a22189550/Screenshot1.png)

## 🚀 Bắt đầu nhanh

Thực hiện theo các bước sau để thiết lập môi trường phát triển và tải tiện ích mở rộng Vzota.

### Điều kiện tiên quyết

- [Node.js](https://nodejs.org/en/download/) (Khuyến nghị phiên bản LTS)
- npm (đi kèm với Node.js)
- Một trình duyệt web (ví dụ: Chrome, Edge)

### Cài đặt

1. **Sao chép kho lưu trữ (Clone)**

```bash
git clone https://github.com/tuanvuchu/Vzota.git
cd Vzota
```

2. **Cài đặt các gói phụ thuộc**

```bash
npm install
```

3. **Xây dựng tiện ích (Build)**
   Lệnh này sẽ biên dịch ứng dụng React, chạy kiểm tra TypeScript, đóng gói với Vite và cập nhật manifest để tương thích với tiện ích mở rộng.

```bash
npm run build
```

Tiện ích sau khi build sẽ nằm trong thư mục `dist`.

Hoặc truy cập [trang Releases](https://github.com/tuanvuchu/Vzota/releases) để tải tệp `.zip` được build sẵn sau đó `giải nén`.

4. **Tải tiện ích vào trình duyệt của bạn**
   **Đối với các trình duyệt dựa trên Chromium (Chrome, Edge, Brave):**

- Mở trình duyệt và truy cập `chrome://extensions` (hoặc `edge://extensions`, `brave://extensions`).
- Bật "Chế độ dành cho nhà phát triển" (Developer mode) ở góc trên bên phải.
- Nhấp vào "Tải thư mục đã giải nén" (Load unpacked).
- Chọn thư mục `dist` từ kho lưu trữ bạn đã clone hoặc thư mục đã `giải nén`.
- Tiện ích Vzota sẽ xuất hiện trong danh sách và sẵn sàng hoạt động.

~~**Đối với Mozilla Firefox:**~~

- Sắp ra mắt.

5. **Truy cập Azota**

   Sau khi tiện ích đã được tải, hãy truy cập nền tảng Azota trên trình duyệt của bạn và các tính năng sẽ được kích hoạt.

## 🤝 Đóng góp

Chúng tôi hoan nghênh các đóng góp cho Vzota! Nếu bạn muốn cải thiện công cụ này, vui lòng:

1. Fork kho lưu trữ này.
2. Tạo một nhánh (branch) mới cho tính năng hoặc bản sửa lỗi của bạn.
3. Thực hiện các thay đổi.
4. Gửi Pull Request.

Vui lòng đảm bảo kiểm tra kỹ các thay đổi của bạn.

## 📞 Hỗ trợ & Liên hệ

- 🐛 Báo lỗi (Issues): [GitHub Issues](https://github.com/tuanvuchu/Vzota/issues)
- 📧 Email: [chutuanvu0206@gmail.com](mailto:chutuanvu0206@gmail.com)

---

<div align="center">

**⭐ Tặng sao cho repo này nếu bạn thấy nó hữu ích!**

Được thực hiện với ❤️ bởi [tuanvuchu](https://github.com/tuanvuchu)

</div>
