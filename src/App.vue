<template>
  <div class="h-screen flex flex-col items-center mx-auto" style="width: 428px">
    <div class="w-full flex-1 overflow-y-auto px-6">
      <RouterView class="w-full font-vazir bg-white py-4 pb-12" dir="rtl" />
    </div>
  </div>
</template>

<style>
::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  cursor: pointer;
  background: theme('colors.primary400');
  border-radius: 8px;
}

::-webkit-scrollbar-thumb:hover {
  background: theme('colors.primary600');
}
</style>
