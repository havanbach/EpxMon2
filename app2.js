const express = require('express');
const multer = require('multer');
const app = express();
const port = 3000;
//Cấu hình multer để lưu ảnh vào thư mục uploads
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'uploads');
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname);
    },

});
const upload = multer({storage});
//Route để hiện thị form
app.get('/upload',(req,res)=>{
    res.sendFile(__dirname+'/upload.html')
});
//upload ảnh
app.post('/upload',upload.single('image'),(req,res)=>{
    res.send('Upload ảnh thành công');
});
//
app.listen(port,()=>{
    console.log('Server đang chạy ở cổng 3000');
})