// Đảm bảo máy chủ lắng nghe trên process.env.PORT
const PORT = process.env.PORT || 8080;
// ... logic tạo server của bạn
server.listen(PORT, () => {
    console.log(`Server đang chạy trên cổng ${PORT}`);
});
