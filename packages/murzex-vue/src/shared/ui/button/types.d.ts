import { LabelPropsTypes } from '../$label/types'

export type ButtonSeverityType =
	| 'primary'
	| 'secondary'
	| 'success'
	| 'warning'
	| 'danger'
	| 'info'
	| 'help'

export type ButtonSizeType = 'small' | 'base' | 'large'

export interface ButtonPropsTypes extends LabelPropsTypes {
	severity?: ButtonSeverityType
	size?: ButtonSizeType
	loading?: boolean
	disabled?: boolean
}

export interface ButtonEmitsTypes {
	click: (event: Event) => void
}
