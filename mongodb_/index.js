const express = require('express')
const { MongoClient } = require('mongodb')

const url = 'mongodb://localhost:27017'
const client = new MongoClient(url)

async function getData() {
    let result = await client.connect();
    let db = result.db('up')
    let collection = db.collection('students')
    let response = await collection.find().toArray();
    console.log(response);
}

getData()