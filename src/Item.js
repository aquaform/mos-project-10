import React, { useState } from "react";
import styled from "styled-components";

import Button from './Button.styled'

const Info = styled.div`
  margin-left: 10px;
`

const Title = styled.h2`
  font-size: 30px;
`

const Quantity = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
`

const Total = styled.h3`
  font-size: 16px;
`

export default function Item(props) {
  const [total, setTotal] = useState(0);

  const { info } = props;

  function handleAddClick() {
    setTotal(total + 1);
  }

  function handleRemoveClick() {
    if (total > 0) {
      setTotal(total - 1);
    }
  }

  if (!info) {
    return null;
  }

  return (
    <div className="item">
      <Info className="item-info">
        <Title>{info.name}</Title>
        <p>{info.desc}</p>
      </Info>
      <Quantity>
        <Button
          className="item-less"
          disabled={total === 0}
          onClick={handleRemoveClick}
        >
          -
        </Button>
        <Total>{total ? total : ""}</Total>
        <Button className="item-more" onClick={handleAddClick}>
          +
        </Button>
      </Quantity>
    </div>
  );
}
