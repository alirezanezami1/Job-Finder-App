<template>
  <div class="bg-white p-4">
    <div class="flex justify-between items-center py-3 w-full">
      <div class="flex justify-center items-center gap-5">
        <div class="w-[28px] h-[28px] bg-gray-300 animate-pulse rounded-full"></div>
        <div class="w-[28px] h-[28px] bg-gray-300 animate-pulse rounded-full"></div>
      </div>
      <div class="w-[28px] h-[28px] bg-gray-300 animate-pulse rounded-full"></div>
    </div>

    <div
      class="flex flex-col justify-center w-full items-center gap-4 p-6 rounded-[32px] border border-gray300"
    >
      <div class="flex justify-center items-center">
        <div
          class="w-[92px] h-[92px] bg-gray-300 animate-pulse rounded-3xl border border-gray200"
        ></div>
      </div>

      <div
        class="flex flex-col justify-center items-center gap-2 border-b border-gray200 pb-4 w-full"
      >
        <div class="w-3/4 h-[24px] bg-gray-300 animate-pulse rounded"></div>
        <div class="w-1/2 h-[18px] bg-gray-300 animate-pulse rounded"></div>
      </div>

      <div class="flex flex-col justify-center items-center gap-3">
        <div className="w-full h-[20px] bg-gray-200 rounded"></div>
        <div className="w-full h-[20px] bg-gray-200 rounded"></div>
        <div className="w-[80px] h-[24px] bg-gray-200 rounded-md"></div>
        <div className="w-full h-[20px] bg-gray-200 rounded"></div>
      </div>
    </div>

    <div class="w-full flex flex-col justify-center items-start gap-4 pt-4">
      <div class="w-1/4 h-[20px] bg-gray-300 animate-pulse rounded"></div>
      <div class="w-full h-[16px] bg-gray-300 animate-pulse rounded"></div>
      <div class="w-1/4 h-[20px] bg-gray-300 animate-pulse rounded"></div>
      <div class="w-full h-[16px] bg-gray-300 animate-pulse rounded"></div>
      <div class="w-1/4 h-[20px] bg-gray-300 animate-pulse rounded"></div>
      <div class="w-1/4 h-[20px] bg-gray-300 animate-pulse rounded"></div>
    </div>
  </div>
  <div
    class="absolute top-0 left-[-100%] h-full w-full bg-gradient-to-r from-white/30 via-white/10 to-transparent"
  ></div>
</template>
