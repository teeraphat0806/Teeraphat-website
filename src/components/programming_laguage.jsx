import React from "react";
import "../components/css/programming_laguage.css";

const MostUsedLanguages = () => {
  // Language data
  const languages = [
    { name: "Java", percentage: 32.28 ,color: "gradient-bar1"},
    { name: "JavaScript", percentage: 32.06, color: "gradient-bar1"},
    { name: "Dart", percentage: 24.37 ,color: "gradient-bar"},
    { name: "C++", percentage: 5.98 , color: "gradient-bar1"},
    { name: "CMake", percentage: 3.29 ,color: "gradient-bar"},
    { name: "CSS", percentage: 2.03 , color: "gradient-bar1"},
  ];

  return (
    <div className="most-used-languages">
      <h3>Most Used Languages</h3>
      {languages.map((lang, index) => (
        <div key={index} className="language-item">
          <div className="language-info">
            <span className="language-name">{lang.name}</span>
            <span className="language-percentage">{lang.percentage}%</span>
          </div>
          <div className={lang.color}>
            <div
              className="gradient-bar-fill"
              style={{ width: `${lang.percentage}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MostUsedLanguages;
