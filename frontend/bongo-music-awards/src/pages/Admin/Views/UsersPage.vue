<template>
  <q-page padding>
    <div class="row items-center q-mt-xl">
      <p class="font-body-small q-pl-md col">
        <span class="text-weight-bolder text-capitalize text-h6">Total Registered Users</span>
      </p>
      <p class="flex justify-end width col">
        <q-btn class="text-capitalize" to="/admin/users/adduser"> add user</q-btn>
      </p>
    </div>
    <q-table
      bordered
      :rows="rows"
      :columns="columns"
      row-key="name"
      :filter="filter"
      class="q-mt-md"
    >
    <template #body-cell-status="props">
        <q-td>
          <q-badge
            v-if="props.row.status === 'blocked'"
            dense
            color="red"
            size="10px"
            label="blocked"
            class="q-ma-xs"
          >
          </q-badge>

          <q-badge
            v-if="props.row.status === 'active'"
            dense
            color="green"
            size="10px"
            label="Active"
            class="q-ma-xs"
          >
          </q-badge>
        </q-td>
      </template>
      <template #body-cell-action="">
        <q-td>
          <q-btn
            class=""
            icon="mdi-eye"
            flat
            dense
            color="primary"
            size="10px"
          >
            <!-- <q-menu>
              <div class="row no-wrap q-pa-md">
                <div class="column">
                  <q-select
                    class="q-ma-xs"
                    dense
                    v-model="customer_status"
                    :options="['active', 'blocked']"
                  >
                  </q-select>
                  <q-btn
                    class="q-ma-xs"
                    v-close-popup
                    color="primary"
                    label="Save"
                    push
                    size="sm"
                    @click="blockCustomer(props.row.customer_id)"
                  />
                </div>
              </div>
            </q-menu> -->
          </q-btn>
        </q-td>
      </template>
      <template #top-right>
        <q-input
          outlined
          dense
          debounce="300"
          v-model="filter"
          placeholder="Search"
        >
          <template #append>
            <q-icon name="mdi-magnify" />
          </template>
        </q-input>
      </template>
    </q-table>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
const columns = ref([
  {
    name: "user_name",
    label: "Event Name",
    align: "left",
    field: (row) => row.user_name,
    sortable: true,
  },
  {
    name: "phone_number",
    label: "Event Number",
    align: "left",
    field: (row) => row.phone_number,
    sortable: true,
  },
  {
    name: "email",
    label: "email",
    align: "left",
    field: (row) => row.email,
    sortable: true,
  },
  {
    name: "status",
    label: "Status",
    align: "left",
  },
  {
    name: "action",
    label: "action",
    align: "left",
  },
]);
const rows = [
  {
    email: "Best Artist of the Year",
    user_name: "Ally Salehe kiba",
    phone_number: "Award of the year",
    status: "active",
  },
  {
    email: "Best Artist of the Year",
    user_name: "Ally Salehe kiba",
    phone_number: "Award of the year",
    status: "blocked",
  },
  {
    email: "Best Artist of the Year",
    user_name: "Ally Salehe kiba",
    phone_number: "Award of the year",
    status: "active",
  },
  // Add more rows as needed
];
</script>

<style lang="scss" scoped></style>
