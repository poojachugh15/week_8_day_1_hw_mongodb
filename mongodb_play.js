// mongodb_play.js
use zoo;


//READ
//MongoDB ObjectId:
//When we insert an entry into a database, MongoDB assigns it an unique identifier, an ObjectId, with the key _id


const id = ObjectId('608721ca8940eee62f04e32c');

// This will return the first entry it finds with the specified ObjectId
db.animals.findOne({ _id:id });


//UPDATE 
// We can update the fields of existing entries using the updateMany method if we want to update multiple entries.
// Pass Two arguments:
    // The query object for specifying which entry we want to update.
    // An object with the key $set

// MODIFIED
    db.animals.updateOne( 
    {_id: ObjectId('608721ca8940eee62f04e32d')},
    {$set: {name: 'Pip'} }
);


//DELETE
// if we want to delete entries from the database we can use the deleteMany method and pass it a query object. 

db.animals.deleteOne({_id: ObjectId('608721ca8940eee62f04e32d')})