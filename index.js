import express from "express";
const app = express();
const port = 3000;
app.use(express.static("public"));


app.get("/", (req, res) =>{
    res.render("index.ejs",)

})


app.get("/about", (req, res) =>{
    res.render("about.ejs")
})


app.get("/contact", (req, res) =>{
    res.render("contact.ejs")
})


app.get("/faq", (req, res) =>{
    res.render("faq.ejs")
})

app.get("/services", (req, res) =>{
    res.render("services.ejs")
})

app.get("/testimonials", (req, res) =>{
    res.render("testimonials.ejs")
})

app.listen(port, ()=> {
    console.log(`server is running at port ${port}.`);
});