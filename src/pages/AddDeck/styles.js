import styled from 'styled-components';

export const Container = styled.div`
  .containerside {
    margin-left: 270px;
  }
  .topbar {
    border-bottom: solid 1px #ccc;
    background-color: #e9ecef;
    padding: 22px;
  }
  .ql-container {
    height: 70vh!important;
    font-size: 16px;
  }
  .dflex {
    display: flex;
  }

  .format_form {
    width: 600px;
    margin: auto;
    text-align: center;
  }
  Button {
    background: linear-gradient(-90deg, #fe650e, #f93b10);
    font-weight: bold;
    color: #fff;
    text-align: center;
    padding: 10px;
    width: 100px;
    border: 0;
    border-radius: 4px;
  }

  .Button:hover {
    background: linear-gradient(-90deg, #f93b10, #fe650e);
  }
  
`;
