import { KeyboardEvent, ChangeEvent, useState, useEffect } from 'react';
import styles from './App.module.scss';
import { useTime } from './hooks/useTime';

enum SearchTypeEnum {
  BING = 'bing',
  GOOGLE = 'google',
  BAIDU = 'baidu'
}

const SearchTypeMap = {
  [SearchTypeEnum.BING]: 'https://cn.bing.com/search?q=',
  [SearchTypeEnum.GOOGLE]: 'https://www.google.com/search?q=',
  [SearchTypeEnum.BAIDU]: 'https://www.baidu.com/s?wd='
};

const SearchTypeIconMap = {
  [SearchTypeEnum.GOOGLE]: 'Goole',
  [SearchTypeEnum.BING]: 'Bing',
  [SearchTypeEnum.BAIDU]: 'Baidu'
};

const SearchTypeLocalStorageKey = 'searchType';

const App = () => {
  const { time } = useTime();
  const [text, setText] = useState('');
  const [searchType, setSearchType] = useState(SearchTypeEnum.GOOGLE);
  const [optionsVisible, setOptionsVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const searchType = localStorage.getItem(SearchTypeLocalStorageKey) as SearchTypeEnum;
    setSearchType(searchType || SearchTypeEnum.GOOGLE);
    setLoading(true);
  }, []);

  const handleTextChange = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setText(target.value);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      location.href = `${SearchTypeMap[searchType]}${text}`;
    }
  };

  return (
    <div className={styles.box}>
      <div className={styles.center}>
        <div className={styles.timeBox}>
          {time.h}
          <div className={styles.divider}></div>
          {time.m}
        </div>
        <div
          className={styles.typeBox}
          onClick={() => {
            setOptionsVisible(!optionsVisible);
          }}
        >
          {loading && SearchTypeIconMap[searchType]}
          {optionsVisible && (
            <div className={styles.options}>
              {Object.keys(SearchTypeIconMap).map((item, index) => (
                <div
                  key={index}
                  className={styles.optionItem}
                  onClick={() => {
                    setSearchType(item as SearchTypeEnum);
                    setOptionsVisible(false);
                    localStorage.setItem(SearchTypeLocalStorageKey, item);
                  }}
                >
                  {SearchTypeIconMap[item as SearchTypeEnum]}
                </div>
              ))}
            </div>
          )}
          di
        </div>
        <input
          type='text'
          className={styles.input}
          autoFocus
          value={text}
          onChange={handleTextChange}
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
};

export default App;
