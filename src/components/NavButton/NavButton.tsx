import React, { FC } from "react";
import classnames from "classnames";

import type { NavButtonProps } from "../../types";

import * as styles from "./NavButton.module.css";

const NavButton: FC<NavButtonProps> = ({ isOpened, setIsOpened }) => {
    return (
        <button
            tabIndex={1}
            className={classnames(styles.button, { [styles.buttonActive]: isOpened })}
            onClick={() => {
                setIsOpened((state) => !state);
            }}
        >
            <span className={styles.buttonLine}></span>
            <span className={styles.buttonLine}></span>
            <span className={styles.buttonLine}></span>
        </button>
    );
};

export default NavButton;
