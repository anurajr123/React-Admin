import { Layout } from "react-admin";
import MyAppBar from "../Appbar/AppBar";
import { ShowMenu } from "../ShowMenu";



export  const PageLayout = (props: any) => <Layout {...props} menu={ShowMenu} appBar={MyAppBar} />;