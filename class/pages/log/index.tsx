const LogPage = () => {
  const aaa = {
    name: "철수",
    age: 13,
    school: "초등학교",
  };
  console.log(aaa);
  console.log(JSON.stringify(aaa, null, "  "));
  return <div></div>;
};

export default LogPage;
