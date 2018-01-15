var express = require('express');
var router = express.Router();

module.exports = router;

var table = "scenes";

/* Create Service. */
router.post('/create', function(req,res,next){
  try{
    var reqObj = req.body;

    if(!reqObj.mId){
        res.json({"err":"Some required scene properties are missing."});
    }
    req.getConnection(function(err, conn){
      if(err){
        return next(err);
      }
      else{
        var insertSql = "INSERT INTO scenes SET ?";
        var insertValues = {
          "mId" : reqObj.mId,
          "background" : "none"
        };
        conn.query(insertSql, insertValues, function (err2, result2){
          if(err2){
            return next(err2);
          }
          var sceneId = result2.insertId;
          //Create default sceneobject
          insertSql = "INSERT INTO sceneobjects SET ?";
          insertValues = {
            "sId" : sceneId,
            "type" : "txt",
            "action" : "none",
            "x" : 860,
            "y" : 440,
            "w" : 200,
            "h" : 200,
            "cont" : "default",
            "style" : "background:#AAA;color:#000;border-radius:50%;",
            "event" : "1"
          };
          conn.query(insertSql, insertValues, function (err3, result3){
            if(err3){
              return next(err3);
            }
            var objectId = result3.insertId;

            //Response
            res.json({"sceneId":sceneId});
          });
        });
      }
    });
    }
  catch(ex){
    return next(ex);
  }
});
// /* Read Service. */
router.get('/id/:id', function(req, res, next) {
  try {
    var id = req.params.id;
    req.getConnection(function(err, conn) {
      if (err) {
        return next();
      }
      else {
        var insertSql = "SELECT * FROM " + table + " WHERE id = ?";
        var insertValues = id;
        conn.query(insertSql, insertValues, function(err, rows, fields) {
          if (err) {
            return next();
          }
          //Response
          var resMap = new Map();
          var resObj = {};
          for (var empIndex in rows) {
            var empObj = rows[empIndex ];
            resMap.set('scene', empObj);
          }
          var toReturn = strMapToObj(resMap);
          res.json(toReturn);
        });
      }
    });
  } catch (ex) {
      return next();
  }
});
function strMapToObj(strMap) {
  let obj = Object.create(null);
  for (let [k,v] of strMap) {
    obj[k] = v;
  }
  return obj;
}
router.get('/all/:mId', function(req, res, next) {
  try {
    var mId = req.params.mId;
    req.getConnection(function(err, conn) {
      if (err) {
        return next();
      }
      else {
        var insertSql = "SELECT * FROM " + table + " WHERE mId = " + mId;
        conn.query(insertSql, function(err, rows, fields) {
          if (err) {
            return next();
          }
          //Response
          var resEmp = [];
          for (var empIndex in rows) {
            var empObj = rows[empIndex ];
            resEmp .push(empObj);
          }

          var toReturn = { scenes : resEmp};
          res.json(toReturn);
        });
      }
    });
  } catch (ex) {
      return next();
  }
});
// /* Update Service. */
router.put('/update', function(req, res, next) {
  try {
    var reqObj = req.body;
    req.getConnection(function(err, conn) {
      if (err) {
        return next();
      }
      else {
        var insertSql = "UPDATE " + table + " SET background = '" + reqObj.background + "' WHERE " + table + ".id=" + reqObj.id;

        conn.query(insertSql, function(err, result) {
          if (err) {
            res.json({"err": "Invalid update parameters!"});
            return next();
          }
          //Response
          res.json({"updated-scene": true});
        });
      }
    });
    } catch (ex) {
      return next();
    }
    });
// /* Delete Service. */
router.delete('/delete/:id', function(req, res, next) {
  try {
    var id = req.params.id;
    req.getConnection(function(err, conn) {
      if (err) {
        return next();
      }
      else {
        var insertSql = "DELETE FROM " + table + " WHERE id = ?";
        var insertValues = id;
        conn.query(insertSql, insertValues, function(err, rows, fields) {
          if (err) {
            res.json({"err": "Invalid delete parameter!"});
            return next();
          }

          insertSql = "DELETE FROM sceneobjects WHERE sId = ?";
          insertValues = id;
          conn.query(insertSql, insertValues, function(err, rows, fields) {
            if (err) {
              res.json({"err": "Invalid delete parameter!"});
              return next();
            }

            res.json({"deleted": true});

          });
        });
      }
    });
  } catch (ex) {
      return next();
  }
});
