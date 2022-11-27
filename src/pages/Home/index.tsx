import { HandPalm, Play } from 'phosphor-react'
import { FormProvider, useForm } from 'react-hook-form'

import { HomeContainer, StartCoutdowButton, StopCoutdowButton } from './style'
import { NewCycleForm } from './NewCycleForm'
import { ContDown } from './Countdown'
import { CyclesContext } from '../../context/CyclesContext'
import { useContext } from 'react'
import { toast } from 'react-toastify'

interface NewCycleFormData {
  task: string
  minuteAmount: number
}

export function Home() {
  const { activeCycle, createNewCycle, interruptCycle } =
    useContext(CyclesContext)

  const newCycleForm = useForm({
    defaultValues: {
      task: '',
      minuteAmount: 0,
    },
  })

  const { handleSubmit, watch, reset } = newCycleForm

  function handleCreateNewCycle(data: NewCycleFormData) {
    createNewCycle(data)
    reset()
  }

  const task = watch('task')
  const isSubmitDisable = !task

  const notifyInitialize = () => toast.success('Sua tarefa foi iniciada')

  const notifyInterupted = () => toast.error('Sua tarefa foi interonpida')

  function Functions() {
    interruptCycle()
    notifyInterupted()
  }

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>

        <ContDown />

        {activeCycle ? (
          <StopCoutdowButton type="button" onClick={Functions}>
            <HandPalm size={24} /> Interronper
          </StopCoutdowButton>
        ) : (
          <StartCoutdowButton
            type="submit"
            disabled={isSubmitDisable}
            onClick={notifyInitialize}
          >
            <Play size={24} /> Começar
          </StartCoutdowButton>
        )}
      </form>
    </HomeContainer>
  )
}
