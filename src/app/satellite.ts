export class Satellite {

	name: string;
	type: string;
	launchDate: string;
	orbitType: string;
	operational: boolean;

	constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
		this.name = name;
		this.type = type;
		this.launchDate = launchDate;
		this.orbitType = orbitType;
		this.operational = operational;
   }

// TODO 3a: fix isSpaceDebris check
   shouldShowWarning(){
	if(this.type.toLowerCase()=== "space debris"){
		return true;
	}else{
		return false;
	}
   }
	
	

}

// TODO 3a: fix isSpaceDebris check
