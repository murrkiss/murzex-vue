import { defineComponent } from 'vue'

import { MButtonGroup, MButton, MInput } from '@murzex-vue/mvue'

export default defineComponent(() => {
	return () => (
		<>
			{/* <MButtonGroup>
				<MButton value='Submit' />
				<MButton value='Submit' severity='secondary' />
				<MButton value='Submit' severity='success' />
				<MButton value='Submit' severity='warning' />
				<MButton value='Submit' severity='danger' />
				<MButton value='Submit' severity='help' />
				<MButton value='Submit' severity='info' />
			</MButtonGroup> */}

			<MInput placeholder='Enter name:' size='small' invalid />
			<MInput placeholder='Enter name:' />
			<MInput placeholder='Enter name:' size='large' />
		</>
	)
})
