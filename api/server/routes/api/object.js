var express = require('express');
var router = express.Router();

module.exports = router;

var table = "sceneobjects";

/* Create Service. */
router.post('/create', function(req,res,next){
  try{
    var reqObj = req.body;

    if(!reqObj.sId){
        res.json({"err":"Some required object properties are missing."});
    }
    req.getConnection(function(err, conn){
      if(err){
        return next();
      }
      else{
        //Create default sceneobject
        insertSql = "INSERT INTO sceneobjects SET ?";
        insertValues = {
          "sId" : reqObj.sId,
          "type" : "txt",
          "action" : "none",
          "x" : 860,
          "y" : 440,
          "w" : 200,
          "h" : 200,
          "z" : 10,
          "cont" : "default",
          "style" : "background:#AAA;color:#000;border-radius:50%;",
          "event" : "1"
        };
        conn.query(insertSql, insertValues, function (err2, result2){
          if(err2){
            return next();
          }
          var objectId = result2.insertId;
          //Response
          res.json({"objectId":objectId});
        });
      }
    });
    }
  catch(ex){
    return next();
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
            resMap.set('object', empObj);
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
router.get('/all/:sId', function(req, res, next) {
  try {
    var sId = req.params.sId;
    req.getConnection(function(err, conn) {
      if (err) {
        return next();
      }
      else {
        var insertSql = "SELECT * FROM " + table + " WHERE sId = " + sId;
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

          var toReturn = { objects : resEmp};
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
        return next(err);
      }
      else {
        var insertSql = "UPDATE " + table + " SET type = '" + reqObj.type + "'," +
        " action = '" + reqObj.action + "'," +
        " x = '" + +reqObj.x + "'," +
        " y = '" + +reqObj.y + "'," +
        " w = '" + +reqObj.w + "'," +
        " h = '" + +reqObj.h + "'," +
        " z = '" + +reqObj.z + "'," +
        " cont = '" + reqObj.cont + "'," +
        " style = '" + reqObj.style + "'," +
        " event = '" + reqObj.event + "' WHERE " + table + ".id=" + reqObj.id;

        conn.query(insertSql, function(err2, result) {
          if (err2) {
            res.json({"err": "Invalid update parameters!"});
            return next(err);
          }
          //Response
          res.json({"updated-object": true});
        });
      }
    });
    } catch (ex) {
      return next(ex);
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
            return next();
          }
          res.json({"deleted": true});
        });
      }
    });
  } catch (ex) {
      return next();
  }
});
