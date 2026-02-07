import './tw.style.css'

import { defineComponent, h, SetupContext } from 'vue'

import type { InputPropsTypes, InputEmitsTypes } from './types'

import { InputService } from './service'

export default defineComponent(
	(props: InputPropsTypes, ctx: SetupContext<InputEmitsTypes>) => {
		const useInputService = new InputService(props, ctx)

		return () =>
			h('input', {
				...ctx.attrs,
				type: props.type ?? 'text',
				class: useInputService.clsx(),
				placeholder: props.placeholder,
				onInput: useInputService.handleInput,
				disabled: props.disabled,
			})
	},
	{
		props: ['type', 'value', 'placeholder', 'size', 'fluid', 'invalid', 'disabled'],
		emits: ['value'],
	},
)
