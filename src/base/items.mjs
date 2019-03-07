class Item {
 constructor(
    tempName,
    tempID,
    tempDescription,
    tempIsWeapon, 
    tempIsDurable, 
    tempIsStackable, 
    tempNeedsAmmo, 
    tempIsAmmo, 
    tempIsSellable, 
    tempIsConsumable, 
    tempType="static", 
    tempCount=null, 
    tempMaxStack=null, 
    tempBaseDurability=null, 
    tempWeaponStrength=null, 
    tempCanMine=null, 
    tempDurability=null, 
    tempConsumableStats=[null,null], 
    tempSellPrice=null, 
    tempUsedAmmo=null, 
    tempAmmoType=null, 
    tempWeight=null
   ){
  this.name = tempName; // Item display name.
  this.id = tempID; // Item internal name;
  this.description = tempDescription; // Item details;
  this.isWeapon = tempIsWeapon; // boolean
  this.isDurable = tempIsDurable; // boolean
  this.weaponStrength = tempWeaponStrength; // Optional; Integer
  this.durability = tempDurability; // Optional; Integer
  this.type = tempType; // Optional; String; ["static", "weapon", "shield", "helmet", "chestplate", "gloves", "leggings", "boots", "trinket", "ammo"]
  this.event = tempEvent; // Optional; Function; Triggered when item is used;
  this.needsAmmo = tempNeedsAmmo; // Boolean
  this.isAmmo = tempIsAmmo; // Boolean
  this.usedAmmo = tempUsedAmmo; // Optional
  this.ammoType = tempAmmoType; // Optional
  this.isSellable = tempIsSellable; // Boolean
  this.sellPrice = tempSellPrice; // Optional; Integer
  this.isConsumable = tempIsConsumable; // Boolean
  this.consumableStats = tempConsumableStats; // Optional; Array [health, hunger]
  this.isStackable = tempIsStackable; // Boolean
  this.maxStack = tempMaxStack; // Integer; Must be positive
  this.baseDurability = tempBaseDurability; // Integer; Must be positive
  this.count = tempCount; // Integer; Must be positive
  this.weight = tempWeight; // Optional; Integer; Hunger cost of equiping
 }
}

export default Item;
