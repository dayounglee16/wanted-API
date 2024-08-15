import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  AddBookMarkItemState,
  AddCompanyItemState,
  CompanyCountState,
} from "../atom";
import styled from "styled-components";
import { BookMarkCountState } from "../atom";
import { useEffect } from "react";

const Profile = () => {
  const [bookMarkCount, setBookMarkCount] = useRecoilState(BookMarkCountState);
  const addBookMarkItem = useRecoilValue(AddBookMarkItemState);
  const [companyCountItem, setCompanyCount] = useRecoilState(CompanyCountState);
  const addCompanyItem = useRecoilValue(AddCompanyItemState);

  const navigate = useNavigate();

  useEffect(() => {
    setBookMarkCount(addBookMarkItem.length);
    setCompanyCount(addCompanyItem.length);
  });

  return (
    <Wrap>
      <div className="inner">
        <div>
          <ul className="selectBtn">
            <li>프로필</li>
            <li>내 활동</li>
            <li>설정</li>
          </ul>
        </div>
        <div className="interest">
          <h3>내 관심사</h3>
          <div className="storage">
            <dl onClick={() => navigate("/bookmark")}>
              <dt>{bookMarkCount}</dt>
              <dd>북마크</dd>
            </dl>
            <dl onClick={() => navigate("/interestedcompany")}>
              <dt>{companyCountItem}</dt>
              <dd>관심회사</dd>
            </dl>
            <dl>
              <dt>0</dt>
              <dd>관심태그</dd>
            </dl>
          </div>
        </div>
      </div>
    </Wrap>
  );
};

export default Profile;

const Wrap = styled.div`
  width: 100%;
  padding-top: 100px;

  .inner {
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    .selectBtn {
      display: flex;
      flex-direction: column;
      gap: 50px;
      font-size: 18px;
      font-weight: bold;
      cursor: pointer;
    }
    .interest {
      display: flex;
      flex-direction: column;
      gap: 10px;
      width: 60%;
    }
    .storage {
      width: 100%;
      display: flex;
      gap: 50px;
      font-size: 12px;
      background-color: #f8f6f6b5;
      border-radius: 10px;

      dl {
        flex: 1;
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        cursor: pointer;
      }
      dl:last-of-type {
        border-right: none;
      }
      dl dt {
        font-size: 18px;
        font-weight: bold;
      }
    }
  }
`;
