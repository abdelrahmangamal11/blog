const express=require('express');
const controller=require('../controller/blogcontrollerRoutes');
const Routes=express.Router();

Routes.get('/create',controller.creating_blogs);
Routes.get('/',controller.blog_index);
Routes.post('/',controller.postblog);
Routes.delete('/:id',controller.deletblog_id);
Routes.get('/:id',controller.getblog_byid);


    
//    Routes.get('/blogs',(req,res)=>{/*'/a'=>the req.url*/
//     // // res.sendFile('./views.html',{root:__dirname})
//     // // res.send('<p>hello<p>');/* send is equal to (setHeader)*/ 
//     const blogs = [
//       {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
//       {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
//       {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
//     ];
//     res.render('index',{title:'home', blogs});
//     // res.redirect('/new-index')
//     // // console.log('hello');
//     });
    
  
    
    module.exports=Routes;