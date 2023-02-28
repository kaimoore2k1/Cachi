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
              <q-input square filled clearable type="email" label="email" />
              <q-input
                square
                filled
                clearable
                type="password"
                label="password"
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
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  name: "LoginPage",
  setup() {
    const router = useRouter();
    const handleLogin = () => {
      const loginInfo = {
        userName: "Admin",
        userRole: 1,
        avatar: "",
        locate: "vi-VN",
      };
      localStorage.setItem("user", JSON.stringify(loginInfo));
      router.push("/");
    };
    return {
      handleLogin,
    };
  },
});
</script>
