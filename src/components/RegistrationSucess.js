import React from "react";
import smileimg from "../images/smileface.png"
import CardComponent from "../shared/CardComponent";
class RegistrationSucess extends React.Component {

    render() {
        return (
            <CardComponent>
                <div className="card shadow-lg p-3 bg-white rounded cardalign w-50 center">
                    <div className="card-body">
                        <div className="col-md-12">
                            <div className="row" style={{ textAlignLast: 'center' }}>
                                <div className="col-md-12" >
                                    <h3>Registration Completed Successfully...!</h3>
                                    <img src={smileimg} alt="Image" width="60" />
                                    <h5>Thank You </h5>
                                    <button type="button" className="btn btn-primary">Ok</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </CardComponent>
        );
    }
}

export default RegistrationSucess;