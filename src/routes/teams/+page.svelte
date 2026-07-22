<script>
    import TeamForm from '$lib/components/TeamForm.svelte';
    const { data } = $props();

    const team = $state({
        roster: '6d491548-498f-4a20-82de-ae5b22408e2d',
    });

    const players = 0;
</script>

<div class="flex flex-col space-y-6 w-full p-2">
    <h3 class="text-center mb-4 text-xl font-medium text-gray-900 dark:text-white">Create my team</h3>

    <TeamForm
        rosters={ data.available_rosters.map(item => ({ value: item.uid, name: item.name })) }
        players={ undefined }
        team={ team }
        onSuccess={() => invalidate('app:team')}
    />
</div>
