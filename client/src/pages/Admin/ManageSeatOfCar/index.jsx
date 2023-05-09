import React, { useEffect, useState } from "react";
import ListSeat from "../../../components/listSeat/ListSeat";
import axios from "axios";
import constant from "../../../constant";
import { useParams } from "react-router-dom";
export default function ManageSeatOfCar() {
  const [seats, setSeats] = useState([]);
    const { id } = useParams();
    const [car, setCar] = useState({})
  useEffect(() => {
    handleSeat();
  }, [id]);
    const handleSeat = async () => {
    const findCarById = await axios.get(
      `${constant._SERVER_LINK}/schedule/ticket/${id}`
    );
      const result = findCarById.data;
      console.log(result);
    setCar({ ...result });
    const { numberOfFloor } = result;
      const { seats } = result;
    let filterSeatByCharacter = [];
    const character = [
      ...new Set(seats.map((seat) => seat.name.slice(0, 1))),
    ].sort();
    const pageSize = seats.length / numberOfFloor;

    function getDataForPage(pageNumber) {
      const startIndex = (pageNumber - 1) * pageSize;
      const endIndex = startIndex + pageSize;
      return newSearts.slice(startIndex, endIndex);
    }
      const newSearts = []
        const sortSeatForRow = []
        character.forEach((char) => {
          for (let i = 0; i < seats.length; i++) {
            if (seats[i].name.includes(char)) {
              newSearts.push(seats[i]);
            }
          }
        });
    if (numberOfFloor > 1) {
        console.log(newSearts);
         for (let i = 1; i <= numberOfFloor; i++) {
           sortSeatForRow.push([...getDataForPage(i)]);
         }
        filterSeatByCharacter = [...sortSeatForRow];
    } else {
      filterSeatByCharacter = [...[newSearts]];
    }
  };
  return (
    <div
      className="tang"
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "20px",
      }}
    >
      <ListSeat
        listSeat={seats}
        handleSeat={handleSeat}
        isCheck={true}
        car={car ? car : {}}
      />
      ;
    </div>
  );
}

