<script>
  import { fade, slide } from 'svelte/transition';
  import DownloadS from './components/Sidebar/DownloadS.svelte';
  import NavigationS from './components/Sidebar/NavigationS.svelte';

  $: sidebar = true;

</script>

{#if sidebar}
<div class="w-64 bg-panel p-5 min-h-full rounded-3xl ml-5 my-5" transition:slide>
    <div class="flex items-center space-x-2 mb-5">
      <div class="absolute top-4 left-64">
        <button on:click={() => sidebar = false } out:slide={{ duration: 100 }} ><i class="fas fa-plus text-white text-xl text-right top-64 right-48 bg-panel rounded-full p-1"></i></button>
      </div>
    <!-- <i class="fas fa-play-circle text-white text-3xl"></i> -->
      <span class="text-white font-bold text-xl">Merdeko</span>
      <span class="text-white text-xs bg-purple-600 rounded-full px-4 text-center">Powered by Maven</span>
    </div>

    <div class="space-y-1">
      <NavigationS title="Home" faIcon="fa-home" color="secondary" page="Home" />
      <NavigationS title="Categories" faIcon="fa-bars" color="purple" page="Categories" />
      <NavigationS title="My Library" faIcon="fa-bookmark" color="library" page="Lib" />
    </div>
    <div class="mt-10">
      <h3 class="text-gray-400 uppercase">Current downloads</h3>
      <div class="space-y-2 mt-2">
        <!-- Download games / list of games the user have, as u want -->
        {#each Array.from({ length: 3 }) as _}
          <DownloadS />
        {/each}
    </div>
</div>
</div>
{:else}
  <button on:click={() => sidebar = true}><i class="fas fa-minus text-white text-xl text-right bg-panel rounded-full p-1 absolute top-10 left-0" out:fade={{ duration: 200 }} in:fade={{ delay: 200, duration: 100 }}></i></button>
{/if}