<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <!-- làm task mới -->
      <q-toolbar>
        <!-- onclick -->
        <q-toolbar-title @click="backToHomepage">
          <q-avatar>
            <img src="../assets/images/logo.png" />
          </q-avatar>
          Cachi
        </q-toolbar-title>
        <q-btn flat round dense icon="account_circle">
          <q-menu>
            <div class="row no-wrap q-pa-md">
              <div class="column">
                <div class="text-h6 q-mb-md">Settings</div>
                <q-toggle v-model="mobileData" label="Use Mobile Data" />
                <q-toggle v-model="bluetooth" label="Bluetooth" />
              </div>

              <q-separator vertical inset class="q-mx-lg" />

              <div class="column items-center">
                <q-avatar size="72px">
                  <img src="https://cdn.quasar.dev/img/avatar4.jpg" />
                </q-avatar>

                <div class="text-subtitle1 q-mt-md q-mb-xs">John Doe</div>

                <q-btn
                  @click="handleLogout"
                  color="primary"
                  label="Logout"
                  push
                  size="sm"
                  v-close-popup
                />
              </div>
            </div>
          </q-menu>
        </q-btn>
        <!-- task -->

        <!-- làm task mới logout -->
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-tabs
        narrow-indicator
        mobile-arrows
        align="justify"
        class="bg-primary text-white shadow-2"
      >
        <q-route-tab to="/" icon="home" :label="$t('homePage')" />
        <q-route-tab to="/page2" icon="leaderboard" label="Thống kê" />
        <q-route-tab to="/page3" icon="description" label="Lịch sử" />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'MainLayout',

  components: {},

  setup() {
    const router = useRouter(); //router toàn cục
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const $store = useStore();
    const mobileData = ref(true);
    const bluetooth = ref(false);
    const backToHomepage = () => {
      router.push('/'); //chuyển sang trang homepage
    };

    const handleLogout = () => {
      window.localStorage.removeItem('user');
      router.push('/login');
    };

    return {
      backToHomepage,
      mobileData,
      bluetooth,
      handleLogout,
    };
  },
});
</script>
