import {
  useState,
  useEffect,
  useRef,
  MouseEventHandler,
  FormEventHandler,
  ChangeEventHandler,
} from "react";
import styles from "./App.module.scss";
import { useTime } from "./hooks/useTime";
import { SearchTypeArr, SearchTypeLocalStorageKey } from "./constant";

const App = () => {
  const optionsRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { time } = useTime();
  const [text, setText] = useState("");
  const [searchIndex, setSearchIndex] = useState(0);
  const [optionsVisible, setOptionsVisible] = useState(false);
  const [iconReady, setIconReady] = useState(false);

  const handleTextChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const target = event.target as HTMLInputElement;
    setText(target.value);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (text) {
      location.href = `${SearchTypeArr[searchIndex].url}${text}`;
    }
  };

  const handleClickBox: MouseEventHandler<HTMLDivElement> = (event) => {
    if (!optionsRef.current) {
      return;
    }
    const isSelf = !!optionsRef.current.contains(event.target as Node);
    !isSelf && setOptionsVisible(false);
  };

  const handleDocumentKey = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      inputRef.current?.focus();
    }
    if (event.key === "Tab") {
      event.preventDefault();
      setSearchIndex((index) => {
        if (index === SearchTypeArr.length - 1) {
          localStorage.setItem(SearchTypeLocalStorageKey, `${0}`);
          return 0;
        }
        localStorage.setItem(SearchTypeLocalStorageKey, `${index + 1}`);
        return index + 1;
      });
    }
    if (event.key === "Escape") {
      setText("");
      inputRef.current?.focus();
    }
  };

  useEffect(() => {
    const searchTypeIndex = Number(
      localStorage.getItem(SearchTypeLocalStorageKey) || 0
    );
    setSearchIndex(isNaN(searchTypeIndex) ? 0 : searchTypeIndex);
    setIconReady(true);
    document.addEventListener("keydown", handleDocumentKey);
    return () => {
      document.removeEventListener("keydown", handleDocumentKey);
    };
  }, []);

  return (
    <div className={styles.wrap}>
      <div className={styles.box} onClick={handleClickBox}>
        <div className={styles.timeBox}>
          {time.h}
          <div className={styles.divider}></div>
          {time.m}
        </div>
        <form onSubmit={handleSubmit} className={styles.center}>
          <div
            className={styles.typeBox}
            onClick={(e) => {
              e.stopPropagation();
              setOptionsVisible(!optionsVisible);
            }}
          >
            {iconReady && SearchTypeArr[searchIndex].icon}
            {optionsVisible && (
              <div className={styles.options} ref={optionsRef}>
                {SearchTypeArr.map((_, index) => (
                  <div
                    key={index}
                    className={styles.optionItem}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSearchIndex(index);
                      setOptionsVisible(false);
                      localStorage.setItem(
                        SearchTypeLocalStorageKey,
                        `${index}`
                      );
                    }}
                  >
                    {SearchTypeArr[index].icon}
                  </div>
                ))}
              </div>
            )}
          </div>
          <input
            type="text"
            ref={inputRef}
            className={styles.input}
            autoFocus
            value={text}
            onChange={handleTextChange}
          />
        </form>
      </div>
    </div>
  );
};

export default App;
