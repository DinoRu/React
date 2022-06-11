import { InfoOutlined, PlayArrow } from '@material-ui/icons'
import React from 'react'
import './featured.scss';

export default function Featured({type}) {
  return (
      <div className="featured">
          {type && (
              <div className="category">
                  <span>{type === "movie" ? "Movies" : "Series"}</span>
                  <select name="genre" id="genre">
                      <option>Genre</option>
                      <option value="adventure">Adventure</option>
                      <option value="comedy">comedy</option>
                      <option value="crime">crime</option>
                      <option value="fantasy">fantasy</option>
                      <option value="historical">historical</option>
                      <option value="horror">horror</option>
                      <option value="romance">romance</option>
                      <option value="sci-fi">sci-fi</option>
                      <option value="thriller">thriller</option>
                      <option value="wersten">wersten</option>
                      <option value="animation">animation</option>
                      <option value="drama">drama</option>
                      <option value="documentary">documentary</option>
                  </select>
              </div>
          )}
          <img src="https://news.xbox.com/ru-ru/wp-content/uploads/sites/9/2021/12/Launch_Dash_1920x1080-LOGO_JPG.jpg" alt=""/>
          <div className="info">
              <img src="https://www.pngfind.com/pngs/m/232-2323338_the-matrix-reloaded-architecture-hd-png-download.png" alt="" />
              <span className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ipsa ratione itaque necessitatibus laboriosam possimus dolorem aut, reprehenderit quibusdam sint natus soluta qui nihil.</span>
              <div className="buttons">
                  <button className="play">
                        <PlayArrow />
                        <span>Play</span>
                  </button>
                  <button className="more">
                      <InfoOutlined />
                      <span>Info</span>
                  </button>
              </div>
          </div>
      </div>
  )
}
