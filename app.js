const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const blogroutes = require("./routes/blogRoutes");

const app = express();
// connect to Mongo-db
const dburi =
  "mongodb+srv://abdelrahman:123567Ty@cluster0.kdyulpu.mongodb.net/nodetuts";
mongoose
  .connect(dburi) /*return peomise*/
  .then((e) => {
    // listen for request
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });

app.set("view engine", "ejs");

// listen for request
// app.listen(3000)

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/blogs", blogroutes);

app.get("/about", (req, res) => {
  /*'/a'=>the req.url*/
  // res.sendFile('./index.html',{root:__dirname})
  // res.send('<p>hello<p>');/* send is equal to (setHeader)*/
  res.render("about", { title: "about-us" });
});

// redirect
// app.get('/about-us',(req,res)=>{
// res.redirect('/about',{title:''});
// });

// create new blog

// app.get('/addblog',(req,res)=>{
// const bl=new Blog(
//   {
//     title: 'new blog-2',
//     snippet: 'about my new blog',
//     body: 'more about my new blog',
//     updatedAt:5,

//   }
// )
// bl.save().then((result)=>{
//   res.send(result)

// })
// });

// app.get('/add-blog', (req, res) => {

//   const blog = new Blog({
//     title: 'new blog-2',
//     snippet: 'about my new blog',
//     body: 'more about my new blog'
//   })

//   blog.save()/*instance methode*/
//     .then(result => {
//       res.send(result);
//     })
//     .catch(err => {
//       console.log(err);
//     });
// });

// to get all plogs

// app.get('/all-plogs',(req,res)=>{
//   Blog.find()/*find methode to find all the collections */
// .then((result)=>{
// res.send(result)
// })
// .catch((err)=>{
// console.log(err);
// });

// });

// app.get('/unique-blogs',(req,res)=>{
//   Blog.findById('65879651cb443ba250aa0237')/*find methode to find all the collections */
// .then((result)=>{
// res.send(result)
// })
// .catch((err)=>{
// console.log(err);
// });

// });

// Routs

// 404 not found
// use methode to create middleware and fire middleware function:(هيشرحها بالتفصيل بعدين)

app.use((req, res) => {
  // res.status(404).sendFile('./notfound.html',{root:__dirname})
  res.status(404).render("404", { title: "404" });
}); /*use is fired at every request in the code & it does not take specifide URL */
