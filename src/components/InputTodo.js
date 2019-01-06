import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Input, Row, Button, Col } from 'react-materialize'
import { bindActionCreators } from "redux";
import {changeInfo, addTodo} from "../store/todoActions";

function mapStateToProps(state) {
    return {
        info: state.todo.info
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ changeInfo, addTodo }, dispatch)
}

class InputTodo extends Component {
    style = {
        btn: { marginTop: '25px', width: '100%' }
    };

    render() {
        const {changeInfo, addTodo } = this.props;

        return (
            <Row>
                <Input onChange={changeInfo} value={this.props.info} s={10} label="Anotação" />
                <Col s={2}>
                    <Button onClick={ () => {addTodo(this.props.info)} } className="green" style={this.style.btn}>Add</Button>
                </Col>
            </Row>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(InputTodo);