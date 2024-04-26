<script>
  import Profile from "../components/Header/Profile.svelte";
  import Button from "../components/Button.svelte";
  import { currentPage, previousPage } from "../js/Store"

  export let title = "";
  export let desc = "";
  export let rate = "";
  export let releaseDate = "";
  export let manufacturer = "";
  export let developer = "";
  export let genre = "";
  export let video = "";
  export let supportedPlatforms = [];


  let iconPlatform = {
    "windows": "fab fa-windows",
    "xbox": "fab fa-xbox",
    "nintendo": "fab fa-nintendo-switch",
    "mac": "fab fa-apple",
    "linux": "fab fa-linux",
    "playstation": "fab fa-playstation",
  }

  function checkPlatform(platform) {
    console.log(platform)
    return iconPlatform[platform] == undefined ? false : true;
  }
</script>

<div class="h-full w-full">
      <div class="flex w-full justify-between items-center mt-1">
        <button class="text-white" on:click={() => currentPage.set($previousPage) }><i class="fas fa-arrow-left mr-auto"></i> Back</button>
        <Profile />
      </div>

    <div class=" mb-12 pt-3">
      <div class="relative">
        <div class="relative">
            <div>
              <video class="w-full aspect-video" src={video} title={title} muted autoplay loop>
                <track kind="captions">
              </video>
            </div>
            <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-primary"></div>
        </div>

        <div class="h-20">
        <img src="https://vectorseek.com/wp-content/uploads/2023/02/Hogwarts-Legacy-Logo-Vector-1.jpg" width="200" height="200" alt="{title} cover" class="object-cover rounded-lg shadow-lg z-[300000] absolute bottom-0">
        <h1 class="text-4xl font-bold z-[300000] left-52 bottom-20 absolute">{title}</h1>

        <div class="flex items-center pt-2 w-full ml-52">
          {#each supportedPlatforms as platform}
            {#if checkPlatform(platform.toLowerCase())}
              <i class="{iconPlatform[platform.toLowerCase()]} ml-1"></i>
            {/if}
          {/each}
          

          <div class="flex items-center absolute right-36 bottom-20 mb-1 md:bottom-10 md:right-10">
            <i class="fas fa-star text-yellow-400"></i>
            <span class="ml-2 text-lg font-bold">{rate}</span>
          </div>
          <div class="absolute right-3 bottom-20">
            <Button text="Download"  />
          </div>
        </div>
      </div>
    </div>   
      
      
      <div class="mt-7">
        <p class="mt-2 text-lg">{desc}</p>
        <div class="flex justify-between items-center mt-6">
          <div>
            <div class="text-sm">Release Date</div>
            <div>{releaseDate}</div>
          </div>
          <div>
            <div class="text-sm">Manufacturer</div>
            <div>{manufacturer}</div>
          </div>
          <div>
            <div class="text-sm">Developer</div>
            <div>{developer}</div>
          </div>
          <div>
            <div class="text-sm">Genre</div>
            <div>{genre}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
