import React from "react";
import Item from "./Item";
import styled from "styled-components";

import Button from './Button.styled'

const List = styled.ul`
  list-style: none;
  margin: 0 0 0 0;
  padding: 0 0 0 0;
`
const ListItem = styled.li`
  margin-bottom: 80px;
`

export default function ItemsList(props) {
  return (
    <List className="shop">
      {props.items.map((item) => (
        <ListItem key={item.id}>
          <Item info={item} />
          <Button
            className="btn-delete"
            onClick={() => props.onDeleteClick(item.id)}
          >
            Удалить
          </Button>
        </ListItem>
      ))}
    </List>
  );
}
