import { SetupContext } from 'vue'

import type { ButtonPropsTypes, ButtonEmitsTypes, ButtonGroupComputedContextTypes } from './types'

export class ButtonService {
	constructor(
		public props: ButtonPropsTypes,
		public ctx: SetupContext<ButtonEmitsTypes>,
	) {}

	clsx = (ctx?: ButtonGroupComputedContextTypes): string[] => {
		const clsx: string[] = ['m-component-button']

		if (this.props.severity) {
			clsx.push(`m-button-severity-${this.props.severity}`)
		}

		if (this.props.variant) {
			clsx.push(`m-button-variant-${this.props.variant}`)
		}

		if (this.props.size) {
			clsx.push(`m-button-size-${this.props.size}`)
		}

		if (ctx && ctx.size.value) {
			clsx.push(`m-button-size-${ctx.size.value}`)
		}

		if (this.props.rounded) {
			clsx.push(`m-button-rounded`)
		}

		if (ctx && ctx.rounded.value) {
			clsx.push(`m-button-rounded`)
		}

		if (this.props.rounded && this.props.icons && this.props.icons.length === 1 && !this.props.value) {
			clsx.push(`m-button-rounded-full`)
		}

		if (this.props.loading) {
			clsx.push(`m-button-loading`)
		}

		if (this.props.disabled) {
			clsx.push(`m-button-disabled`)
		}

		return clsx
	}

	getValue = (): string | undefined => {
		if (!this.props.value) {
			return undefined
		}

		if (!this.props.loading) {
			return this.props.value
		}

		if (this.props.loadingText) {
			return this.props.loadingText
		}

		return 'Loading ...'
	}

	handleClick = (event: Event): void => {
		this.ctx.emit('click', event)
	}
}
