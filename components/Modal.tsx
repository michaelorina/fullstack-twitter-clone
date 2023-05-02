import React, { useCallback } from "react";
import { on } from "stream";

interface ModalProps{
    isOpen?: boolean;
    onClose: () => void;
    onSubmit: () => void;
    title?: string;
    body?: React.ReactElement;
    footer?: React.ReactElement;
    actionLabel: string;
    disabled?: boolean;
}
const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    onSubmit,
    title,
    body,
    footer,
    actionLabel,
    disabled
}) => {

    const handleClose = useCallback(()=> {
        if (disabled){
            return;
        }

        onClose();
    },[disabled, onClose]);

    const handleSubmit = useCallback(() =>{
        if (disabled){
            return;
        }

        onSubmit;
    }, [disabled, onSubmit]);
    return(
        <div></div>
    );
}
export default Modal;