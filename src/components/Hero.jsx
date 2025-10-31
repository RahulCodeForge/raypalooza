// src/components/Hero.jsx
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Points, PointMaterial } from "@react-three/drei";
import { motion } from "framer-motion";
import "../Style/Hero.css";

const HolographicHand = () => {
  const count = 2000;
  const positions = new Float32Array(count * 3);

  for (let i = 0; i < count * 3; i += 3) {
    const radius = Math.random() * 1.3;
    const angle = Math.random() * Math.PI * 2;
    const y = Math.random() * 2 - 1;
    positions[i] = Math.sin(angle) * radius * (1 + 0.3 * y);
    positions[i + 1] = y * 1.8;
    positions[i + 2] = Math.cos(angle) * radius * (1 + 0.3 * y);
  }

  return (
    <group rotation={[0.2, -0.8, 0]}>
      <Points positions={positions}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.02}
          sizeAttenuation
          depthWrite={false}
          opacity={0.8}
        />
      </Points>
    </group>
  );
};

const Hero = () => {
  return (
    <section className="hero-section">
      {/* === Background Video === */}
      <video
        className="hero-bg-video"
        src="./video.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* === 3D Canvas (optional) === */}
      {/* <Canvas className="hero-canvas" camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[3, 3, 3]} intensity={2} />
        <Suspense fallback={null}>
          <motion.group
            animate={{ rotateY: [0, 0.3, -0.3, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
            position={[1.5, -0.5, 0]}
          >
            <HolographicHand />
          </motion.group>
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas> */}

      {/* === Text Content === */}
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Split Animation Title */}
        <motion.h1
          className="hero-title"
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {"RAY PALOOZA".split("").map((char, index) => (
            <motion.span
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40, rotateX: 90 },
                visible: {
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
              className="split-char"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>

        <p className="hero-subtitle">
          Events and Marketing — where imagination meets innovation.
        </p>
        <button className="hero-btn">Explore Events</button>
      </motion.div>
    </section>
  );
};

export default Hero;
