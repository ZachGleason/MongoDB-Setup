# MongoDB-Setup-Commands 

// Creating new data in a collection
db.People.insert({name: ‘Freddie’, home_state: ‘Washington’, lucky_number: 8, birthday: {month: 1, day: 1, year: 1989}})


// Finding Data in a collection
db.People.find()
{ "_id" : ObjectId("625f51f396feb632b822e4f6"), "name" : "John", "home_state" : "California", "lucky_number" : 7, "birthday" : { "month" : 7, "date" : 12, "year" : 2000 } }
{ "_id" : ObjectId("625f53929faf9ec79dceee4b"), "name" : "Joe Schmo", "home_state" : "California", "lucky_number" : 8, "birthday" : { "month" : 1, "day" : 1, "year" : 1989 } }
{ "_id" : ObjectId("625f53a59faf9ec79dceee4c"), "name" : " Schmo", "home_state" : "California", "lucky_number" : 2, "birthday" : { "month" : 1, "day" : 1, "year" : 1932 } }


db.People.find({ home_state: ‘California'})

db.People.find({lucky_number: {$gte: 1, $lte: 9}}).pretty()


db.People.updateMany({}, {$set: {interests: ['coding', 'brunch', 'MongoDB']}})
{ "acknowledged" : true, "matchedCount" : 5, "modifiedCount" : 5 }

db.People.update({name: John’}, {$push: {interests: 'taxes'}})

db.People.remove({home_state: 'California'})

db.People.remove({name: ‘Schmo})

db.People.remove({lucky_number})
