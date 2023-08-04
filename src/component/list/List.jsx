import ListRow from "./ListRow";
import ListRowCell from "./ListRowCell";
import ListRowCell2 from "./ListRowCell2";
import ListHeader from "./ListHeader";
import ListHeaderCell from "./ListHeaderCell";

import styles from "./List.module.css";

const List = ({ rows, fnx ,val }) => {
  return (
    <table className={styles.container}>
      <thead>
        <ListHeader>
          <ListHeaderCell>Order ID</ListHeaderCell>
          <ListHeaderCell>Buy/Sell</ListHeaderCell>
          <ListHeaderCell>Country</ListHeaderCell>
          <ListHeaderCell>Order Submitted</ListHeaderCell>
          <ListHeaderCell>Order Volume /{val}</ListHeaderCell>
        </ListHeader>
      </thead>
      <tbody>
        {rows.map((row  ) => (
          <ListRow id={row["&id"]} function1={fnx}  key={row["&id"]}> 
            <ListRowCell  >{row["&id"]}</ListRowCell>
            <ListRowCell>{row.executionDetails.buySellIndicator}</ListRowCell>
            <ListRowCell>{row.executionDetails.orderStatus}</ListRowCell>
            <ListRowCell>{row.orderSubmitted}</ListRowCell>
            <ListRowCell2 data={row.bestExecutionData.orderVolume}  value={val}/>
          </ListRow>
        ))}
      </tbody>
    </table>
  );
};

export default List;
