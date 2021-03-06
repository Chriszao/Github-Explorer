import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 48px;
  color: #ffb86c;
  max-width: 450px;
  line-height: 56px;

  margin-top: 80px;
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;

  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #44475a;
    border: 2px solid #ffff;
    border-right: 0;

    ${props =>
      props.hasError &&
      css`
        border-color: #ff5555;
      `}

    &::selection {
      background: #ffb86c;
    }

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    background: #04d361;
    border-radius: 0px 5px 5px 0px;
    border: 0;
    color: #ffff;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #ff5555;
  margin-top: 8px;
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a {
    background-color: #f8f8f2;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: transform 0.2s;

    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 16px;
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #44475a;
      }

      p {
        font-size: 18px;
        color: #6272a4;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #6272a4;
    }
  }
`;
