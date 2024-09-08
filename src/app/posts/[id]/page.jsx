import { getDetailsPage } from "@/services/postApi";
import axios from "axios";
import React from "react";



const PostDetailsPage = async({ params }) => {
  const { title, body } = await getDetailsPage(params.id);

  return <div>
    post details of {params.id}
    <h3>Title: {title}</h3>
    <h6>Description: {body}</h6>
    </div>;
};

export default PostDetailsPage;
