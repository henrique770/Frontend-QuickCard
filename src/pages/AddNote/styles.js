import styled from 'styled-components';

export const Container = styled.div`
  .containerside {
    margin-left: 270px !important;
  }

  .ql-container {
    height: 70vh !important;
    width: 85.5vw !important;
    font-size: 16px;
  }
  .dflex {
    display: flex;
  }
  .editor_style {
    position: fixed;
    margin-right: 20px;
    margin-left: 20px !important;
  }
  .Button {
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

  #editorjs {
    background: #fff;
  }
`;
