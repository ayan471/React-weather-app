import React from "react";

function TimeAndLocation() {
  return (
    <div>
      <div className="flex items-center justify-center my-6">
        <p className="text-white text-xl font-extralight">
          Tuesday, 31 may 2022 | local time: 12:46 pm
        </p>
      </div>

      <div className="flex items-center justify-center my-3">
        <p className="text-white text-3xl font-medium">Berlin, De</p>
      </div>
    </div>
  );
}

export default TimeAndLocation;
