import styles from "./ListRow.module.css";

const ListCell = ({ children ,id , function1 }) => {
  return <tr className={styles.cell} onClick={()=>{function1(id);}} >{children}</tr>;
};

export default ListCell;
