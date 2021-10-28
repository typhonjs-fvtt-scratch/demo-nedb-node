import fs         from 'fs';
import Datastore  from 'nedb';

// Load NeDB from `./db/test.db`.
const db = new Datastore({ filename: 'db/test.db', autoload: true });

// Load docs array from JSON file.
const docs = JSON.parse(fs.readFileSync('./data/data.json', 'utf8'));

// Iterate over the docs array,
for (const doc of docs)
{
   // Insert document.
   db.insert(doc);
}

// Modify this script to insert as many documents as desired. Every time you run it though it will append to the DB.