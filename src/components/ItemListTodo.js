import React from 'react';
import PropTypes from 'prop-types';
import {Button} from "react-materialize";

ItemListTodo.propTypes = {
    info: PropTypes.string,
    done: PropTypes.bool,
    handleDelete: PropTypes.func,
    handleSwichStateTodo: PropTypes.func,
};

function ItemListTodo(props) {

    let done = props.done;

    let state = done ? 'Finalizado' : 'Não Finalizado';

    let toggleBtn = {
        class: done ? 'amber' : 'light-green',
        icon: done ? 'close' : 'check'
    };

    return (
        <tr>
            <td>{ props.info }</td>
            <td>{ state }</td>
            <td style={{ width: '115px' }}>
                <Button onClick={props.handleSwichStateTodo}
                        floating style={{ marginLeft: '10px' }}
                        className={toggleBtn.class} waves='light' icon={toggleBtn.icon} />

                <Button onClick={props.handleDelete}
                        floating style={{ marginLeft: '10px' }}
                        className='red' waves='light' icon='delete' />
            </td>
        </tr>
    );
}

ItemListTodo.defaultProps = {
    info: 'Dados da Anotação',
    done: false
};

export default ItemListTodo;

