// create a database or use existing one:
use zoo;


db.dropDatabase(); // NEW

// CREATE - insertOne(to add an entry) or insertMany(We can pass insertMany an array of objects and it will insert all the objects into the database)
db.animals.insertMany([
    {
        name: 'Janet',
        type: 'Polar Bear'
    },
    {
        name: 'Norman',
        type: 'Penguin',
        age: 5
    }
])