import styled from 'styled-components';
import { darken } from 'polished';

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
    height: 70vh !important;
    font-size: 16px;
  }
  .dflex {
    display: flex;
  }

  .ButtonUpdate {
    background: linear-gradient(-90deg, #fe650e, #f93b10);
    font-weight: bold;
    color: #fff;
    text-align: center;
    padding: 10px;
    width: 100%;
    border: 0;
    border-radius: 4px;
    margin-bottom: 15px;
  }

  .ButtonUpdate:hover {
    background: linear-gradient(-90deg, #f93b10, #fe650e);
  }

  .ButtonDelete {
    background: #fff;
    font-weight: bold;
    color: #cb2431;
    text-align: center;
    padding: 10px;
    width: 100%;
    border: 0;
    box-shadow: 0 0 4px;
    border-radius: 4px;
    margin-bottom: 15px;
  }

  .ButtonDelete:hover {
    background: ${darken(0.03, '#cb2431')};
    color: #fff;
  }
`;
