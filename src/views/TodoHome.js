import React, {Component} from 'react';
import { Row, Col, Navbar } from 'react-materialize'
import InputTodo from "../components/InputTodo";
import ListTodo from "../components/ListTodo";
class TodoHome extends Component {
    render() {
        return (
            <Row>
                <Navbar brand='Todo App' className='blue darken-4' right/>
                <Col s={12}>
                    <InputTodo/>
                    <ListTodo/>
                </Col>
            </Row>
        );
    }
}

export default TodoHome;