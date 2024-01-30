const express = require("express");
const router = express.Router();
const path = require("path");
// const nodemailer = require("nodemailer");

// //API routes
// router.use("/api", apiRouter);

// router.post("/", (req, res) => {
//   const { name, email, phone, subject, message } = req.body;

//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: process.env.EMAIL,
//       pass: process.env.PASSWORD,
//     },
//   });

//   const mailOptions = {
//     from: email,
//     to: "nicolejoan9@yahoo.com",
//     subject: subject,
//     text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
//   };

//   transporter.sendMail(mailOptions, function (error, data) {
//     if (error) {
//       console.log(error);
//       res.status(500).json({ success: false, message: "An error has occurred" });
//       // res.send("An error has occurred");
//     } else {
//       // res.send("Message was sent successfully");
//       res.json({ success: true, message: "Message was sent successfully" });
//     }
//   });
// });


//connects server to our client folder
router.use(express.static(path.join(__dirname, "../../client/dist")));


//all other routes to be handled inside index.html
router.get("/*", (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      "../../client/dist/index.html",
    )
  );
});


module.exports = router;
