<script lang="ts">
    import './layout.css';

    import { page } from '$app/state';
    import { resolve } from '$app/paths';
    import { preloadData, pushState, replaceState } from '$app/navigation';

    import {
        Navbar,
        NavBrand,
        NavLi,
        NavUl,
        NavHamburger,
        Dropdown,
        DropdownItem,
        Avatar,
        Modal,
        Footer,
        P,
    } from 'flowbite-svelte';

    import { ChevronDownOutline } from 'flowbite-svelte-icons';

    import Register from './register/+page.svelte';

    import type { Pathname } from '$app/types';

    let { children } = $props();

    let activeUrl = $derived(page.url.pathname);

    let year = new Date().getFullYear();

</script>

<div class="px-2 md:px-5 lg:px-10 bg-gray-900 text-white h-screen flex flex-col">
    <Navbar class="border-b border-gray-500 flex">
        <NavBrand href={resolve('/')}>logo</NavBrand>

        <NavUl {activeUrl} class="dark:text-white">
            <NavLi class="cursor-pointer">
                Seasons
                <ChevronDownOutline class="h-6 w-6 inline" />
            </NavLi>
            <Dropdown simple>
                <DropdownItem href={resolve(`/season/${year}`)}>current season</DropdownItem>
            </Dropdown>
            <!-- <NavLi href={resolve('/rules')}>League rules</NavLi> -->
        </NavUl>

        <div class="flex cursor-pointe cursor-pointer">
            <Avatar id="user-menu" />
            <NavHamburger />
        </div>

        <Dropdown simple triggeredBy="#user-menu">
            {#each ['login', 'register'] as link (link) }
                <DropdownItem
                    onclick={async (e) => {
                        const result = await preloadData(`/${link}`);

                        e.preventDefault();

                        if (result.type === 'loaded' && result.status === 200) {
                            pushState(resolve(`/${link}` as Pathname), { modal: true });
                        }
                    }}
                >
                    {link}
                </DropdownItem>
            {/each}
        </Dropdown>
    </Navbar>

    <div class="flex grow p-5">
        {@render children()}
    </div>

    <Footer footerType="socialmedia" class=" dark:bg-gray-900 flex border-t dark:border-gray-500">
        <P class="dark:text-gray-400 w-full text-center">Unofficial and non-commercial fan website</P>
    </Footer>

    {#if page.state.modal}
    <Modal
        bind:open={page.state.modal}
        oncancel={() => replaceState('', { modal: false })}
        onclose={() => history.back()}
    >
        <Register />
    </Modal>
    {/if}
</div>
