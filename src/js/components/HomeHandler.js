import React from "react";
import { RouteHandler, Link } from "react-router";
import connectToStores from "flummox/connect";

class HomeHandler extends React.Component {
  componentDidMount(){
    document.title = this.props.title + " - ReactReader";
  }

  uriFor(post){
    return "/"+this.props.blogId+post.uri;
  }

  renderPostItem(post){
    let uri = this.uriFor(post);
    return (
      <li>
        <Link to={this.uriFor(post)}>{post.title}</Link>
      </li>
    );
  }

  render(){
    let { posts, title } = this.props;
    return (
      <div className="wrapper">
        <h1>{title}</h1>
        <ul>
          { posts.map((p) => this.renderPostItem(p)) }
        </ul>
        <RouteHandler/>
      </div>
    );
  }
}

HomeHandler = connectToStores(HomeHandler,{
  posts: (store, {params}) => {
    let { entries, title } = store.getInfo(params.blogId);
    return {
      title,
      posts: entries,
      blogId: params.blogId
    };
  }
});

HomeHandler.routerWillRun = async function({flux, state}){
  const postActions = flux.getActions("posts");

  return await postActions.getPosts(state.params.blogId);
}

export default HomeHandler;
