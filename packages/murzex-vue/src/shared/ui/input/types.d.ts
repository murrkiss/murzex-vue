export type InputType = 'text' | 'password'

export type InputSizeType = 'small' | 'large'

export interface InputPropsTypes {
	type?: InputType
	value?: string
	placeholder?: string
	size?: InputSizeType
	fluid?: boolean
	invalid?: boolean
	disabled?: boolean
}

export interface InputEmitsTypes {
	value: (event: string) => string
}
