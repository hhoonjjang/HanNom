import { NftUserinfo } from "../../ui-components";
import styled from "styled-components";
const ActivityComponent = () => {
  return (
    <Activity>
      <NftUserinfo></NftUserinfo>
      <MarginStyle1 />
    </Activity>
  );
};

export default ActivityComponent;

const Activity = styled.div`
  display: flex;
  justify-content: center;
`;

const MarginStyle1 = styled.div`
  margin-top: 100px;
  padding-bottom: 100px;
  padding-top: 100px;
`;
