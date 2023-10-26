import MyButton from "./components/myButton";
import styles from "./styles/styles.module.css";

export default function Practice() {
    return (
        <>
            <h1 id={styles.myH1}>Welcome to Practice!</h1>
            <MyButton />
        </>
    );
}