import React from "react";
class CardComponent extends React.Component{
    render(){
        return(
            <div className="card shadow-lg  bg-white rounded">
                <div className="card-header">
                <div className="container" >
                <div className="row">
                <div className="col-md-12">
              <h6>{this.props.title}</h6>
                </div>
                </div>
                </div>
                </div>
                <div className="card-body">
                <div className="container" >
                <div className="row">
                <div className="col-md-12">
                {this.props.children}
                </div>
                </div>
                </div>
                </div>
            </div>

        );
    }
}
export default CardComponent;
