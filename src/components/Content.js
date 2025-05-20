import { useMediaQuery } from 'react-responsive'
import DesktopView from './DesktopView';
import MobileView from './MobileView';

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 })
  return isDesktop ? children : null
}
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
  return isTablet ? children : null
}
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return isMobile ? children : null
}
// const Default = ({ children }) => {
//   const isNotMobile = useMediaQuery({ minWidth: 768 })
//   return isNotMobile ? children : null
// }

const Content = () => (
  <div>
    <Desktop>
      <DesktopView />
    </Desktop>
    <Tablet>
      <MobileView />
    </Tablet>
    <Mobile>
      <MobileView />
    </Mobile>
  </div>
)

export default Content;

