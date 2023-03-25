import styled from "styled-components";
import NftContainer from "../nft/Container";

const GroupComponent = ({ groupId, group }) => {
  return (
    <Group>
      <div className="Group_innerBox">
        {group.map((item, index) => (
          <NftContainer></NftContainer>
        ))}
      </div>
    </Group>
  );
};
export default GroupComponent;

const Group = styled.div``;
