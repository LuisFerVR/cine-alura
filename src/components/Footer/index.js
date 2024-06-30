import styles from "./Footer.module.css"

function Pie({children}){
    return(
        <footer className={styles.pie}>
            {children}
        </footer>
    );
}
export default Pie