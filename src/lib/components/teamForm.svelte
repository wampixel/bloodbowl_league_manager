<script>
    import {
        Toggle,
        Label, Select,

    } from 'flowbite-svelte';

    let { rosters, players, team } = $props();
</script>

<form>
    <Select
        items = { rosters }
        bind:value={ team.roster }
    />
    <!-- <Toggle>Apothicaire</Toggle> -->
</form>
