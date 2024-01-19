const { read } = require('fs');
const { MongoClient } = require('mongodb');

const loadMovies = async function loadMoviesFromTable() {

    // const client = global.prismadb || new PrismaClient();
    // if (process.env.NODE_ENV === 'production') global.prismadb = client;

    // const dotenv = require('dotenv')
    // console.log(dotenv)
    // dotenv.config({ path: path.resolve(__dirname, '../.env') })
    require('dotenv').config()

    // const uri = { uri: process.env.DATABASE_URL};
    // console.log(uri.uri);
    const uri = process.env.DATABASE_URL;

    const client = new MongoClient(uri);

    try {
        // Connect to the MongoDB cluster
        await client.connect();

        // Make the appropriate DB calls
        const results = await findMovies(client, {maximumNumberOfResults: 30});
        return results

    } finally {
        // Close the connection to the MongoDB cluster
        await client.close();
    }
}

async function findMovies(client, {
    maximumNumberOfResults = 30 //Number.MAX_SAFE_INTEGER
} = {}) {

    // See https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#find for the find() docs
    const cursor = client.db("movies").collection("Movies")
        .find()
        // .sort({ title })
        .limit(maximumNumberOfResults);

    // Store the results in an array
    return await cursor.toArray();

    // Print the results
    // if (results.length > 0) {
    //     console.log(`Found`)
    //     results.forEach((result, i) => {
    //         console.log();
    //         console.log(`${i + 1}. name: ${result.title}`);
    //         console.log(`   _id: ${result._id}`);
    //     });
    // } else {
    //     console.log(`No listings found `);
    // }
}

module.exports = loadMovies