import { createContext, useState } from 'react';

interface iProviderModalProps {
  children: React.ReactNode;
}

interface iModalConfiguration {
  content: {
    top: string;
    left: string;
    right: string;
    bottom: string;
    marginRight: string;
    border: string;
    padding: string;
    transform: string;
    backgroundColor: string;
  };
  overlay: {
    backgroundColor: string;
  };
}

export interface iModalContext {
  modalNewPost: boolean;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
  customModalStyles: iModalConfiguration;
}

export const ModalContext = createContext({} as iModalContext);

export const ModalProvider = ({ children }: iProviderModalProps) => {
  const [modalNewPost, isModalNewPostOpen] = useState(false);

  const handleOpenModal = () => {
    isModalNewPostOpen(true);
  };

  const handleCloseModal = () => {
    isModalNewPostOpen(false);
  };

  const customModalStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: '50%',
      bottom: 'auto',
      marginRight: '-50%',
      border: '0rem',
      padding: '0rem 0.75rem',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'transparent',
    },
    overlay: {
      backgroundColor: 'rgba(85, 163, 255, 0.3)',
    },
  };

  return (
    <ModalContext.Provider
      value={{
        modalNewPost,
        customModalStyles,
        handleOpenModal,
        handleCloseModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
