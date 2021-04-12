import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #bd93f9;
    transition: color 0.2s;

    &:hover {
      color: #6272a4;
    }

    svg {
      margin-right: 4px;
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div {
      margin-left: 24px;

      strong {
        font-size: 36px;
        color: #ffb86c;
      }

      p {
        font-size: 18px;
        color: #6272a4;
        margin-top: 4px;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;

    li {
      & + li {
        margin-left: 80px;
      }

      strong {
        display: block;
        font-size: 36px;
        color: #f8f8f2;
      }

      span {
        display: block;
        margin-top: 4px;
        color: #6272a4;
      }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 80px;

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
