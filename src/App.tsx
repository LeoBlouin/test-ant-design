import { useState } from 'react'
import { Slider } from 'antd'

import 'antd/dist/antd.css'

const App = () => (
  <Slider defaultValue={30} onAfterChange={value => console.log(value)} />
)

export default App
