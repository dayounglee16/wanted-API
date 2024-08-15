import styled from "styled-components";
import AddBookmarkPageList from "../componentes/AddBookmarkPageList";

// 북마크 페이지
const BookMark = () => {
  return (
    <Wrap>
      <div className="inner">
        <h2>북마크</h2>
        <div>
          <AddBookmarkPageList />
        </div>
      </div>
    </Wrap>
  );
};

export default BookMark;

const Wrap = styled.div`
  width: 100%;
  padding: 100px 0;

  .inner {
    width: 100%;
    max-width: 1034px;
    margin: 0 auto;

    h2 {
      margin-bottom: 20px;
    }
  }
`;
