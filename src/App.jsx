import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faBrain,
  faComment,
  faEye,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div class="mx-auto my-5" style={{ width: "600px", height: "500px" }}>
      <div className="container text-center ">
        <div className="row align-items-center border-0 rounded-4 shadow bg-body-tertiary">
          <div className="col left-part rounded-4 px-4 py-3">
            <h6 className="py-4 left-heading">Your Result</h6>
            <div
              className="rounded-circle mx-5 pt-3"
              style={{ width: "150px", height: "150px" }}
            >
              <div className="p-3 align-items-center left-Number">
                <span className="display-4 mb-0">76</span>
                <br />
                <span className="fs-6" style={{ color: "hsl(241, 100%, 89%)" }}>
                  of 100
                </span>
              </div>
            </div>
            <br />
            <span
              className="fs-2 fw-bolder mt-3"
              style={{ color: "hsl(0, 0%, 100%)" }}
            >
              Great
            </span>

            <p className="fs-6 m-3 pb-4 fw-light">
              You scored higher than 65% of the people who have taken these
              tests.
            </p>
          </div>
          <div className="col rounded-4 px-4 py-4 bg-white">
            <h6 className="d-flex justify-content-start pt-4 pb-2 right-heading">
              Summary
            </h6>
            <ul className="list-group my-4 gap-2">
              <li className="list-group-item m-2 li-elements d-flex border-0 rounded">
                <span
                  className="me-auto"
                  style={{ color: "hsl(0, 100%, 67%)" }}
                >
                  <FontAwesomeIcon icon={faBolt} className="me-2" />
                  Reaction
                </span>
                <span className="ms-auto">80 / 100</span>
              </li>
              <li className="list-group-item m-2 li-elements d-flex border-0 rounded">
                <span
                  className="me-auto"
                  style={{ color: "hsl(39, 100%, 56%)" }}
                >
                  <FontAwesomeIcon icon={faBrain} className="me-2" />
                  Memory
                </span>
                <span className="ms-auto">92 / 100</span>
              </li>
              <li className="list-group-item m-2 li-elements d-flex border-0 rounded">
                <span
                  className="me-auto"
                  style={{ color: "hsl(166, 100%, 37%)" }}
                >
                  <FontAwesomeIcon icon={faComment} className="me-2" />
                  Verbal
                </span>
                <span className="ms-auto">61 / 100</span>
              </li>
              <li className="list-group-item m-2 li-elements d-flex border-0 rounded">
                <span
                  className="me-auto"
                  style={{ color: "hsl(234, 85%, 45%)" }}
                >
                  <FontAwesomeIcon icon={faEye} className="me-2" />
                  Visual
                </span>
                <span className="ms-auto">72 / 100</span>
              </li>
            </ul>
            <div className="d-grid mb-3">
              <button className="btn btn-primary px-4 py-2 button rounded-pill">
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="attribution">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="https://github.com/tarektabbal">Tarek W. Tabbal</a>.
      </div>
    </div>
  );
}

export default App;
