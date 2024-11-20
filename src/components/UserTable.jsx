import React, { useEffect } from "react";
import { Card, Typography } from "@material-tailwind/react";
import { TrashIcon } from "@heroicons/react/24/solid";
import { useUser } from "../contexts/UserContext";
import { Spinner } from "@material-tailwind/react"
const TABLE_HEAD = ["Name", "Email", "Role", "Actions"];
const UserTable = () => {
  const { users, loading, getAllUsers, deleteUser } = useUser();

  console.log(users);
  

  useEffect(() => {
    getAllUsers();
  }, []);

  if (loading) {
    return <div className="mt-20 text-center"> <Spinner />Loading...</div> ;
  }


  return (
    <Card className="w-full overflow-scroll">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr className="">
            {TABLE_HEAD.map( (head) => (
              <th
                key={head}
                className="bg-yellow-50 border-b border-blue-gray-100 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-bold leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.isArray(users) && users.map(( user) => (
            <tr key={user?._id} className="even:bg-blue-gray-50/50">
              <td className="p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {user?.firstname} {user?.lastname}
                </Typography>
              </td>
              <td className="p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {user?.email}
                </Typography>
              </td>
              <td className="p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {user?.role}
                </Typography>
              </td>
              <td className="p-4">
                <Typography
                  as="a"
                  href="#"
                  variant="small"
                  color="blue-gray"
                  className="font-medium"
                  onClick={() => deleteUser(user?._id)}
                >
                  <TrashIcon className="h-5 w-6" />
                </Typography>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}


export default UserTable ;