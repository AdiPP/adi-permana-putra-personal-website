import React from 'react';
import profile from '../../adipepe.jpg';

const Home = () => {
  return (
    <div>
      <div className="Jumbotron d-flex align-items-center">
        <div className="container d-flex justify-content-center">
          <div className="Profile text-center">
            <div className="Profile-Image">
              <img src={profile} />
            </div>
            <h2 className="font-italic">Adi Permana Putra</h2>
            <span className="font-weight-normal blockquote-footer">I build an awesome // useful web with beautiful code, and <span className="font-weight-bold">I love what I do.</span></span>
            <div className="Social-Media d-flex justify-content-center">
              <a href="https://github.com/AdiPP" target={"_blank"}>
                <div className="Item mr-3 d-flex align-items-center">
                  <img src={"https://img.icons8.com/windows/512/000000/github.png"}/>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/adipp" target={"_blank"}>
                <div className="Item d-flex align-items-center">
                  <img src="https://img.icons8.com/windows/512/000000/linkedin-2.png"/>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="Content">
        <div className="container d-flex justify-content-center">
          <div className="Post">
            <h3>
              About me
            </h3>
            <p style={{
              fontSize: "18px"
            }} className="text-break">
              Hi, I'm Adi (sometimes called pepe or peps). Nice to meet you.
              <br/>
              <br/>
              I'm a human // fresh graduate // experienced web developer. Most of my time I design and build an awesome (also useful) web profile, web application, information management system, information system, and other things related to web programming.
              <br/>
              <br/>
              After one year working as a web developer, make me become better at this field and make me hungry to learn more about this field. I always aim to further my career in Web Developing // Software Engineering with a position that will allow me to expand my horizons.
              <br/>
              <br/>
              I mention Humans in the first place because I believe the purpose of humans is useful for others. And that's what I am gonna do with something I'm good at, which is Software Engineering.
              <br/>
              <br/>
              And at last but not least, <span className="font-weight-bold">I love what I do</span>.
              <br/>
              <br/>
              So, nice to meet you.
              <br />
              Best Regard, Adi Pepe.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;