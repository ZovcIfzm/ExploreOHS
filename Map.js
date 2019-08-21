//Map .js
import * as pics from './Pictures.js';
import * as k from './Constants.js'

export function map(section, id){
  var ret = [section,id];

  if (section == "none"){
    if (id == k.AFor[1]) ret = k.BRight;
    if (id == k.ARight[1]) ret = k.DFor;
    if (id == k.BRight[1]) ret = k.CBack;
    if (id == k.BBack[1]) ret = k.ARight;
    if (id == k.CBack[1]) ret = k.DLeft;
    if (id == k.CLeft[1]) ret = k.BBack;
    if (id == k.DLeft[1]) ret = k.AFor;
    if (id == k.DFor[1]) ret = k.CLeft;
  }
  if (section == "outsideMainEntrance"){
    if (id == k.outsideMainEntranceWest[1]) ret = k.frontDoorsWest;
  }
  else if (section == "frontDoors"){
    if (id == k.frontDoorsEast[1]) ret = k.outsideMainEntranceEast;
    if (id == k.frontDoorsSouth[1]) ret = k.frontJunctionASouth;
  }
  else if (section == "frontJunctionA"){
    if (id == k.frontJunctionANorth[1]) ret = k.frontDoorsNorth;
    if (id == k.frontJunctionAEast[1]) ret = k.artsJunctionAEast;
    if (id == k.frontJunctionAWest[1]) ret = k.centerWest;
  }
  else if (section == "center"){
    if (id == k.centerEast[1]) ret = k.frontJunctionAEast;
    if (id == k.centerNorth[1]) ret = k.cafeteriaNorth;
  }
  else if (section == "cafeteria"){
    if (id == k.cafeteriaSouth[1]) ret = k.centerSouth;
  }
  else if (section == "artsJunctionA"){
    if (id == k.artsJunctionAWest[1]) ret = k.frontJunctionAWest;
    if (id == k.artsJunctionASouth[1]) ret = k.artsJunctionBSouth;
  }
  else if (section == "artsJunctionB"){
    if (id == k.artsJunctionBNorth[1]) ret = k.artsJunctionAWest; //need to fix- take a picture
    //also need to take picture of artsJunctionBWest
  }
  return ret;
}

export function rotation(section, id, direction){
  const sectionLength = findSectionLength(section);
  if (direction == "clock"){
    if (id + 1 < sectionLength){
      return id + 1;
    }
    else{
      return 0;
    }
  }
  else if (direction == "counter"){
    if (id - 1 < 0){
      return sectionLength - 1;
    }
    else{
      return id - 1;
    }
  }
  else{
    console.log("rotation function error");
  }
}

export function findSectionLength(sectionName){
  if (sectionName == "none") return pics.noneLength;
  else if (sectionName == "outsideMainEntrance") return pics.outsideMainEntranceLength;
  else if (sectionName == "frontDoors") return pics.frontDoorsLength;
  else if (sectionName == "frontJunctionA") return pics.frontJunctionALength;
  else if (sectionName == "artsJunctionA") return pics.artsJunctionALength;
  else if (sectionName == "artsJunctionB") return pics.artsJunctionBLength;
  else if (sectionName == "center") return pics.centerLength;
  else if (sectionName == "cafeteria") return pics.cafeteriaLength;
  else console.log("finding section length error")
}