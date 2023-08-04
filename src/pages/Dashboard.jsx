import { useState,useEffect } from "react";

// Data
import mockData from "../assets/data.json";
import timestamps from "../assets/timeStamps.json";

// Components
import Dropdown from "../component/dropdown/Dropdown";
import HeaderTitle from "../component/header-title/HeaderTitle";
import Search from "../component/search/Search";
import List from "../component/list/List";

// Styles
import styles from "./Dashboard.module.css";
import Card from "../component/card/Card";

const Dashboard = () => {
  const [currency, setCurrency] = useState("USD");
  
  const [selectedOrderDetails, setSelectedOrderDetails] = useState(
    mockData.results[0].executionDetails
  );
  const [selectedOrderTimeStamps, setSelectedOrderTimeStamps] = useState( 
    timestamps.results[0].timestamps
  );
  const [orders,setOrders]=useState(mockData.results.length);
  const [searchQuery, setSearchQuery]=useState('')
  const fn1 =(idx)=>{
    
    mockData.results.map((id)=>{
      id["&id"] ===idx && setSelectedOrderDetails(id.executionDetails)
    })
    timestamps.results.map((id)=>{
      id["&id"] ===idx && setSelectedOrderTimeStamps(id.timestamps)
    });
  }
  const [filteredData ,setFilterData]=useState( mockData.results)
  
  useEffect(()=>{
    setFilterData(mockData.results.filter((item) =>
    item["&id"].toLowerCase().includes(searchQuery.toLowerCase())
  ));
  },[searchQuery])
  

  return (
    <div>
      <div className={styles.header}>
        <HeaderTitle primaryTitle="Orders" secondaryTitle={orders} />
        <div className={styles.actionBox}>
          <Search
            value={searchQuery}
            onChange={(e) => {
               setSearchQuery(e.target.value)
               }}
          />
          <Dropdown
            options={["GBP", "USD", "JPY", "EUR"]}
            onChange={(e) => setCurrency(e.target.value)}
            selectedItem={currency}
          />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.section}>
          <Card
            cardData={selectedOrderDetails}
            title="Selected Order Details"
          />
          <Card
            cardData={selectedOrderTimeStamps}
            title="Selected Order Timestamps"
          />
        </div>
        <List rows={filteredData} fnx={fn1} val={currency} />
      </div>
    </div>
  );
};

export default Dashboard;
