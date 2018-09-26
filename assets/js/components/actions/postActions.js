import {FETCH_POSTS, NEW_POST} from "./types";

export const fetchPosts = () => dispatch => {
        fetch("kpi")
            .then(res => res.json())
            .then(
                (result) => dispatch({
                    type: FETCH_POSTS,
                    payload: result
                }),
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    // this.setState({
                    //     isLoaded: true,
                    //     error
                    // });
                }
            )

}