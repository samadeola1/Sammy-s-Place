import React from 'react'
import { orders } from '../utils/order';

const Order = () => {
  const arrow = ">>"
  
  return (
    <>
      <main className="">
        <div key={orders.id}>
          <h4 className="mx-4">Orders</h4>
          <hr />
          <div>
            {orders.map((order) => {
              return (
                <div className="card card-side shadow-sm bg-[#252422] border-[#252422] my-10 mx-5 rounded-[11px]">
                  <figure className="h-[172px]">
                    <img src={order.image} alt="Movie" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{order.title}</h2>
                    <p>{order.price}</p>
                    <div className="card-actions justify-end">
                      <button className="text-[#B67B0F] cursor-pointer">view details{arrow}</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}

export default Order