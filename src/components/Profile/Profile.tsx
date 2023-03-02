import React from "react";
import classes from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";

export function Profile() {
    return (
        <div className={classes.content}>
            <div>
                <img src="https://www.balifundiving.com/wp-content/uploads/2020/09/balifundiving-package.jpg"/>
            </div>
            <div>
                ava+description
            </div>
            <MyPosts/>
        </div>
    );
}

