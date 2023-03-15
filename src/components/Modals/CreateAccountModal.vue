<script lang="ts">
import { reactive } from 'vue';

import { useRouter } from 'vue-router';
import { useField } from 'vee-validate';
import { useToast } from 'vue-toastification';
import { useModal } from '@/hooks/useModal';

import Icon from '../Icon/index.vue';

import { validateEmptyAndEmail, validateEmptyAndLength } from '@/utils/validators';
import { services } from '@/services';

export default {
  components: { Icon },
  setup() {
    const modal = useModal();
    const router = useRouter();
    const toast = useToast();
    const { value: nameValue, errorMessage: nameError } = useField('name', validateEmptyAndLength);
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
      name: {
        value: nameValue,
        errorMessage: nameError,
      },
      email: {
        value: emailValue,
        errorMessage: emailError,
      },
      password: {
        value: passwordValue,
        errorMessage: passwordError,
      },
    });

    async function login({ email, password }: { email: string; password: string }) {
      const { data, errors } = await services.auth.login({
        email,
        password,
      });

      if (!errors) {
        window.localStorage.setItem('token', data.token);
        router.push({ name: 'feedbacks' });
        modal.close({});
        return;
      }

      state.isLoading = false;
    }

    async function handleSubmit() {
      try {
        toast.clear();
        state.isLoading = true;
        const { errors } = await services.auth.register({
          name: state.name.value,
          email: state.email.value,
          password: state.password.value,
        });
        if (!errors) {
          await login({ email: state.email.value, password: state.password.value });
          return;
        }

        if (errors.status === 400) {
          toast.error('Ocorreu um erro ao criar a conta');
        }

        state.isLoading = false;
      } catch (err) {
        state.isLoading = false;
        state.hasErrors = !!err;
        toast.error('Ocorreu um erro ao criar aconta ');
      }
    }
    return { state, close: modal.close, handleSubmit };
  },
};
</script>

<template>
  <div class="flex justify-between">
    <h1 class="text-4xl font-black text-gray-800">Crie uma conta</h1>

    <button @click="close" class="text-4xl text-gray-600">&times;</button>
  </div>

  <div class="mt-16">
    <form @submit.prevent="handleSubmit">
      <label class="block">
        <span class="text-lg font-medium text-gray-800">Nome</span>
        <input
          v-model="state.name.value"
          type="text"
          :class="{
            'border-brand-danger': !!state.name.errorMessage,
          }"
          class="mt-1 block w-full rounded border-2 border-transparent bg-gray-100 px-4 py-3 text-lg"
          placeholder="Jane Doe"
        />

        <span class="block font-medium text-brand-danger" :if="!!state.name.errorMessage">
          {{ state.name.errorMessage }}
        </span>
      </label>

      <label class="mt-9 block">
        <span class="text-lg font-medium text-gray-800">E-mail</span>
        <input
          v-model="state.email.value"
          type="email"
          :class="{
            'border-brand-danger': !!state.email.errorMessage,
          }"
          class="mt-1 block w-full rounded border-2 border-transparent bg-gray-100 px-4 py-3 text-lg"
          placeholder="janeDoe@gmail.com"
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
        <icon v-if="state.isLoading" name="loading" class="animate-spin" />
        <span v-else>Entrar</span>
      </button>
    </form>
  </div>
</template>
