import { Actions } from "flummox";
import request from "superagent";

function parseEntry(entry) {
  let { title, link, content, author, contentSnippet, publishedDate, categories} = entry;
  let uri = link.match(/http:\/\/[^\/]+(.*)/)[1]
  let date = publishedDate; //Add moment.js later

  return { title, uri, content, author, contentSnippet, date, categories };
}

function getEntriesFrom(url) {
  return new Promise((resolve, reject) => {
    const maxEntries = 100;
    google.load("feeds","1", { callback: () => {
      const feed = new google.feeds.Feed(url);
      feed.setNumEntries(maxEntries);
      feed.load((result) => {
        if(result.error) {
          reject();
        } else {
          resolve(result.feed.entries.map(parseEntry));
        }
      })
    }})
  });
}

class PostActions extends Actions {
  async getPosts() {
    const url = "http://miadoimportado.blogspot.com/feeds/posts/default";
    return await getEntriesFrom(url);
  }
}

export default PostActions;
