import { useCallback, useEffect, useState } from 'react';
import styles from './App.module.scss';
import { useTime } from './hooks/useTime';

const App = () => {
  const [count, setCount] = useState(0);
  const { time } = useTime();

  return (
    <div className={styles.box}>
      <div className={styles.center}></div>
    </div>
  );
};

export default App;
