import React, { use, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { FaCheck, FaExclamationTriangle } from "react-icons/fa";
import { AuthContext } from "../../contexts/AuthContext";

const PageDetails = () => {
  const { id } = useParams();
  const navigation = useNavigate();
  const { billAmount, setBillAmount, paidBills, setPaidBills } =
    use(AuthContext);

  const [bill, setBill] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [value, setValue] = useState(false);
  const [isPaid, setIsPaid] = useState(false);
  const [showAlreadyPaidAlert, setShowAlreadyPaidAlert] = useState(false);
  useEffect(() => {
    if (paidBills.includes(parseInt(id))) {
      setIsPaid(true);
    }
    fetch("/billsData.json")
      .then((res) => res.json())
      .then((data) => {
        const bill = data.find((item) => item.id === parseInt(id));
        setBill(bill);
      });
  }, [id, paidBills]);

  if (!bill) {
    return (
      <div>
        <span className="loading loading-bars loading-xl"></span>
      </div>
    );
  }
  const { organization, billType, amount, dueDate } = bill;
  const paybillHnadler = () => {
    if (isPaid) {
      setShowAlreadyPaidAlert(true);
      navigation("/bills");
      setTimeout(() => setShowAlreadyPaidAlert(false), 3000); // Hide after 3 seconds
      return;
    }
    const userAmount = bill.amount;

    setBillAmount(billAmount - userAmount);
    setPaidBills([...paidBills, parseInt(id)]);
    setIsPaid(true);
    setShowModal(true);
    setValue(true);

    // setTimeout(() => {
    //   navigation("/bills");
    // }, 2000);
  };

  return (
    <div className="bg-[#8affc3] p-4 flex flex-col md:flex-row justify-center items-center gap-3 md:gap-12 my-8 rounded">
      {showAlreadyPaidAlert && (
        <div className="absolute top-25 left-0 right-0 mx-auto w-max bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-2 rounded flex items-center gap-2">
          <FaExclamationTriangle />
          <span>This bill has already been paid!</span>
        </div>
      )}
      <div>
        <img className="w-60 rounded-xl" src={organization.icon} alt="" />
      </div>
      <div className="md:flex items-center gap-10">
        <h1 className="text-2xl font-bold mb-2"> {organization.name} </h1>
        <h2 className="font-extrabold text-[#0e6496]">
          {" "}
          <i>{billType}</i>{" "}
        </h2>

        <h2>
          <span className="font-bold"> Amount :</span>{" "}
          <span className="font-bold text-[#4a7407]">{amount}</span>{" "}
        </h2>
        <h2 className="text-[#220081] font-bold">Due to date : {dueDate} </h2>
      </div>

      <button
        onClick={paybillHnadler}
        disabled={value}
        className={`bg-[#07f32f] hover:bg-[#3e6e46] px-8 py-1 rounded text-white ${
          value
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-[#07f32f] hover:bg-[#3e6e46]"
        }`}
      >
        {" "}
        Pay Bill
      </button>

      {showModal && (
        <>
          <dialog open className="modal ">
            <div className="modal-box bg-[#23f381]">
              <h3 className="font-bold text-2xl text-white">
                Congratulations{" "}
              </h3>
              <p className="py-4"> Bill Payment is succesfully ! </p>
              <p className="text-green-600 text-2xl flex justify-center mt-8">
                <FaCheck />{" "}
              </p>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button
                    onClick={() => {
                      navigation("/bills");
                    }}
                    className="btn"
                  >
                    Close
                  </button>
                </form>
              </div>
            </div>
          </dialog>
        </>
      )}
    </div>
  );
};

export default PageDetails;
