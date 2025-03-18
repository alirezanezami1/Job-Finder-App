<template>
  <div
    class="fixed w-mobile bottom-0 bg-white flex flex-col justify-center items-center gap-6 rounded-t-[60px] px-6 py-2 pb-9"
  >
    <h4 class="text-[24px] leading-[120%] font-bold text-gray900 py-6 text-center border-b w-full">
      ثبت درخواست شغل
    </h4>

    <div class="flex justify-center items-center gap-3">
      <RouterLink
        class="flex w-[184px] justify-center items-center gap-[10px] px-4 py-[18px] rounded-full bg-primary100 text-primary500 font-bold text-[16px] leading-[140%]"
        to="/"
        >ثبت با رزومه پیوستی</RouterLink
      >
      <RouterLink
        class="flex w-[184px] justify-center items-center gap-[10px] px-4 py-[18px] rounded-full bg-primary500 text-white font-bold text-[16px] leading-[140%] shadow-btn"
        to="/"
        >ثبت با رزومه کارکو
      </RouterLink>
    </div>
  </div>
</template>
