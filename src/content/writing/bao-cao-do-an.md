---
title: 'Báo cáo Đồ án: Xây dựng Website Portfolio Cá nhân'
date: '2025-12-26'
summary: 'Báo cáo chi tiết quá trình xây dựng và phát triển website Portfolio cá nhân - Đồ án môn học Lập trình mạng.'
---

# BÁO CÁO ĐỒ ÁN MÔN HỌC

## LẬP TRÌNH MẠNG

**Đề tài:**

# XÂY DỰNG WEBSITE BLOG & PORTFOLIO CÁ NHÂN - DEV ORBIT

**Giảng viên hướng dẫn:** Nguyễn Quốc Trung
**Sinh viên thực hiện:** Quoc Anh
**MSSV:** [Mã số sinh viên của bạn]
**Lớp:** [Lớp của bạn]

---

## LỜI CẢM ƠN

Đầu tiên, em xin gửi lời cảm ơn chân thành và sâu sắc nhất đến Ban Giám hiệu Nhà trường cùng các thầy cô giáo trong Khoa Công nghệ Thông tin đã tạo điều kiện thuận lợi cho chúng em học tập và nghiên cứu.

Đặc biệt, em xin gửi lời tri ân đến thầy **Nguyễn Quốc Trung**, giảng viên bộ môn Lập trình mạng. Sự tận tình chỉ bảo, những bài giảng tâm huyết và những định hướng quý báu của thầy trong suốt quá trình học tập không chỉ giúp em nắm vững kiến thức nền tảng về các giao thức mạng, mô hình Client-Server, mà còn là nguồn cảm hứng để em tìm tòi, ứng dụng các công nghệ mới vào thực tiễn.

Những kiến thức này chính là kim chỉ nam giúp em vượt qua các thách thức kỹ thuật trong quá trình thực hiện đồ án "Xây dựng Website Blog & Portfolio cá nhân".

---

## MỤC LỤC

1. [Chương 1: Tổng quan](#chuong-1)
2. [Chương 2: Cơ sở lý thuyết](#chuong-2)
3. [Chương 3: Phân tích và Thiết kế hệ thống](#chuong-3)
4. [Chương 4: Cài đặt và Thử nghiệm](#chuong-4)
5. [Chương 5: Kết luận và Hướng phát triển](#chuong-5)

---

## <a id="chuong-1"></a>CHƯƠNG 1: TỔNG QUAN

### 1.1 Lý do chọn đề tài

Trong kỷ nguyên số, việc xây dựng thương hiệu cá nhân (Personal Branding) là vô cùng quan trọng đối với một lập trình viên. Một CV giấy truyền thống là chưa đủ để thể hiện hết năng lực, tư duy thẩm mỹ và kinh nghiệm thực tế.

Website Portfolio không chỉ là nơi lưu trữ các dự án (Works), bài viết (Writing) mà còn là minh chứng sống động nhất cho kỹ năng lập trình Web của bản thân. Đề tài "Xây dựng Website Blog & Portfolio cá nhân" được lựa chọn nhằm mục đích tạo ra một không gian chuyên nghiệp để giới thiệu bản thân, đồng thời áp dụng các kiến thức Lập trình mạng và công nghệ Web hiện đại (React, Vite, Cloud) vào thực tế.

### 1.2 Mục tiêu đề tài

- Xây dựng website cá nhân với giao diện hiện đại, tối giản (Minimalist) và mang tính thẩm mỹ cao.
- Hiển thị thông tin cá nhân (Resume), danh sách dự án (Works) và các bài viết kỹ thuật (Writing/Blog).
- Đảm bảo hiệu năng cao, tốc độ tải trang nhanh và chuẩn SEO.
- Tối ưu hóa trải nghiệm người dùng (UX/UI) trên đa thiết bị (Responsive).

### 1.3 Phạm vi đề tài

- **Phía Client:** Xây dựng giao diện người dùng bằng ReactJS, TailwindCSS.
- **Nội dung:** Quản lý nội dung (CMS) thông qua các file Markdown (.md) để dễ dàng cập nhật mà không cần Database phức tạp (Static Site Generation approach).
- **Triển khai:** Deploy ứng dụng lên nền tảng đám mây (Vercel/Netlify/AWS).

---

## <a id="chuong-2"></a>CHƯƠNG 2: CƠ SỞ LÝ THUYẾT

### 2.1 ReactJS và Hệ sinh thái

React là một thư viện JavaScript mã nguồn mở được phát triển bởi Facebook, dùng để xây dựng giao diện người dùng. Đồ án sử dụng React vì tính linh hoạt, khả năng tái sử dụng Component cao và hệ sinh thái phong phú.

### 2.2 Vite - Next Generation Frontend Tooling

Thay vì Webpack, đồ án sử dụng **Vite** làm công cụ build tool. Vite tận dụng Native ES Modules giúp tốc độ khởi động server và Hot Module Replacement (HMR) cực nhanh, tăng hiệu suất phát triển đáng kể.

### 2.3 TailwindCSS

TailwindCSS là một framework CSS ưu tiên tiện ích (utility-first). Nó giúp xây dựng giao diện tùy biến nhanh chóng mà không cần viết CSS thuần (vanilla CSS) quá nhiều, đồng thời hỗ trợ Dark Mode và Responsive Design dễ dàng.

### 2.4 Markdown & Frontmatter

Hệ thống bài viết sử dụng Markdown kết hợp với YAML Frontmatter để lưu trữ metadata (tiêu đề, ngày tháng, tóm tắt...). Đây là cách tiếp cận phổ biến cho các blog cá nhân (như Jekyll, Hugo) vì tính đơn giản, không phụ thuộc vào cơ sở dữ liệu (Database-less).

---

## <a id="chuong-3"></a>CHƯƠNG 3: PHÂN TÍCH VÀ THIẾT KẾ HỆ THỐNG

### 3.1 Yêu cầu chức năng

1.  **Trang chủ (Home):**
    - Giới thiệu ngắn gọn, hình ảnh đại diện.
    - Hiệu ứng 3D (Three.js) để tạo điểm nhấn thị giác.
    - Liên kết nhanh đến các mạng xã hội.
2.  **Trang Dự án (Works):**
    - Danh sách các dự án đã làm.
    - Chi tiết từng dự án (Công nghệ sử dụng, link demo, GitHub).
3.  **Trang Viết lách (Writing/Posts):**
    - Danh sách bài viết blog.
    - Trang đọc bài viết chi tiết (Render từ Markdown).
4.  **Trang Hồ sơ (Resume):**
    - Trình bày kinh nghiệm làm việc, học vấn, kỹ năng theo phong cách chuyên nghiệp.
5.  **Chuyển đổi ngôn ngữ:** Hỗ trợ đa ngôn ngữ (Tiếng Anh / Tiếng Việt / Tiếng Trung).
6.  **Chế độ Giao diện:** Hỗ trợ Dark Mode / Light Mode.

### 3.2 Thiết kế kiến trúc

Hệ thống được thiết kế theo mô hình **Single Page Application (SPA)**:

- **Router:** `react-router-dom` xử lý điều hướng phía Client, không tải lại trang.
- **State Management:** React Context API (LanguageContext) để quản lý trạng thái toàn cục.
- **Content Layer:** Các file `.md` trong thư mục `src/content` được parse và hiển thị động.

---

## <a id="chuong-4"></a>CHƯƠNG 4: CÀI ĐẶT VÀ THỬ NGHIỆM

### 4.1 Cấu trúc thư mục

```
src/
├── components/     # Các thành phần tái sử dụng (Navbar, Footer, Section...)
├── content/        # Chứa nội dung bài viết và dự án (Markdown)
├── context/        # React Context (Language, Theme)
├── pages/          # Các trang chính (Home, Works, Resume...)
├── utils/          # Các hàm tiện ích (Markdown parsing)
└── App.tsx         # Component gốc và Routing
```

### 4.2 Triển khai các tính năng chính

#### a. Trang Resume (Hồ sơ)

Trang Resume được thiết kế tối giản với font chữ `Roboto Mono` tạo cảm giác "Technical". Dữ liệu được tổ chức thành mảng JSON và map ra giao diện để dễ dàng cập nhật.

#### b. Hệ thống Đa ngôn ngữ (i18n)

Sử dụng `LanguageContext` để cung cấp hàm `t(key)` cho toàn bộ ứng dụng. Cấu trúc từ điển ngôn ngữ (dictionary) linh hoạt, dễ dàng thêm ngôn ngữ mới (như tiếng Trung, tiếng Nhật).

```typescript
// Ví dụ về Language Context
const LanguageContext =
  createContext<LanguageContextType>(undefined);
export const useLanguage = () =>
  useContext(LanguageContext);
```

### 4.3 Kết quả giao diện

_(Tại đây có thể chèn các hình ảnh chụp màn hình của trang Home, Resume, Works thực tế)_

- **Giao diện Desktop:** Bố cục 2 cột hoặc lưới, không gian thoáng đãng.
- **Giao diện Mobile:** Menu chuyển thành dạng hamburger hoặc ẩn bớt, các cột xếp chồng (stack) để dễ đọc.

---

## <a id="chuong-5"></a>CHƯƠNG 5: KẾT LUẬN VÀ HƯỚNG PHÁT TRIỂN

### 5.1 Kết quả đạt được

- Hoàn thành website Portfolio hoàn chỉnh với đầy đủ các trang chức năng.
- Giao diện đẹp, hiện đại, mang đậm dấu ấn cá nhân.
- Hệ thống chạy mượt mà, tốc độ phản hồi nhanh nhờ công nghệ React/Vite.
- Học hỏi được nhiều kiến thức về cấu trúc dự án React, TailwindCSS và tối ưu hóa hiệu năng.

### 5.2 Hạn chế

- Chưa tích hợp CMS (Content Management System) online, việc viết bài vẫn phải commit code.
- Hiệu ứng 3D có thể gây nặng máy trên một số thiết bị di động đời cũ.

### 5.3 Hướng phát triển

- Tích hợp Headless CMS (như Strapi hoặc Contentful) để blog động hơn.
- Thêm tính năng bình luận (Comments) cho bài viết.
- Nâng cấp SEO và Analytics để theo dõi lượt truy cập.

---

_Tp. Hồ Chí Minh, Tháng 12 năm 2025_
