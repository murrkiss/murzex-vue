import './tw.style.css'

import { defineComponent, h, SetupContext } from '@vue/runtime-core'

import type { InputPropsTypes, InputEmitsTypes } from './types'

import { InputService } from './service'

export default defineComponent(
	(props: InputPropsTypes, ctx: SetupContext<InputEmitsTypes>) => {
		const useInputService = new InputService(props, ctx)

		return () => h('input', { ...ctx.attrs, class: useInputService.clsx(), placeholder: props.placeholder, onInput: useInputService.handleValue })
	},
	{
		props: ['value', 'placeholder'],
		emits: ['value'],
	},
)
