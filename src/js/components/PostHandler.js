import React from "react";
import connectToStores from "flummox/connect";

class PostHandler extends React.Component {
  render(){
    let { title, content } = this.props.post;
    return (
      <div>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{__html: content}} />
      </div>
    );
  }
}

export default connectToStores(PostHandler,{
  posts: (store, {params}) => {
    return {
      post: store.getPost(params.splat)
    };
  }
});
