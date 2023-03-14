<script lang="ts">
import { reactive } from 'vue';
import { useField } from 'vee-validate';
import { useModal } from '@/hooks/useModal';
import { validateEmptyAndEmail, validateEmptyAndLength } from '@/utils/validators';
export default {
  setup() {
    const modal = useModal();
    const { value: emailValue, errorMessage: emailError } = useField(
      'email',
      validateEmptyAndEmail,
    );
    const { value: passwordValue, errorMessage: passwordError } = useField(
      'password',
      validateEmptyAndLength,
    );
    const state = reactive({
      hasErrors: false,
      isLoading: false,
      email: {
        value: emailValue,
        errorMessage: emailError,
      },
      password: {
        value: passwordValue,
        errorMessage: passwordError,
      },
    });

    function handleSubmit() {}
    return { state, close: modal.close, handleSubmit };
  },
};
</script>

<template>
  <div class="flex justify-between">
    <h1 class="text-4xl font-black text-gray-800">Entre na sua conta</h1>

    <button @click="close" class="text-4xl text-gray-600">&times;</button>
  </div>

  <div class="mt-16">
    <form @submit.prevent="handleSubmit">
      <label class="block">
        <span class="text-lg font-medium text-gray-800">E-mail</span>
        <input
          v-model="state.email.value"
          type="email"
          :class="{
            'border-brand-danger': !!state.email.errorMessage,
          }"
          class="mt-1 block w-full rounded border-2 border-transparent bg-gray-100 px-4 py-3 text-lg"
          placeholder="janeDone@gmail.com"
        />

        <span class="block font-medium text-brand-danger" :if="!!state.email.errorMessage">
          {{ state.email.errorMessage }}
        </span>
      </label>
      <label class="mt-8 block">
        <span class="text-lg font-medium text-gray-800">Senha</span>
        <input
          v-model="state.password.value"
          type="password"
          :class="{
            'border-brand-danger': !!state.password.errorMessage,
          }"
          class="mt-1 block w-full rounded border-2 border-transparent bg-gray-100 px-4 py-3 text-lg"
          placeholder="*******"
        />

        <span class="block font-medium text-brand-danger" :if="!!state.password.errorMessage">
          {{ state.password.errorMessage }}
        </span>
      </label>

      <button
        :disabled="state.isLoading"
        type="submit"
        :class="{ 'opacity-50': state.isLoading }"
        class="mt-10 rounded-full bg-brand-main px-8 py-3 text-2xl font-bold text-white transition-all duration-150 focus:outline-none"
      >
        Entrar
      </button>
    </form>
  </div>
</template>
