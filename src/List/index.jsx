import React, { Component, Fragment } from "react";

import "../App/styles.css";

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {

        return (
            <Fragment>
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

                        <div className="card-control">
                            <img
                                width="150px"
                                height="150px"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Revolutionary_Joyce_Better_Contrast.jpg/330px-Revolutionary_Joyce_Better_Contrast.jpg" />
                        </div>

                    </div>

                    <div className="card-all">
                        <div className="card">
                            <div className="card-date">
                                1828
                                </div>
                            <div className="card-event">
                                Nascimento de Lev Tolstoi
                                </div>
                        </div>
                    </div>

                    <div className="card-all">
                        <div className="card">
                            <div className="card-date">
                                1899
                                </div>
                            <div className="card-event">
                                Nascimento de Ernest Hemingway
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default List;