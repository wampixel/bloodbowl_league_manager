<script>
    import { enhance } from '$app/forms';

    import { Button, Input, Label, P } from 'flowbite-svelte';
    import { replaceState } from '$app/navigation';

    let error = $state('');
</script>

<div class="flex flex-col space-y-6">
    <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Log in</h3>

    {#if error}
       <P class="text-4ed-500 text-center">{error}</P>
    {/if}

    <form class="flex flex-col space-y-6" method="POST" use:enhance={() => {
        return async ({ result, update }) => {
            await update();
            if (result.type === 'failure')
                error = `Error: ${result.data?.message}`;

            if (result.type === 'success')
                replaceState('', { modal: false });
        };
    }}>
        <Label class="space-y-2">
            <span>Username</span>
            <Input type="text" name="username" placeholder="john.doe" required />
        </Label>

        <Label class="space-y-2">
            <span>Password</span>
            <Input type="password" name="password" placeholder="min. 6 characters" required />
        </Label>

        <Button type="submit" value="register">Create your account</Button>
    </form>
</div>
