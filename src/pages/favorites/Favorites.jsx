import { useDispatch, useSelector } from "react-redux";
import styles from "./Favorites.module.scss";
import { getFavoritesTeachers } from "../../redux/favorites/favoritesSelector";
import { useEffect, useState } from "react";
import { getTeachers } from "../../redux/teachers/teachersOperations";
import {
  getAllTeachers,
  isLoadingTeachers,
} from "../../redux/teachers/teachersSelector";
import { TeacherCard } from "../../components/teacherCard/teacherCard";
import { nanoid } from "@reduxjs/toolkit";
import { Loader } from "../../components/loader/Loader";
const FavoritesPage = () => {
  const dispatch = useDispatch();
  const [cardLimit, setCardLimit] = useState(4);
  const teachers = useSelector(getAllTeachers);
  const isLoading = useSelector(isLoadingTeachers);
  const favoritesTeachers = useSelector(getFavoritesTeachers);

  const favoriteTeacher = teachers?.filter((teacher) =>
    favoritesTeachers.includes(teacher.id)
  );
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
      {isLoading ? (
        <Loader />
      ) : favoriteTeacher.length === 0 ? (
        <p className={styles.favoritesText}>
          You don't have any teachers added yet
        </p>
      ) : (
        <ul className={styles.favoritesTeachersList}>
          {favoriteTeacher
            .map((teacher) => <TeacherCard key={nanoid()} teacher={teacher} />)
            .slice(0, cardLimit)}
        </ul>
      )}
      {favoriteTeacher.length > cardLimit && !isLoading && (
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

export default FavoritesPage;
