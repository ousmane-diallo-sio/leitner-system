import { AnimatePresence, motion } from "framer-motion"
import { observer } from "mobx-react"
import { FC, useEffect } from "react"
import NavBar from "../NavBar"

type PageWrapperProps = {
  children?: JSX.Element | JSX.Element[]
  childKey?: string
  title?: string
  navBar?: boolean
}

const PageWrapper: FC<PageWrapperProps> = ({ children, childKey, title, navBar }) => {

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={childKey}
        className="relative flex flex-col w-[100vw] min-h-[100vh] items-center"
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
        {navBar && <NavBar />}
        {title && <h1 className="mb-2">{title}</h1>}
        <>
          {children}
        </>
      </motion.main>
    </AnimatePresence>
  )
}

export default observer(PageWrapper)