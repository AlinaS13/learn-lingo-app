import { useState } from "react";

export const useToggle = () => {
  const [isOpenRegistration, setIsOpenRegistration] = useState(false);
  const [isOpenLogin, setIsOpenLogin] = useState(false);

  const openModalRegistration = () => setIsOpenRegistration(true);
  const closeModalRegistration = () => setIsOpenRegistration(false);
  const toggleModalRegistration = () =>
    setIsOpenRegistration((isOpenRegistration) => !isOpenRegistration);

  const openModalLogin = () => setIsOpenLogin(true);
  const closeModalLogin = () => setIsOpenLogin(false);
  const toggleModalLogin = () => setIsOpenLogin((isOpenLogin) => !isOpenLogin);

  return {
    isOpenRegistration,
    isOpenLogin,
    openModalLogin,
    closeModalLogin,
    toggleModalLogin,
    openModalRegistration,
    closeModalRegistration,
    toggleModalRegistration,
  };
};

// import { useState } from "react";

// export const useToggle = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const open = () => setIsOpen(true);
//   const close = () => setIsOpen(false);
//   const toggle = () => setIsOpen((isOpen) => !isOpen);

//   return { isOpen, open, close, toggle };
// };
