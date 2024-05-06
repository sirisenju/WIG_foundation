import React from "react";
import { useState } from "react";

function Accordian( { title, message, number } ) {
  const [isActive, setIsActive] = useState(false);
  return (
    <section>
      <div>
        <div className="accordion">
          <div className="accordion-item">
            <div
              className="accordion-title"
              onClick={() => setIsActive(!isActive)}
            >
                <div className="flex gap-x-10">
                    <div className="text-xl font-semibold text-footer_theme">{number}</div>
                    <div className="text-lg font-medium">{title}</div>
                </div>
              <div>{isActive ? "-" : "+"}</div>
            </div>
            {isActive && <div className="accordion-content text-base p-2">{message}</div>}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Accordian;
