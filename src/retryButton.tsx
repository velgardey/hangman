import React from "react";
import styles from "./keyboard.module.css";

const RetryButton: React.FC = () => {
    const handleRetryClick = () => {
        window.location.reload(); // Reload the page when the button is clicked
    };

    return (
        <div>
            <button className={styles.retryBtn} onClick={handleRetryClick}>Retry</button>
        </div>
    );
};

export default RetryButton;