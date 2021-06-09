import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { createContext, useState } from "react";
import LayoutFooter from "./footer/LayoutFooter.container";
import LayoutHeader from "./header/LayoutHeader.container";
import LayoutNavigation from "./navigation/LayoutNavigation.container";

export const Wrapper = styled.div`
  width: 100%;
  height: 1000px;
`;

export const Body = styled.div`
  height: 500px;
  padding-left: 50px;
  padding-right: 50px;
`;

const withoutHeader = ["/board", "/query", "/hocexample"];
const withoutNavigation = ["/board", "/query", "/hocexample"];

export const LayoutContext = createContext({
  test: "",
});
const Layout = ({ children }) => {
  const router = useRouter();
  const isHeader = !withoutHeader.includes(router.pathname);
  const isNavigation = !withoutNavigation.includes(router.pathname);

  console.log(router.pathname);
  console.log(router.asPath);
  console.log(router.basePath);
  console.log(router.route);

  const [test, setTest] = useState("이것은 테스트입니다.");

  const value = {
    test,
  };
  return (
    <LayoutContext.Provider value={value}>
      <Wrapper>
        {isHeader && <LayoutHeader />}
        {isNavigation && <LayoutNavigation />}
        <Body>{children}</Body>
        <LayoutFooter />
      </Wrapper>
    </LayoutContext.Provider>
  );
};

export default Layout;
