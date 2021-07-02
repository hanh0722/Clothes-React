import React from 'react';
import ReactDOM from 'react-dom';
import LayoutDashBoard from '../../../Layout/LayoutDashboard';
import RightSide from '../../RightSide/Rightside';
import Card from '../../Helper/Card';
import styles from './BlogCreated.module.scss';
import Content from './Content';
import Publish from './Publish/Publish';
import {BlogContextProvider} from './ContextCreated/blog-context';
import Upload from './Upload/Upload';
import Notification from './Notification/Notification';
import OverLay from './Notification/Overlay';
const BlogCreated = () =>{
    return(
        <>
            <LayoutDashBoard>
                <RightSide>
                    <BlogContextProvider>
                        <Upload>
                            <Card className={styles['post_layout']}>
                                <Content/>
                                <Publish/>
                                {
                                    ReactDOM.createPortal(<Notification/>, document.getElementById('overlay'))
                                }
                                {
                                    ReactDOM.createPortal(<OverLay/>, document.getElementById('background-lay'))
                                }
                            </Card>
                        </Upload>
                    </BlogContextProvider>
                </RightSide>
            </LayoutDashBoard>
        </>
    )
}

export default BlogCreated;