import { Card, Dropdown, Input, Menu } from '@arco-design/web-react'
import MySearch, { useSearch } from './components/MySearch'
import { useState } from 'react'
import MyTable from './components/MyTable'

export default function App() {
  const search = useSearch()

  const [isVisible, setIsVisible] = useState(false)

  const data = [
    { key: 1, name: 'sxc', id: '1' },
    { key: 2, name: 'sxc', id: '2' },
    { key: 3, name: 'sxc', id: '3' },
    { key: 4, name: 'sxc', id: '4' },
  ]

  return (
    <>
      <Card style={{ margin: 20 }}>
        <MySearch
          formProps={{
            ...search.formProps,
          }}
        />
      </Card>

      <Card style={{ margin: 20 }}>
        <MySearch
          formProps={{
            ...search.formProps,
          }}
        >
          <Dropdown
            droplist={
              <Menu style={{ width: 300 }}>
                {data.map((item) => (
                  <Menu.Item key={item.id}>{`${item.name} ${item.id}`}</Menu.Item>
                ))}
              </Menu>
            }
            popupVisible={isVisible}
            position="bottom"
          >
            <Input.Search
              onChange={(v) => {
                v !== '' ? setIsVisible(true) : setIsVisible(false)
              }}
              placeholder="请输入手机号"
              allowClear
              searchButton
            />
          </Dropdown>
        </MySearch>
      </Card>

      <Card style={{ margin: 20 }}>
        <MyTable />
      </Card>
    </>
  )
}
