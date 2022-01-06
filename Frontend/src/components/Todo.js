import React from "react";

const Todo = () => {
    return (
        <div className="row">
            <div className="column five wide">
                <h2>Test</h2>
            </div>
            <div className="column one wide">
                <button className="ui button circular icon green"><i className="white check icon"></i></button>
            </div>
            <div className="column one wide">
                <button className="ui button circular icon red"><i className="white remove icon"></i></button>
            </div>
        </div>
    );
};

export default Todo;