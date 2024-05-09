import React, {ReactElement} from "react";
import style from "./style.module.scss";
import ReactDOM from "react-dom";

interface ModalBackProps {
    children: ReactElement;
    isOpen: boolean,
    onClose: () => void,
}

const ModalBack = ({
                       children, isOpen, onClose,
                   }: ModalBackProps) => {

    return (
        isOpen ? (
            ReactDOM.createPortal(
                <div className={style.wrap}>
                    <div className={style.background} onClick={onClose}>
                        <div className={style.children_wrap}>
                            {children}
                        </div>
                    </div>
                </div>
                , document.body
            )
        ) : <></>
    );
};

export default ModalBack;
