module.exports=function(app){

var question = require('../app/models/question');    
var bodyParser   = require('body-parser');
    app.get('/',function(req,res){
        //res.render('index.ejs');
        question.find({},function(err,found){
            if(err)
            throw err;
            res.render('index.ejs',{data:found});
        });
    });

    app.get('/addq',function(req,res){
        res.render('addq.ejs');
    });

    app.post('/processq',function(req,res){
        console.log(req.body);
        var newQuestion = question();
        newQuestion.title=req.body.title;
        newQuestion.type=req.body.type;
        newQuestion.description=req.body.description;
        newQuestion.options=req.body.opt;
        newQuestion.save(function(err){
            if(err)
            throw err;
            question.find({},function(err,found){
                if(err)
                throw err;
                res.render('index.ejs',{data:found});
            });
        });  
    });
    app.delete("/teacher/:id",function(req,res){
        question.findOneAndRemove(req.params.id,function (err,body) {
          if(err)
          {
              throw err;
          }
          else
          {
            res.redirect("/");
          }
        });
      });



};