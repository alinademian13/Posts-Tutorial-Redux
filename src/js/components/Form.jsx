import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { addArticle } from "../actions/index";

//connects Redux actions to React props => a connected component is able to dispatch actions
function mapDispatchToProps(dispatch) {
    return {
        addArticle: article => dispatch(addArticle(article))
    };
}

class ConnectedForm extends Component {
    constructor() {
        super();
        this.state = {
            title: ""
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // ?? this.state.title ?
        const { title } = this.state;
        const id = uuidv1();
        this.props.addArticle({title, id});
        this.setState({title: ""});
    }

    render() {
        const { title } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={title}
                        onChange={this.handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-success btn-lg">SAVE</button>
            </form>
        );
    }
}

//Form = the result of connecting ConnectedForm with the Redux store
//1st arg for connect is null because mapStateToProps is absent
const Form = connect(null, mapDispatchToProps) (ConnectedForm);
export default Form;