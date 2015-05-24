import { Store } from "flummox";

class PostStore extends Store {
  constructor(flux){
    super();
    const postActionIds = flux.getActionIds("posts");

    this.register(postActionIds.getPosts, this.handlePosts);
    this.state = {}
  }

  handlePosts({blogId, info}) {
    this.setState({ [blogId]: info });
  }

  getInfo(blogId){
    return this.state[blogId] || {};
  }

  getPosts(blogId) {
    return this.getInfo(blogId).entries || [];
  }

  getPost(blogId, uri) {
    let fullUri = uri[0] == '/' ? uri : "/"+uri;
    return this.getPosts(blogId).filter((p) => p.uri == fullUri)[0];
  }
}

export default PostStore;
