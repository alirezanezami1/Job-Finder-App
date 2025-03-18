<template>
  <div class="flex flex-col justify-center items-center px-6 pb-9 py-4 gap-6 w-full">
    <div class="flex flex-col justify-center items-center gap-6 w-full">
      <div class="flex justify-between items-center gap-3 py-3 w-full">
        <div class="flex justify-start items-center gap-4 w-[244px]">
          <div class="animate-pulse w-[28px] h-[28px] bg-gray300 rounded" />
          <div class="animate-pulse w-[140px] h-[24px] bg-gray300 rounded" />
        </div>
        <div class="flex justify-center items-center gap-5">
          <div class="animate-pulse w-[28px] h-[28px] bg-gray300 rounded" />
          <div class="animate-pulse w-[28px] h-[28px] bg-gray300 rounded" />
          <div class="animate-pulse w-[28px] h-[28px] bg-gray300 rounded" />
        </div>
      </div>

      <div class="flex flex-col justify-center items-center gap-5 w-full relative">
        <div class="w-full flex justify-center items-center">
          <div class="animate-pulse w-[50px] h-[20px] bg-gray300 rounded" />
        </div>

        <div class="p-5 border rounded-[28px] animate-pulse bg-white w-[340px] h-[222px]">
          <div class="flex justify-around items-start gap-4 pb-4 border-b">
            <div class="flex justify-center items-center gap-4 cursor-not-allowed">
              <div class="w-[64px] p-4 border rounded-2xl bg-gray200 animate-pulse" />
              <div class="flex flex-col justify-center items-start gap-2 w-[170px]">
                <div class="w-[150px] h-[20px] bg-gray200 rounded animate-pulse" />
                <div class="w-[120px] h-[16px] bg-gray200 rounded animate-pulse" />
              </div>
            </div>
            <div class="w-[24px] cursor-not-allowed">
              <div class="animate-pulse w-[24px] h-[24px] bg-gray200 rounded" />
            </div>
          </div>

          <div class="flex flex-col justify-center items-center gap-[10px] pt-4">
            <div class="w-[130px] h-[18px] bg-gray200 rounded animate-pulse" />
            <div class="w-[110px] h-[18px] bg-gray200 rounded animate-pulse" />
            <div class="w-[80px] h-[20px] bg-gray200 rounded animate-pulse" />
          </div>
        </div>

        <div class="flex flex-col justify-center items-start w-full gap-5">
          <div
            class="flex justify-center items-end gap-[10px] px-6 py-4 bg-gray100 rounded-3xl w-[300px] animate-pulse"
          >
            <div class="animate-pulse w-[200px] h-[20px] bg-gray300 rounded" />
            <div class="animate-pulse w-[30px] h-[20px] bg-gray300 rounded" />
          </div>
        </div>
      </div>
    </div>

    <div class="fixed bottom-4 z-10 w-[380px] flex justify-center items-center gap-3">
      <div
        class="animate-pulse w-[56px] h-[56px] rounded-full flex justify-center items-center gap-[10px] p-4 bg-gradient-to-l from-gray300 to-gray400"
      />

      <div class="px-5 py-3 flex justify-center items-center gap-3 bg-gray50 rounded-2xl">
        <div class="animate-pulse w-[26px] h-[26px] bg-gray300 rounded" />
        <div class="animate-pulse w-full h-[30px] bg-gray300 rounded" />
        <div class="animate-pulse w-[26px] h-[26px] bg-gray300 rounded" />
        <div class="animate-pulse w-[26px] h-[26px] bg-gray300 rounded" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.test {
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.5;
  }
}
</style>
