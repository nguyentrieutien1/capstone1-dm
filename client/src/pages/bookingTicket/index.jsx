import { Steps } from "antd";
import { useState } from "react";
import "./style.scss";
import RouteConfirmation from "./../../components/steps/RouteConfirmation";
import InformationCustomer from "./../../components/steps/InformationCustomer";
import Payment from "./../../components/steps/Payment";
import { useDispatch } from "react-redux";
import { CallApiGetScheduleByTicketId } from "./../../redux/reducers/scheduleReducer";
import { useSelector } from "react-redux";
import ConfirmRouting from "./../../components/steps/ConfirmRouting";
import { CreateNewTicketAction } from "../../redux/reducers/ticketReducer";

const BookingTicket = () => {
  const dispatch = useDispatch();
  const scheduleById = useSelector(
    (state) => state.ScheduleReducer.scheduleById
  );
  const [current, setCurrent] = useState(0);
  const [showChair, setShowChair] = useState(false);
  const [booked, setBooked] = useState([]);
  const [activeClass, setActiveClass] = useState([]);
  const [chairExist, setChairExist] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [customerInfo, setCustomerInfo] = useState({
    totalMoney: totalPrice,
    fullName: "",
    phoneNumber: "",
    email: "",
    city: "",
    district: "",
    seats: activeClass,
  });

  const onChange = (value) => {
    setCurrent(value);
  };
  const handleChangeFilterBooking = (value) => {
    console.log(`selected ${value}`);
  };
  const onChangeChoose = (ticketId) => {
    dispatch(CallApiGetScheduleByTicketId(ticketId));
    if (Object.keys(scheduleById).length > 0) {
      if (!showChair && scheduleById.id === ticketId) {
        setShowChair(true);
      } else {
        setShowChair(false);
      }
    }
  };
  const handleContinueStep = () => {
    setCurrent(1);
  };
  const handleContinueConfirmRouteStep = () => {
    setCurrent(2);
  };

  const handleContinueStepInfo = () => {
    dispatch(CreateNewTicketAction(customerInfo, scheduleById.id));
    setCurrent(3);
  };

  const handleRenderSteps = () => {
    if (current === 0) {
      return (
        <RouteConfirmation
          handleChangeFilterBooking={handleChangeFilterBooking}
          onChangeChoose={onChangeChoose}
          showChair={showChair}
          booked={booked}
          setBooked={setBooked}
          handleContinueStep={handleContinueStep}
          activeClass={activeClass}
          setActiveClass={setActiveClass}
          chairExist={chairExist}
          setChairExist={setChairExist}
          totalPrice={totalPrice}
          setTotalPrice={setTotalPrice}
        />
      );
    } else if (current === 1) {
      return (
        <ConfirmRouting
          booked={booked}
          setBooked={setBooked}
          handleContinueConfirmRouteStep={handleContinueConfirmRouteStep}
          setCurrent={setCurrent}
        />
      );
    } else if (current === 2) {
      return (
        <InformationCustomer
          handleContinueStepInfo={handleContinueStepInfo}
          setCurrent={setCurrent}
          customerInfo={customerInfo}
          setCustomerInfo={setCustomerInfo}
          activeClass={activeClass}
          totalPrice={totalPrice}
        />
      );
    } else {
      return <Payment
        customerInfo={customerInfo}
        booked={booked}
        setCurrent={setCurrent}
      />;
    }
  };

  return (
    <div className="booking">
      <Steps
        current={current}
        onChange={onChange}
        items={[
          {
            title: "CHỌN TUYẾN",
          },
          {
            title: "XÁC NHẬN LỘ TRÌNH",
          },
          {
            title: "THÔNG TIN HÀNH KHÁCH",
          },
          {
            title: "THANH TOÁN",
          },
        ]}
      />
      {handleRenderSteps()}
    </div>
  );
};

export default BookingTicket;
