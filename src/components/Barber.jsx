import React from "react";
import { useForm } from "react-hook-form";

export default function Barber() {
    const {register, handleSubmit} = useForm({
        defaultValues:{
            firstName: '',
            lastName: '',
            email: '',
            address: '',
            price: ''
        }
    });

    return(
        <form onSubmit={handleSubmit(console.log)}>
            <input {...register("firstName", { required: true })} placeholder="First name" />
            <input {...register("lastName", { minLength: 4 })} placeholder="Last name" />
            <input {...register("email", { minLength: 4 })} placeholder="Email" />
            <input {...register("address", { minLength: 4 })} placeholder="Address" />
            <input {...register("price", { minLength: 4 })} placeholder="Price" />
        </form>
    )
}