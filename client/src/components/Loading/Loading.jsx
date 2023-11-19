import styles from './Loading.module.css';


export default function Loading(){
    return(
      
      <div className={styles["lds-roller"]}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    )
}