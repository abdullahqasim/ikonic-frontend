<script setup>
    import GuestLayout from '../Layouts/GuestLayout.vue';
    import InputField from '../components/GlobalCompnents/InputField.vue';
    import Btn from '../components/GlobalCompnents/Btn.vue';
    import {ref} from 'vue';
    import axios from "axios";
    import { useRouter } from "vue-router";

    const router = useRouter();

    let errors =ref([]); 
    let isDisabled = ref(false);

    const formObj = ref({
        email: '',
        password: '',
    });

    const error = ref({
        email: '',
        password: '',
    });

    const errorProperty = ref({ 
        email: false,
        password: false,
    });

    function setInputValue(obj){
        formObj.value[obj.property] = obj.value;
        console.log(formObj.value);
    }

    function login(){
        isDisabled.value = true

        formObj.value.email ? (error.value.email = '', errorProperty.value.email = false) : (error.value.email = 'Email is required', errorProperty.value.email = true);

        formObj.value.password ? (error.value.password = '', errorProperty.value.password = false) : (error.value.password = 'Password is required', errorProperty.value.password = true);

        if ( errorProperty.value.email || errorProperty.value.password) {
            isDisabled.value = false;
            return false
        }

        axios
          .post(
            `${import.meta.env.VITE_BASE_URL}/login`,
            formObj.value,
          ).then((response) => {
            console.log(response.data);
            
            if (response.data.success) {
                console.log(response)

                localStorage.setItem(
                    "user-token",
                    JSON.stringify(response?.data?.data?.token)
                );

                localStorage.setItem(
                    "current-user",
                    JSON.stringify(response?.data?.data?.user)
                );

                router.push({ name: "feedback" });

            }else{

                isDisabled.value = false;
                errors.value = response?.data?.errors;

            }
          })
    }
</script>
<template>
    <GuestLayout>

        <p v-for="(error, index) in errors" :key="index" class="text-red-500 text-sm"> {{ error.message }}</p>

        <form @submit.prevent="login">
            
            <InputField
                :title="'Email'"
                :placeholder="'Enter email'"
                type="email"
                name="email"
                id="email"
                isRequired="true"
                @update:modelValue="setInputValue"
                alreadyAccount="true"
                :error="error.email"
            />
            

            <InputField
                :title="'Password'"
                :placeholder="'Enter password'"
                type="password"
                name="password"
                id="password"
                isRequired="true"
                @update:modelValue="setInputValue"
                alreadyAccount="true"
                :error="error.password"
            />

            <div class="flex items-center justify-between mt-4">
                <router-link
                    to="/register"
                    class="underline text-sm text-indigo-500 dark:text-gray-400 hover:text-indigo-400 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                >
                    Register?
                </router-link>

                <Btn
                    :text="'Login'"
                    :isDisabled="isDisabled"
                />
            </div>
        </form>
    </GuestLayout>
</template>