import React, { Fragment } from 'react';
import { Layout } from 'antd';
import {Route} from 'react-router-dom'

const { Header, Footer, Sider, Content } = Layout;

const HomeLayout = (props) => {
    return (
        <Fragment>
            <Layout>
                <Header>Header</Header>
                <Content>
                    {props.children}
                </Content>
                <Footer>Footer</Footer>
            </Layout>
        </Fragment>

    )
}


export const HomeTemplate = (props) => (
    <Route path={props.path} {...props.exact} render={(propsComponent) => (
        <HomeLayout>
            <props.component {...propsComponent} />
        </HomeLayout>
    )} />
)
