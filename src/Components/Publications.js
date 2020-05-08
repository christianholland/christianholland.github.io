import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScroll } from "@fortawesome/free-solid-svg-icons";


class Publications extends Component {
  constructor(props) {
    super(props);

    this.publications = props.publications;
  }

  render() {
    return(
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="publications">
        <div className="w-100">
          <h2 className="mb-5">Publications</h2>
          <ul className="fa-ul mb-0">
	  <p> A regularly updated list of publications and citations is available on my <a href="https://scholar.google.com/citations?user=h_y2uTwAAAAJ&hl=de">Google Scholar profile</a>.</p>
          {
            this.publications.map((data, index) => (
              <li key={index}>
                <FontAwesomeIcon icon={faScroll} color="#9c9e9f" />
                <span className="ml-2"> {data.citation} </span>
              </li>
            ))
          }
          </ul>
        </div>
      </section>
    );
  }
}

export default Publications;
