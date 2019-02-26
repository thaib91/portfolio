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
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <br/>
                <h4>Project Links:</h4>
                  <a href="https://www.teamlyfe.com/#/">TeamLyfe</a>
                  <br/>
                  <a href="https://cramify.net/#/">Cramify</a>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}