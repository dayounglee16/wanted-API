import styled from "styled-components";
import InterestedCompanyPageList from "../componentes/InterestedCompanyPageList";

// 관심회사 페이지
const InterestedCompany = () => {
  return (
    <Wrap>
      <div className="inner">
        <h2>관심회사</h2>
        <div>
          <InterestedCompanyPageList />
        </div>
      </div>
    </Wrap>
  );
};

export default InterestedCompany;

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
