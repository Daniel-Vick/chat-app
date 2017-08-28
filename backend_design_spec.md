The front-end will initially fetch the chat's history to populate the front-end, then a websocket
will be opened to update the front-end with any new message from other users, or to send new messages from
the current user. To do this, two endpoints are required and detailed below

Required Endpoints:
1.
    /history/{unique_chat_id}
    Type: GET
    Description:
        This endpoint will return the specified chat history based on the time of the request.
        The returned json data will have the following format:
            {
                messages: {
                    [{id: "", author: "", content: "", timestamp: ""}, ...]
                },
                users: {
                    [{id: "", name: "", image: "", ...}]
                }
            }
2.
    /socket/{unique_chat_id}
    Type: GET
    Description:
        This endpoint will open a websocket for real time updates to the current chat
        The frontend will send data with the following format:
            {
                message: {
                    author: "",
                    content: "",
                    timestamp: "",
                }
            }
        The backend will send new messages to the frontend with the following format:
            {
                message: {
                    id: "",
                    author: "",
                    content: "",
                    timestamp: "",
                }
            }