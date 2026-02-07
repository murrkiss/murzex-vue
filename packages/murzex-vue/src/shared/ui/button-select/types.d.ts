import { ComputedRef } from '@vue/runtime-core'

import { LabelPropsTypes } from '../$label/types'

export type ButtonSeverityType = 'success' | 'warning' | 'danger' | 'info' | 'help'

export type ButtonSizeType = 'small' | 'large'

export interface ButtonPropsTypes extends LabelPropsTypes {
	key: string
	disabled?: boolean
}

export interface ButtonSelectPropsTypes {
	buttons?: ButtonPropsTypes[]
	severity?: ButtonSeverityType
	size?: ButtonSizeType
	rounded?: boolean
}

export interface ButtonSelectEmitsTypes {
	click: (event: string) => void
}
