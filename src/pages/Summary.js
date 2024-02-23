import React from "react";

const Summary = () => {
  const data = [
    {
      th1: "Market Cap:",
      td1: "$564,665,102,923",
      th2: "Staking Market Cap:",
      td2: "N/A",
    },
    {
      th1: "Circulating Supply:",
      td1: "19,351,006",
      th2: "Staking Yield:",
      td2: "N/A",
    },
    {
      th1: "Total Supply: ",
      td1: "21,000,000",
      th2: "Lending Market Cap:",
      td2: "$23,665,102,923",
    },
    {
      th1: "Max Supply:",
      td1: "21,000,000",
      th2: "Lending Yield:",
      td2: "2.45%",
    },
    {
      th1: "FDV:",
      td1: "$612,782,982,000",
      th2: "TVL:",
      td2: "$564,665,102,923",
    },
    {
      th1: "24 hr Vol:",
      td1: "$22,756,555,955",
      th2: "Inflation:",
      td2: "2.05%",
    },
    {
      th1: "24 hr Avg Vol:",
      td1: "$35,548,249,002",
      th2: "Staking Market Cap:",
      td2: "$564,665,102,923",
    },
  ];
  return (
    <div className="h-full">
      <div className="relative py-20 px-4">
        {data.map((item, index) => {
          return (
            <table
              key={index}
              className="text-lg w-[60%] text-left rtl:text-right text-gray-500"
            >
              <tbody>
                <tr className="bg-white border border-b-2">
                  <th
                    scope="row"
                    className="px-6 py-4 w-[210px] bg-red-100 font-bold text-gray-900 whitespace-nowrap"
                  >
                    {item.th1}
                  </th>
                  <td className="px-6 py-4 ">{item.td1}</td>
                  <th
                    scope="row"
                    className="px-6 py-4 w-[210px]  bg-red-100 font-bold text-gray-900 whitespace-nowrap"
                  >
                    {item.th2}
                  </th>
                  <td className="px-6 py-4 ">{item.td2}</td>
                </tr>
              </tbody>
            </table>
          );
        })}
      </div>
    </div>
  );
};

export default Summary;
