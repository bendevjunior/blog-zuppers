import React from "react";

function Post() {
  return (
    <>
      <div class="card mb-2 mt-2">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img
                  src="https://bulma.io/images/placeholders/96x96.png"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4">Felipe Sia</p>
              <p class="subtitle is-6">@felipelindao</p>
            </div>
          </div>

          <div class="content">
            Sou rico e bonito o que voces querem mais ? sim faço minha propria cerveja e treino 
            até mesmo ensinei ao mundo oque é ufc. <a>@bulmaio</a>.<a href="#">#css</a>{" "}
            <a href="#">#responsive</a>
            <br />
            <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;