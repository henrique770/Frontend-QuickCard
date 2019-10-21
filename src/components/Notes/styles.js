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
      width: 390px;
    }
  }
  @media (max-width: 1800px) {
    .notes_style {
      width: 370px;
    }
  }
  @media (max-width: 1700px) {
    .notes_style {
      width: 340px;
    }
  }

  @media (max-width: 1600px) {
    .notes_style {
      width: 320px;
    }
  }
  @media (max-width: 1500px) {
    .notes_style {
      width: 270px;
    }
  }
  @media (max-width: 1400px) {
    .notes_style {
      width: 270px;
    }
  }
  @media (max-width: 1300px) {
    .notes_style {
      width: 230px;
    }
  }
  @media (max-width: 1200px) {
    .notes_style {
      width: 215px;
    }
  }
  @media (max-width: 1100px) {
    .notes_style {
      width: 200px;
    }
  }
  @media (max-width: 1000px) {
    .notes_style {
      width: 180px;
    }
  }
`;
