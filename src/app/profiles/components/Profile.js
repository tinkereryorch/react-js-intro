import styles from '../styles/styles.module.css';

export default function Profile() {
    const avatar = "https://i.imgur.com/EdbYG2ls.jpeg";
    const description = "Earthworm Jim"
    return (
        <>
            <img
                className={styles.profile}
                src={avatar}
                alt={description}
            />
        </>
    )
}