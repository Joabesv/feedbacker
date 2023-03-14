<template>
  <HomeHeader @create-account="handleAccountCreate" @login="handleLogin" />
  <Contact />
  <div class="flex justify-center bg-brand-gray py-10">
    <footer class="text-center font-medium text-gray-800">Feedbacker © 2023</footer>
  </div>
</template>

<script lang="ts">
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import HomeHeader from '@/components/Home/HomeHeader.vue';
import Contact from '@/components/Home/Contact.vue';
import { useModal } from '@/hooks/useModal';
export default {
  components: { HomeHeader, Contact },
  setup() {
    const router = useRouter();
    const modal = useModal();
    onMounted(() => {
      const token = window.localStorage.getItem('token');

      if (token) {
        router.push({ name: 'Feedbacks' });
      }
    });

    function handleLogin() {
      console.log('login');
      modal.open({
        component: 'LoginModal',
      });
    }

    function handleAccountCreate() {}

    return { handleLogin, handleAccountCreate };
  },
};
</script>
