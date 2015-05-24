import React from "react";
import connectToStores from "flummox/connect";

class PostHandler extends React.Component {
  render(){
    let { title, content, author, date } = this.props.post;
    return (
      <div className="blog-post">
        <header>
          <h1>{title}</h1>
          <p>Por {author} em <time>{date.format("LLLL")}</time></p>
        </header>
        <article dangerouslySetInnerHTML={{__html: content}} />
      </div>
    );
  }
}

export default connectToStores(PostHandler,{
  posts: (store, {params}) => {
    console.log(params);
    console.log(store);
    return {
      post: store.getPost(params.blogId, params.splat)
    };
  }
});
