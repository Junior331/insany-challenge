import styled from "styled-components";

export const ContainerInput = styled.div`
  gap: 5px;
  width: 100%;
  height: auto;
  display: flex;
  margin-bottom: 16px;
  flex-direction: column;

  .text-error {
    font-size: 14px;
    color: #fc311d;
    margin-left: 10px;
    margin-bottom: -5px;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 16px;
  font-size: 16px;
  border-radius: 8px;
  background: #f2f5fc;
  border-color: transparent;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    outline: none;
    background: #fff;
    border: 2px solid rgba(29, 99, 255, 0.2);
  }
`;
