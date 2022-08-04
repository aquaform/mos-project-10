import React from "react";
import styled from "styled-components";

const Input = styled.input`
  padding: 12px 10px;
  border-radius: 3px;
  border: 1px solid var(--light-gray);
  font-size: 16px;
  margin: 10px;
`
const Submit = styled.input`
  background-color: var(--primary);
  color: white;
  border: 0;
  margin: 10px;
  padding: 15px 20px;
  min-width: 150px;
  font-size: 16px;
  border-radius: 3px;
  cursor: pointer;
  transition: opacity 200ms ease-out;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  
  &:hover {
    opacity: 0.8;
  }
  
  &:disabled {
    opacity: 0.4;
    cursor: default;
  }
  
  &:active {
    box-shadow: 0 0px rgba(0, 0, 0, 0.2);
    transform: translateY(1px);
  }
`

const Form = styled.form`
  padding-top: 5px;
  width: 100vw;
  margin: 0 auto;
`



export default function AddItem(props) {
  return (
    <Form onSubmit={props.onFormSubmit}>
      <div>
        <label htmlFor="item-name">Название:</label>
        <Input
          type="text"
          value={props.name}
          onChange={props.onNameChange}
          id="item-name"
          placeholder="Название товара"
          className="textfield"
        />
      </div>
      <div>
        <label htmlFor="item-description">Описание:</label>
        <Input
          type="text"
          value={props.desc}
          onChange={props.onDescChange}
          id="item-description"
          placeholder="Описание товара"
          className="textfield"
        />
      </div>
      <div className="form-footer">
        <div className="validation">{props.valid}</div>
        <Submit type="submit" className="btn btn-basic" value="Добавить" />
      </div>
    </Form>
  );
}
