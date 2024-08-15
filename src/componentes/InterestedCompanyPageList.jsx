import { useRecoilState } from "recoil";
import { AddCompanyItemState } from "../atom";
import styled from "styled-components";

//서브 페이지) 관심회사 페이지에 추가된 회사 리스트
const InterestedCompanyPageList = () => {
  const [addCompanyItem, setAddCompanyItem] =
    useRecoilState(AddCompanyItemState);

  const deleteClick = (companyItem) => {
    setAddCompanyItem(
      addCompanyItem.filter((deleteItem) => deleteItem.id !== companyItem.id)
    );
  };

  return (
    <Wrap>
      {addCompanyItem.length !== 0 ? (
        addCompanyItem.map((companyItem) => (
          <div key={companyItem.id} className="companyBox">
            <Image>
              <div className="topBox">
                <div className="companyTop">
                  <div className="logoImg"></div>
                  <div>
                    <div className="companyTitle">{companyItem.title}</div>
                    <div className="companySubTitle">
                      {companyItem.subTitle}
                    </div>
                  </div>
                </div>
                <button
                  className="followingBtn"
                  onClick={() => deleteClick(companyItem)}
                >
                  팔로잉
                </button>
              </div>
              <div className="introduction"></div>
            </Image>
          </div>
        ))
      ) : (
        <NullBg>
          <h2>아직 팔로우한 회사가 없습니다</h2>
        </NullBg>
      )}
    </Wrap>
  );
};

export default InterestedCompanyPageList;

const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  .companyBox {
    width: 49%;
    aspect-ratio: 3/1;
    margin-bottom: 20px;
    cursor: pointer;
  }

  .companyTitle {
    font-size: 16px;
    font-weight: bold;
    line-height: 24px;
    display: flex;
    flex-wrap: wrap;
  }
`;

const Image = styled.div`
  width: 100%;
  height: 170px;
  border-radius: 10px;
  background-color: #ccc;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  .topBox {
    display: flex;
    justify-content: space-between;

    .followingBtn {
      padding: 0 20px;
      border-radius: 8px;
      background-color: rgba(0, 0, 0, 0.3);
      color: #fff;
      font-weight: bold;
    }
  }

  .companyTop {
    display: flex;
    gap: 10px;
  }

  .logoImg {
    padding: 20px;
    border-radius: 10px;
    background-color: #666;
  }

  .introduction {
    width: 100%;
    height: 80%;
    border-radius: 5px;
    background-color: #ddd;
  }
`;

const NullBg = styled.div`
  width: 100vw;
  height: 70vh;
  color: #999;
  display: flex;
  justify-content: center;
  align-items: center;
`;
