import { Link, Table, TableColumnProps } from '@arco-design/web-react'

export default function MyTable() {
  const data = [
    {
      name: 'sxc',
      id: '1',
      phone: '123456678',
    },
    {
      name: 'sy',
      id: '2',
      phone: '123456678',
    },
    {
      name: 'xxy',
      id: '3',
      phone: '123456678',
    },
  ]

  const columns: TableColumnProps[] = [
    { title: 'Id', dataIndex: 'id' },
    { title: 'Name', dataIndex: 'name' },
    {
      title: 'phone',
      dataIndex: 'phone',
      sorter: (a, b) => {
        if (a.phone > b.phone) {
          return 1
        }
        if (a.phone < b.phone) {
          return -1
        }
        return 0
      },
    },
    {
      title: '操作',
      render: (_col, item) => <Link onClick={() => console.log(_col, item)}>删除</Link>,
    },
  ]

  return <Table data={data} columns={columns}></Table>
}
