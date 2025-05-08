import { useLoaderData, useParams } from "react-router";
import BillPage from "./BillPage";
import { useState } from "react";

function Bills() {
  const bills = useLoaderData();
  const { id } = useParams();
  const [value, setvalue] = useState("All");
  const handleFilterChange = (e) => {
    setvalue(e.target.value);
  };
  const filterItems =
    value === "All" ? bills : bills.filter((bill) => bill.billType === value);

  return (
    <div>
      <div className="mt-10 flex flex-col gap-10 px-6 md:px-16  bg-[#d4f7e5] ">
        <div className="text-center mt-10">
          <select
            onChange={handleFilterChange}
            className="border-3 rounded  border-[#3b2e3b]"
          >
            <option value="All">All</option>
            <option value="Gas Bill">Gas</option>
            <option value="Internet Bill">Water</option>
            <option value="Water Bill">Electricity</option>
            <option value="Credit card Bill">Credit card Bill</option>
            <option value="Tuition Bill">Tuition Bill</option>
            <option value="Recharge Bill">Recharge Bill</option>
            <option value="TV Bill">TV Bill</option>
          </select>
        </div>

        {filterItems.map((bill) => (
          <BillPage key={bill.id} bill={bill}></BillPage>
        ))}
      </div>
    </div>
  );
}

export default Bills;
