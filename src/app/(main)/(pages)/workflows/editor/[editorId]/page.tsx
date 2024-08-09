import { ConnectionsProvider } from '@/provider/connections-provider'
import EditorProvider from '@/provider/editor_provider'
import React from 'react'
import EditorCanvas from './_components/editor_canvas'

type Props = {}

const Page = (props:Props) =>{
    return (
        <div className='h-full'>
            <EditorProvider>
                <ConnectionsProvider>
                <EditorCanvas />
                </ConnectionsProvider>
            </EditorProvider>
        </div>
    )
}

export default Page

