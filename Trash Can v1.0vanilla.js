//Trash Can Mod v1.0
//by wilco375
//Don't share or redistribute this mod using the Github link, instead, use this link: http://adf.ly/nyKsz

var TrashCanId = 122

Block.defineBlock(TrashCanId,"Trash Can", [["piston_bottom",0],["piston_inner",0],["piston_bottom",0],["piston_bottom",0],["piston_bottom",0],["piston_bottom",0]] ,20,false,0)

Block.setShape(TrashCanId,0.125,0,0.125,0.875,0.875,0.875)
Block.setDestroyTime(TrashCanId, 6)
Block.setColor(TrashCanId,[0x999999])
Item.addCraftRecipe(TrashCanId,1,0,[54,1,0,4,5,0,1,3,0])
Item.setCategory(TrashCanId,8,0);

function useItem(x,y,z,itemId,blockId,side){
if(blockId == TrashCanId){
if(itemId == 0){
clientMessage("You aren't holding anything")}
else{
preventDefault()
Player.clearInventorySlot(Player.getSelectedSlotId())}
}}
