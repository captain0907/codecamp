import AAA from "./Presenter"; //  AAA  ==>  withAuth(Presenter)

const Container = () => {
  return (
    <>
      <div>컨테이너 입니다.</div>
      <AAA aaa={"aaaProps"} />
    </>
  );
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
