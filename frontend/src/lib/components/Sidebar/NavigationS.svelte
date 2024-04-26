<script>
    import { currentPage } from "../../js/Store";

    export let title = '';
    export let color = '';
    export let faIcon = '';
    export let page = '';

    let textColors = {
        primary: 'text-primary-600',
        secondary: 'text-secondary',
        library: 'text-library',
        purple: 'text-purple-600',
        red: 'text-red-600',
        green: 'text-green-600',
        blue: 'text-blue-600',
        yellow: 'text-yellow-600',
        gray: 'text-gray-600',
        white: 'text-white',
        black: 'text-black',
    }

    let borderColors = {
        primary: 'border-primary-600',
        secondary: 'border-secondary',
        library: 'border-library',
        purple: 'border-purple-600',
        red: 'border-red-600',
        green: 'border-green-600',
        blue: 'border-blue-600',
        yellow: 'border-yellow-600',
        gray: 'border-gray-600',
        white: 'border-white',
        black: 'border-black',
    }

    let textColor = textColors[color];
    let borderColor = borderColors[color];

</script>

<button class="flex items-center space-x-2 w-full text-gray-300 hover:text-white hover:bg-slate-600 p-2 rounded-lg border-l-2 rounded-x-sm {borderColor} transition-all duration-500 hover:border-l-8" on:click={() => $currentPage = page}>
    <i class="fas {faIcon} {textColor}  text-xl"></i>
    <span>{title}</span>
</button>