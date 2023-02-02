import axiosCall from "../../../../axios-client";
import { useEffect, useState } from "react";
import { useStateContext } from "@/context/ContextProvider";

const useFatchData = (url) => {
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { updateDataTable } = useStateContext();
  useEffect(() => {
    getData(url);
  }, [updateDataTable]);

  const getData = async (url) => {
    await axiosCall
      .get(url)
      .then((res) => {
        let data = res.data;
        setTableData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
  return [tableData, loading];
};

export default useFatchData;
