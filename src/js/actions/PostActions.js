import { Actions } from "flummox";
import getBlogEntries from "../utils/getBlogEntries";

class PostActions extends Actions {
  async getPosts(blogId) {
    const url = "http://"+blogId+".blogspot.com/feeds/posts/default";
    let info = await getBlogEntries(url);
    return { info, blogId };
  }
}

export default PostActions;
