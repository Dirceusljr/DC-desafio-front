/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

export const ModalStateContext = createContext();
ModalStateContext.displayName = 'ModalState'

export default function ModalState ({children}) {
    const [open, setOpen] = useState(false);
    const [propsModal, setPropsModal] = useState();

  return (
    <ModalStateContext.Provider value={{open, setOpen, propsModal, setPropsModal}}>
        {children}
    </ModalStateContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useModalContext() {
    const {open, setOpen, propsModal, setPropsModal} = useContext(ModalStateContext);

    return {
        open, setOpen, propsModal, setPropsModal
    }
}