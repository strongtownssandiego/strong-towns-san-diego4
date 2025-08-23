'use client';
import { redirect } from 'next/navigation';

const Contact = () => {
    redirect('https://share-na2.hsforms.com/18bwXAlo4TrqFQnxcVBLYYA40bup4');
}

export default Contact

/*
The first cut of the contact page. 
Not being used right now, while we are connecting to Haylee's HubSpot form.

'use client';

import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import { useForm } from 'react-hook-form';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    passwordConfirm: z.string()
}).refine((data) => {
    return data.password === data.passwordConfirm}, {
    message: "Password doesn't match confirm",
    path: ["passwordConfirm"]
})

const handleSubmit = () => {

}

const Contact = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
            passwordConfirm: ""
        }
    });

    return (
    <div className="flex flex-col items-center justify-between p-10">
        <p>
        Subscribe to the Strong Towns San Diego newsletter to learn about upcoming meetings and local advocacy opportunities.
        </p>
        <Form {...form}>
            <form 
            onSubmit={form.handleSubmit(handleSubmit)}
            className="max-w-md w-full flex flex-col gap-4 pt-10">
                <FormField 
                name="email" 
                render={({field}) => {
                        return <FormItem>
                            <FormLabel>Email address</FormLabel>
                            <FormControl>
                                <Input placeholder="email address" type="email" {...field}/>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    }}/>
                <FormField 
                name="password" 
                render={({field}) => {
                        return <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input placeholder="password" type="password" {...field}/>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    }}/>
                <FormField 
                name="passwordConfirm" 
                render={({field}) => {
                        return <FormItem>
                            <FormLabel>Password confirm</FormLabel>
                            <FormControl>
                                <Input placeholder="password confirm" type="password" {...field}/>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    }}/>
                <Button type="submit">
                    Submit
                </Button>
            </form>
        </Form>
    </div>
  )
}

export default Contact
*/
