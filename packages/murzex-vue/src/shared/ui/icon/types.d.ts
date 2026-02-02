import { icons } from './icons'

export type IconType = keyof typeof icons

export interface IconPropsTypes {
	icon: IconType
}

export interface IconEmitsTypes {}
