import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import imag1 from "../assets/imag1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpg";
import image6 from "../assets/image6.jpg";
import image7 from "../assets/image7.jpg";
import image8 from "../assets/image8.jpg";
import image9 from "../assets/image9.jpg";
import ProgressBar from 'react-bootstrap/ProgressBar';
// import info1 from "../assets/info1.png";
// import info2 from "../assets/info2.png";
// import info3 from "../assets/info3.png";



export default function Recommend() {
  const data = [
    {
      image: imag1,
      title: "Manali",
      subTitle: "One of the most popular hill stations in Himachal, Manali offers the most magnificent views of the Pir Panjal and the Dhauladhar ranges covered with snow for most parts of the year.",
      
    },
    {
      image: image2,
      title: "Kerala",
      subTitle: "Named as one of the ten paradises of the world by National Geographic Traveler, Kerala is famous especially for its ecotourism initiatives and beautiful backwaters.",
    },
    {
      image: image3,
      title: "Nicobar Islands",
      subTitle: "Andaman Nicobar Islands is famous for its absolutely stunning beaches, rich biodiversity, beautiful marine ecosystem and tropical evergreen forests teeming with wildlife.",
    },
    {
      image: image4,
      title: "Delhi",
      subTitle: " It is a special city, which has been home to prominent civilisations, dynasties and rulers. It is home to unique sites that are nowhere to be found in the continent.",
    },
    {
      image: image5,
      title: "Vishakapatnam",
      subTitle: "the city has its own hidden gems and attractions that tourists are unaware of. Whether you are looking for your next destination to click stunning pictures, or just a fan of beaches and sunsets.",
    },
    {
      image: image6,
      title: "Jammu & Kashmir",
      subTitle: " Jammu is famous for its temples, while Kashmir Valley is known for its lakes and gardens. J&K has agro-climatic conditions best suited for horticulture and floriculture.",
    },
    {
      image: image7,
      title: "Varanasi",
      subTitle: "Sarnath attract tourists from abroad. Varanasi is one of the oldest cities in the world, which makes it rich with cultural heritage. The city is home to ghats, temples, museums, and many Puranic places.",
    },
    {
      image: image8,
      title: "Goa",
      subTitle: "Goa is famous for adventure water sports, Goa offers the best water sports and other adventures sports such as scuba diving, paragliding, parasailing, banana boat riding and snorkelling, attracted during sun rise and set",
    },
    {
      image: image9,
      title: "Nasik",
      subTitle: "It is a great city that is over-flooded with a lot of temples and waterfalls. Umbrella Waterfalls of Bhandardara and Vihigaon Waterfalls, and also it is famous for caves,Situated on the banks of Godavari river",
    },
  ];

  const packages = [
    "The Weekend Break",
    // "The Package Holiday",
    // "The Group Tour",
    // "Long Term Slow Travel",
  ];

  const [active, setActive] = useState(1);
  return (
    <Section id="recommend">
      <div className="title">
        <h2>Recommended Destinations</h2>
      </div>
      <div className="packages">
        <ul>
          {packages.map((pkg, index) => {
            return (
              <li
                className={active === index + 1 ? "active" : ""}
                onClick={() => setActive(index + 1)}
              >
                {pkg}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="destinations">
        {data.map((destination) => {
          return (
            <div className="destination">
              <img src={destination.image} alt="" />
              <h3>{destination.title}</h3>
              <p>{destination.subTitle}</p>
              <div className="info">
                {/* <div className="services">
                  <img src={info1} alt="" />
                  <img src={info2} alt="" />
                  <img src={info3} alt="" />
                </div> */}
                <h4>{destination.cost}</h4>
              </div>
              <ProgressBar animated now={45} />
              <div className="distance">
              <Link to="/home">
             <button className='btn btn-primary'>Travel Now</button>
          </Link>
                <span>{destination.duration}</span>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  padding: 2rem 0;
  .title {
    text-align: center;
  }
  .packages {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    ul {
      display: flex;
      list-style-type: none;
      width: max-content;
      li {
        padding: 1rem 2rem;
        border-bottom: 0.1rem solid black;
      }
      .active {
        border-bottom: 0.5rem solid #8338ec;
      }
    }
  }
  .destinations {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    padding: 0 3rem;
    .destination {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      background-color: #8338ec14;
      border-radius: 1rem;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      img {
        width: 100%;
      }
      .info {
        display: flex;
        align-items: center;
        .services {
          display: flex;
          gap: 0.3rem;
          img {
            border-radius: 1rem;
            background-color: #4d2ddb84;
            width: 2rem;
            /* padding: 1rem; */
            padding: 0.3rem 0.4rem;
          }
        }
        display: flex;
        justify-content: space-between;
      }
      .distance {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .packages {
      ul {
        li {
          padding: 0 0.5rem;
          font-size: 2vh;
          padding-bottom: 1rem;
        }
        .active {
          border-bottom-width: 0.3rem;
        }
      }
    }
    .destinations {
      grid-template-columns: 1fr;
      padding: 0;
    }
  }
`;