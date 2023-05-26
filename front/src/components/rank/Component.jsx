import styled from "styled-components";

import NftRank from "../../ui-components/NftRank";

const RankComponent = () => {
  return (
    <Rank>
      <div className="Rank_innerBox">
        <NftRank></NftRank>
      </div>
    </Rank>
  );
};

export default RankComponent;

const Rank = styled.div`
  display: flex;
  justify-content: center;
  .Rank_innerBox {
    display: flex;
    justify-content: center;
  }
`;
