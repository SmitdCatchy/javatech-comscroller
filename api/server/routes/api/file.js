const express = require("express");
const router = express.Router();

module.exports = router;

const fs = require('fs');

const multer = require('multer');
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    var path = './dist/media/users/' + req.body.id + '/';

    // Create folder if not exists
    if (!fs.existsSync(path)){
      fs.mkdirSync(path);
    }

    cb(null, path);
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  }
});
const fileFilter = (req, file, cb) => {

  // reject a file
  if (
    file.mimetype === 'image/jpeg' ||
    file.mimetype === 'image/png' ||
    file.mimetype === 'image/gif' ||
    file.mimetype === 'audio/mp3'
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});

router.get('/list/:path', function(req, res, next) {
  try {
    var path = "";
    if(req.params.path){
      path = req.params.path;
    }

    if(path !== ""){
      var dir = "./dist/media/users/" + path;

      // Create folder if not exists
      if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
      }

      var files = fs.readdirSync(dir);

      res.json({'files' : files});
    }else{
      res.json({'err': "No such directory."});
    }


  } catch (ex) {
    res.json({'err': "No such directory."});
    return next();
  }
});

router.post('/upload', upload.any(), function(req, res, next) {

  try {
    res.json({'uploaded': true });

  } catch (ex) {
    res.json({'err': "Can not upload that file."});
    return next();
  }
});

router.delete('/delete/:folder/:file', function(req, res, next) {
  try {
    var file = "";
    if(req.params.folder && req.params.file){
      file = req.params.folder + '/' + req.params.file;
    }
    var path = "./dist/media/users/" + file;

    if(file !== ""){
      try{
        // fs.unlinkSync("./dist/media/users/1.txt");
        fs.unlinkSync(path);
        res.json({'removed' : true});
      } catch(err){
        res.json({'err': "No such file or folder."});
      }
    }
    else{
      res.json({'err': "No such file or folder."});
    }

  } catch (ex) {
    return next();
  }
});
