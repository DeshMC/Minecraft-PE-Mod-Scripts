/*
Focus of: 
- Portable Hole
- Harming (6 DMG)
- Harming II (10 DMG)
- Healing
- Floating
- Teleportation
*/

var activeFocus = "portableHole";
var y;
var prevY;

//Floating Focus Variables
var tickcount = 0
var watertickcount = 0

//Portable Hole Variables
var pHoleId = 450
var pHoleActive
var PortalOpenedTimeInTicks = 60

ModPE.setItem(510,"stick",0,"Wizard Staff");

function modTick(){
	//Floating Focus Code
	if(activeFocus == "floating"){
		y = getPlayerY();
		if(getPlayerY != null){
			if(prevY > y){
				Entity.setVelY(getPlayerEnt(),-0.5);
				PY1 = getPlayerY() -3; PY2 = getPlayerY() -5; PY3 = getPlayerY() -1; PY4 = getPlayerY() -4;  PZ1 = getPlayerZ(); PX1 = getPlayerX();
				Block1 = getTile(PX1, PY1, PZ1); Block2 = getTile(PX1, PY2, PZ1); Block3 = getTile(PX1, PY4, PZ1);
				if(Block1 == 0 && Block2 != 0 && Block3 == 0 && tickcount == 0 && Level.getGameMode() == 0){
					setTile(PX1,PY3,PZ1,9,0);
					watertickcount = 1; waterx = PX1; watery = PY3; waterz = PZ1;
					tickcount = 1;
				}
				if(watertickcount == 2){
					setTile(waterx,watery,waterz,0,0);
					watertickcount = 0;
				}
				
				if(tickcount !=0){
					if(tickcount != 10){
						tickcount++;
					}
					else if(tickcount == 10){
						tickcount = 0;
					}
				}
				if(watertickcount != 0){
					watertickcount++;
				}
			}
		}
	}
	prevY = getPlayerY();
}

function useItem(x,y,z,itemId,blockId,side){
	//Portable Hole Code
	if(activeFocus == "portableHole" && blockId != 7){
		if(pHoleActive == 1) {
			clientMessage("Portable Hole is already active!")
		}
		else{
			pHoleX = x
			pHoleY = y
			pHoleZ = z
			countdown = PortalOpenedTimeInTicks
			pHoleActive = 1
			BlockSide = side
			if(BlockSide == 2){
				block1 = getTile(pHoleX,pHoleY, pHoleZ)
				block2 = getTile(pHoleX+1,pHoleY,pHoleZ)
				block3 = getTile(pHoleX+1,pHoleY+1,pHoleZ)
				block4 = getTile(pHoleX+1,pHoleY-1,pHoleZ)
				block5 = getTile(pHoleX-1,pHoleY,pHoleZ)
				block6 = getTile(pHoleX-1,pHoleY+1,pHoleZ)
				block7 = getTile(pHoleX-1,pHoleY-1,pHoleZ)
				block8 = getTile(pHoleX,pHoleY+1,pHoleZ)
				block9 = getTile(pHoleX,pHoleY-1,pHoleZ)
				blockdata1 = Level.getData(pHoleX,pHoleY, pHoleZ)
				blockdata2 = Level.getData(pHoleX+1,pHoleY,pHoleZ)
				blockdata3 = Level.getData(pHoleX+1,pHoleY+1,pHoleZ)
				blockdata4 = Level.getData(pHoleX+1,pHoleY-1,pHoleZ)
				blockdata5 = Level.getData(pHoleX-1,pHoleY,pHoleZ)
				blockdata6 = Level.getData(pHoleX-1,pHoleY+1,pHoleZ)
				blockdata7 = Level.getData(pHoleX-1,pHoleY-1,pHoleZ)
				blockdata8 = Level.getData(pHoleX,pHoleY+1,pHoleZ)
				blockdata9 = Level.getData(pHoleX,pHoleY-1,pHoleZ)
				setTile(pHoleX,pHoleY, pHoleZ,0)
				setTile(pHoleX+1,pHoleY,pHoleZ,0)
				setTile(pHoleX+1,pHoleY+1,pHoleZ,0)
				setTile(pHoleX+1,pHoleY-1,pHoleZ,0)
				setTile(pHoleX-1,pHoleY,pHoleZ,0)
				setTile(pHoleX-1,pHoleY+1,pHoleZ,0)
				setTile(pHoleX-1,pHoleY-1,pHoleZ,0)
				setTile(pHoleX,pHoleY+1,pHoleZ,0)
				setTile(pHoleX,pHoleY-1,pHoleZ,0)
			}
			else if(BlockSide == 3){
				block1 = getTile(pHoleX,pHoleY, pHoleZ)
				block2 = getTile(pHoleX+1,pHoleY,pHoleZ)
				block3 = getTile(pHoleX+1,pHoleY+1,pHoleZ)
				block4 = getTile(pHoleX+1,pHoleY-1,pHoleZ)
				block5 = getTile(pHoleX-1,pHoleY,pHoleZ)
				block6 = getTile(pHoleX-1,pHoleY+1,pHoleZ)
				block7 = getTile(pHoleX-1,pHoleY-1,pHoleZ)
				block8 = getTile(pHoleX,pHoleY+1,pHoleZ)
				block9 = getTile(pHoleX,pHoleY-1,pHoleZ)
				blockdata1 = Level.getData(pHoleX,pHoleY, pHoleZ)
				blockdata2 = Level.getData(pHoleX+1,pHoleY,pHoleZ)
				blockdata3 = Level.getData(pHoleX+1,pHoleY+1,pHoleZ)
				blockdata4 = Level.getData(pHoleX+1,pHoleY-1,pHoleZ)
				blockdata5 = Level.getData(pHoleX-1,pHoleY,pHoleZ)
				blockdata6 = Level.getData(pHoleX-1,pHoleY+1,pHoleZ)
				blockdata7 = Level.getData(pHoleX-1,pHoleY-1,pHoleZ)
				blockdata8 = Level.getData(pHoleX,pHoleY+1,pHoleZ)
				blockdata9 = Level.getData(pHoleX,pHoleY-1,pHoleZ)
				setTile(pHoleX,pHoleY, pHoleZ,0)
				setTile(pHoleX+1,pHoleY,pHoleZ,0)
				setTile(pHoleX+1,pHoleY+1,pHoleZ,0)
				setTile(pHoleX+1,pHoleY-1,pHoleZ,0)
				setTile(pHoleX-1,pHoleY,pHoleZ,0)
				setTile(pHoleX-1,pHoleY+1,pHoleZ,0)
				setTile(pHoleX-1,pHoleY-1,pHoleZ,0)
				setTile(pHoleX,pHoleY+1,pHoleZ,0)
				setTile(pHoleX,pHoleY-1,pHoleZ,0)
			}
			else if(BlockSide == 4){
				block1 = getTile(pHoleX,pHoleY, pHoleZ)
				block2 = getTile(pHoleX,pHoleY,pHoleZ+1)
				block3 = getTile(pHoleX,pHoleY+1,pHoleZ+1)
				block4 = getTile(pHoleX,pHoleY-1,pHoleZ+1)
				block5 = getTile(pHoleX,pHoleY,pHoleZ-1)
				block6 = getTile(pHoleX,pHoleY+1,pHoleZ-1)
				block7 = getTile(pHoleX,pHoleY-1,pHoleZ-1)
				block8 = getTile(pHoleX,pHoleY+1,pHoleZ)
				block9 = getTile(pHoleX,pHoleY-1,pHoleZ)
				blockdata1 = Level.getData(pHoleX,pHoleY, pHoleZ)
				blockdata2 = Level.getData(pHoleX,pHoleY,pHoleZ+1)
				blockdata3 = Level.getData(pHoleX,pHoleY+1,pHoleZ+1)
				blockdata4 = Level.getData(pHoleX,pHoleY-1,pHoleZ+1)
				blockdata5 = Level.getData(pHoleX,pHoleY,pHoleZ-1)
				blockdata6 = Level.getData(pHoleX,pHoleY+1,pHoleZ-1)
				blockdata7 = Level.getData(pHoleX,pHoleY-1,pHoleZ-1)
				blockdata8 = Level.getData(pHoleX,pHoleY+1,pHoleZ)
				blockdata9 = Level.getData(pHoleX,pHoleY-1,pHoleZ)
				setTile(pHoleX,pHoleY, pHoleZ)
				setTile(pHoleX,pHoleY,pHoleZ+1)
				setTile(pHoleX,pHoleY+1,pHoleZ+1)
				setTile(pHoleX,pHoleY-1,pHoleZ+1)
				setTile(pHoleX,pHoleY,pHoleZ-1)
				setTile(pHoleX,pHoleY+1,pHoleZ-1)
				setTile(pHoleX,pHoleY-1,pHoleZ-1)
				setTile(pHoleX,pHoleY+1,pHoleZ)
				setTile(pHoleX,pHoleY-1,pHoleZ)	
			}	
			else if(BlockSide == 5){
				block1 = getTile(pHoleX,pHoleY, pHoleZ)
				block2 = getTile(pHoleX,pHoleY,pHoleZ+1)
				block3 = getTile(pHoleX,pHoleY+1,pHoleZ+1)
				block4 = getTile(pHoleX,pHoleY-1,pHoleZ+1)
				block5 = getTile(pHoleX,pHoleY,pHoleZ-1)
				block6 = getTile(pHoleX,pHoleY+1,pHoleZ-1)
				block7 = getTile(pHoleX,pHoleY-1,pHoleZ-1)
				block8 = getTile(pHoleX,pHoleY+1,pHoleZ)
				block9 = getTile(pHoleX,pHoleY-1,pHoleZ)
				blockdata1 = Level.getData(pHoleX,pHoleY, pHoleZ)
				blockdata2 = Level.getData(pHoleX,pHoleY,pHoleZ+1)
				blockdata3 = Level.getData(pHoleX,pHoleY+1,pHoleZ+1)
				blockdata4 = Level.getData(pHoleX,pHoleY-1,pHoleZ+1)
				blockdata5 = Level.getData(pHoleX,pHoleY,pHoleZ-1)
				blockdata6 = Level.getData(pHoleX,pHoleY+1,pHoleZ-1)
				blockdata7 = Level.getData(pHoleX,pHoleY-1,pHoleZ-1)
				blockdata8 = Level.getData(pHoleX,pHoleY+1,pHoleZ)
				blockdata9 = Level.getData(pHoleX,pHoleY-1,pHoleZ)
				setTile(pHoleX,pHoleY, pHoleZ)
				setTile(pHoleX,pHoleY,pHoleZ+1)
				setTile(pHoleX,pHoleY+1,pHoleZ+1)
				setTile(pHoleX,pHoleY-1,pHoleZ+1)
				setTile(pHoleX,pHoleY,pHoleZ-1)
				setTile(pHoleX,pHoleY+1,pHoleZ-1)
				setTile(pHoleX,pHoleY-1,pHoleZ-1)
				setTile(pHoleX,pHoleY+1,pHoleZ)
				setTile(pHoleX,pHoleY-1,pHoleZ)	
			}
			else if(BlockSide == 1){
				block1 = getTile(pHoleX,pHoleY, pHoleZ)
				block2 = getTile(pHoleX,pHoleY,pHoleZ+1)
				block3 = getTile(pHoleX+1,pHoleY,pHoleZ+1)
				block4 = getTile(pHoleX-1,pHoleY,pHoleZ+1)
				block5 = getTile(pHoleX,pHoleY,pHoleZ-1)
				block6 = getTile(pHoleX+1,pHoleY,pHoleZ-1)
				block7 = getTile(pHoleX-1,pHoleY,pHoleZ-1)
				block8 = getTile(pHoleX+1,pHoleY,pHoleZ)
				block9 = getTile(pHoleX-1,pHoleY,pHoleZ)
				blockdata1 = Level.getData(pHoleX,pHoleY, pHoleZ)
				blockdata2 = Level.getData(pHoleX,pHoleY,pHoleZ+1)
				blockdata3 = Level.getData(pHoleX+1,pHoleY,pHoleZ+1)
				blockdata4 = Level.getData(pHoleX-1,pHoleY,pHoleZ+1)
				blockdata5 = Level.getData(pHoleX,pHoleY,pHoleZ-1)
				blockdata6 = Level.getData(pHoleX+1,pHoleY,pHoleZ-1)
				blockdata7 = Level.getData(pHoleX-1,pHoleY,pHoleZ-1)
				blockdata8 = Level.getData(pHoleX+1,pHoleY,pHoleZ)
				blockdata9 = Level.getData(pHoleX-1,pHoleY,pHoleZ)
				setTile(pHoleX,pHoleY, pHoleZ)
				setTile(pHoleX,pHoleY,pHoleZ+1)
				setTile(pHoleX+1,pHoleY,pHoleZ+1)
				setTile(pHoleX-1,pHoleY,pHoleZ+1)
				setTile(pHoleX,pHoleY,pHoleZ-1)
				setTile(pHoleX+1,pHoleY,pHoleZ-1)
				setTile(pHoleX-1,pHoleY,pHoleZ-1)
				setTile(pHoleX+1,pHoleY,pHoleZ)
				setTile(pHoleX-1,pHoleY,pHoleZ)	
			}
			else if(BlockSide == 0){
				block1 = getTile(pHoleX,pHoleY, pHoleZ)
				block2 = getTile(pHoleX,pHoleY,pHoleZ+1)
				block3 = getTile(pHoleX+1,pHoleY,pHoleZ+1)
				block4 = getTile(pHoleX-1,pHoleY,pHoleZ+1)
				block5 = getTile(pHoleX,pHoleY,pHoleZ-1)
				block6 = getTile(pHoleX+1,pHoleY,pHoleZ-1)
				block7 = getTile(pHoleX-1,pHoleY,pHoleZ-1)
				block8 = getTile(pHoleX+1,pHoleY,pHoleZ)
				block9 = getTile(pHoleX-1,pHoleY,pHoleZ)
				blockdata1 = Level.getData(pHoleX,pHoleY, pHoleZ)
				blockdata2 = Level.getData(pHoleX,pHoleY,pHoleZ+1)
				blockdata3 = Level.getData(pHoleX+1,pHoleY,pHoleZ+1)
				blockdata4 = Level.getData(pHoleX-1,pHoleY,pHoleZ+1)
				blockdata5 = Level.getData(pHoleX,pHoleY,pHoleZ-1)
				blockdata6 = Level.getData(pHoleX+1,pHoleY,pHoleZ-1)
				blockdata7 = Level.getData(pHoleX-1,pHoleY,pHoleZ-1)
				blockdata8 = Level.getData(pHoleX+1,pHoleY,pHoleZ)
				blockdata9 = Level.getData(pHoleX-1,pHoleY,pHoleZ)
				setTile(pHoleX,pHoleY, pHoleZ)
				setTile(pHoleX,pHoleY,pHoleZ+1)
				setTile(pHoleX+1,pHoleY,pHoleZ+1)
				setTile(pHoleX-1,pHoleY,pHoleZ+1)
				setTile(pHoleX,pHoleY,pHoleZ-1)
				setTile(pHoleX+1,pHoleY,pHoleZ-1)
				setTile(pHoleX-1,pHoleY,pHoleZ-1)
				setTile(pHoleX+1,pHoleY,pHoleZ)
				setTile(pHoleX-1,pHoleY,pHoleZ)	
			}
		}
	}
}
