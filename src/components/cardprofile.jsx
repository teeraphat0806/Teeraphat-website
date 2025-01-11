import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/css/notionlogo.css';

const Card = () => {
  return (
    <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary">
      <div className="col-md-8 p-lg-5 mx-auto my-5">
        <div className="d-flex align-items-center justify-content-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png"
            alt="Notion Logo"
            className="logo_notion me-2" /* Reduced spacing here */
          />
          <h1 className="display-3 fw-bold mb-0">Designed for developers</h1>
        </div>

        <h3 className="fw-normal text-muted mt-4 mb-3">
          Seeing All My learning Programming Coding
        </h3>
        <div className="d-flex gap-3 justify-content-center lead fw-normal">
          <a
            className="icon-link"
            href="https://bird-nail-e2b.notion.site/Project-Learning-1111fc6d6740808cba62fd04b3b89f7d?pvs=4"
          >
            Learn more . . . . .
            <svg className="bi">
              <use xlinkHref="#chevron-right" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
