import { createClienConnection } from './conf/databaseConnection';
import express from 'express';
const port = process.env.PORT;
const app = express();
(async () => {
	// Connect to the database
	createClienConnection();
	// Start express App
	app.listen(port);
	// tslint:disable-next-line: no-console
	console.log(`Halkoliiteri on startattu portilla ${port}...`);
})();
