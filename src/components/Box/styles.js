import styled from 'styled-components';

export const Container = styled.div`
  .Button {
    background: linear-gradient(-90deg, #fe650e, #f93b10);
    font-weight: bold;
    color: #fff;
    text-align: center;
    padding: 20px;
    border: 0;
    border-radius: 4px;
  }

  .Button:hover {
    background: linear-gradient(-90deg, #f93b10, #fe650e);
  }

  .item {
    margin: 0 15px;
    width: 290px;
    text-align: center;
  }
  .Jumbotron_height {
    height: 230px;
    padding: 30px 15px !important;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .grow1 {
    flex-grow: 1;
  }
`;
