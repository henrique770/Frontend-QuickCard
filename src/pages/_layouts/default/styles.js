import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  color: #414141;
  background: #fff;

  .alignT {
    display: flex;
    margin-top: 20px;
    justify-content: center;
  }
  .containerside {
    margin-left: 235px !important;
  }
  /* overflow */
  .ov_hidden {
    overflow: hidden !important;
  }
  .fixedtitle {
    position: fixed;
    margin-left: 10px;
    border: solid #fd570e;
    border-radius: 11px;
    background: #fff;
    padding: 5px 30px;
    z-index: 9;
    margin-bottom: 20px;
    top: 25px;
  }
  .format_form {
    width: 600px;
    margin: 100px auto;
    text-align: center;
  }
  .mt130 {
    margin-top: 130px;
  }
`;
