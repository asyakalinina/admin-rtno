import { useState, useEffect } from "react";
import {useScrollLock} from "./useScrollLock";

export interface ModalControls {
  isOpenModal: boolean;
  openModal: () => void;
  closeModal: () => void ;
}

export const useModal = (blockScroll=true): ModalControls => {
  const { lockScroll, unlockScroll } = useScrollLock();
  const [isOpenModal, setOpenModal] = useState(false);

  useEffect(() => () => {
    isOpenModal && blockScroll && unlockScroll();
  }, [isOpenModal]);

  const openModal = () => {
    setOpenModal(true);
    blockScroll && lockScroll();
  };
  const closeModal = () => {
    setOpenModal(false);
    blockScroll && unlockScroll();
  };

  return {
    isOpenModal,
    openModal,
    closeModal,
  };
};
