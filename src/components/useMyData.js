import { useEffect, useState } from "react";

const useMyData = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    if (!data) {
      const readDataJSON = () => {
        fetch("/assets/data.json", {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            setData(data);
          });
      };
      readDataJSON();
    }
  }, [data]);

  return data;
};

export default useMyData;
