import {TweetRepository, HashtagRepository} from '../repository/index.js';

class TweetService {
    constructor() {
        this.tweetRepository = new TweetRepository();
        this.hashtagRepository = new HashtagRepository();
    }

    async create(data) {
        const content = data.content;
        const tags = content.match(/#[a-zA-Z0-9_]+/g);//this regx extracts hashtags
        const tweet = await this.tweetRepository.create(data);
        let alreadyPresentTags = await this.hashtagRepository.findByName(tags);
        let titleOfPresenttags = alreadyPresentTags = alreadyPresentTags.map((tag) => tag.title);
        let newTags = tags.filter(tag => !titleOfPresenttags.includes(tag));
        newTags = newTags.map(tag => {
            return {title:tag, tweets: [tweet.id]}
        });
        await this.hashtagRepository.bulkCreate(newTags);
        //[{title: 'coding', tweets: []}]
        //[exited, coding, js, career] -> [exited, career]
        //todo create hashtags and add here
        /**
         * 1. bulkcreate in mongoose
         * 2. filter title of hashtag based on multiple tags
         * 3. How to add tweet id inside all the hashtags
         */
        // alreadyPresentTags.forEach((tag) => {
        //     tag.tweets.push(tweet.id);
        //     tag.save();
        // });
        // return tweet;
    }
}

export default TweetService;

/*
  this is #first #tweet . I am really #exited
*/