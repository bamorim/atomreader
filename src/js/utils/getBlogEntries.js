import request from "superagent";
import moment from "moment";

function parseEntry(entry) {
  let { title, link, content, author, contentSnippet, publishedDate, categories} = entry;
  let uri = link.match(/http:\/\/[^\/]+(.*)/)[1]
  let date = moment(publishedDate);

  return { title, uri, content, author, contentSnippet, date, categories };
}

function parseResult(result){
  console.log(result);
  let { title, description } = result.feed;
  let entries = result.feed.entries.map(parseEntry)
  return { entries, title, description };
}

function fetchBlogInfo(url) {
  return new Promise((resolve, reject) => {
    const maxEntries = 100;
    google.load("feeds","1", { callback: () => {
      const feed = new google.feeds.Feed(url);
      feed.setNumEntries(maxEntries);
      feed.load((result) => {
        console.log(result);
        if(result.error) {
          reject();
        } else {
          resolve(parseResult(result));
        }
      })
    }})
  });
}

var cache = {}
export default function getBlogInfo(url) {
  if(cache[url]) {
    return new Promise((resolve, reject) => {
      resolve(cache[url]);
    });
  } else {
    return fetchBlogInfo(url).then(function(info){
      cache[url] = info;
      return info;
    });
  }
}
