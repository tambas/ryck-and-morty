<template>
  <div id="app">
    <div class="header">
      <div class="container mx-auto">
        <router-link class="btn btn-lg btn-green episodes" :to="{ name: 'home' }">
          Épidodes <i class="fad fa-portal-enter"></i>
        </router-link>
        <div class="logo">
          <img src="./assets/images/logo-tv.png" alt="logo">
        </div>
        <router-link class="btn btn-lg btn-green about" :to="{ name: 'about' }">
          <i class="fad fa-portal-exit"></i> À Propos
        </router-link>
      </div>
    </div>

    <router-view/>

    <div class="footer">
      <div class="container mx-auto">
        <i class="fad fa-galaxy"></i> Rick & Morty TV &centerdot; 2020 &centerdot;
        <router-link :to="{ name: 'dmca' }">
          <i class="fas fa-gavel"></i> DMCA Claim
        </router-link>
      </div>
    </div>
  </div>
</template>