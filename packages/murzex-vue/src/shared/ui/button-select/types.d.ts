import { ComputedRef } from 'vue'

import { LabelPropsTypes } from '../$label/types'

export type ButtonSeverityType = 'success' | 'warning' | 'danger' | 'info' | 'help'

export type ButtonSizeType = 'small' | 'large'

export interface ButtonPropsTypes extends LabelPropsTypes {
	key: string
	disabled?: boolean
}

export interface ButtonSelectPropsTypes {
	buttons: ButtonPropsTypes[]
	severity?: ButtonSeverityType
	size?: ButtonSizeType
	default?: string
	multiple?: boolean
	rounded?: boolean
}

export interface ButtonSelectEmitsTypes {
	click: (event: string) => void
}
