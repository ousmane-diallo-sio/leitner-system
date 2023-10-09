import { AnimatePresence, motion } from "framer-motion"
import { observer } from "mobx-react"
import { FC, useEffect } from "react"

type PageWrapperProps = {
  children?: JSX.Element | JSX.Element[]
  key?: string
}

const PageWrapper: FC<PageWrapperProps> = ({ children, key }) => {

  useEffect(() => {
    console.log('PageWrapper')
  }, [])

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={key}
        style={{ height: '100vh', width: '100vw' }}
        custom={{ direction: 'forward', delay: 0 }}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ type: 'spring', stiffness: 200, damping: 19 }}
        variants={{
          hidden: { opacity: 0, y: 200 },
          enter: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -100 },
        }}>
        <>
          {children}
        </>
      </motion.main>
    </AnimatePresence>
  )
}

export default observer(PageWrapper)