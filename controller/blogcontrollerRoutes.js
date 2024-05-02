const Blog=require('../models/blog');

// blog_index/
const blog_index=(req,res)=>{
    Blog.find().sort({createdAt:-1})/* (createdAt:-1) to sort the order of documents from newest to oldest, 
    if(createdAt:+1) it is sort from oldest to the newest */
    .then((result)=>{
      res.render('index',{title:'home',blogs:result})
      console.log(result);
    }).catch((err)=>{
      console.log(err);
    })
    };

//  get_byid  //getid(/:id)
const getblog_byid=(req,res)=>{
    const id=req.params.id;
    console.log(id);
   
    
    Blog.findById(id).then((result)=>{
    res.render('details',{blog: result, title: 'details'});
    }).catch((err)=>{console.log(err);})
    }; 

//  deletblog_id  // delete
const deletblog_id=(req,res)=>{
    const id=req.params.id;
    
    Blog.findByIdAndDelete(id)
    .then((result)=>{
      res.json({ redirect: '/blogs' });
    }).catch(err=>{console.log(err);});
    }; 

//  postblog  //post
const postblog=(req,res)=>{
    const blog=new Blog(req.body)
    console.log(req.body);
    blog.save().then((result)=>{
    res.redirect('/blogs');
    }).catch((err)=>{
      console.log(err);
    })
    
    };

// creating_blogs
const creating_blogs=(req,res)=>{
  res.render('create',{title:'create new blog'});
};
  module.exports={
    blog_index,
    getblog_byid,
    deletblog_id,
    postblog,
    creating_blogs
  };