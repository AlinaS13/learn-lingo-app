import styles from "./Teachers.module.scss";
import { useEffect, useState } from "react";
import notFoundTeachers from "../../assets/images/not-finde-teachers.jpg";
import { useDispatch, useSelector } from "react-redux";
import { getTeachers } from "../../redux/teachers/teachersOperations";
import {
  getAllTeachers,
  isLoadingTeachers,
} from "../../redux/teachers/teachersSelector";
import { nanoid } from "@reduxjs/toolkit";
import { TeacherCard } from "../../components/teacherCard/teacherCard";
import { Loader } from "../../components/loader/Loader";
import { Filter } from "../../components/filter/Filter";

const TeachersPage = () => {
  const teachers = useSelector(getAllTeachers);
  const isLoading = useSelector(isLoadingTeachers);
  const dispatch = useDispatch();

  const [cardLimit, setCardLimit] = useState(4);
  const [language, setLanguage] = useState(false);
  const [level, setLevel] = useState(false);
  const [price, setPrice] = useState(false);

  useEffect(() => {
    dispatch(getTeachers());
  }, [dispatch]);

  const filteredTeachers = teachers.filter((teacher) => {
    if (!language && !level && !price) {
      return true;
    }

    const languageFilterResult =
      !language || teacher.languages.includes(language);
    const levelFilterResult = !level || teacher.levels.includes(level);
    const priceFilterResult = !price || `${teacher.price_per_hour}` === price;
    return languageFilterResult && levelFilterResult && priceFilterResult;
  });

  const onLoadMore = () => {
    setCardLimit((prevCard) => prevCard + 4);
    setTimeout(() => {
      window.scrollBy({ top: 500, behavior: "smooth" });
    }, 200);
  };

  return (
    <>
      <div className={styles.filterContainer}>
        <Filter
          teacher={teachers}
          setLanguage={(data) => setLanguage(data)}
          setLevel={(data) => setLevel(data)}
          setPrice={(data) => setPrice(data)}
        />
      </div>
      <div className={styles.container}>
        <ul className={styles.teacherList}>
          {isLoading ? (
            <Loader />
          ) : filteredTeachers?.length !== 0 ? (
            filteredTeachers?.slice(0, cardLimit).map((teacher) => {
              return <TeacherCard key={nanoid()} teacher={teacher} />;
            })
          ) : (
            <div className={styles.notFoundContainer}>
              <p className={styles.notFoundText}>
                Sorry, we couldn't find a teacher according to your criteria!
              </p>
              <img
                src={notFoundTeachers}
                alt="Not Found Teachers"
                width="350px"
                height="350px"
              />
            </div>
          )}
        </ul>
        {filteredTeachers?.length > cardLimit && !isLoading && (
          <button
            id="moreBtn"
            onClick={onLoadMore}
            className={styles.loadMoreBtn}
          >
            Load more
          </button>
        )}
      </div>
    </>
  );
};

export default TeachersPage;
