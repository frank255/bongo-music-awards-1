<template>
  <q-page padding>
    <div class="text-h5 text-bold flex justify-center">
      Bongo Music Awards History
    </div>
    <div class="flex justify-center">
      <div
        class="q-mt-md"
        :style="
          $q.platform.is.mobile ? 'max-width: 300px;' : 'max-width: 450px;'
        "
      >
        <q-tabs
          v-model:value="selectedYear"
          outside-arrows
          mobile-arrows
          indicator-color="transparent"
          class="text-white"
        >
          <q-tab v-for="year in distinctYears" :key="year">
            <q-btn
              size="13px"
              flat
              class="text-white bg-primary q-mx-xs"
              :label="year.toString()"
              @click="selectYear(year)"
            />
          </q-tab>
        </q-tabs>
      </div>
    </div>
    <div
      :class="
        $q.platform.is.desktop
          ? 'flex justify-center q-gutter-x-xl'
          : 'flex justify-center'
      "
    >
      <q-card
        v-for="winner in filteredWinners"
        :key="winner.id"
        class="q-mt-xl"
        :style="
          $q.platform.is.desktop
            ? 'min-width: 200px; cursor: pointer'
            : 'width: 300px;height:200px; cursor: pointer;'
        "
      >
        <q-img src="~/src/assets/award.jpeg">
          <div class="text-subtitle1 absolute-bottom text-center">
            <p>{{ winner.category }}</p>
            <p class="text-bold">{{ winner.winner }}</p>
          </div>
        </q-img>
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
import { ref, onMounted, computed, watch } from "vue";

const winners = [
  {
    id: 1,
    year: 2021,
    category: "Best Female Artist of the Year",
    winner: "Artist 1",
  },
  {
    id: 2,
    year: 2021,
    category: "Best Video of the Year",
    winner: "Artist 2",
  },
  {
    id: 3,
    year: 2021,
    category: "Best Male Artist of the Year",
    winner: "Artist 3",
  },
  {
    id: 4,
    year: 2021,
    category: "Best New Artist of the Year",
    winner: "Artist 4",
  },
  {
    id: 5,
    year: 2021,
    category: "Song of the Year",
    winner: "Artist 5",
  },
  {
    id: 6,
    year: 2022,
    category: "Best Female Artist of the Year",
    winner: "Artist 2022",
  },
  {
    id: 7,
    year: 2022,
    category: "Best Video of the Year",
    winner: "Artist 2022",
  },
  {
    id: 8,
    year: 2022,
    category: "Best Male Artist of the Year",
    winner: "Artist 2022",
  },
  {
    id: 9,
    year: 2022,
    category: "Best New Artist of the Year",
    winner: "Artist 2022",
  },
  {
    id: 10,
    year: 2022,
    category: "Song of the Year",
    winner: "Artist 2022",
  },
  {
    id: 11,
    year: 2023,
    category: "Best Female Artist of the Year",
    winner: "Artist 2023",
  },
  {
    id: 12,
    year: 2023,
    category: "Best Video of the Year",
    winner: "Artist 2023",
  },
  {
    id: 13,
    year: 2023,
    category: "Best Male Artist of the Year",
    winner: "Artist 2023",
  },
  {
    id: 14,
    year: 2023,
    category: "Best New Artist of the Year",
    winner: "Artist 2023",
  },
  {
    id: 15,
    year: 2023,
    category: "Song of the Year",
    winner: "Artist 2023",
  },
];
const selectedYear = ref(null);
const distinctYears = ref([]);

const filteredWinners = ref([]);

const selectYear = (year) => {
  selectedYear.value = year;
};

watch(selectedYear, (newYear) => {
  if (newYear !== null) {
    filteredWinners.value = winners.filter((winner) => winner.year === newYear);
  } else {
    filteredWinners.value = [];
  }
});

onMounted(() => {
  const currentYear = new Date().getFullYear();
  const startYear = 2021;
  const years = [];

  for (let year = currentYear; year >= startYear; year--) {
    years.push(year);
  }

  distinctYears.value = years;

  if (!selectedYear.value) {
    selectedYear.value = distinctYears.value[0];
  }
});
</script>
