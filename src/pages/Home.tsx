import React from "react"
import { Table } from '../components/ui/table'
import { ColumnsType } from "rc-table/lib/interface";
import { User } from "../utils/types";
import { request } from "../utils/request";
import Button from "../components/ui/buttton";

interface IProps {

}

const columns = (refetch: any): ColumnsType<User> => ([
  {
    title: "Name",
    dataIndex: "username",
    key: "username",
    align: "left",
    width: 150,
  },
  {
    title: "Mobile Number",
    dataIndex: "mobileNumber",
    key: "mobileNumber",
    align: "center",
    width: 150,
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    align: "left",
    width: 200,
  },
  {
    title: "Payment Status",
    dataIndex: "isPaymentDone",
    key: "isPaymentDone",
    align: "center",
    render: (isPaymentDone: boolean) => (
      isPaymentDone ?
        <span
          className="whitespace-nowrap font-semibold capitalize bg-green-500 text-white rounded p-2"
        >
          Done
        </span> : <span
          className="whitespace-nowrap font-semibold capitalize bg-red-500 text-white rounded p-2"
        >
          Not yet done
        </span>
    ),
  },
  {
    title: "User Status",
    dataIndex: "isBlocked",
    key: "isBlocked",
    align: "center",
    render: (isBlocked: boolean, user: User) => (
      isBlocked ?
        <span
          className="whitespace-nowrap font-semibold capitalize bg-red-500 text-white rounded p-2"
        >
          Blocked
        </span>
        :
        (((user.reportedBy?.length ?? 0) > 0) ? <span
          className="whitespace-nowrap font-semibold capitalize bg-yellow-500 text-white rounded p-2"
          title={'Reported By: ' + user.reportedBy?.map(user => user.username).join(', ')}
        >
          Reported
        </span> : <span
          className="whitespace-nowrap font-semibold capitalize bg-green-500 text-white rounded p-2"
        >
          Active
        </span>))
  },
  {
    title: "Actions",
    dataIndex: "isBlocked",
    key: "isBlocked",
    align: "right",
    render: (isBlocked: boolean, user: User) => {
      const blockUser = async () => {
        const data = await request({ uri: '/user/blockUser', body: { userId: user.id } });
        refetch()
      }
      const unblockUser = async () => {
        const data = await request({ uri: '/user/unblockUser', body: { userId: user.id } });
        refetch()
      }
      return (
        isBlocked ?
          <Button size="small" title={user.isAdmin ? 'User is admin' : 'Unblock this user'} onClick={unblockUser}>Unblock</Button> :
          <Button size="small" title={user.isAdmin ? 'User is admin' : 'Block this user'} disabled={user.isAdmin} onClick={blockUser}>Block</Button>
      )
    },
  },
])
export const Home = () => {

  const [data, setData] = React.useState<User[] | any[]>([])
  const [actions, setActions] = React.useState(0)

  React.useEffect(() => {
    (async () => {
      const res = await request({ uri: '/user/allUsers' });
      setData(res);
    })()
  }, [actions])
  const addActions = () => {
    setActions(actions + 1)
  }

  return <>
    <Table columns={columns(addActions)} data={data} />
  </>
} 