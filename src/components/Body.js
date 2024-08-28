import { useEffect, useState } from "react";
import { appData } from "../utils/constants";
import Course from "./Course";

const Body = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const totalPages =
    data.length % 5 == 0 ? data.length / 5 : data.length / 5 + 1;

  const lowerLimit = (page - 1) * 5;
  const upperLimit =
    lowerLimit + 5 > data.length ? data.length : lowerLimit + 5;

  const result = [];
  for (let i = lowerLimit; i < upperLimit; i++) {
    result.push(data[i]);
  }

  const pageNumList = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumList.push(i);
  }

  useEffect(() => {
    setData(appData);
  }, []);

  return (
    <div className="px-5 py-2">
      {result.map((d, i) => (
        <Course key={i} course={d}></Course>
      ))}

      <ul className="list-none flex items-center justify-center">
        {pageNumList.map((pg) => (
          <>
            {pg === page ? (
              <li
                className="font-bold p-3 text-white bg-blue-700 rounded-lg"
                key={pg}
                onClick={() => {
                  setPage(pg);
                }}
              >
                {pg}
              </li>
            ) : (
              <li
                className="font-bold p-3"
                key={pg}
                onClick={() => {
                  setPage(pg);
                }}
              >
                {pg}
              </li>
            )}
          </>
        ))}
      </ul>
    </div>
  );
};

export default Body;
