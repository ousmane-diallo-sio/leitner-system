import { MotionStyle, motion } from "framer-motion"
import { observer } from "mobx-react"

type PageWrapperProps = {
  children?: JSX.Element | JSX.Element[]
}

const PageWrapper = ({ children }: PageWrapperProps) => (
  <motion.main
    style={{ height: '100vh', width: '100vw' }}
    custom={{ direction: 'forward', delay: 0 }}
    initial="hidden"
    animate="enter"
    exit="exit"
    transition={{ type: 'linear' }}
    variants={{
      hidden: { opacity: 0 },
      enter: { opacity: 1 },
      exit: { opacity: 0 },
    }}>
    <>
      {children}
    </>
  </motion.main>
)

export default observer(PageWrapper)