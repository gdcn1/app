import React from 'react';
import ContextState from './context_state_config';
import {Layout} from "antd";
import Title from "antd/es/typography/Title";

const App = () => {
    const {Header, Content} = Layout;
    return (
        <div>
            <Layout>
                <Header>
                    <Title style={{color: "wheat"}} level={2}>
                        GoodCoin
                    </Title>
                </Header>
                <Content>
                    <ContextState/>
                </Content>
            </Layout>
        </div>
    )
}


export default App;
