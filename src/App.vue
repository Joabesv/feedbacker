<template>
  <FactoryModal />
  <RouterView />
</template>

<script lang="ts">
import FactoryModal from '@/components/Modals/FactoryModal.vue';
export default {
  components: { FactoryModal },
};
</script>
