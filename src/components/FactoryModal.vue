<template>
  <Teleport to="body">
    <div
      v-if="state.isActive"
      class="fixed top-0 left-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-50"
      @click="handleModalToggle(status)"
    >
      <div class="fixed mx-10">
        <div
          class="animate__fadeInDown animate__faster animate__animated flex flex-col overflow-hidden rounded-lg bg-white"
        >
          <div class="flex flex-col bg-white px-12 py-10">
            <component :is="state.component" />
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
const DEFAULT_WIDTH = 'w-3/4 lg:w-1/3';

export default defineComponent({
  setup() {
    const state = reactive({ isActive: false, component: {}, props: {}, width: DEFAULT_WIDTH });

    function handleModalToggle({ status }: { status: boolean }) {}
    return { state, handleModalToggle };
  },
});
</script>

<style scoped></style>
