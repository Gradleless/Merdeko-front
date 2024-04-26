<script>
    import { progress } from '../../js/Store';
    // your game & store progression logic here, don't do what I did here, this is just an example for the UI
    export const game = 'Minecraft';
    let progression = $progress;

    function updateProgress() {
        progression += 1;
        progress.set(progression);
        if(progression >= 100) {
            clearInterval(interval);
        }
    }

    let interval = setInterval(updateProgress, 200);
</script>

<div class="flex items-center space-x-2">
    <div class="w-14 h-10 bg-gray-700 rounded">
        <img src="https://placehold.co/32x32" alt="ff" class="h-full w-full">
    </div>
    <div class="flex flex-col w-full">
        <span>{game}</span>
        <!-- Progress bar, I didn't know that a progress tag existed -->
        <div class="w-full h-3 bg-gray-300 rounded-full my-2 flex items-center">
            <p class=" text-gray-700 text-[10px] font-semibold absolute left-40 ">{$progress}%</p>
            <progress class="h-full [&::-webkit-progress-bar]:rounded-full [&::-webkit-progress-value]:rounded-full [&::-webkit-progress-value]:bg-secondary [&::-webkit-progress-bar]:bg-slate-300 w-full" max="100" value="{$progress}">{$progress}%</progress>
        </div>
    </div>
</div>