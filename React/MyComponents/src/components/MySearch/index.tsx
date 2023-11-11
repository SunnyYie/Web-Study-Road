import { Form, FormProps, Input } from '@arco-design/web-react'
import styles from './index.module.less'
import React from 'react'

interface Field {
  id: string
  name: string
  phone: string
}

export function useSearch() {
  const [form] = Form.useForm<Field>()

  const formProps: FormProps<Field> = {
    form,
  }

  return {
    formProps,
  }
}

interface MySearchProps {
  formProps: FormProps<Field>
  children?: React.ReactNode
}

export default function MySearch(_props: MySearchProps) {
  return (
    <Form {..._props.formProps}>
      <div className={styles.Search_form}>
        <Form.Item label="姓名" field="name">
          <Input.Search placeholder="请输入姓名" searchButton allowClear />
        </Form.Item>

        <Form.Item label="ID" field="id">
          <Input.Search placeholder="请输入ID" allowClear searchButton />
        </Form.Item>

        <Form.Item label="手机号" field="phone">
          {_props.children ? _props.children : <Input.Search placeholder="请输入手机号" searchButton allowClear />}
        </Form.Item>
      </div>
    </Form>
  )
}
