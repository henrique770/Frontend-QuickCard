import styled from 'styled-components';

export const Container = styled.div`
  .containerside {
    margin-left: 270px;
  }
  .dflex {
    display: flex;
    justify-content: stretch;
  }
  .wrap {
    flex-wrap: wrap;
  }
  .grow1 {
    flex-grow: 1;
  }
  .Button {
    background: linear-gradient(-90deg, #fe650e, #f93b10);
    font-weight: bold;
    color: #fff;
    text-align: center;
    padding: 20px;
    width: 100px;
    border: 0;
    border-radius: 4px;
  }

  .Button:hover {
    background: linear-gradient(-90deg, #f93b10, #fe650e);
  }
  .alignflexbutton {
    display: flex;

    justify-content: center;
  }
  #target {
    display: none;
  }

  .Hide {
    display: none;
  }
`;
