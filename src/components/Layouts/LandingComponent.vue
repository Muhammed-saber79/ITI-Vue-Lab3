<template>
    <div class="container text-center m-auto">
        <!-- Top Nav... -->
        <div class="row text-center text-middle">
            <h3>Here is Landing Component</h3><hr class="my-3">
            <ul class="d-flex list-unstyled text-decoration-none justify-content-evenly">
                <li>
                    <router-link to="/">Home</router-link>
                </li>
                <li>
                    <router-link to="/about">About</router-link>
                </li>
                <li>
                    <router-link to="/contact">Contact</router-link>
                </li>
            </ul>
        </div>

        <!-- Content -->
        <div class="row text-center">
            <router-view></router-view>
        </div>
    </div>
</template>