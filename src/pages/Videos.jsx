import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import VideoCard from "../components/VideoCard";
import axios from "axios";

export default function Videos() {
  const { searchKeyword } = useParams();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["videos", searchKeyword], async () => {
    return axios
      .get(`${searchKeyword ? "search" : "popular"}.json`)
      .then((res) => res.data.items);
  });
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong 😖</p>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </>
  );
}
