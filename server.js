const express = require('express');
const app = express();

// Dùng cổng Render cung cấp hoặc mặc định 8080
const PORT = process.env.PORT || 8080;

// Route mặc định
app.get('/', (req, res) => {
  res.send('Server đang chạy ổn định 🚀');
});

// Bắt đầu lắng nghe
app.listen(PORT, () => {
  console.log(`✅ Server đang chạy trên cổng ${PORT}`);
});
