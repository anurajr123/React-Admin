import { Datagrid, EmailField, List, TextField } from 'react-admin';

export const UserList = () => (
    <List>
        <Datagrid rowClick="show">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="username" />
            <EmailField source="email" />
        </Datagrid>
    </List>
);
