var express = require('express');
var router = express.Router();

module.exports = router;

var table = "modules";

/* Create Service. */
router.post('/create', function(req,res,next){
  try{
    var reqObj = req.body;

    if(!reqObj.owner || !reqObj.name || !reqObj.type || !reqObj.description || !reqObj.image ){
        res.json({"err":"Some required module properties are missing."});
        return next();
    }
    req.getConnection(function(err, conn){
      if(err){
        res.json({"err":"Connection to the database failed."});
        return next();
      }
      else
      {
        var insertSql = "SELECT * FROM " + table + " WHERE name = ?";
        var insertValues = reqObj.name;
        conn.query(insertSql, insertValues, function(err1, rows, fields) {
          if(rows.length > 0 || err1){
            res.json({"err":"The given module name is already reserved."});
            return next();
          }

          insertSql = "INSERT INTO " + table + " SET ?";
          insertValues = {
            "owner" : reqObj.owner,
            "name" : reqObj.name,
            "type" : reqObj.type,
            "description" : reqObj.description,
            "image" : reqObj.image,
            "startscene" : 0,
            "isPublic" : false,
            "finished" : false,
            "approved" : false,
            "approvedBy" : 0,
            "published" : "0000-00-00",
            "views" : 0,
            "rate" : 0
          };
          conn.query(insertSql, insertValues, function (err2, result2){
            if(err2){
              return next();
            }
            //Generate startscene
            var moduleId = result2.insertId;

            insertSql = "INSERT INTO scenes SET ?";
            insertValues = {
              "mId" : moduleId,
              "background" : "none"
            };
            conn.query(insertSql, insertValues, function (err3, result3){
              if(err3){
                return next();
              }
              var sceneId = result3.insertId;
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
                "cont" : reqObj.name,
                "style" : "background:#AAA;color:#000;border-radius:50%;",
                "event" : "1"
              };
              conn.query(insertSql, insertValues, function (err4, result4){
                if(err4){
                  return next();
                }
                var objectId = result4.insertId;
                //Update sceneobjects

                //Update startscene
                insertSql = "UPDATE " + table + " SET startscene = '" + sceneId + "' WHERE " + table + ".id=" + moduleId;
                conn.query(insertSql, function(err5, result5) {
                  if (err5) {
                    return next();
                  }
                  //Response
                  res.json({"moduleId":moduleId});
                });
              });
            });
          });
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
            resMap.set('module', empObj);
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
router.get('/all', function(req, res, next) {
  try {
    req.getConnection(function(err, conn) {
      if (err) {
        return next();
      }
      else {
        var insertSql = "SELECT * FROM " + table;
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

          var toReturn = { modules : resEmp};
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
        var insertSql = "UPDATE " + table + " SET name = '" + reqObj.name
          + "', type = '" + reqObj.type
          + "', description = '" + reqObj.description
          + "', image = '" + reqObj.image
          + "', isPublic = '" + reqObj.isPublic
        + "', finished = '" + reqObj.finished + "' WHERE " + table + ".id=" + reqObj.id;

        conn.query(insertSql, function(err, result) {
          if (err) {
            res.json({"err": "Invalid update parameters!"});
            return next();
          }
          //Response
          res.json({"updated-module": true});
        });
      }
    });
  } catch (ex) {
    return next();
  }
});
router.put('/rate', function(req, res, next) {
  try {
    var reqObj = req.body;
    req.getConnection(function(err, conn) {
      if (err) {
        return next();
      }
      else {
        var insertSql = "SELECT * FROM " + table + " WHERE id = ?";
        var insertValues = reqObj.id;
        conn.query(insertSql, insertValues, function(err, rows, fields) {
          if (rows.length != 1 || err) {
            res.json({"err": "Invalid id parameter!"});
            return next();
          }
          //Response

          var newViews = rows[0].views + 1;
          var newRate = ( +reqObj.rate + +rows[0].views*+rows[0].rate)/+newViews;

          insertSql = "UPDATE " + table + " SET views = '" + newViews +
          "', rate = '" + newRate + "' WHERE " + table + ".id=" + reqObj.id;

          conn.query(insertSql, function( err2, result2) {
            if (err2) {
              res.json({"err": "Invalid rate parameter!"});
              return next();
            }
            //Response
            res.json({"updated": true});
          });
        });
      }
    });
  } catch (ex) {
    return next();
  }
});
router.put('/approve', function(req, res, next) {
  try {
    var reqObj = req.body;
    req.getConnection(function(err, conn) {
      if (err) {
        return next();
      }
      else {
        var date = new Date();
        var mm = date.getMonth() + 1; // getMonth() is zero-based
        if(mm < 10) mm = "0"+ mm;
        var dd = date.getDate();
        if(dd < 10) dd = "0"+ dd;
        var stringDate = "" + date.getFullYear() + "-" + mm + "-" + dd;
        var insertSql = "UPDATE " + table +
         " SET approved = '" + 1 +
         "', approvedBy = '" + reqObj.by +
         "', published = '" + stringDate +
         "' WHERE " + table + ".id=" + reqObj.id;

         conn.query(insertSql, function(err, result) {
           if (err) {
             res.json({"err": "Invalid approve parameters!"});
             return next();
           }
           //Response
           res.json({"approved": true});
         });
       }
     });
   } catch (ex) {
     return next();
   }
 });
router.put('/disapprove', function(req, res, next) {
  try {
    var reqObj = req.body;
    req.getConnection(function(err, conn) {
      if (err) {
        return next();
      }
      else {
        var insertSql = "UPDATE " + table +
         " SET approved = '" + 0 +
         "', approvedBy = '" + reqObj.by +
         "', finished = '" + 0 +
         "', views = '" + 0 +
         "', rate = '" + 0 +
         "' WHERE " + table + ".id=" + reqObj.id;

         conn.query(insertSql, function(err, result) {
           if (err) {
             res.json({"err": "Invalid disapprove parameters!"});
             return next();
           }
           //Response
           res.json({"disapproved": true});
         });
       }
     });
   } catch (ex) {
     return next();
   }
 });
// /* Delete Service. */
router.delete('/delete/', function(req, res, next) {
  try {
    var id = req.body.id;
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

          insertSql = "SELECT * FROM scenes WHERE mId = ?";
          insertValues = id;

          conn.query(insertSql, insertValues, function(err2, rows2, fields2) {
            if (err2) {
              return next();
            }

            var sId = "(";

            for (var empIndex in rows2) {
              var empObj = rows2[empIndex];
              sId += empObj.id + ",";
            }
            sId = sId.slice(0, -1);
            sId += ")";

            insertSql = "DELETE FROM scenes WHERE mId = ?";
            insertValues = id;

            conn.query(insertSql, insertValues, function(err, rows, fields) {
              if (err) {
                return next();
              }
              insertSql = "DELETE FROM sceneobjects WHERE sId IN " + sId;
              insertValues = sId;
              conn.query(insertSql, function(err4, rows4, fields4) {
                if (err4) {
                  return next();
                }

                res.json({"deleted": true});
              });
            });
          });
        });
      }
    });
  } catch (ex) {
      return next();
  }
});
