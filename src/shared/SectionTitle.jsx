import React from "react";

export default function SectionTitle({ title, subtitle }) {
  return (
    <div>
      <p className="text-yellow-500 text-center">{subtitle}</p>
      <h1 className="text-3xl border-y-2 w-3/12 mx-auto text-center uppercase">
        {title}
      </h1>
    </div>
  );
}
