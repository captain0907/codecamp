const QueryDetailUI = ({data}) => {
  return (
    <div>
      <div>이름: {data?.fetchProfile.name}</div>
      <div>나이: {data?.fetchProfile.age}</div>
      <div>학교: {data?.fetchProfile.school}</div>
    </div>
  );
};

export default QueryDetailUI;
