import styles from "./Teachers.module.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTeachers } from "../../redux/teachers/teachersOperations";

import {
  getAllTeachers,
  isLoadingTeachers,
} from "../../redux/teachers/teachersSelector";
import { nanoid } from "@reduxjs/toolkit";
import { TeacherCard } from "../../components/teacherCard/teacherCard";
import { Loader } from "../../components/loader/Loader";

const TeachersPage = () => {
  const [cardLimit, setCardLimit] = useState(4);
  const teachers = useSelector(getAllTeachers);
  const isLoading = useSelector(isLoadingTeachers);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTeachers());
  }, [dispatch]);

  const onLoadMore = () => {
    setCardLimit((prevCard) => prevCard + 4);
    setTimeout(() => {
      window.scrollBy({ top: 500, behavior: "smooth" });
    }, 200);
  };

  return (
    <div className={styles.container}>
      <ul className={styles.teacherList}>
        {isLoading ? (
          <Loader />
        ) : (
          teachers?.slice(0, cardLimit).map((teacher) => {
            return <TeacherCard key={nanoid()} teacher={teacher} />;
          })
        )}
      </ul>
      {teachers.length > cardLimit && !isLoading && (
        <button
          id="moreBtn"
          onClick={onLoadMore}
          className={styles.loadMoreBtn}
        >
          Load more
        </button>
      )}
    </div>
  );
};

export default TeachersPage;
