import React from 'react'



const Hero = () => {
  return (
    <>
      <main className="main-wrapper  bg-no-repeat bg-cover bg-center">
        <div className="flex flex-col justify-center items-center gap-[13px] text-center py-24 md:py-32">
          <h1 className="text-[56px] font-[500]text-[#F0F0F0]">
            The{" "}
            <span className="text-[56px] font-rammetto text-[#B67B0F]">
              ZING
            </span>{" "}
            in every bite
          </h1>
          <h3 className="text-[28px] font-[500] text-center md:px-26 lg:px-80">
            Savor the flavor! Explore our delicious menu and order now for a
            taste sensation!
          </h3>
          <div className="flex gap-[12px] py-15">
            <h3 className="border bg-[#B67B0F] rounded-[31px] px-[35px] md:px-[56px] text-[20px]  py-[15px] items-center ">
              Order now
            </h3>
            <h3 className="border bg-[#FBFBFB] rounded-[32px] px-[10px] md:px-[20px] py-[15px] text-[20px] text-[#100101] text-center">
              View Menu
            </h3>
          </div>
        </div>
      </main>
    </>
  );
}

export default Hero