import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const app = express();
app.use(cors());
app.use(bodyParser.json());

const connectionString = 'mongodb+srv://lewach:lewachabmss@lewachdb.vdgyobf.mongodb.net/';


mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  username: String,
  email: String,
  password: String,
  confirmpassword: String,
  region: String,
  cityzone: String,
  subcityworeda: String,
  pobox: String,
  snl: String,
  ssn: String,
});

const User = mongoose.model('User', userSchema);

app.post('/register', async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).send(newUser);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).send('User not found');
    }

    if (user.password !== req.body.password) {
      return res.status(401).send('Incorrect password');
    }

    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

// app.post('/login', async (req, res) => {
//   try {
//     const user = await User.findOne({ email: req.body.email });
//     if (!user) {
//       return res.status(404).send('User not found');
//     }

//     const validPassword = await bcrypt.compare(req.body.password, user.password);
//     if (!validPassword) {
//       return res.status(401).send('Incorrect password');
//     }

//     const token = jwt.sign({ _id: user._id }, '$2a$10$JZJZJZJZJZJZJZJZJZJZJZJZ', { expiresIn: '1h' });

//     res.status(200).json({ token });
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});