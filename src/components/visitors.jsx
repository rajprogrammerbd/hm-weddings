import React from 'react';

function Visitor() {
    return (
        <React.Fragment>
            <section id="visitors_and_users">
                <h2 className="text-center">Visitors & Users</h2>
                <div className="container">
                    <div className="row">
                    <div className="col-xs-6 colorful_part_1 text-center">
                        <h4> Visitor's</h4>
                        <i className="fa fa-eye"></i>
                        <p> 1400</p>
                    </div>
                    <div className="col-xs-6 colorful_part_2 text-center colorful_part_2_right">
                        <h4> User's</h4>
                        <i className="fa fa-registered"></i>
                        <p> 284</p>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-xs-6 colorful_part_2 text-center colorful_part_2_left">
                        <h4> Male User's</h4>
                        <i className="fa fa-male"></i>
                        <p> 123</p>
                    </div>
                    <div className="col-xs-6 colorful_part_1 text-center ">
                        <h4> Female User's</h4>
                        <i className="fa fa-female"></i>
                        <p> 146</p>
                    </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default Visitor;