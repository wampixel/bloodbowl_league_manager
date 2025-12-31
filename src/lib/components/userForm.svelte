<script>
    import { enhance } from '$app/forms';
    import { replaceState } from '$app/navigation';

    import {
        Button,
        Input,
        Label,
        P,
    } from 'flowbite-svelte';

    let message = $state('');
    let { label } = $props();
</script>

{#if message}
   <P class="text-4ed-500 text-center">{message}</P>
{/if}

<form class="flex flex-col space-y-6 w-full items-center" method="POST" use:enhance={() => {
    return async ({ result, update }) => {
        await update();
        if (result.type === 'failure')
            message = `Error: ${result.data?.message}`;

        if (result.type === 'success') {
            message = `${result.data?.message}`;

            setTimeout(() => {
                replaceState('', { modal: false, path: '' });
            }, 2000);
        }
    };
}}>
    <Label class="space-y-2 w-full">
        <span>Username</span>
        <Input type="text" name="username" placeholder="john.doe" required />
    </Label>

    <Label class="space-y-2 w-full">
        <span>Password</span>
        <Input type="password" name="password" placeholder="min. 6 characters" required />
    </Label>

    <Button type="submit" value="register" class=" text-center w-fit">{ label }</Button>
</form>
