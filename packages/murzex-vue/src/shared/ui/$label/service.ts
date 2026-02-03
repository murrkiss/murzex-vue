import { SetupContext } from '@vue/runtime-core'

import type { LabelPropsTypes, LabelEmitsTypes } from './types'

export class LabelService {
	constructor(
		public props: LabelPropsTypes,
		public ctx: SetupContext<LabelEmitsTypes>,
	) {}

	clsx = (): string[] => {
		const clsx: string[] = ['m-component-label']

		return clsx
	}
}
