import Datastore from 'nedb';

// Load NeDB from `./db/test.db`.
const db = new Datastore({ filename: 'db/test.db', autoload: true });

// Create an array of documents you wish to add.
const docs = [
   { hello: 'world', n: 5, nedbIsAwesome: true, fruits: [ 'apple', 'orange', 'pear' ], infos: { name: 'nedb' }},
   { hello: 'again', n: 10, nedbIsAwesome: true, fruits: [ 'pineapple', 'acai' ], infos: { name: 'foundry' }}
];

// Iterate over the docs array,
for (const doc of docs)
{
   // Insert document.
   db.insert(doc);
}

// Modify this script to insert as many documents as desired. Every time you run it though it will append to the DB.