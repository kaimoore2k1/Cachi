<template>
  <div class="login-background" style="padding-top: 20%">
    <div class="column">
      <img src="../assets/images/logo.png" class="logo" alt="" />

      <q-card-section class="text-center q-pa-none">
        <p
          class="text-1"
          style="color: var(--q-primary); font-size: 1.2rem; font-weight: 800"
        >
          Login to your Account
        </p>
      </q-card-section>

      <div class="row">
        <q-card square bordered class="q-pa-lg shadow-1">
          <q-card-section style="padding: 0">
            <q-form class="q-gutter-md">
              <q-input
                filled
                v-model="text"
                :dense="dense"
                placeholder="Enter your email adress"
              >
                <template v-slot:prepend>
                  <q-icon name="email" />
                </template>
              </q-input>

              <q-input
                filled
                type="password"
                :dense="dense"
                placeholder="Enter your password"
              >
                <template v-slot:prepend>
                  <q-icon name="lock" />
                </template>
              </q-input>

              <q-card-section class="text-center q-pa-none">
                <p class="text-grey-6">Forgot Password?</p>
              </q-card-section>
            </q-form>
          </q-card-section>
          <q-card-actions class="q-px-md">
            <q-btn
              style="background: #ff4646; color: #fff; width: 100%"
              label="LOGIN"
            />
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </div>
</template>

<style>
.logo {
  width: 30%;
  border-radius: 30%;
  margin: 0 auto;
}

.column {
  align-content: center;
}

.q-pa-lg {
  border: none;
  box-shadow: none;
  padding: 0;
}

.shadow-1 {
  width: 100%;
}
</style>

<script>
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import { getToken } from "../api";
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
