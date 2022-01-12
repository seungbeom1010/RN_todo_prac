import React from 'react'
import styled from 'styled-components'

const List = ({Todo}) => {
    const listContent = Todo.map(a => <li>{a}</li>)
    
    return (
        <ListTodo>
            {listContent}
        </ListTodo>
    )
}

export default List


const ListTodo = styled.ul`
    margin-top: 2rem;
    margin-left: 1rem;
`