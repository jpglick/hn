import React, {Component} from 'react';
import './Comment.css';

class Comment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.commentId,
      by: null,
      text: null,
      time: null,
      error: null
    };

    this.componentDidMount = this.componentDidMount.bind(this);
    this.getData = this.getData.bind(this);
  }

  getData() {
    fetch(`https://hacker-news.firebaseio.com/v0/item/${this.state.id}.json`)
      .then(res => res.json())
      .then(
        (resJson) => {
          if (resJson.text) {
            let text = resJson.text;
            this.setState({
              by: resJson.by,
              text: text,
              time: resJson.time
            });
          }
      },
      (error) => {
        this.setState({
          error
        });
      }
    )
  }

  componentDidMount() {
    this.getData();
  }

  cleanText(txt) {
    if (typeof txt !== 'undefined') {
      return txt.replace(/<\/?[^>]+(>|$)/g, "\n");
    }
  }

  render() {
    return (
      <div className="comment-container">
        <div className="user-head">
          <span className="user">Posted By: {this.state.by}</span>
        </div>
        <div className="comment" dangerouslySetInnerHTML={{__html: this.state.text}} />
        <br />
      </div>
    );
  }
}

export default Comment;
