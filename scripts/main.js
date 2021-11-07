Events.on(ClientLoadEvent, b  => {
Events.on(WorldLoadEvent, e => {
  if(Vars.state.rules.infiniteResources){
    //scripts
  };
};
UnitTypes.corvus.speed = 3;
UnitTypes.corvus.legCount = 8;
UnitTypes.corvus.legLength = 100;
UnitTypes.corvus.legMoveSpace = .5;
UnitTypes.corvus.health = 20000000;
//yes yes 20m hp
UnitTypes.corvus.weapons.get(0).bullet.length = 1000;
UnitTypes.corvus.weapons.get(0).reload = 1;
UnitTypes.corvus.weapons.get(0).bullet.damage = 50000;
UnitTypes.corvus.weapons.get(0).bullet.width = 150;
UnitTypes.corvus.footRegion = Core.atlas.find("vela-outline");
UnitTypes.corvus.weapons.add(UnitTypes.reign.weapons.get(0));
UnitTypes.corvus.weapons.add(UnitTypes.reign.weapons.get(1));
UnitTypes.corvus.weapons.each(w=>w.alternate=false);
UnitTypes.corvus.weapons.get(0).shootSound = Sounds.wind3;
UnitTypes.corvus.weapons.get(0).chargeSound = Sounds.wind3;
});
