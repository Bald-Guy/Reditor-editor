const path = require('path')
const express = require('express')
const app = express()

// app.get('/', (req, res) => {
//   res.send('欢迎使用微信云托管！')
// })
app.use(express.static(path.join(__dirname, '/src')))

app.get("/", async (req, res) => {
    res.sendFile(path.join(__dirname, "src/index.html"));
})

const port = process.env.PORT || 80
app.listen(port, () => {
  console.log('服务启动成功，端口：', port)
})
