<template>
  <div
    class="bg-primary window-height window-width row justify-center items-center"
  >
    <div class="column">
      <div class="row">
        <h5 class="text-h5 text-white q-my-md">Company & Cachi</h5>
      </div>
      <div class="row">
        <q-card square bordered class="q-pa-lg shadow-1">
          <q-card-section>
            <q-form class="q-gutter-md">
              <q-input
                v-model="username"
                square
                filled
                clearable
                type="email"
                label="email"
              />
              <q-input
                square
                filled
                clearable
                type="password"
                label="password"
                v-model="password"
              />
            </q-form>
          </q-card-section>
          <q-card-actions class="q-px-md">
            <q-btn
              unelevated
              color="primary"
              size="lg"
              class="full-width"
              label="Login"
              @click="handleLogin"
            />
          </q-card-actions>
          <q-card-section class="text-center q-pa-none">
            <p class="text-grey-6">Not reigistered? Created an Account</p>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import { getToken } from "../api/core/login";
export default defineComponent({
  name: "LoginPage",
  setup() {
    const router = useRouter();

    const username = ref("");
    const password = ref("");

    const handleLogin = () => {
      const params = {
        username: username.value,
        password: password.value,
      };
      getToken(params).then((res) => {
        localStorage.setItem("user", JSON.stringify(res));
        router.push("/");
      });
    };
    return {
      handleLogin,
      username,
      password,
    };
  },
});
</script>
