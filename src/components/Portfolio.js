import React, { Component } from 'react';
import './portfolio.scss';

export default class Porfolio extends Component {
  render() {

    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
          <h1>Check Out Some of My Works and <bold>Click</bold> on the images to learn more.</h1>
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                      <img src={`${item.imgurl}`} className="item-img"/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h1>{item.name}</h1>
                          <h5>{item.description}</h5>
                          <ul>{item.award}</ul>
                          <p style={{fontWeight:"800"}}>{item.details}</p> <br/>
                          <h1>{item.tech}</h1>
                        </div>
                      </div>
                  </div>
                </div>
              )
            })
          }
      </div>
  </section>
        );
  }
}