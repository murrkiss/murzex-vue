import './tw.style.css'

import { defineComponent, h, SetupContext } from '@vue/runtime-core'

import type { InputPropsTypes, InputEmitsTypes } from './types'

import { InputService } from './service'

export default defineComponent(
	(props: InputPropsTypes, ctx: SetupContext<InputEmitsTypes>) => {
		const useInputService = new InputService(props, ctx)

		return () =>
			h(
				'label',
				{
					...ctx.attrs,
					class: 'm-component-input-label',
				},
				[
					h('input', {
						type: props.type ?? 'text',
						class: useInputService.clsx(),
						placeholder: props.placeholder,
						onInput: useInputService.handleInput,
						disabled: props.disabled,
					}),
				],
			)
	},
	{
		props: ['value', 'placeholder', 'variant', 'size', 'fluid', 'invalid', 'disabled'],
		emits: ['value'],
	},
)
