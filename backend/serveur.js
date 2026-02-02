  import express from "express";
  import nodemailer from "nodemailer";

  const app = express();
  const PORT = 3000;

  app.use(express.json());

  app.post("/test", async (req, res) => {
    try{

      let {name, email, niveau} = req.body
      if(!name || !email || !niveau){
        return res.status(404).json({erreor : "Data not found"})
      }  
      const trans = nodemailer.createTransport({
          service : "Gmail",
          auth: {
            user: "malikisad24@gmail.com",
            pass: "nryx hwru eatw srkw",
          },
        });
      
      const info = await trans.sendMail({
      from: email,
      to: "malikisad24@gmail.com",
      subject: "Hello ✔",
      text: "Hello world?",
      html: "<b>Hello world?</b>", 
      })
    }catch(err){
      return res.status(500).json({"serveur error": err.message})
    }
  });

  app.listen(PORT, () => {});
