import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import LayoutFooter from './footer/LayoutFooter.container'
import LayoutHeader from './header/LayoutHeader.container'
import LayoutNavigation from './navigation/LayoutNavigation.container'

export const Wrapper = styled.div`
    width: 100%;
    height: 1000px;
`

export const Body = styled.div`
    height: 500px;
    padding-left: 50px;
    padding-right: 50px;
`

const withoutNavigation = [
    '/board',
    '/query'
]

const Layout = ({children}) => {
    const router = useRouter()
    const isNavigation = !withoutNavigation.includes(router.pathname)
    return (
        <Wrapper>
            <LayoutHeader />
            {isNavigation && <LayoutNavigation />}
            <Body>{children}</Body>
            <LayoutFooter />
        </Wrapper>
    )

}

export default Layout