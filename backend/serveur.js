  import express from "express";
  import nodemailer from "nodemailer";
  import dotenv from "dotenv"
  import cors from "cors"
  dotenv.config()

  const app = express();
  const PORT = 3000;

  app.use(cors({
    origin: "http://localhost:5173",
  }))

  app.use(express.json());

  app.post("/test", async (req, res) => {
    try{

      let {name, email, niveau, autre} = req.body
      
      if(!name || !email || !niveau || !autre){
        return res.status(404).json({erreor : "Data not found"})
      } 
      
      if(niveau == "Selectionner Votre Réponse"){
        return res.status(403).json("s'il vous choisis un niveau")
      }

      const trans = nodemailer.createTransport({
          service : "Gmail",
          auth: {
            user: process.env.User,
            pass: process.env.pass,
          },
        });
      
      const info = await trans.sendMail({
      from: email,
      to: "malikisad24@gmail.com",
      subject: "Hello",
      html: "<h1>Hello world?</h1>", 
      })

      return res.status(200).json({resultat : "Votre Demande Est Envoyer Au Coach"})
    }catch(err){
      return res.status(500).json({"serveur error": err.message})
    }
  });

  app.listen(PORT, () => {});
