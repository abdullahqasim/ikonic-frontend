<template>
  <div v-if="links?.length > 3" class="flex justify-center mt-10">
    <div class="flex flex-wrap items-center -mb-1">
      <template v-for="(link, key) in links" :key="key">
        <!-- <div
          v-if="link.url === null"
          class=""
          v-html="getLabel(link.label)"
        ></div> -->
        <div
          @click="changePage(link.url)"
          class="cursor-pointer"
          :class="{ 'bg-black rounded-full': link.active }"
          v-html="getLabel(link.label)"
        ></div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  props: ["links", "last_page"],

  methods: {
    changePage(url) {
      this.$emit("pageurl", url);
    },

    getLabel(label) {
      if (label === "&laquo; Previous") {
        return `<img src='${new URL(
          "/src/assets/images/paginationLeftArrow.svg",
          import.meta.url
        )}' class='px-4 py-3 text-gray-400 text-sm leading-4  rtl:rotate-180  rounded-full w-8 h-8 !p-0 flex items-center justify-center bg-[#1D18121A] mr-2' alt=''>`;
      }
      if (label === "Next &raquo;") {
        return `<img src='${new URL(
          "/src/assets/images/paginationRightArrow.svg",
          import.meta.url
        )}' class='px-4 py-3 text-gray-400   text-sm leading-4 rtl:-rotate-180  rounded-full w-8 h-8 !p-0 flex items-center justify-center bg-[#1D18121A] ml-2' alt=''>`;
      }
      if (label === "1") {
        return `<div class=' text-[#9EA3AE] font-Lato text-sm font-bold py-[6px] px-[12px] '>${label}</div>`;
      }
      if (label == this.last_page) {
        return `<div class=' text-[#9EA3AE] font-Lato text-sm font-bold py-[6px] px-[12px] '>${label}</div>`;
      }
      return `<div class=' text-[#1D1812BF] font-Lato text-sm font-bold py-[6px] px-[12px]'>${label}</div>`;
    },
  },
};
</script>
