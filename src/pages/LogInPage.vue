<template>
  <div class="window-height window-width row justify-center">
    <div class="column window-height">
      <div class="col-4 bg-primary window-width">
        <div class="column justify-center items-center" style="height: 100%">
          <img
            class="q-mt-lg shadow-11"
            src="../assets/images/logo.png"
            alt=""
            style="width: 30%; border-radius: 50%"
          />
          <h5
            class="text-h5 q-mb-lg q-mt-lg text-weight-bold"
            style="color: #fff; text-shadow: 5px 5px #000"
          >
            {{ $t('welcome_text') }}
          </h5>
        </div>
      </div>
      <div class="col justify-center">
        <div class="row justify-center">
          <q-form class="col-8" style="padding-top: 20%" @submit="handleLogin">
            <q-input
              v-model="username"
              :placeholder="$t('username')"
              autocomplete="username"
            />
            <q-input
              v-model="password"
              :type="isPwd ? 'password' : 'text'"
              autocomplete="current-password"
              :placeholder="$t('password')"
            >
              <template v-slot:append>
                <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
            </q-input>

            <p class="q-ma-md text-center">
              {{ $t('forgot_password') }}
            </p>

            <q-btn
              class="q-ma-xl"
              unelevated
              type="submit"
              rounded
              color="primary"
              :label="$t('login')"
              style="display: block; margin: 15vw auto 5vw; width: 90%"
            />
            <p class="text-center">
              {{ $t('new_user') }}
              <span
                ><a class="text-weight-bold cursor-pointer">{{
                  $t('sign_up')
                }}</a></span
              >
            </p>

            <q-select
              class="translate"
              style="font-size: 0.6rem; width: 30%; margin: 0 auto; height: 10%"
              v-model="locale"
              :options="localeOptions"
              emit-value
            />
          </q-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import { getToken } from '../api';
import { useI18n } from 'vue-i18n';
export default defineComponent({
  name: 'LoginPage',
  setup() {
    const router = useRouter();
    const { locale } = useI18n({ useScope: 'global' });

    const username = ref('');
    const password = ref('');
    const isPwd = ref(true);

    const localeOptions = [
      { value: 'en-US', label: 'English' },
      { value: 'vi-VN', label: 'Tiếng Việt' },
    ];

    const handleLogin = () => {
      const params = {
        username: username.value,
        password: password.value,
      };
      getToken(params).then((res) => {
        localStorage.setItem('user', JSON.stringify(res));
        router.push('/');
      });
    };

    return {
      handleLogin,
      username,
      password,
      locale,
      localeOptions,
      isPwd,
    };
  },
});
</script>

<style></style>
