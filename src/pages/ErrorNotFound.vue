<template>
  <div
    class="fullscreen bg-primary text-white text-center q-pa-md flex flex-center"
    style="align-items: center"
  >
    <div>
      <img
        style="width: 60%"
        src="../assets/images/icons/page-not-found-svgrepo-com.svg"
        alt=""
      />
      <div style="font-size: 2rem; font-weight: 900">{{ $t('_404Error') }}</div>

      <div class="text-h2" style="font-size: 1rem; line-height: 1rem">
        {{ $t('pageNotFound') }}
      </div>

      <q-btn
        class="q-mt-xl"
        color="bg-primary"
        text-color="white"
        unelevated
        to="/"
        :label="$t('backToHome')"
        no-caps
        style="border: 1px solid white"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ErrorNotFound',
});
</script>
