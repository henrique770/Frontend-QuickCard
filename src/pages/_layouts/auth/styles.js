import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(-90deg, #f93b10, #fe650e);
  display: flex;

  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 350px;
  background: #fff;
  border-radius: 7px;
  padding: 20px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
  }

  input {
    /* background: rgba(0, 0, 0, 0.1); */
    border: solid 1px #e1e1e1;
    border-radius: 4px;
    height: 44px;
    padding: 0 15px;
    color: #111;
    margin: 0 0 10px;

    &::placeholder {
      color: #fd570e;
    }
  }

  span {
    color: #f93b10;
    align-self: flex-start;
    margin: 0 0 10px;
    font-weight: bold;
  }

  button {
    margin: 5px 0 0;
    height: 44px;
    background: linear-gradient(-90deg, #fe650e, #f93b10);
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;

    &:hover {
      background: linear-gradient(-90deg, #f93b10, #fe650e);
    }
  }

  a {
    color: #fd570e;
    margin-top: 15px;
    font-size: 16px;
    opacity: 0.8;

    &:hover {
      opacity: 1;
    }
  }
`;
export const Container = styled.div`
  background: #fff;
`;
