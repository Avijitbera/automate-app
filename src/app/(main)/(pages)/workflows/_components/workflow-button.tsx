"use client"

import Workflowform from '@/components/forms/workflow_form'
import CustomModal from '@/components/global/custom_model'
import { Button } from '@/components/ui/button'
import { useModal } from '@/provider/model_provider'
import { Plus } from 'lucide-react'
import React from 'react'

const WorkflowButton = () =>{
    const {setOpen, setClose} = useModal()

    const handleClick = () =>{
        setOpen(
            <CustomModal
              title="Create a Workflow Automation"
              subheading="Workflows are a powerful that help you automate tasks."
            >
              <Workflowform />
            </CustomModal>
          )
    }
    return (
        <Button 
        size={'icon'}
        onClick={handleClick}>
            <Plus/>
        </Button>
    )
}
export default WorkflowButton
