//This is a sample js file for mongodb queries
//You need to have mongo extension in VS to connect to mongoDB database to execute this file
// or you can use mongo Shell to execute these queries.


// ✅ Switch to or create a new database
use collegeDB;

// ✅ Drop 'students' collection if it exists (for repeat runs)
db.students.drop();

// ✅ Create collection (optional)
db.createCollection("students");

// ✅ Insert multiple documents
db.students.insertMany([
  { name: "Alice", age: 20, course: "CS", email: "alice@college.com" },
  { name: "Bob", age: 21, course: "Math", email: "bob@college.com" },
  { name: "Charlie", age: 22, course: "Physics", email: "charlie@college.com" },
  { name: "David", age: 23, course: "CS", email: "david@college.com" }
]);

// ✅ Read all documents
print("📚 All Students:");
printjson(db.students.find().toArray());

// ✅ Find by condition
print("🔎 Students in CS course:");
printjson(db.students.find({ course: "CS" }).toArray());

// ✅ Update one document
db.students.updateOne(
  { name: "Alice" },
  { $set: { age: 25, city: "Mumbai" } }
);

// ✅ Delete one document
db.students.deleteOne({ name: "Charlie" });

// ✅ Query with operators
print("🔎 Students older than 21:");
printjson(db.students.find({ age: { $gt: 21 } }).toArray());

print("🔎 Students in CS or Math:");
printjson(db.students.find({ course: { $in: ["CS", "Math"] } }).toArray());

// ✅ Projection
print("🧾 Names and ages only:");
printjson(db.students.find({}, { name: 1, age: 1, _id: 0 }).toArray());

// ✅ Aggregation: Group by course
print("📊 Aggregation - Count by course:");
printjson(db.students.aggregate([
  { $group: { _id: "$course", total: { $sum: 1 } } }
]).toArray());

// ✅ Create index
db.students.createIndex({ email: 1 }, { unique: true });
print("📂 Indexes on students collection:");
printjson(db.students.getIndexes());

// ✅ Find by _id
const sampleId = db.students.findOne()._id;
print("🆔 Find student by _id:");
printjson(db.students.find({ _id: sampleId }).toArray());

// ✅ Drop the entire database
db.dropDatabase();
print("🗑️ Database 'collegeDB' dropped.");
