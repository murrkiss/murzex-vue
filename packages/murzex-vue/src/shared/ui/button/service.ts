import { SetupContext } from '@vue/runtime-core'

import type { ButtonPropsTypes, ButtonEmitsTypes } from './types'

export class ButtonService {
	constructor(
		public props: ButtonPropsTypes,
		public ctx: SetupContext<ButtonEmitsTypes>,
	) {}

	clsx = (): string[] => {
		const clsx: string[] = ['m-component-button']

		if (this.props.severity) {
			clsx.push(`m-button-severity-${this.props.severity}`)
		}

		if (this.props.size) {
			clsx.push(`m-button-size-${this.props.size}`)
		}

		return clsx
	}

	handleClick = (event: Event): void => {
		this.ctx.emit('click', event)
	}
}
