import styles from './index.module.css';

interface Props {
    children?: any;
}

const WavyShape: React.FC<Props> = ({ children }) => {
    return <div className={styles.container}>{children}</div>;
};

export default WavyShape;
