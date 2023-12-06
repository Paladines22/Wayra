"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";
import styles from "../app/page.module.scss";
import { useTransform, useScroll, motion } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import useDimension from "@/app/useDimension";

const images = [
  "home2.jpg",
  "gallery2.jpg",
  "gallery3.jpg",
  "gallery4.jpg",
  "gallery5.jpg",
  "gallery6.jpg",
  "gallery7.jpg",
  "gallery8.jpg",
  "gallery9.jpg",
  "gallery10.jpg",
  "gallery11.jpg",
  "gallery12.jpg",
];

export default function Galeria() {
  const container = useRef(null);
  const { height } = useDimension();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="h-max my-24" id="galeria">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <h1 className="text-center lg:text-end lg:mr-14 py-4 text-4xl lg:text-8xl text-[#1faeb0]">
          GALERÍA
        </h1>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.3 }}
        variants={{
          hidden: { opacity: 0.5, y: +10 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div ref={container} className={styles.gallery}>
          <Column
            images={[images[4], images[0], images[5], images[11]]}
            y={y}
          />
          <Column
            images={[images[10], images[2], images[9], images[3]]}
            y={y2}
          />
          <Column
            images={[images[1], images[7], images[8], images[6]]}
            y={y3}
          />
        </div>
      </motion.div>
    </main>
  );
}

const Column = ({ images, y = 0 }) => {
  return (
    <motion.div style={{ y }} className={styles.column}>
      {images.map((src, index) => {
        return (
          <div key={index} className={styles.imageContainer}>
            <Image src={`/${src}`} fill alt="image" />
          </div>
        );
      })}
    </motion.div>
  );
};
