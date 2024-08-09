"use client"

import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import {z} from 'zod'
import { EditUserProfileSchema } from '@/lib/types'
import { Form, FormControl, FormField, FormItem, FormLabel } from '../ui/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Loader2 } from 'lucide-react'


type Props = {
    user:any,
    onUpdate?:any
}

const  ProfileForm = ({user, onUpdate}:Props) =>{
    const [isLoading, setIsLoading] = useState(false)
    const form = useForm<z.infer<typeof EditUserProfileSchema>>({
        mode:'onChange',
        resolver:zodResolver(EditUserProfileSchema),
        defaultValues:{
            name:user.name,
            email:user.email
        }
    });
    const handleSubmit = async(value: z.infer<typeof EditUserProfileSchema>) =>{
        setIsLoading(true)
        await onUpdate(value.name)
        setIsLoading(false)
    }
    useEffect(() =>{
        form.reset({name:user.name, email:user.email})
    },[user])
    return(
        <Form {...form}>
            <form className='flex flex-col gap-6'
            onSubmit={form.handleSubmit(handleSubmit)}>
                <FormField
                disabled={isLoading}
                control={form.control}
                name="name"
                render={({field}) =>(
                    <FormItem>
                        <FormLabel className='text-lg'>User full name</FormLabel>
                        <FormControl>
                            <Input placeholder="Name"
                            {...field}/>
                        </FormControl>
                    </FormItem>
                )}/>
                <FormField
                disabled={isLoading}
                control={form.control}
                name="name"
                render={({field}) =>(
                    <FormItem>
                        <FormLabel className='text-lg'>User full name</FormLabel>
                        <FormControl>
                            <Input placeholder="Email"
                            {...field}
                            disabled
                            type="email"
                            />
                        </FormControl>
                    </FormItem>
                )}/>
                <Button type='submit'
                className='self-start hover:bg-[#2F006B] hover:text-white 
                hover:border-[1px]'>
                    {isLoading ? (
                        <Loader2 className='mr-2 h-4 w-4 animate-spin'/>
                    ) : ('Save User Settings')}
                </Button>
            </form>
        </Form>
    )
}

export default ProfileForm