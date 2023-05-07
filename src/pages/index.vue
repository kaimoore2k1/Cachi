<template>
  <q-page padding>
    <typography class="subTitle text-h5 text-bold"
      >Enjoy Delicious Beverage</typography
    >
    <div class="scrollable hide-scrollbar scroll">
      <div class="category flex justify-between items-center no-wrap">
        <li
          v-for="(category, categoryIndex) in categories"
          ref="itemsRef"
          @click="handleChangeCategory(categoryIndex, category.id)"
          :key="category.id"
          :class="`${
            category.id == 2 ? 'child-able' : 'child-disable'
          }  q-pa-sm q-ma-sm flex flex-center cursor-pointer`"
        >
          <div class="child_background--active text-no-wrap flex flex-center">
            {{ category.name }}
          </div>
        </li>
      </div>
    </div>
    <typography class="subTitle text-h5 text-bold">Suggestions</typography>
    <div class="scrollable hide-scrollbar scroll">
      <div
        class="my-card--container q-pa-md flex justify-between no-wrap q-gutter-md"
      >
        <q-card
          v-for="product in products"
          :key="product.id"
          class="my-card"
          flat
          bordered
        >
          <q-img :src="product.image"></q-img>
          <q-card-section>
            <div class="row wrap items-center">
              <div class="col text-h6 ellipsis">{{ product.name }}</div>
            </div>
            <div class="row wrap items-center">
              <div
                class="col-10 text-subtitle1 text-positive text-weight-medium"
              >
                {{ product.price }}
              </div>
              <div class="col-2 coltext-caption">
                {{ product.salesNumber >= 1000 ? '999+' : product.salesNumber }}
              </div>
            </div>
            <div class="row wrap items-center">
              <div class="coltext-caption text-grey">
                {{ product.description }}
              </div>
            </div>
          </q-card-section>
          <q-separator></q-separator>
          <q-card-actions align="center">
            <q-btn flat icon="shopping_cart">Add to cart</q-btn>
          </q-card-actions>
        </q-card>
      </div>
    </div>
    <typography class="subTitle text-h5 text-bold">More Products</typography>
    <div>
      <div
        class="my-card--container q-pa-sm flex justify-center wrap q-gutter-sm"
      >
        <q-card
          v-for="product in moreProducts"
          :key="product.id"
          class="my-card--more"
          flat
          bordered
        >
          <q-img :src="product.image"></q-img>
          <q-card-section>
            <div class="row wrap items-center">
              <div class="col text-h6 ellipsis">{{ product.name }}</div>
            </div>
            <div class="row wrap items-center">
              <div class="col text-subtitle1 text-success text-weight-medium">
                {{ product.price }}
              </div>
            </div>
            <div class="row wrap items-center">
              <div class="coltext-caption text-grey">
                Lượt mua:
                {{ product.salesNumber >= 1000 ? '999+' : product.salesNumber }}
              </div>
            </div>
          </q-card-section>
          <q-separator></q-separator>
          <q-card-actions align="center">
            <q-btn flat icon="shopping_cart">Add to cart</q-btn>
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import {
  getBestSellerProductListByCategoryIdAPI,
  getCategoryListAPI,
  getProductListByCategoryIdAPI,
} from 'src/api';
import { defineComponent, onBeforeMount, ref } from 'vue';

export type TCategoryList = {
  id: number;
  name: string;
  image: string;
}[];

export type TProductList = {
  id: number;
  name: string;
  image: string;
  price: string;
  salesNumber: number;
  description: string;
}[];

export default defineComponent({
  name: 'IndexPage',
  components: {},
  setup() {
    const categories = ref<TCategoryList>([]);
    const products = ref<TProductList>([]);
    const moreProducts = ref<TProductList>([]);
    const itemsRef = ref<HTMLButtonElement[] | null>(null);
    onBeforeMount(() => {
      getCategoryListAPI().then((res) => {
        if (res) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          categories.value = res as any;
          if (categories.value[0]) {
            getProductListByCategoryIdAPI({ id: categories.value[0].id }).then(
              (res) => {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                products.value = res as any;
              }
            );
            getBestSellerProductListByCategoryIdAPI({
              id: categories.value[0].id,
            }).then((res) => {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              moreProducts.value = res as any;
            });
          }
        }
      });
    });
    const handleChangeCategory = (index: number, categoryId: number) => {
      if (itemsRef.value) {
        getProductListByCategoryIdAPI({ id: categoryId }).then((res) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          products.value = res as any;
        });
        getBestSellerProductListByCategoryIdAPI({
          id: categoryId,
        }).then((res) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          moreProducts.value = res as any;
        });
        itemsRef.value.forEach((element, i) => {
          if (index === i) {
            element.classList.add('child-able');
            element.classList.remove('child-disable');
          } else {
            element.classList.add('child-disable');
            element.classList.remove('child-able');
          }
        });
      }
    };
    return {
      categories,
      products,
      handleChangeCategory,
      itemsRef,
      moreProducts,
    };
  },
});
</script>

<style lang="scss">
.scrollable {
  width: 100%;
  height: 100%;
}
.category {
  width: fit-content;
  box-sizing: content-box;
  .child-disable {
    list-style-type: none;
    transition: font-size 0.2s ease-in-out;
    width: 75px;
    height: 85px;
    font-size: 10px;
    border-radius: 50px;
    border: 1px solid rgb(255, 125, 125);
    .child_background--active {
      background: #ffd8d8;
      min-height: 80%;
      min-width: 80%;
      border-radius: 50px;
    }
  }
  .child-able {
    list-style-type: none;
    transition: font-size 0.2s ease-in-out;
    width: 75px;
    font-weight: 500;
    color: rgb(228, 216, 216);
    height: 85px;
    border-radius: 50px;
    border: 1px solid red;
    .child_background--active {
      background: #ff8787;
      min-height: 80%;
      min-width: 80%;
      border-radius: 50px;
    }
  }
}
.my-card--container {
  width: fit-content;
  box-sizing: content-box;
  .my-card {
    width: 100%;
    max-width: 200px;
    .q-card__actions {
      padding: 8px;
    }
  }
  .my-card--more {
    width: 45%;
    max-width: 200px;
    .q-card__actions {
      padding: 8px;
    }
  }
}
</style>
