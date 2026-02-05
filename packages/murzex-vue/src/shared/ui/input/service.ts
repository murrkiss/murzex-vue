import { SetupContext } from '@vue/runtime-core'

import type { InputPropsTypes, InputEmitsTypes } from './types'

export class InputService {
	constructor(
		public props: InputPropsTypes,
		public ctx: SetupContext<InputEmitsTypes>,
	) {}

	clsx = (): string[] => {
		const clsx: string[] = ['m-component-input']

		return clsx
	}

	handleValue = (event: Event) => {
		const target = event.target as HTMLInputElement

		this.ctx.emit('value', target.value)
	}
}
