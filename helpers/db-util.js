import { MongoClient } from "mongodb";
export async function connectDatabase() {
  const url =
    "mongodb+srv://nextEventDbUser:66TR8h3AlbqbVMq4@cluster0.e9a4v.mongodb.net/events?retryWrites=true&w=majority";
  const client = await MongoClient.connect(url);
  return client;
}

export async function insertDocument(client, collection, document) {
  const db = client.db();
  const result = await db.collection(collection).insertOne(document);
  return result;
}

export async function getAllDocuments(client, collection, sort) {
  const db = client.db();
  const documents = await db
    .collection(collection)
    .find()
    .sort(collection)
    .toArray();
  return documents;
}
