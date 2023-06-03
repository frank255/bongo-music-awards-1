<template>
  <q-page padding>
    <div class="q-my-l q-mt-xl">
      <q-card class="column relative items-center">
        <div class="card flex ">
          <q-avatar size="90px" class="avatar">
            <img src="https://cdn.quasar.dev/img/avatar.png" />
          </q-avatar>
        </div>
        <div class="text-h6">Ally Kiba</div>
        <div class="text-bold">Bongo Fleva Artist</div>
      </q-card>
    </div>
  </q-page>
</template>

<script setup></script>

<style>
.card {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
.avatar {
  top: -50px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
}
</style>
