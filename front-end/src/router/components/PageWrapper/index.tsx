import { MotionStyle, motion } from "framer-motion"
import { observer } from "mobx-react"

const PageWrapper = ({
  children,
  style,
}: {
  children?: JSX.Element | JSX.Element[]
  style?: MotionStyle
}) => {
  return (
    <motion.main
      custom={{ direction: 'forward', delay: 0 }}
      initial="initial"
      animate="in"
      exit="out">
      <>
        {children}
      </>
    </motion.main>
  )
}

export default observer(PageWrapper)