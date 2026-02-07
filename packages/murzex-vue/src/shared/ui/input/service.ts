import { SetupContext } from 'vue'

import type { InputPropsTypes, InputEmitsTypes } from './types'

export class InputService {
	constructor(
		public props: InputPropsTypes,
		public ctx: SetupContext<InputEmitsTypes>,
	) {}

	clsx = (): string[] => {
		const clsx: string[] = ['m-component-input']

		if (this.props.size) {
			clsx.push(`m-input-size-${this.props.size}`)
		}

		if (this.props.fluid) {
			clsx.push(`m-input-fluid`)
		}

		if (this.props.invalid) {
			clsx.push(`m-input-invalid`)
		}

		return clsx
	}

	handleInput = (event: Event) => {
		const target = event.target as HTMLInputElement

		this.ctx.emit('value', target.value)
	}
}
