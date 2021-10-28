# demo-nedb-node
Provides a basic example of using NeDB from NPM scripts to
append data to a DB file. 

How to use:
- Install [NodeJS](https://nodejs.org/en/)
- Install Git; [instructions here for various platforms](https://www.atlassian.com/git/tutorials/install-git)
- Open a console and find a location to clone repo. 
- Enter `git clone https://github.com/typhonjs-fvtt-scratch/demo-nedb-node.git`
- Enter `cd demo-nedb-node`
- Enter `npm install`
- Enter `npm run append-db` (append from docs array in `./src/appendDB.js`)
  * or
- Enter `npm run append-json` (append from `./data/data.json`)

A file `./db/test.db` is created with the contents of the `docs` array in the script `./src/appendDB.js`. Every time you 
run these NPM scripts they will append the contents of `docs` to `./db/test.db`.   

Also an example script of loading docs from a JSON file (`./data/data.json`) and appending the DB is located in 
`./src/appendJSON.js`.

Modify to do what you need to accomplish. Do peruse the [NeDB API docs](https://github.com/louischatriot/nedb#api) and
other sources of NeDB online to learn how to do more with NeDB. 