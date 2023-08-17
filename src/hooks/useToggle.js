import { useState } from "react";

export const useToggle = () => {
  const [isOpenRegistration, setIsOpenRegistration] = useState(false);
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const [isOpenBookLesson, setIsOpenBookLesson] = useState(false);

  const openModalRegistration = () => setIsOpenRegistration(true);
  const closeModalRegistration = () => setIsOpenRegistration(false);
  const openModalLogin = () => setIsOpenLogin(true);
  const closeModalLogin = () => setIsOpenLogin(false);
  const openModalBookLesson = () => setIsOpenBookLesson(true);
  const closeModalBookLesson = () => setIsOpenBookLesson(false);

  return {
    isOpenRegistration,
    isOpenLogin,
    isOpenBookLesson,

    openModalLogin,
    closeModalLogin,

    openModalRegistration,
    closeModalRegistration,

    openModalBookLesson,
    closeModalBookLesson,
  };
};
