
import { ConnectionProviderProps } from '@/provider/connections-provider'
import { EditorState } from '@/provider/editor_provider'
import { useFuzzieStore } from '@/store'
import React from 'react'
import ContentBasedOnTitle from './content-based-on-title'

type Props = {
    state:EditorState
    nodeConnection:ConnectionProviderProps
}

const RenderOutputAccordion = ({nodeConnection, state}:Props) =>{
    const  {googleFile,
    setGoogleFile,
selectedSlackChannels,
setSelectedSlackChannels} = useFuzzieStore()
    return (
        <ContentBasedOnTitle
        file={googleFile}
        newState={state}
        nodeConnection={nodeConnection}
        selectedSlackChannels={selectedSlackChannels}
        setSelectedSlackChannels={setSelectedSlackChannels}
        setFile={setGoogleFile}
        />
    )

}

export default RenderOutputAccordion