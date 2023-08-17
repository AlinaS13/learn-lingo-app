import { nanoid } from "@reduxjs/toolkit";
import styles from "./TeacherCard.module.scss";
import { useState } from "react";
import Avatar, { genConfig } from "react-nice-avatar";
import { HiStar } from "react-icons/hi";
import { PiBookOpenBold } from "react-icons/pi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { getUser } from "../../redux/auth/authSelector";
import { useDispatch, useSelector } from "react-redux";
import { getFavoritesTeachers } from "../../redux/favorites/favoritesSelector";
import {
  addFavorites,
  removeFavorites,
} from "../../redux/favorites/favoritesSlice";
import { toast } from "react-toastify";
import { BookLessonModal } from "../bookLessonModal/BookLessonModal";
import { useToggle } from "../../hooks/useToggle";

export const TeacherCard = ({ teacher }) => {
  const {
    id,
    name,
    surname,
    languages,
    levels,
    rating,
    reviews,
    price_per_hour,
    lessons_done,
    avatar_url,
    lesson_info,
    conditions,
    experience,
  } = teacher;
  const [isReadMoreOpen, setIsReadMoreOpen] = useState(false);
  const isAuth = useSelector(getUser);
  const favoritesTeachers = useSelector(getFavoritesTeachers);
  const isTeacherFavorite = favoritesTeachers.includes(id);

  const config = genConfig();
  const dispatch = useDispatch();

  const { isOpenBookLesson, openModalBookLesson, closeModalBookLesson } =
    useToggle();

  const handleAddFavoritesTeachers = (e) => {
    e.preventDefault();
    if (!isAuth) {
      toast.warn("You must be logged in");
      return;
    }
    dispatch(addFavorites(id));
    toast.success("Your favorites have been added");
  };
  const handleRemoveFavoritesTeachers = (e) => {
    e.preventDefault();
    dispatch(removeFavorites(id));
    toast.success("Your favorites have been removed");
  };

  // const handleModalOpen = (e) => {
  //   e.preventDefault();
  //   setIsModalOpen(true);
  // };
  return (
    <div>
      <li className={styles.teacherItem}>
        <div className={styles.teacherImgWrp}>
          <img
            src={avatar_url}
            className={styles.teacherImg}
            height="100px"
            width="100px"
            alt="teacher img"
          />
        </div>
        <div className={styles.teacherMainInfoWrp}>
          <div className={styles.teacherMainInfo}>
            <div>
              <p className={styles.teacherPreTitle}>Languages</p>
              <p className={styles.teacherName}>
                {name} {surname}
              </p>
            </div>
            <div className={styles.teacherInfoListWrp}>
              <ul className={styles.teacherInfoList}>
                <li className={styles.teacherInfoItem}>
                  <PiBookOpenBold size={16} />
                  <p className={styles.teacherInfoText}>Lessons online</p>
                </li>
                <li className={styles.teacherInfoItem}>
                  <p className={styles.teacherInfoText}>
                    Lessons done:{""} {lessons_done}
                  </p>
                </li>
                <li className={styles.teacherInfoItem}>
                  <HiStar color="#FFC531" size={16} />
                  <p className={styles.teacherInfoText}>Rating: {rating}</p>
                </li>
                <li className={styles.teacherInfoItem}>
                  <p className={styles.teacherInfoText}>
                    Price / 1 hour:{" "}
                    <span className={styles.priceColor}>{price_per_hour}$</span>
                  </p>
                </li>
              </ul>

              {isTeacherFavorite && isAuth ? (
                <button
                  onClick={handleRemoveFavoritesTeachers}
                  className={styles.addToFavoriteBtn}
                >
                  <AiFillHeart size={26} color="#10BAFC" />
                </button>
              ) : (
                <button
                  onClick={handleAddFavoritesTeachers}
                  className={styles.addToFavoriteBtn}
                >
                  <AiOutlineHeart size={26} color="#10BAFC" />
                </button>
              )}
            </div>
          </div>
          <div className={styles.teacherSecondaryInfo}>
            <p>
              <span>Speaks: {""}</span>
              {languages.join(", ")}
            </p>
            <p>
              <span>Lesson Info: {""}</span>
              {lesson_info}
            </p>
            <p>
              <span>Conditions:{""}</span>
              {conditions}
            </p>
          </div>
          {!isReadMoreOpen ? (
            <button
              className={styles.readMoreBtn}
              onClick={() => setIsReadMoreOpen(true)}
            >
              Read more
            </button>
          ) : (
            <div className={styles.reviewsWrp}>
              <p className={styles.teacherExperience}>{experience}</p>
              <ul className={styles.reviewsList}>
                {reviews.map((review) => (
                  <li className={styles.reviewsItem} key={nanoid()}>
                    <div className={styles.reviewsUser}>
                      <Avatar style={{ width: "3rem", height: "3rem" }} />
                      <div className={styles.reviewer}>
                        <p>{review.reviewer_name}</p>
                        <div>
                          {" "}
                          <HiStar color="#FFC531" size={16} />
                          <span>{review.reviewer_rating},0</span>
                        </div>
                      </div>
                    </div>
                    <p className={styles.reviewerText}>{review.comment}</p>
                  </li>
                ))}
              </ul>
              <button
                className={styles.bookLessonBtn}
                type="button"
                onClick={openModalBookLesson}
              >
                Book trial lesson
              </button>
            </div>
          )}
          <div className={styles.teacherLevels}>
            <ul className={styles.teacherLevelsList}>
              {levels.map((level) => (
                <li key={nanoid()} className={styles.teacherLevelsItem}>
                  #{level}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </li>
      {isOpenBookLesson && (
        <BookLessonModal
          isOpen={isOpenBookLesson}
          onClose={closeModalBookLesson}
          name={name}
          surname={surname}
          avatar_url={avatar_url}
        />
      )}
    </div>
  );
};
