import React, { Suspense } from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { Hero, Yotube, Posts, Project, Features, Clients, Contact, Loader } from '../Components';

const AnimatedComponent = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
    delay: 0.2,
  });

  const animationProps = {
    hidden: { opacity: 0, y: 200 },
    visible: { opacity: 1, y: 0 },

  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={animationProps}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

const HomePage = () => {
  return (
    <Box className="mt">
      <Suspense fallback={<Loader />}>
        <AnimatedComponent>
          <Hero />
        </AnimatedComponent>
      </Suspense>
      <Suspense fallback={<Loader />}>
        <AnimatedComponent>
          <Yotube />
        </AnimatedComponent>
      </Suspense>
      <Suspense fallback={<Loader />}>
        <AnimatedComponent>
          <Posts />
        </AnimatedComponent>
      </Suspense>
      <Suspense fallback={<Loader />}>
        <AnimatedComponent>
          <Project />
        </AnimatedComponent>
      </Suspense>
      <Suspense fallback={<Loader />}>
        <AnimatedComponent>
          <Features />
        </AnimatedComponent>
      </Suspense>
      <Suspense fallback={<Loader />}>
        <AnimatedComponent>
          <Clients />
        </AnimatedComponent>
      </Suspense>
      <Suspense fallback={<Loader />}>
        <AnimatedComponent>
          <Contact />
        </AnimatedComponent>
      </Suspense>
    </Box>
  );
};

export default HomePage;
