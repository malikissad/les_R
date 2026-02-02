import nodemailer from "nodemailer";

function config() {
 nodemailer.createTransport({
    service : "Gmail",
    auth: {
      user: "malikisad24@gmail.com",
      pass: "nryx hwru eatw srkw",
    },
  });
}

export default config