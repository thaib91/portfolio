import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Feel free to contact me for any work or suggestions below: 
              <br/>
              <h5>Email:</h5><a href="mailto: tbui64@gmail.com">tbui64@gmail.com</a>
              </p>
              <br/>
              <h4>Articles Published:</h4>
                <a href="https://medium.com/@thaibui_28581/the-before-my-truth-in-learning-to-code-as-a-newbie-f13f134c6aeb">
                 Medium: The Before: My Truth In Learning To Code As A Newbie
                </a>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4>Project Links:</h4>
                  <a href="https://www.teamlyfe.com/#/">TeamLyfe</a> <a href="https://github.com/thaib91/lyfe"> | Github</a>
                  <br/>
                  <a href="https://cramify.net/#/">Cramify</a> <a href="https://github.com/Cramify/cramify"> | Github</a>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}