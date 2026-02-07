import { defineComponent } from 'vue'

import { MButtonSelect, MButtonGroup, MButton, MInput } from '@murzex-vue/mvue'

export default defineComponent(() => {
	return () => (
		<>
			{/* <MButton value='Submit' size='small' icons={[{ icon: 'account', position: 'left' }]} /> */}
			{/* <MButton value='Submit' /> */}
			{/* <MButton value='Submit' size='large' /> */}

			{/* <MButtonGroup>
				<MButton value='Submit' />
				<MButton value='Submit' severity='secondary' />
				<MButton value='Submit' severity='success' />
				<MButton value='Submit' severity='warning' />
				<MButton value='Submit' severity='danger' />
				<MButton value='Submit' severity='help' />
				<MButton value='Submit' severity='info' />
			</MButtonGroup> */}

			{/* <MInput placeholder='Enter name:' size='small' invalid /> */}
			{/* <MInput placeholder='Enter name:' /> */}
			{/* <MInput placeholder='Enter name:' size='large' /> */}

			{/* <MButtonSelect
				buttons={[
					{ key: '1', value: 'Ingeneer developerment', icons: [{ icon: 'account', position: 'left' }] },
					{ key: '2', value: 'Backend developer', icons: [{ icon: 'account', position: 'left' }] },
					{ key: '4', value: 'Frontend developer', icons: [{ icon: 'account', position: 'left' }], disabled: true },
					{ key: '5', value: 'Fullstack developer', icons: [{ icon: 'account', position: 'left' }] },
					{ key: '6', value: 'Devops', icons: [{ icon: 'account', position: 'left' }] },
				]}
				size='small'
			/> */}
			<MButtonSelect
				buttons={[
					{ key: '1', value: 'Ingeneer developerment', icons: [{ icon: 'account', position: 'left' }] },
					{ key: '2', value: 'Backend developer', icons: [{ icon: 'account', position: 'left' }] },
					{ key: '4', value: 'Frontend developer', icons: [{ icon: 'account', position: 'left' }], disabled: true },
					{ key: '5', value: 'Fullstack developer', icons: [{ icon: 'account', position: 'left' }] },
					{ key: '6', value: 'Devops', icons: [{ icon: 'account', position: 'left' }] },
				]}
			/>
			{/* <MButtonSelect
				buttons={[
					{ key: '1', value: 'Ingeneer developerment', icons: [{ icon: 'account', position: 'left' }] },
					{ key: '2', value: 'Backend developer', icons: [{ icon: 'account', position: 'left' }] },
					{ key: '4', value: 'Frontend developer', icons: [{ icon: 'account', position: 'left' }], disabled: true },
					{ key: '5', value: 'Fullstack developer', icons: [{ icon: 'account', position: 'left' }] },
					{ key: '6', value: 'Devops', icons: [{ icon: 'account', position: 'left' }] },
				]}
				size='large'
			/> */}
		</>
	)
})
