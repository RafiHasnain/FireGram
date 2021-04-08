import React, { useEffect } from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";
// Lazy-loaded

const ImageGrid = ({ setSelectedImg, setLoading, loader }) => {
  const { docs } = useFirestore("images");
  // console.log(docs);

  useEffect(() => {
    if (docs !== undefined || docs.length !== 0) {
      console.log(docs);
      // setLoading(true);
      // loader();
      // console.log("hello");
    }
  }, [docs, loader]);

  return (
    <div>
      <div className='img-grid'>
        {docs &&
          docs.map((doc) => (
            // <motion.div
            //   className='img-wrap'
            //   key={doc.id}
            //   layout
            //   whileHover={{ opacity: 0 }}
            //   onClick={() => setSelectedImg(doc.url)}>
            //   <motion.img
            //     src={doc.url}
            //     alt='uploaded pic'
            //     initial={{ opacity: 0 }}
            //     animate={{ opacity: 1 }}
            //     transition={{ delay: 0 }}
            //   />
            // </motion.div>

            <div
              className='img-wrap'
              key={doc.id}
              layout
              // whileHover={{ opacity: 0 }}
              // onLoad={() => setLoading(false)}
              onClick={() => setSelectedImg(doc.url)}>
              <img src={doc.url} alt='uploaded pic' />
            </div>
          ))}
      </div>
    </div>
  );
};
export default ImageGrid;
