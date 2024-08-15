import styled from "styled-components";

//메인 페이지) footer
const Footer = () => {
  return (
    <Wrap>
      <div className="inner">
        <div className="footerLeft">
          <h2>wanted</h2>
          <ul className="footerNav">
            <li>기업소개</li>
            <li>광고문의</li>
            <li>고객센터</li>
            <li>이용약관</li>
            <li>블로그</li>
            <li>
              <b>개인정보 처리방침</b>
            </li>
          </ul>
        </div>

        <div className="location">
          <p>(주)원티드랩대표이사 이복기</p>
          <p>
            서울특별시 송파구 올림픽로 300, 롯데월드타워 35층전화번호:
            02-539-7118
          </p>
          <p>
            사업자등록번호: 299-86-00021통신판매번호:
            2020-서울송파-3147유료직업소개사업등록번호: (국내)
            제2020-3230259-14-5-00018호
          </p>
        </div>
        <ul className="qna">
          <li>채용서비스 문의</li>
          <li>원티드스페이스 문의</li>
          <li>원티드긱스 문의</li>
          <li>프리온보딩 문의</li>
          <li>취업지원시스템 문의</li>
          <li>IR 문의</li>
        </ul>
        <div className="snsBox">
          <span>© 2024 Wanted Lab, Inc.</span>
          <ul className="snsItem">
            <li>sns</li>
            <li>sns</li>
            <li>sns</li>
            <li>sns</li>
            <li>sns</li>
            <li>sns</li>
            <li>sns</li>
          </ul>
        </div>
      </div>
    </Wrap>
  );
};

export default Footer;

const Wrap = styled.div`
  width: 100%;
  margin-top: 150px;
  padding: 0 260px;
  height: 300px;
  border-top: 1px solid#eee;

  .inner {
    width: 100%;
    max-width: 1400px;
    padding: 30px 0 20px 0;
    font-size: 12px;
    font-weight: bold;

    li {
      cursor: pointer;
    }
    .footerLeft {
      display: flex;
      justify-content: space-between;
      font-size: 16px;
      cursor: pointer;

      .footerNav {
        display: flex;
        gap: 20px;
        color: #555;
      }
    }

    .location {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin: 30px 0;
      color: #999;
    }

    .qna {
      display: flex;
      margin-bottom: 30px;
      color: #777;
      gap: 15px;
    }

    .snsBox {
      display: flex;
      justify-content: space-between;
      border-top: 1px solid #eee;
      padding: 20px 0;
      color: #777;

      .snsItem {
        display: flex;
        gap: 10px;
      }
    }
  }
`;
