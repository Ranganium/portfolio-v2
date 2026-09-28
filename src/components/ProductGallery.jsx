import { useState } from "react";
import styles from "./ProductGallery.module.css";

// 1. Importér dine 4 forskellige SVG-filer
import desktopActiveSvg from "../assets/desktop-active.svg";
import mobileActiveSvg from "../assets/mobile-active.svg";
import onlyDesktopSvg from "../assets/only-desktop.svg";
import onlyMobileSvg from "../assets/only-mobile.svg";

export default function ProductGallery({ productImages, resolveProjectImage }) {
  const hasMobile = productImages?.mobile?.length > 0;
  const hasDesktop = productImages?.desktop?.length > 0;

  // State til at holde styr på hvilket visning der er aktiv (standard er 'desktop' hvis der er desktop-billeder, ellers 'mobile')
  const [activeView, setActiveView] = useState("desktop");

  // Hvis der overhovedet ikke er nogen billeder
  if (!hasMobile && !hasDesktop) return null;

  // Udfald 1: Kun desktop-billeder
  if (hasDesktop && !hasMobile) {
    return (
      <div className={styles.galleryContainer}>
        <div className={styles.galleryHeader}>
          <h2>Product Images</h2>
          <img
            src={onlyDesktopSvg}
            alt="Only Desktop"
            className={styles.stateSvg}
          />
        </div>
        <div className={styles.imageGrid}>
          {productImages.desktop.map((imgPath, index) => (
            <img
              key={index}
              src={resolveProjectImage ? resolveProjectImage(imgPath) : imgPath}
              alt={`Desktop view ${index + 1}`}
            />
          ))}
        </div>
      </div>
    );
  }

  // Udfald 2: Kun mobil-billeder
  if (!hasDesktop && hasMobile) {
    return (
      <div className={styles.galleryContainer}>
        <div className={styles.galleryHeader}>
          <h2>Product Images</h2>
          <img
            src={onlyMobileSvg}
            alt="Only Mobile"
            className={styles.stateSvg}
          />
        </div>
        <div className={styles.imageGrid}>
          {productImages.mobile.map((imgPath, index) => (
            <img
              key={index}
              src={resolveProjectImage ? resolveProjectImage(imgPath) : imgPath}
              alt={`Mobile view ${index + 1}`}
            />
          ))}
        </div>
      </div>
    );
  }

  // Udfald 3: Både desktop og mobil findes – her aktiverer vi skifte-funktionaliteten!
  const isDesktopActive = activeView === "desktop";
  const currentImages = isDesktopActive
    ? productImages.desktop
    : productImages.mobile;
  const currentSvg = isDesktopActive ? desktopActiveSvg : mobileActiveSvg;

  // Funktion til at skifte mellem desktop og mobil
  const toggleView = () => {
    setActiveView((prev) => (prev === "desktop" ? "mobile" : "desktop"));
  };

  return (
    <div className={styles.galleryContainer}>
      <div className={styles.galleryHeader}>
        <h2>Product Images</h2>
        {/* Klik på SVG'en skifter nu state, og vi tilføjer en class for at sikre musen viser pointer */}
        <img
          src={currentSvg}
          alt={isDesktopActive ? "Desktop Active" : "Mobile Active"}
          className={`${styles.stateSvg} ${styles.clickableSvg}`}
          onClick={toggleView}
          style={{ cursor: "pointer" }}
        />
      </div>
      <div className={styles.imageGrid}>
        {currentImages.map((imgPath, index) => (
          <img
            key={index}
            src={resolveProjectImage ? resolveProjectImage(imgPath) : imgPath}
            alt={`${isDesktopActive ? "Desktop" : "Mobile"} view ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
