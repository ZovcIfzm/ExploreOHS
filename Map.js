//Map .js

export function Map(section, id, dir){
  var ret = [[0,0], [0,0], [0,0]];
  var retID = -1;
  if(dir == "for")
    retID = 0;
  else if (dir == "right")
    retID = 1;
  else if (dir == "left")
    retID = 2;

  const AFor = ["none",0];
  const ARight = ["none",1];

  const BRight = ["none",2];
  const BBack = ["none",3];

  const CBack = ["none",4];
  const CLeft = ["none",5];

  const DLeft = ["none",6];
  const DFor = ["none",7];

  if (section == "none"){
    if (id == AFor[1]) ret = [BRight, ARight, id];
    if (id == ARight[1]) ret = [DFor, id, AFor];
    if (id == BRight[1]) ret = [CBack, BBack, id];
    if (id == BBack[1]) ret = [ARight, id, BRight];
    if (id == CBack[1]) ret = [DLeft, CLeft, id];
    if (id == CLeft[1]) ret = [BBack, id, CBack];
    if (id == DLeft[1]) ret = [AFor, DFor, id];
    if (id == DFor[1]) ret = [CLeft, id, DLeft];
  }
  return ret[retID];
}