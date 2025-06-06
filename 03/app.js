import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.querySelector("#root"));

class Article extends React.Component {
  state = {
    comments: [],
  };

  handleChange = (e) => {
    this.setState({
      content: e.target.value,
    });
  };

  addComment = (e) => {
    e.preventDefault();
    const { content, comments } = this.state;
    this.setState({
      comments: [...comments, content],
      content: "",
    });
  };
  render() {
    const { title, body } = this.props;
    const { comments, content } = this.state;
    return (
      <article>
        <h1>{title}</h1>
        <p>{body}</p>
        <section>
          <form onSubmit={this.addComment}>
            <div>
              <label>
                <textarea
                  style={{ minWidth: "300px", minHeight: "120px" }}
                  name="content"
                  value={content}
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <div>
              <input type="submit" value="dodaj komentarz" />
            </div>
          </form>
          <ul>
            {comments.map((comment) => (
              <li>{comment}</li>
            ))}
          </ul>
        </section>
      </article>
    );
  }
}

root.render(
  <Article
    title="Programowanie jest super!"
    body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis justo ipsum, eleifend vel quam eget, lobortis posuere arcu. In vitae eros in nisi sodales aliquam..."
  />
);
