import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import multer from 'multer';
import session from 'express-session';
import MongoDBStore from 'connect-mongodb-session';

const app = express();
app.use(cors());
app.use(bodyParser.json());

const connectionString = 'mongodb+srv://lewach:lewachabmss@lewachdb.vdgyobf.mongodb.net/';

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//SESSION
const MongoDBSessionStore = MongoDBStore(session);

const store = new MongoDBSessionStore({
  uri: connectionString,
  collection: 'sessions',
});

app.use(
  session({
    secret: '2023@ABMSSKEYYEKSSMBA', 
    resave: false,
    saveUninitialized: false,
    store: store,
    cookie: { maxAge: 7 * 24 * 60 * 60 * 1000 }, 
  })
);
//SESSION END


//USER
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
//USER END

//UPLOAD
const itemSchema = new mongoose.Schema({
  itemType: String,
  brandName: String,
  modelType: String,
  itemQuantity: Number,
  itemEstimatedValue: String,
  itemDurationOfUsage: String,
  itemDefects: String,
  itemRegion: String,
  itemCityZone: String,
  itemSubcityWoreda: String,
  itemSpecificArea: String,
  itemsWillingToAccept: String,
  file: {
    data: Buffer,
    contentType: String,
  },
});

const Item = mongoose.model('Item', itemSchema);

const upload = multer({ storage: multer.memoryStorage() });

app.post('/submit-item', upload.single('itemImage'), async (req, res) => {
  try {
    const newItem = new Item({
      ...req.body,
      file: {
        data: req.file.buffer,
        contentType: req.file.mimetype,
      },
    });
    await newItem.save();
    res.status(201).send({ message: 'Item saved' });
  } catch (error) {
    console.error('Error processing request:', error);
    res.status(500).send({
      error: error.message,
      data
    });
  }
});
//UPLOAD END


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});