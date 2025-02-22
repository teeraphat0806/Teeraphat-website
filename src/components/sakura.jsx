import React, { useEffect } from "react";
import "../components/css/sakura.css";

const SakuraFalling = () => {
  useEffect(() => {
    const numLeaves = 15; // จำนวนใบซากุระที่ลอย
    const container = document.body; 

    for (let i = 0; i < numLeaves; i++) {
      let leaf = document.createElement("div");
      leaf.className = "sakura";

      // กำหนดตำแหน่งสุ่ม
      leaf.style.left = `${Math.random() * 100}vw`;
      leaf.style.animationDuration = `${Math.random() * 3 + 3}s`; // ความเร็วสุ่ม
      leaf.style.animationDelay = `${Math.random() * 2}s`;

      container.appendChild(leaf);

      // ลบเมื่อใบซากุระตกถึงข้างล่าง
      setTimeout(() => {
        leaf.remove();
      }, 5000);
    }
  }, []);

  return null;
};

export default SakuraFalling;
