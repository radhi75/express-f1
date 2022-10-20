const express = require("express");
const date = new Date();
const app = express();

const PORT = 5000;
const birthday = new Date;
const day1 = birthday.getDay();

const path = require("path");
console.log(Date);
app.get("/", function (req, res) {
  res.send("hello world");
});
// public/about
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "about.html"));
});
// public/home
app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "home.html"));
});
// public/contact
app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "contact.html"));
});
//import style
app.get("/style.css", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "style.css"));
});
app.use(express.json());
app.listen(PORT, console.log(`app is runnig on port ${PORT}`),console.log(day1));

const students = [
  {
    id: 0,
    email: "dhiya@gmail.com",
  },
  { id: 1, email: "wassim@gmail.com" },
  { id: 2, email: "ayoub@gmail.com" },
];

//methode GET
app.get("/students", (req, res) => {
  res.send({ msg: "list of students", students });
});
// methode POST
app.post("/add", (req, res) => {
  const newStudent = [...students, req.body];
  res.send({ msg: "student added", newStudent });
});
//methode DELETE
app.delete("/del/:id", (req, res) => {
  const deleteUser = students.filter((student) => student.id != req.params.id);
  res.send({ msg: "user deleted", deleteUser });
});
//methode PUT
app.put("/edit/:id", (req, res) => {
  const editUser = students.map((student) =>
    student.id == req.params.id ? { ...student, ...req.body } : student
  );
  res.send({ msg: "user updated", editUser });
});
