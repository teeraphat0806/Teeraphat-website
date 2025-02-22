import PropTypes from "prop-types";
import "../components/css/cardshow.css";

const CardShow = ({ data }) => {
  return (
    <div className="container mt-4 d-none d-md-block">
      {/* ✅ ซ่อนใน Mobile แสดงเฉพาะ Desktop */}
      <div className="row">
        {data.map((item, index) => (
          <div key={index} className="col-md-3 mb-4">
            {/* ✅ คลิกที่ Card ได้เลย */}
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
            >
              <div
                className="card shadow-lg custom-card"
                style={{
                  transition: "transform 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                {/* ✅ โลโก้แทนปุ่ม */}
                

                <div className="card-img-container">
                  <img src={item.imgSrc} className="card-img-top fixed-img" alt={item.title} />
                </div>
                <div className="card-body text-start">
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-text">{item.description}</p>
                </div>
                {item.icons && item.icons.length > 0 && (
                  <div className="icon-container">
                    {item.icons.map((icon, i) => (
                      <img key={i} src={icon} alt={`icon-${i}`} className="card-icon" />
                    ))}
                  </div>
                )}
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

CardShow.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      imgSrc: PropTypes.string.isRequired,
      iconSrc: PropTypes.string, // ✅ รองรับ icon ที่มุมล่าง
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CardShow;
