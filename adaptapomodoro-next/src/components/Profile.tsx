import styles from '../styles/components/Profile.module.css'

export function Profile () {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/ThiagodaSilva27.png" alt="Thiago "/>
            <div>
                <strong>Thiago da Silva</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level 1
                </p>
            </div>
        </div>
    )
}