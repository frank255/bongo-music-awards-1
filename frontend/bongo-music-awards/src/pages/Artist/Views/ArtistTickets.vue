<template>
  <q-page padding>
    <div class="flex justify-center">
      <div class="full-width">
        <q-carousel
          height="300px"
          swipeable
          animated
          v-model="slide"
          navigation
          infinite
          :autoplay="autoplay"
          arrows
          transition-prev="slide-right"
          transition-next="slide-left"
          @mouseenter="autoplay = false"
          @mouseleave="autoplay = true"
        >
          <q-carousel-slide :name="1" img-src="~assets/vote1copy.png" />
        </q-carousel>
      </div>
    </div>
    <div class="cols justify-center q-my-sm">
      <q-card class="bg-grey-1">
        <q-card-section>
          <div class="text-h6 text-center text-weight-bold">
            Buy Your Ticket Now
          </div>
        </q-card-section>
        <q-card-section class="flex justify-center">
          <q-form @submit.prevent="moneyToBank()" style="width: 80%">
            <div>
              <q-select
                label="Select Payment Method"
                class="q-ma-lg"
                outlined
                dense
                transition-show="flip-up"
                transition-hide="scale"
                v-model="bank_name"
                :options="options"
              />
              <q-select
                label="Select Ticket Type"
                class="q-ma-lg"
                outlined
                dense
                transition-show="flip-up"
                transition-hide="scale"
                v-model="bank_name"
                :options="options"
              />
              <q-input
                label="Enter Amount"
                class="q-ma-lg"
                outlined
                dense
                transition-show="flip-up"
                transition-hide="scale"
                v-model="bank_name"
                :options="options"
              />
              <q-input
                label="Enter Phone Number"
                class="q-ma-lg"
                outlined
                dense
                transition-show="flip-up"
                transition-hide="scale"
                v-model="bank_name"
                :options="options"
              />
              <q-input
                label="Enter Email"
                class="q-ma-lg"
                outlined
                dense
                transition-show="flip-up"
                transition-hide="scale"
                v-model="bank_name"
                :options="options"
              />
              <q-input
                label="Enter Full Name"
                class="q-ma-lg"
                outlined
                dense
                transition-show="flip-up"
                transition-hide="scale"
                v-model="bank_name"
                :options="options"/>
              <div class="flex justify-end q-ma-lg">
                <q-btn
                  class=""
                  color="primary"
                  label="Checkout"
                  @click="sendToBank()"
                />
              </div>
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
const slide = ref(1);
const autoplay = ref(true);
</script>

<style lang="scss" scoped></style>
