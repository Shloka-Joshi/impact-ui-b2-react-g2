import React from "react";
class CardComponent extends React.Component{
    render(){
        return(
            <div className="card shadow-lg p-3 bg-white rounded">
                <div className="card-header">
                    <h6>{this.props.title}</h6>
                </div>
                <div className="card-body">
                    {this.props.children}
                </div>
            </div>

        );
    }
}
export default CardComponent;
