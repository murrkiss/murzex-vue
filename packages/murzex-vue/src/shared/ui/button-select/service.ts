import { SetupContext } from '@vue/runtime-core'

import type { ButtonSelectPropsTypes, ButtonSelectEmitsTypes } from './types'

export class ButtonSelectService {
	constructor(
		public props: ButtonSelectPropsTypes,
		public ctx: SetupContext<ButtonSelectEmitsTypes>,
	) {}
}
