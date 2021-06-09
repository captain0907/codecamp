const Container = () => {
  return (
    <>
      <div>컨테이너 입니다.</div>
      {withAuth(Presenter)({ aaa: "aaaProps" })}
    </>
  );
};

function withAuth(Component) {
  return function 이름은상관없음(props) {
    return <Component {...props} />;
  };
}

const Presenter = (props) => {
  return <div>프리젠터 입니다. props: {props.aaa}</div>;
};

export default Container;

//
//                      function 이름은상관없음(props){
//                          return <Presenter {...props} />
//                      }
//
//
// (withAuth(Presenter))({aaa: 'aaaProps'})  ==>  (이름은상관없음)({aaa: 'aaaProps'})
//
//                                           ==>  <Presenter {...props} />
