import express from "express";
import bodyparser from "body-parser";
import bcrypt from "bcrypt";
import knex from "knex";
import cors from "cors";
import multer from "multer";
const app = express();

const db = knex({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    user: "postgres",
    password: "2207",
    database: "shopreact",
  },
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.post("/signin", (req, res) => {
  const { email, password } = req.body;
  db.select("email", "hash")
    .from("login")
    .where("email", "=", email)
    .then((data) => {
      const isValid = bcrypt.compareSync(password, data[0].hash);
      if (isValid) {
        res.json(data[0]);
      } else {
        res.status(400).json("wrong information");
      }
    })
    .catch((err) => res.status(400).json("err"));
});

app.post("/register", (req, res) => {
  const { name, age, email, password } = req.body;
  if (!name || !age || !email || !password || !email.includes("@")) {
    return res.status(400).json("not valid");
  }
  const saltRounds = 10;
  const hash = bcrypt.hashSync(password, saltRounds);
  db.transaction((trx) => {
    trx
      .insert({
        email: email,
        hash: hash,
      })
      .into("login")
      .returning("email")
      .then((EmailLogIn) => {
        return trx("users")
          .insert({
            name: name,
            age: age,
            email: EmailLogIn[0],
            priority: false,
          })
          .returning("*")
          .then((user) => res.json(user[0]))
          .catch((err) => res.status(400).json("cannot create user"));
      })
      .then(trx.commit)
      .catch(trx.rollback);
  }).catch((err) => res.status(400).json("cannot transaction"));
});

app.get("/products", (req, res) => {
  db("products")
    .orderBy("id", "desc")
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json("err"));
});

app.get("/products/latest", (req, res) => {
  db("products")
    .orderBy("id", "desc")
    .limit(8)
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json(err));
});

app.get("/products/latest/orderBy/Asc", (req, res) => {
  db("products")
    .orderBy("price", "asc")
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json("something is wrong!"));
});

app.get("/products/latest/orderBy/Desc", (req, res) => {
  db("products")
    .orderBy("price", "desc")
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json("something is wrong"));
});
app.get("/recentproduct", (req, res) => {
  db("products")
    .orderBy("id", "desc")
    .limit(4)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => res.status(400).json("err"));
});

app.post("/shop/detail", (req, res) => {
  const { name } = req.body;
  db.select("*")
    .from("products")
    .where("name", "=", name)
    .then((data) => {
      if (data.length === 0) {
        res.status(404).json("not found");
      } else {
        res.json(data[0]);
      }
    })
    .catch((err) => res.status(400).json("err"));
});

app.get("/blog", (req, res) => {
  db.select("*")
    .from("blog")
    .orderBy('id', 'desc')
    .then((data) => {
      res.json(data);
    })
    .catch((err) => res.status(404).json("not found"));
});

app.post("/bill", (req, res) => {
  const {
    emailUser,
    firstName,
    lastName,
    companyName,
    countryRegion,
    address,
    phoneNumber,
    email,
    items,
    totalprice,
  } = req.body;
  if (
    !emailUser ||
    !firstName ||
    !lastName ||
    !countryRegion ||
    !address ||
    !phoneNumber ||
    !email ||
    !items ||
    !totalprice
  ) {
    return res.status(400).json("not fill the blank");
  }
  db("bills")
    .insert({
      emailuser: emailUser,
      firstname: firstName,
      lastname: lastName,
      companyname: companyName,
      countryregion: countryRegion,
      address: address,
      phonenumber: phoneNumber,
      email: email,
      items: items,
      date: new Date(),
      totalprice: totalprice,
    })
    .returning("*")
    .then((data) => {
      if (data[0].id) {
        res.json(data[0]);
      } else {
        res.status(404).json("not found");
      }
    })
    .catch((err) => console.log(err));
});

app.post("/information/user", (req, res) => {
  const { email } = req.body;
  db("users")
    .where({
      email: email,
    })
    .select("*")
    .then((data) => res.json(data[0]))
    .catch((err) => res.status(404).json("not found"));
});

app.post("/user/bill", (req, res) => {
  const { email } = req.body;
  db.select("*")
    .from("bills")
    .where("emailuser", "=", email)
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json("error"));
});

app.post("/dashboard/admin", (req, res) => {
  const { email } = req.body;
  db.select("*")
    .from("users")
    .where("email", "=", email)
    .returning("priority")
    .then((data) => res.json(data[0]))
    .catch((err) => res.status(400).json("error"));
});

app.get("/calculate/bill", (req, res) => {
  db.select("*")
    .from("bills")
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json(err));
});

app.get("/invoice/bill", (req, res) => {
  db.select("*")
    .from("bills")
    .orderBy("id", "desc")
    .limit(5)
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json("not working"));
});

app.put("/update/blog", (req, res) => {
  const { newTitle, newContent, id, url } = req.body;
  if ((!newTitle, !newContent)) {
    return res.status(400).json("unvalid data");
  }
  db("blog")
    .where("id", "=", id)
    .update({
      title: newTitle,
      contentblog: newContent,
      url: url,
    })
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json("not working!"));
});



// using multer
const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../components/img");
  },
  // the directory we want to save
  filename: (req, file, cb) => {
    cb(null, new Date().getDate() + '-' + file.originalname);
  },
  // create name of file we want
});

const upload = multer({ storage: fileStorageEngine });

app.post("/upload/image", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json("invalid!");
  }
  res.json(req.file);
});

// check the month of bills we have
app.post("/bill/month", (req, res) => {
  const { date } = req.body;
  db("bills")
    .andWhereRaw(`EXTRACT(MONTH FROM date::date) = ?`, [date])
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json("err"));
});

// app.get("/bill/year", (req, res) => {
//   db('bills').whereBetween('date', [`${new Date().getFullYear()}-01-01`, new Date()])
//   .then(data => res.json(data))
//   .catch(err => console.log(err));
// });

app.post("/feedback", (req, res) => {
  const { name, email, subject, message } = req.body;
  if (!name || !email || !subject || !message || !email.includes("@")) {
    return res.status(400).json("not validated");
  }
  db("feedback")
    .insert({
      name: name,
      email: email,
      subject: subject,
      message: message,
    })
    .returning("*")
    .then((data) => res.json(data[0]))
    .catch((err) => res.status(400).json("error, try again"));
});

app.get("/customer/feedback", (req, res) => {
  db.select("*")
    .from("feedback")
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json("not working"));
});

app.post('/voucher', (req, res) =>{
  const {voucher} = req.body;
  db('discount').where({
    voucher: voucher
  }).then(data =>{
    res.json(data[0])
  }).catch(err => res.status(400).json('not valid!'));
})

app.delete('/blogs', (req, res) =>{
  const {id} = req.body;
  db('blog').where({
    id: id
  }).del()
  .then(data =>{
    res.json(data);
  }).catch(err => res.status(400).json(err));
});

app.post('/upload/new-post', (req, res) =>{
  const {title, content, image, active} = req.body;
  if(!title || !content || !image){
    return res.status(400).json('not valid');
  }
  db('blog').insert({
    title: title,
    contentblog: content,
    url: image,
    active: active
  }).returning('*')
  .then(data =>{
    res.json(data[0]);
  }).catch(err => res.status(400).json(err));
})

app.get('/list/user', (req, res) =>{
  db.select('*').from('users')
  .then(data => res.json(data))
  .catch(err => res.status(400).json('err'));
});

app.get('/user/:id', (req, res) =>{
  const {id} = req.params;
  db('users').where('id', '=', id)
  .returning('*')
  .then(data => res.json(data[0]))
  .catch(err => res.status(400).json('error!'));
})

app.put('/user/:id', (req, res) =>{
  const {id} = req.params;
  const {name, age, email, role} = req.body;
  db('users').where('id', '=', id)
  .update({
    name: name,
    age: age,
    email: email,
    priority: role
  }).then(data => res.json(data))
  .catch(err => res.status(400).json(err));
})

app.listen(3001, () => {
  console.log(`app is running at port ${process.env.PORT}`);
});
