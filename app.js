import express from 'express';
import fileUpload from 'express-fileupload';
import mongoose from 'mongoose';
import router from './Router/router.js';
const DB_URL = 'mongodb://localhost:27017/test';
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection ERROR'));
db.once('open', () => {
	console.log('Connected');
});

const app = express();
const port = 3000;

app.use(express.json());
app.use(fileUpload({}));
app.use(express.static('static'));
app.use('/api', router);

async function startApp() {
	try {
		await mongoose.connect(DB_URL, {
			useUnifiedTopology: true,
			useNewUrlParser: true,
		});

		app.listen(port, () => console.log(`Example app listening on port ${port}!`));
	} catch (error) {
		console.log(error);
	}
}
startApp();
