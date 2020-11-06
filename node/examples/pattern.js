const fs = require('fs')
const path = require('path')
const out = fs.createWriteStream(path.join(__dirname, "..")+ '/pattern.png');
const { createCanvas, Image } = require('../export');
const canvas = createCanvas(800, 400);
const ctx = canvas.getContext('2d');
const img = new Image()

img.onload = () => {
    var pattern1 = ctx.createPattern(img, 'repeat');
    ctx.fillStyle = pattern1;
    ctx.fillRect(0, 0, img.width*3, img.height*1);

    var stream = canvas.createPNGStream();
    stream.on('data', function (chunk) {
        out.write(chunk);
    });
}
img.onerror = err => {
    console.log(err)
}
img.src = "https://img.alicdn.com/imgextra/i3/80/O1CN011CSgGWymNlCrNO3_!!80-2-luban.png"