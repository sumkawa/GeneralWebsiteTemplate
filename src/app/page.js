import styles from './page.module.css';
export default function Home() {
  return (
    <main className={styles.main} data-scroll-container ref={containerRef}>
      <div>
        <span className={styles.span}>Craft impeccable applications.</span>
      </div>
    </main>
  );
}
