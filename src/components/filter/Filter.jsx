import { nanoid } from "@reduxjs/toolkit";
import styles from "./Filter.module.scss";
import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";

export const Filter = ({ teacher, setLanguage, setLevel, setPrice }) => {
  const [isLanguagesOpen, setIsLanguagesOpen] = useState(false);
  const [isLevelOpen, setIsLevelOpen] = useState(false);
  const [isPriceOpen, setIsPriceOpen] = useState(false);

  const [selectedLanguage, setSelectedLanguage] = useState("Language");
  const [selectedLevels, setSelectedLevels] = useState("Levels");
  const [selectedPrice, setSelectedPrice] = useState("Price");

  const hendleOpenLanguagesList = () => {
    setIsLanguagesOpen(!isLanguagesOpen);
  };
  const hendleOpenLevelsList = () => {
    setIsLevelOpen(!isLevelOpen);
  };
  const hendleOpenPricesList = () => {
    setIsPriceOpen(!isPriceOpen);
  };

  function getUniquesLanguages() {
    const languages = teacher.flatMap(({ languages }) => languages);
    let result = [];
    for (let element of languages) {
      if (!result.includes(element)) {
        result.push(element);
      }
    }
    return result;
  }
  const uniquesLanguages = getUniquesLanguages(teacher);

  function getUniquesLavels() {
    const levels = teacher.flatMap(({ levels }) => levels);
    let result = [];
    for (let element of levels) {
      if (!result.includes(element)) {
        result.push(element);
      }
    }
    return result;
  }

  const uniquesLavels = getUniquesLavels(teacher);

  function getUniquesPrices() {
    const prices = teacher.map(({ price_per_hour }) => price_per_hour).sort();
    let result = [];
    for (let element of prices) {
      if (!result.includes(element)) {
        result.push(element);
      }
    }
    return result;
  }

  const uniquesPrices = getUniquesPrices(teacher);

  return (
    <div className={styles.filtersWrp}>
      <div style={{ minWidth: "221px" }}>
        <p className={styles.filtersTitle}>Languages</p>
        <div className={styles.filterBox} onClick={hendleOpenLanguagesList}>
          {!isLanguagesOpen ? (
            <button type="button" className={styles.filterBtn}>
              <MdKeyboardArrowDown size={20} />
            </button>
          ) : (
            <button type="button" className={styles.filterBtn}>
              <MdKeyboardArrowUp size={20} />
            </button>
          )}
          {selectedLanguage}

          <ul
            className={
              isLanguagesOpen === true
                ? styles.dropDowList || styles.active
                : styles.hidden
            }
          >
            <li
              onClick={() => {
                setSelectedLanguage("Language");
                setLanguage(false);
                setIsLanguagesOpen(false);
              }}
            >
              <span>reset...</span>
            </li>
            {uniquesLanguages.map((uniqueLanguage) => (
              <li
                className={styles.dropDownItem}
                key={nanoid()}
                onClick={(e) => {
                  setSelectedLanguage(e.target.innerText);
                  setLanguage(e.target.innerText);
                  setIsLanguagesOpen(false);
                }}
              >
                {uniqueLanguage}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div style={{ minWidth: "198px" }}>
        <p className={styles.filtersTitle}>Level of knowledge</p>
        <div className={styles.filterBox} onClick={hendleOpenLevelsList}>
          {!isLevelOpen ? (
            <button type="button" className={styles.filterBtn}>
              <MdKeyboardArrowDown size={20} />
            </button>
          ) : (
            <button type="button" className={styles.filterBtn}>
              <MdKeyboardArrowUp size={20} />
            </button>
          )}
          {selectedLevels}

          <ul
            className={
              isLevelOpen === true
                ? styles.dropDowList || styles.active
                : styles.hidden
            }
          >
            <li
              onClick={() => {
                setSelectedLevels("Level");
                setLevel(false);
                setIsLevelOpen(false);
              }}
            >
              <span>reset...</span>
            </li>
            {uniquesLavels.map((uniqueLavel) => (
              <li
                className={styles.dropDownItem}
                key={nanoid()}
                onClick={(e) => {
                  setSelectedLevels(e.target.innerText);
                  setLevel(e.target.innerText);
                  setIsLevelOpen(false);
                }}
              >
                {uniqueLavel}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div style={{ minWidth: "124px" }}>
        <p className={styles.filtersTitle}>Price</p>
        <div className={styles.filterBox} onClick={hendleOpenPricesList}>
          {!isPriceOpen ? (
            <button type="button" className={styles.filterBtn}>
              <MdKeyboardArrowDown size={20} />
            </button>
          ) : (
            <button type="button" className={styles.filterBtn}>
              <MdKeyboardArrowUp size={20} />
            </button>
          )}
          {selectedPrice}

          <ul
            className={
              isPriceOpen === true
                ? styles.dropDowList || styles.active
                : styles.hidden
            }
          >
            <li
              onClick={() => {
                setSelectedPrice("Price");
                setPrice(false);
                setIsPriceOpen(false);
              }}
            >
              <span>reset...</span>
            </li>
            {uniquesPrices.map((uniquePrice) => (
              <li
                data-value={uniquePrice}
                className={styles.dropDownItem}
                key={nanoid()}
                onClick={(e) => {
                  setSelectedPrice(e.target.innerText);
                  setPrice(e.target.dataset.value);
                  setIsPriceOpen(false);
                }}
              >
                {uniquePrice} $
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
