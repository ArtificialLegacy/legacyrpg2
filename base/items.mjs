class Item {
 constructor(tempName, tempID, tempDescription, tempIsTool, tempIsWeapon, tempIsDurable, tempType="static", tempToolStrength=null, tempWeaponStrength=null, tempCanMine=null, tempDurability=null){
   this.name = tempName; // Item display name.
   this.id = tempID; // Item internal name;
   this.description = tempDescription; // Item details;
   this.isTool = tempIsTool; // boolean
   this.isWeapon = tempIsWeapon; // boolean
   this.isDurable = tempIsDurable; // boolean
   this.toolStrength = tempToolStrength; // Optional; Integer
   this.weaponStrength = tempWeaponStrength; // Optional; Integer
   this.canMine = tempCanMine; // Optional; Array; ["wood", "minerals", "fish", "prey"]
   this.durability = tempDurability; // Optional; Integer
   this.type = tempType; // Optional; String; ["static", "weapon", "shield", "helmet", "chestplate", "gloves", "leggings", "boots", "trinket"]
 }
}

export default Item;
