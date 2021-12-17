import { useEffect, useState } from "react";
import { deleteUserAccount, GetAllUsers } from "../../services/userService";
import { IUserAccount } from "../../types/IUserAccount";
import { Container, Content } from "./styles";

import { toast } from "react-toastify";
import { Users } from "../../pages/Users";

export function ContentUsers() {
  const [users, setUsers] = useState<IUserAccount[]>([]);

  useEffect(() => {
    GetAllUsers().then((data) => setUsers(data));
  });

  function handleRemoveUser(id: number) {
    // eslint-disable-next-line no-restricted-globals
    const message = confirm("Desejas deletar este módulo?");
    if (message) {
      deleteUserAccount(Number(id))
        .then((_) => {
          toast.success("Usuário eliminado com sucesso!");

          GetAllUsers().then((data) => setUsers(data));

          if (Users.length === 0) {
            localStorage.removeItem("access_token");
            localStorage.removeItem("user");

            window.location.reload();
          }
        })
        .catch((_) => {
          console.clear();

          toast.error("Erro!, tente mais tarde");
        });
    }
  }

  return (
    <Container>
      <Content>
        <header>
          <div className="content">
            <h2>Usuários</h2>
            <span>Total de módulos ({users.length})</span>
          </div>
        </header>

        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td
                  onClick={() => {
                    handleRemoveUser(Number(user.id));
                  }}
                >
                  Deletar
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Content>
    </Container>
  );
}
