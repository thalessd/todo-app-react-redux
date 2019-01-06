import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Row, Table } from 'react-materialize'
import ItemListTodo from "./ItemListTodo";
import {bindActionCreators} from "redux";
import {toggleTodo, deleteTodo} from "../store/todoActions";

function mapStateToProps(state) {
    return {
        list: state.todo.list
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ toggleTodo, deleteTodo }, dispatch)
}

class ListTodo extends Component {

    renderList() {
        let { list, toggleTodo, deleteTodo } = this.props;

        list = list.slice().reverse();

        list = list.filter(v => !v.deleted);

        return list.map( val => {
            return <ItemListTodo
                info={val.info}
                done={val.done}
                key={val._id}
                handleSwichStateTodo={()=> { toggleTodo(val._id) }}
                handleDelete={()=> { deleteTodo(val._id) }}
            />
        });
    }

    render() {
        return (
            <Row>
                <Table striped>
                    <thead>
                    <tr>
                        <th>Informação</th>
                        <th>Estado</th>
                        <th>Ação</th>
                    </tr>
                    </thead>
                    <tbody>
                    { this.renderList() }
                    </tbody>
                </Table>
            </Row>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListTodo);
