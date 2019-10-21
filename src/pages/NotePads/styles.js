import styled from 'styled-components';

export const Container = styled.div`
  .containerside {
    margin-left: 270px;
  }
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
  .dflex {
    display: flex;
  }

  .item {
    margin: 0 15px;
    max-width: 260px;
  }
  .wrap {
    flex-wrap: wrap;
  }
  .grow1 {
    flex-grow: 1;
  }
`;
