import React, { useEffect, useState } from 'react';
import { Box, Boxs, Content, List, ListBox, ListHead, MapHead } from './style';
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { Data } from '../../data/data';
import { useParams } from 'react-router-dom';
import mark from "../../images/maps/mark.svg";
import arrow from "../../images/maps/arrow.svg";

const Maps = () => {
  const {id} = useParams();
  const [location, setLoacation] = useState(null); 
  const [click, setClick] = useState(1);

  useEffect(() => {
    window.scrollTo(0,0);
    navigator.geolocation.getCurrentPosition(successHandler, errorHandler); 
  }, []);

  const successHandler = (response) => {
    const { latitude, longitude } = response.coords;
    setLoacation({ latitude, longitude });
  };

  const errorHandler = (error) => {
    console.log(error);
  };

  return (
    <Boxs>
      <Box>
        <MapHead id={+id}>
          <div className="titles">
            <span className="title">EMERGENCY & SOS</span>
            <span className="title">EMERGENCY & SOS</span>
          </div>
          <div className="contents">
            <span className="content">EMERGENCY & SOS</span>
            <span className="content">EMERGENCY & SOS</span>
          </div>
        </MapHead>
        <Map
          className="map"
          center={
            location
              ? { lat: location.latitude, lng: location.longitude }
              : { lat: 37.566925, lng: 127.009147 }
          }
          level={5}
        >
          {Data &&
            Data.map((item) => {
              return (
                <MapMarker
                  className="marker"
                  position={{ lat: item.lat, lng: item.lng }}
                ></MapMarker>
              );
            })}
        </Map>
      </Box>
      <Box>
        <ListBox>
          <ListHead>
            <span className="title">장소</span>
            <div className="sub">
              <button className={`${click ? "select" : null}  distance`} onClick={()=>{setClick(1)}}>
                거리순
              </button>
              <span className="bar">|</span>
              <button
                className={`${click ? null : "select"} accuracy`}
                onClick={() => {
                  setClick(0);
                }}
              >
                정확도순
              </button>
            </div>
          </ListHead>
          <List>
            {Data &&
              Data.map((item) => {
                return (
                  <div className="ContentBoxs">
                    <Content>
                      <div className="Content-Head">
                        <span className="title">{item.title}</span>
                        <small className="sub">{item.type}</small>
                      </div>
                      <div className="add-box">
                        <span className="address">{item.address}</span>
                        <span className="sub-address">
                          (지번) {item.serverAddress}
                        </span>
                      </div>
                      <div className="today">
                        <span className="type">{item.open}</span>
                        <span className="alltime">{item.time}</span>
                      </div>
                      <div className="callbox">
                        <span className="call">{item.number}</span>
                        <span className="page">상세보기 홈페이지</span>
                      </div>
                    </Content>
                    <Content>
                      <div className="btns">
                        <button className="btn mark">
                          <img src={mark} alt="mark"></img>
                        </button>
                        <button className="btn">
                          <img src={arrow} alt="mark"></img>
                        </button>
                      </div>
                      <button className="search">길찾기</button>
                    </Content>
                  </div>
                );
              })}
          </List>
        </ListBox>
      </Box>
    </Boxs>
  );
}

export default Maps