import React from "react";
import classes from './MyPosts.module.css';
import {Post} from "./Post/Post";

export function MyPosts() {
    return (
        <div>
            My Posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={classes.posts}>
                <Post message = "Hello" likes = {30} />
                <Post message = "It's a post" likes = {24}/>
            </div>

        </div>
    );
}

