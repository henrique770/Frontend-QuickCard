import styled from 'styled-components';

export const Container = styled.div`
  .notes_style {
    width: 285px;
    padding-right: 19px;
    height: 97%;

    overflow-y: scroll;
    position: fixed;
  }
  .notes_style p {
    white-space: nowrap;

    overflow: hidden;
    text-overflow: ellipsis;
  }
  @media (min-width: 1900px) {
    .notes_style {
      width: 380px;
      margin-left: 20px;
    }
  }
  @media (max-width: 1800px) {
    .notes_style {
      width: 350px;
      margin-left: 20px;
    }
  }
  @media (max-width: 1700px) {
    .notes_style {
      width: 320px;
      margin-left: 20px;
    }
  }

  @media (max-width: 1600px) {
    .notes_style {
      width: 300px;
      margin-left: 20px;
    }
  }
  @media (max-width: 1500px) {
    .notes_style {
      width: 258px;
      margin-left: 20px;
    }
  }
  @media (max-width: 1400px) {
    .notes_style {
      width: 230px;
      margin-left: 20px;
    }
  }
  @media (max-width: 1300px) {
    .notes_style {
      width: 210px;
      margin-left: 20px;
    }
  }
  @media (max-width: 1200px) {
    .notes_style {
      width: 195px;
      margin-left: 20px;
    }
  }
  @media (max-width: 1100px) {
    .notes_style {
      width: 180px;
      margin-left: 20px;
    }
  }
  @media (max-width: 1000px) {
    .notes_style {
      width: 160px;
      margin-left: 20px;
    }
  }
`;
