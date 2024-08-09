import ProfileForm from '@/components/forms/profile_form'
import React from 'react'
import ProfilePicture from './_components/profile_picture'
import { db } from '@/lib/db'
import { currentUser } from '@clerk/nextjs'

type Props = {}

const Settings = async() =>{
    const authUser = await currentUser()
    if (!authUser) return null
    // const user = await db.user.findFirst({where:{clerkId:authUser.id}})
    const user = await db.user.findUnique({ where: { clerkId: authUser.id } })
    const removeProfileImage = async() =>{
        'use server'
        const response = await db.user.update({
            where:{
                clerkId:authUser.id,
            },
            data:{
                profileImage:''
            }
        })
    }

    const updateProfileImage = async(image:string) =>{
        "use server"
        const id  = authUser.id
        const response = await db.user.update({
            where:{
                clerkId:id,
            },
            data:{
                profileImage:image
            }
        })
        return response
    }
    const updateUserInfo = async (name: string) => {
        'use server'
    
        const updateUser = await db.user.update({
          where: {
            clerkId: authUser.id,
          },
          data: {
            name,
          },
        })
        return updateUser
      }
    return (
        <div className='flex flex-col gap-4'>
            <h1 className='sticky top-0 z-[10] flex items-center justify-between border-b bg-background/50 p-6 text-4xl backdrop-blur-lg'>
                <span>Settings</span>
            </h1>
            <div className='flex flex-col gap-10 p-6'>
                <div>
                    <h2 className='text-2xl font-bold'>
                        User Profile
                    </h2>
                    <p className='text-base text-white/50'>
                        Add or update your information
                    </p>
                </div>
                <ProfilePicture 
                userImage={user?.profileImage || ''}
                onDelete={removeProfileImage}
                onUpload={updateProfileImage}/>
                    
                
                <ProfileForm
                user={user}
                onUpdate={updateUserInfo}
                />
            </div>
        </div>
    )
}
export default Settings