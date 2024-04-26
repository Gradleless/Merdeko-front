<script>
    import Profile from "./components/Header/Profile.svelte";
</script>

<div class="flex justify-between items-center mb-8 ml-1">
    <div class="flex gap-4 items-center bg-gray-800 pr-3 rounded-md ml-24">
        <input type="search" placeholder="Search for games" class="px-4 py-2 rounded-md bg-gray-800 focus:outline-none">
        <button>
            <i class="fas fa-search"></i>
        </button>
    </div>
    <Profile />
</div>