import React, { Component } from "react";
import { withTranslation } from "react-i18next"
class Blog extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (<>
            <div>
                <h1>    Blog Page {this.props.t("Home")}</h1>
            </div>
        </>)
    }
}
export default withTranslation("translation")(Blog)