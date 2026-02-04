import { LabelPropsTypes } from '../$label/types'

export type ButtonSeverityType =
	| 'secondary'
	| 'success'
	| 'warning'
	| 'danger'
	| 'info'
	| 'help'

export type ButtonVariantType = 'text' | 'outlined' | 'link'

export type ButtonSizeType = 'small' | 'large'

export interface ButtonPropsTypes extends LabelPropsTypes {
	severity?: ButtonSeverityType
	variant?: ButtonVariantType
	size?: ButtonSizeType
	rounded?: boolean
	loading?: boolean
	loadingText?: string
	disabled?: boolean
}

export interface ButtonEmitsTypes {
	click: (event: Event) => void
}
