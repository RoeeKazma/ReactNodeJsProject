import React, { Component } from "react";

class PostsEx extends Component {
  state = {
    posts: [],
  };

  async getPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const body = await response.json();

    this.setState({
      posts: body,
    });
  }

  componentDidMount() {
    this.getPosts();
  }

  render() {
    const { posts } = this.state;

    return (
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    );
  }
}

export default PostsEx;
