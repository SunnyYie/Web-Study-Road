import axios from 'axios'

const GET = (url: string) => {
  return (target: any, key: any, desc: PropertyDescriptor) => {
    // fn为getList方法
    const fn = desc.value
    axios
      .get(url)
      .then((res) => {
        fn(res, {
          status: 200,
          success: true,
        })
      })
      .catch((e) => {
        fn(e, {
          status: 404,
          success: false,
        })
      })
  }
}

class Controller {
  constructor() {}

  @GET('https://api.apiopen.top/api/getHaoKanVideo?page=80size=10')
  getList(res: any, status: any) {
    console.log(res.data.result.list, status)
  }
}
