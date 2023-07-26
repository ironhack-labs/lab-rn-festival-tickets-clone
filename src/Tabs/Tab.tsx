import { SetStateAction, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'

const tabs: { value: string; label: string }[] = [
  { value: 'info', label: 'Info' },
  { value: 'prices', label: 'Prices' },
]

type TabT = {
  value: string
  text: string
  isActive: boolean
  onClick: React.Dispatch<SetStateAction<string>>
}

const Tab = (props: TabT) => {
  const { isActive, value, text, onClick } = props
  const tabStyles = isActive
    ? [styles.text, styles.tab, styles.active]
    : [styles.text, styles.tab]

  return (
    <TouchableOpacity
      key={`tab-${value}`}
      style={isActive ? styles.activeBtn : []}
      onPress={() => onClick(value)}
    >
      <Text style={tabStyles}>{text}</Text>
    </TouchableOpacity>
  )
}

const Tabs = () => {
  const [active, setActive] = useState(tabs[0].value)

  return (
    <View style={styles.tabs}>
      {tabs.map((tab) => (
        <Tab
          value={tab.value}
          text={tab.label}
          isActive={active === tab.value}
          onClick={setActive}
        />
      ))}
    </View>
  )
}

export default Tabs
