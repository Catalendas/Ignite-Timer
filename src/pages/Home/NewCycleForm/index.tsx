import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { CyclesContext } from '../../../context/CyclesContext'

import { FormContainer, MinutesAmountImput, TaskImput } from './style'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskImput
        id="task-suggestions"
        list="task-suggestions"
        disabled={!!activeCycle}
        placeholder="Dê um nome para seu projeto"
        {...register('task')}
      />

      <datalist id="task-suggestions">
        <option value="" />
      </datalist>

      <label htmlFor="">Durante</label>
      <MinutesAmountImput
        type="number"
        id="minutesAmount"
        step={5}
        min={5}
        disabled={!!activeCycle}
        max={60}
        {...register('minuteAmount', { valueAsNumber: true })}
      />

      <span>Minutos</span>
    </FormContainer>
  )
}
