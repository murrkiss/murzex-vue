import { h, Ref, SetupContext, VNodeChild } from 'vue'

import type { ButtonSelectPropsTypes, ButtonSelectEmitsTypes, ButtonPropsTypes } from './types'

import $MLabel from '../$label/component'

export class ButtonSelectService {
	constructor(
		public props: ButtonSelectPropsTypes,
		public ctx: SetupContext<ButtonSelectEmitsTypes>,
	) {}

	clsx = (): string[] => {
		const clsx = ['m-component-button-select']

		return clsx
	}

	getButtonSelect = (): VNodeChild => {}
}
