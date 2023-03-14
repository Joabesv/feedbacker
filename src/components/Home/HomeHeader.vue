<template>
  <header class="home-header">
    <div class="header-group">
      <div class="flex items-center justify-between py-10">
        <div class="w-28 lg:w-36">
          <img src="@/assets/images/feedbacker-logo.svg" alt="Logo" class="w-full" />
        </div>

        <div class="flex">
          <button
            class="rounded-ful px-6 py-2 font-bold text-white focus:outline-none"
            @click="() => emit('create-account')"
          >
            Crie sua conta
          </button>
          <button
            @click="() => emit('login')"
            class="rounded-full bg-white px-6 py-2 font-bold text-brand-main focus:outline-none"
          >
            Entrar
          </button>
        </div>
      </div>

      <div class="mt-28 flex flex-col">
        <h1 class="text-4xl font-black text-white">
          Tenha um feedback. <br />
          E faça seus clientes mais <br class="hidden lg:inline-block" />
          felizes!
        </h1>
        <p class="mt-10 text-lg font-medium text-white">
          Receba ideias, reclamações e feedbacks com um <br class="hidden lg:inline-block" />
          simples widget na página.
        </p>
        <div>
          <button
            class="mt-10 rounded-full bg-white px-6 py-2 font-bold text-brand-main focus:outline-none"
          >
            Crie uma conta grátis
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
export default {
  emits: ['login', 'create-account'],
  setup(_, { emit }) {
    return { emit };
  },
};
</script>

<style scoped>
.home-header {
  @apply flex w-full justify-center bg-brand-main;
  height: 700px;
}

.header-group {
  @apply flex w-4/5 max-w-6xl flex-col;
}

@media (min-width: 640px) {
  .header-group {
    background-image: url(@/assets/images/blue-ballons.svg);
    background-size: 628px;
    background-position: 90% 100%;
    background-repeat: no-repeat;
  }
}
</style>
