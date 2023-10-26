import styles from '../styles/styles.module.css';

export default function Profile({ name, avatar }){
    return(
        <div>
            <p>This is {name}'s profile</p>
            <img src={avatar} height={100} width={100} className={styles.avatar}/>
        </div>
    );
}