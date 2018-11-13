const mongoose = require("mongoose");
const db = require("../models");


mongoose.Promise = global.Promise;

// This file empties the ARTICLES and inserts the ARTICLES below...

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/nytreact",
  {
    useMongoClient: true
  }
);

const articleSeed = [
  {
    title: 'Video Game Creators Seek Out Hollywood for Robust Narratives',
    date: '2017-12-20T00:00:00Z',
    url: 'https://www.nytimes.com/2017/12/20/technology/video-game-creators-hollywood-writers.html'
  },
  {
    title: 'A Video Game Loot Box Offers Coveted Rewards, but Is It Gambling?',
    date: '2018-04-24T00:00:00Z',
    url: 'https://www.nytimes.com/2018/04/24/business/loot-boxes-video-games.html'
  },
  {
    title: 'All We Want to Do Is Watch Each Other Play Video Games',
    date: '2018-05-02T00:00:00Z',
    url: 'https://www.nytimes.com/2018/05/02/style/fortnite.html'
  }
];

db.Articles
  .remove({})
  .then(() => db.Articles.collection.insertMany(articleSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });