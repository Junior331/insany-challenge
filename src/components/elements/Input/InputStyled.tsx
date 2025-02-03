import styled from "styled-components";

export const ContainerInput = styled.div`
  gap: 5px;
  width: 100%;
  height: auto;
  display: flex;
  margin-bottom: 16px;
  flex-direction: column;

  .text-error {
    color: #fc311d;
    margin-left: 10px;
    margin-bottom: -5px;
    font-size: ${({ theme }) => theme.typography.fontSizeMedium}rem;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 16px;
  border-radius: 8px;
  border-color: transparent;
  font-size: ${({ theme }) => theme.typography.fontSize}rem;
  background-color: ${({ theme }) => theme.palette.color.neutrals.light.gray_02};

  &::placeholder { 
    color: ${({ theme }) => theme.palette.color.neutrals.dark.dark_50};
  }

  &:focus {
    outline: none;
    background: #fff;
    border: 2px solid rgba(29, 99, 255, 0.2);
  }
`;
