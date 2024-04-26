<script>
  import { Greet } from '../wailsjs/go/main/App';
  import "./index.css"
  import Sidebar from './lib/Sidebar.svelte'
  import '@fortawesome/fontawesome-free/css/all.min.css';
  import Home from './lib/pages/Home.svelte';
  import Lib from './lib/pages/Lib.svelte';
  import Categories from './lib/pages/Category.svelte';
  import Game from './lib/pages/Game.svelte';
  import { currentPage, game } from './lib/js/Store';

  let currentPageValue = '';
  let selectedGame = '';

  currentPage.subscribe(v => currentPageValue = v);
  game.subscribe(v => selectedGame = v);

  let title = "Hogwarts legacy";
  let desc = "Hogwarts Legacy is an immersive, open-world action RPG. Now you can take control of the action and be at the center of your own adventure in the wizarding world. ";
  let rate = "4.9";
  let releaseDate = "February 10, 2023";
  let manufacturer = "Warner Bros. Games";
  let developer = "Avalanche Software";
  let genre = "Action/RPG";
  let video = "https://cdn.akamai.steamstatic.com/steam/apps/256930504/movie_max.mp4";
  let supportedPlatforms = ["Windows", "Xbox", "Playstation"];

</script>

<main class="bg-primary text-white gg flex flex-row min-h-screen h-full mix-blend-difference">

  <Sidebar />
  <!-- Main Content -->

  <div class="p-10 flex-1">
  {#if currentPageValue === 'Home'}
    <Home />
  {:else if currentPageValue === 'Lib'}
    <Lib />
  {:else if currentPageValue === 'Categories'}
    <Categories />
  {:else if currentPageValue === 'Game' && selectedGame !== ''}
    <Game
      title="{title}"
      desc="{desc}"
      rate="{rate}"
      releaseDate="{releaseDate}"
      manufacturer="{manufacturer}"
      developer="{developer}"
      genre="{genre}"
      video="{video}"
      supportedPlatforms="{supportedPlatforms}"
    />
  {/if}
  </div>
</main>