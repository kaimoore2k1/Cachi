<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="../assets/images/logo.png" />
          </q-avatar>
          Cachi
        </q-toolbar-title>
        <q-btn flat round dense icon="account_circle" />
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
import { defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'MainLayout',

  components: {},

  setup() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const $store = useStore();
    return {};
  },
});
</script>
