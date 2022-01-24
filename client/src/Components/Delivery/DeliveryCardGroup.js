import React from "react";

import DeliveryCard from "./DeliveryCard";

const DeliveryCardGroup = () => {
  return (
    <>
      <h1 className="text-xl font-semibold my-3">Order food online</h1>
      <div className="flex flex-wrap justify-between gap-3">
        <DeliveryFoodCategory />
        <DeliveryFoodCategory />
        <DeliveryFoodCategory />
      </div>
    </>
  )
};

export default DeliveryCardGroup;
