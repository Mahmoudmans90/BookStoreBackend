use book_store_app

db.createCollection("books" , {
  validator:{
    $jsonSchema:{
      bsonType:"object",
      required:["title"],
      properties:{
        title:{bsonType:"string",minLength:1}
      }
    }
  }
})

db.authors.insertOne({name:"name"})

db.createCollection("logs" , {capped:true , size :1024*1024})
db.books.createIndex({title:1})

db.books.insertOne({title:"book1",
  author:"author1" ,
  year:2015,
  geners:["ads","ssd"]})




 db.books.insertMany([{
title:"book2",
author:"mahmoud",
year:2012,
geners:["gener1" , "gener2"]},
{title:"book3",
author:"mahmoud",
year:2010,
geners:["gener1 , gener2"]}
])

db.logs.insertOne({bookId:ObjectId("6997ac038a27838d38a8dcf4") , action:"borrow" , data:new Date()} )

db.book.updateOne({title:"Future"} , {$set:{year:2022}})


db.books.find({title:"Future"})



db.books.find({
  year:{
    $gte:1990 , $lte:2000
  }
})

db.books.find({geners:"gener1"})

db.books.find({geners:"gener1"})

db.books.find({
  year:{$type:"int"}
})

db.books.find({
  geners:{
    $nin:["Horror" , "gener1"]
  }
})

db.books.deleteMany({
  year:{$lt:2000}
})

db.books.aggregate([
  {$match:{year:{$gt:2000}}},
  {$sort :{year:-1}}
])

db.books.aggregate([{$match:{year:{$gt:2000}}} , {$project:{title:1,_id:0,author:1,year:1}}])





db.books.aggregate([{$unwind:"$geners"} , {$project:{_id:0 , title:1 , auther:1 , gener: "$geners"}}])


db.books.aggregate({$lookup:{from:"logs" , localField:"_id" , foreignField:"bookId" ,as:"LogData"}})

