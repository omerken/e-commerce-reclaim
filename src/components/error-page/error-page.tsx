import { FC } from 'react';
import { Button } from '~/components/button/button';

import styles from './error-page.module.scss';

export interface ErrorPageProps {
    title: string;
    message?: string;
    actionButtonText?: string;
    onActionButtonClick?: () => void;
}

export const ErrorPage: FC<ErrorPageProps> = ({
    title,
    message,
    actionButtonText,
    onActionButtonClick,
}) => {
    return (
        <div className={styles.root}>
            <h1 className={styles.title}>{title}</h1>
            {message && <div className={styles.message}>{message}</div>}
            {actionButtonText ? (
                <Button onClick={onActionButtonClick}>{actionButtonText}</Button>
            ) : null}
        </div>
    );
};
