import { SetupContext } from '@vue/runtime-core'

import type { ButtonPropsTypes, ButtonEmitsTypes } from './types'

export class ButtonService {
	constructor(
		public props: ButtonPropsTypes,
		public ctx: SetupContext<ButtonEmitsTypes>,
	) {}
}
