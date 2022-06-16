import * as React from "react";
import { Edit, SimpleForm, TextInput, DateInput, ReferenceManyField, Datagrid, TextField, DateField, EditButton, required } from 'react-admin';
import { RichTextInput } from 'ra-input-rich-text';




 export const PostEdit = () => (
    
    
    <Edit>
        <SimpleForm>
            <TextInput disabled label="Id" source="id" />
            <TextInput source="title" validate={required()} />
            <RichTextInput source="body" validate={required()} />  
        </SimpleForm>
    </Edit>
    
    
);
