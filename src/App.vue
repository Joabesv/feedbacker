<template>
  <FactoryModal />
  <RouterView />
</template>

<script lang="ts">
import FactoryModal from '@/components/FactoryModal.vue';
export default {
  components: { FactoryModal },
};
</script>
