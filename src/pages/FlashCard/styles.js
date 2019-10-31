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
    flex-direction: column;
    align-items: center;

    justify-content: center;
    margin-bottom: 200px;
  }
  #target {
    display: none;
  }

  .Hide {
    display: none;
  }

  .align_performace {
    display: flex;
    flex-direction: row;    
    justify-content: center;
  }

  .item_performance {
    width: 100px;
    margin: 0 10px;
  }
`;
