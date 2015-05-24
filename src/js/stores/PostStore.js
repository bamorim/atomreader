import { Store } from "flummox";

class PostStore extends Store {
  constructor(flux){
    super();
    const postActionIds = flux.getActionIds("posts");

    this.register(postActionIds.getPosts, this.handlePosts);
    this.state = {
      posts: []
    }
  }

  handlePosts(posts) {
    this.setState({ posts });
  }

  getPost(uri) {
    let fullUri = uri[0] == '/' ? uri : "/"+uri;
    return this.state.posts.filter((p) => p.uri == fullUri)[0];
  }
}

export default PostStore;
