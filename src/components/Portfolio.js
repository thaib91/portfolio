import React, { Component } from "react";
import "./portfolio.scss";
import Slider from 'react-slick';

export default class Porfolio extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    let resumeData = this.props.resumeData;
    const map = resumeData.portfolio.map(item => {
      return (
        <div className="columns portfolio-item"> 
          <div className="item-wrap">
            <img
              src={`${item.imgurl}`}
              alt="project-photos"
              className="item-img"
            />
            <div className="overlay">
              <div className="portfolio-item-meta">
                <h1>{item.name}</h1>
                <h5>{item.description}</h5>
                <ul>{item.award}</ul>
                <p style={{ fontWeight: "800" }}>{item.details}</p>{" "}
                <br />
                <h1>{item.tech}</h1>
              </div>
            </div>
          </div>
        </div>
      );
    })

    return (
      <section id="portfolio">
          <div className="portfolio-header">
            <h1>
              <span>Projects</span>
            </h1>
          </div>
        <div className="row">
          {resumeData.portfolio &&
            <Slider className="slider" {...settings}>
              {map}
            </Slider>
            }
        </div>
      </section>
    );
  }
}
