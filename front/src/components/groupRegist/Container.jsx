import GroupRegistComponent from "./Component.jsx";

const GroupRegistContainer = () => {
  const createGroup = function ({ file, groupName, theme }) {
    if (!file || !groupName || !theme) return;
    const formData = new FormData();
    formData.append("file", file);
    formData.append("groupName", groupName);
    formData.append("theme", theme);
    formData.append("groupCreator");
  };
  return (
    <GroupRegistComponent createGroup={createGroup}></GroupRegistComponent>
  );
};

export default GroupRegistContainer;
