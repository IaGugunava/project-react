import React from "react";
import { useForm } from "react-hook-form";

export default function Client() {
    const {register, handleSubmit} = useForm({
        defaultValues: {
            firstName: '',
            lastName: '',
        }
    })
    
    return (
        <form onSubmit={handleSubmit(console.log)}>
            <input {...register("firstName", { required: true })} placeholder="First name" />

            <input {...register("lastName", { minLength: 4 })} placeholder="Last name" />
        </form>
    )
}

