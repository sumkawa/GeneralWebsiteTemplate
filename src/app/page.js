import MainNavBar from '@/components/MainNavBar';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <MainNavBar />
      <main className={styles.main}>
        <div>
          <span className={styles.span}>Craft impeccable applications.</span>
          <span></span>
        </div>
      </main>
    </>
  );
}
