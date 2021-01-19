const cloudName = 'iamraw';
const unsignedUploadPreset = 'hyfsqna2';

var img = document.querySelector('[name="thumbnail"]');

img.onchange = function () {
    var file = this.files[0];
    var url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var responseDataJson = JSON.parse(this.responseText);
            console.log(responseDataJson);
            var imageUrl = document.querySelector('input[name="imageUrl"]');
            imageUrl.value = responseDataJson.public_id;
            document.getElementById('image-preview').src = responseDataJson.url;
        }
    }
    xhr.open('POST', url, true);
    var fd = new FormData();
    fd.append('upload_preset', unsignedUploadPreset);
    fd.append('tags', 'browser_upload');
    fd.append('file', file);
    xhr.send(fd);
}



var img1 = document.querySelector('[name="image1"]');

img1.onchange = function () {
    var file = this.files[0];
    var url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var responseDataJson = JSON.parse(this.responseText);
            console.log(responseDataJson);
            var imageUrl = document.querySelector('input[name="imageUrl1"]');
            imageUrl.value = responseDataJson.public_id;
            document.getElementById('image-preview1').src = responseDataJson.url;
        }
    }
    xhr.open('POST', url, true);
    var fd = new FormData();
    fd.append('upload_preset', unsignedUploadPreset);
    fd.append('tags', 'browser_upload');
    fd.append('file', file);
    xhr.send(fd);
}