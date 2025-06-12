const express = require('express');
const connect = require('./config/database');
const app = express();

const TweetRepository = require('./repository/tweet-repository');
const Comment = require('./models/comment');

app.listen(3000, async() => {
    console.log("Server Started");
    await connect();  
    console.log('Mongo db connected');
    // const tweet = await Tweet.create({
    //     content: 'First tweet',
    //     userEmail: 'a@b.com'
    // });
    //const tweets = await Tweet.find({userEmail: 'a@b.com'}); 
    // const tweet = await Tweet.findById('3445255tgth644hh56');
    // tweet.userEmail = 'b@c.com';
    // await tweet.save();
    const tweetRepo = new TweetRepository();
    // const tweet = await tweetRepo.create({content: 'Tweet with comment schema'});
    // console.log(tweet);
    // const comment = await Comment.create({content: 'new Comment'});
    // tweet.comments.push(comment); 
    // await tweet.save();
    // const tweet = await tweetRepo.getAll(2, 4); 
    // console.log(tweet[0].contentWithEmail);
    const tweet = await tweetRepo.create({content: 'With hooks'});
    console.log(tweet);
}); 