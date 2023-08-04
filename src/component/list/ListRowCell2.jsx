import { useEffect, useState } from "react";
import styles from "./ListRowCell.module.css";

const ListRowCell2 = ({  value , data }) => {
  const [output,setOutput]=useState(data.USD)
 useEffect(()=>{
     if( value==="USD"){
       setOutput(data.USD); 
      }
      else if ( value==="GBP"){
        setOutput(data.GBP); 
       }
       else if ( value==="JPY"){
        setOutput(data.JPY); 
       }
       else if ( value==="EUR"){
        setOutput(data.EUR); 
       }

 },[value])


  return <td className={styles.cell}>
   {output}
   </td>;
};

export default ListRowCell2;
 