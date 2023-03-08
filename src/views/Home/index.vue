<script lang="ts">
import HomeHeader from '@/components/Home/HomeHeader.vue';
import Contact from '@/components/Home/Contact.vue';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
export default {
  components: { HomeHeader, Contact },
  setup() {
    onMounted(() => {
      const router = useRouter();
      const token = window.localStorage.getItem('token');

      if (token) {
        router.push({ name: 'Feedbacks' });
      }
    });

    function handleLogin() {}

    function handleAccountCreate() {}

    return { handleLogin, handleAccountCreate };
  },
};
</script>

<template>
  <HomeHeader @create-account="handleAccountCreate" @login="handleLogin" />
  <Contact />
  <div class="flex justify-center py-10 bg-brand-gray">
    <footer class="font-medium text-center text-gray-800">Feedbacker © 2023</footer>
  </div>
</template>
