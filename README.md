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
- Enter `npm run build-db`

A file `./db/test.db` is created with the contents of the `docs` array in the script `./src/appendDB.js`. Every time you 
run this NPM script it will append the contents of `docs` to `./db/test.db`.   

Modify to do what you need to accomplish. Do peruse the [NeDB API docs](https://github.com/louischatriot/nedb#api) and
other sources of NeDB online to learn how to do more with NeDB. 