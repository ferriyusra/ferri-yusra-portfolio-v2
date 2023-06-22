"use client";
import React, { CSSProperties } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import NodeLogo from "../../public/nodejs.svg";
import PsqlLogo from "../../public/postgresql.svg";
import ExpressLogo from "../../public/express.svg";
import MysqlLogo from "../../public/mysql.svg";
import GoLogo from "../../public/go.svg";
import PrismaLogo from "../../public/prisma.svg";

const LandingLogoAnimation = () => {
  const containerStyles: CSSProperties = {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
  };

  const logoStyles = {
    width: 143,
    height: 143,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div className="w-full md:w-5/12">
      <div className="ml-20 overflow-hidden" style={containerStyles}>
        <motion.div
          style={logoStyles}
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 110, 220, 320, 0],
            borderRadius: ["20%", "50%", "20%", "50%", "20%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        >
          <Image src={NodeLogo} alt="Node.js Logo" width={65} height={65} />
        </motion.div>
        <motion.div
          style={logoStyles}
          animate={{
            scale: [1, 2, 2, 1, 1],
            borderRadius: ["20%", "50%", "20%", "50%", "20%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        >
          <Image src={PsqlLogo} alt="Psql Logo" width={65} height={65} />
        </motion.div>
        <motion.div
          style={logoStyles}
          animate={{
            scale: [1, 2, 2, 1, 1],
            borderRadius: ["20%", "50%", "20%", "50%", "20%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        >
          <Image src={ExpressLogo} alt="Express Logo" width={65} height={65} />
        </motion.div>
        <motion.div
          style={logoStyles}
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 110, 220, 320, 0],
            borderRadius: ["20%", "50%", "20%", "50%", "20%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        >
          <Image src={MysqlLogo} alt="Mysql Logo" width={65} height={65} />
        </motion.div>
        <motion.div
          style={logoStyles}
          animate={{
            scale: [1, 2, 2, 1, 1],
            borderRadius: ["20%", "50%", "20%", "50%", "20%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        >
          <Image src={GoLogo} alt="Go Logo" width={65} height={65} />
        </motion.div>
        <motion.div
          style={logoStyles}
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 110, 220, 320, 0],
            borderRadius: ["20%", "50%", "20%", "50%", "20%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        >
          <Image src={PrismaLogo} alt="Prisma Logo" width={65} height={65} />
        </motion.div>
      </div>
    </div>
  );
};

export default LandingLogoAnimation;
