<template>
  <div className="bg-white flex justify-around items-start gap-4 pb-4 border-b">
    <div className="flex justify-center items-center gap-4 animate-pulse">
      <div className="w-[64px] h-[64px] p-4 bg-gray-200 rounded-2xl"></div>
      <div className="flex flex-col justify-center items-start gap-2 w-[170px]">
        <div className="w-full h-[24px] bg-gray-200 rounded"></div>
        <div className="w-full h-[20px] bg-gray-200 rounded"></div>
      </div>
    </div>
    <div className="w-[24px] h-[24px] cursor-pointer animate-pulse bg-gray-200 rounded"></div>
  </div>
  <div className="flex flex-col justify-center items-center gap-[10px] pt-4 animate-pulse">
    <div className="w-full h-[20px] bg-gray-200 rounded"></div>
    <div className="w-full h-[20px] bg-gray-200 rounded"></div>
    <div className="w-[80px] h-[24px] bg-gray-200 rounded-md"></div>
  </div>
  <div
    class="absolute top-0 left-[-100%] h-full w-full bg-gradient-to-r from-white/30 via-white/10 to-transparent"
  ></div>
</template>
