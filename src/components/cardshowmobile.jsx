import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from "prop-types";
import "../components/css/cardmobile.css"; // ✅ Import CSS

const MobileCarousel = ({ data }) => {
  const [hoverIndex, setHoverIndex] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "0px", // ✅ เพิ่มขนาด Card
    arrows: false,
  };

  return (
    <div className="d-block d-md-none">
      <Slider {...settings}>
        {data.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none"
          >
            <div className="px-3">
              <div
                className={`card shadow-lg border-0 mx-auto transition-card ${
                  hoverIndex === index ? "hovered" : ""
                }`}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
                style={{
                  transform: hoverIndex === index ? "scale(1.05)" : "scale(1)",
                  transition: "transform 0.3s ease-in-out, background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                  backgroundColor: hoverIndex === index ? "#6f42c1" : "#343a40",
                  color: "white",
                  width: "90%", 
                  maxWidth: "350px",
                }}
              >
                {/* ✅ โลโก้ที่มุมขวาบน */}
                {item.iconSrc && (
                  <img src={item.iconSrc} alt="icon" className="card-icon-top" />
                )}

                {/* ✅ ปรับขนาดรูปภาพ */}
                <div className="card-img-container">
                  <img src={item.imgSrc} className="card-img-top fixed-img" alt={item.title} />
                </div>

                <div className="card-body text-start">
                  <p className="text-light">
                    <i className="fas fa-calendar-alt"></i> {item.date}
                  </p>
                  <h5 className="fw-bold text-white">{item.title}</h5>
                  <p className="text-light">{item.description}</p>

                  {/* ✅ โลโก้แทนปุ่ม */}
                  {item.iconSrc && (
                    <img src={item.iconSrc} alt="icon" className="card-icon-bottom" />
                  )}
                </div>
              </div>
            </div>
          </a>
        ))}
      </Slider>
    </div>
  );
};

MobileCarousel.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      imgSrc: PropTypes.string.isRequired,
      iconSrc: PropTypes.string,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MobileCarousel;
