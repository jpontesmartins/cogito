import React, { Component, Fragment } from "react";

import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Fragment>
        <div className="container">

          <div className="column1">

            <div className="card-all">
              <div className="card">
                <div className="card-date">
                  1882
                </div>
                <div className="card-event">
                  Nascimento de James Joyce
                </div>
              </div>
              {/* <div className="card-control">
                open
              </div> */}
            </div>

            <div className="card">
              <div className="card-date">
                1828
             </div>
              <div className="card-event">
                Nascimento de Lev Tolstoi
            </div>
            </div>

            <div className="card">
              <div className="card-date">
                1899
               </div>
              <div className="card-event">
                Nascimento de Ernest Hemingway
              </div>
            </div>
          </div>

          <div className="map-coluna">
            Mapa
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;