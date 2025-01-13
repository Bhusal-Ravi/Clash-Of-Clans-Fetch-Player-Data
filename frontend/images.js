const imageUrlNon=`<img src="/images/error/nodata.jpg" alt="Clan Badge" class="content-image">`
export function clanimageProcess(data){
    
    if(!data || !data.clan ){
        
        return imageUrlNon
    }else {
        const imageUrl=`<img src="${data.clan.badgeUrls.small}" alt="Clan Badge" class="content-image">`
        return imageUrl
}
}

export function leagueimageProcess(data){
    if(!data || !data.league){
        return imageUrlNon
    }else{
        const imageUrl=`<img src="${data.league.iconUrls.small}" alt="Clan Badge" class="content-image">`
        return imageUrl
    }
}
let labelhtml=''
export function labelimageProcess(data){
    if(!data || !data.labels){
        return 'No Labels Selected'
    }else{
        const labels=data.labels
        labels.forEach((label,index)=>{
            labelhtml+=`
            <div class="label-icon">
            <span class="text-primary">${label.name}</span>
            <img src="${label.iconUrls.small}" alt="Clan Badge" class="content-image">
            </div>`
        })
        return labelhtml
    }
}

export function troopsimageProcess(data,base){
    const troopName=data;
    let troopImage
    if(base==='home'){
     troopImage=`<img alt="${troopName}" src="/images/troop/${troopName}.png" class="troop-icons"></img>`
    }else{
        troopImage=`<img alt="${troopName}" src="/images/builder-troops/${troopName}.png" class="troop-icons"></img>`
    }
    return troopImage;
}

let hEquipHtml=''
export function heroequipmentProcess(data){
    hEquipHtml=''
    const equipments=data.equipment
    
    if(equipments && Array.isArray(equipments)){
        equipments.forEach((equipment,index)=>{
            hEquipHtml += `
                    <h3 class="troop-name">${index+1}: Equipment</h3>
                    <img src="/images/equipments/${equipment.name}.png" class="troop-icons"></img>
                    <div class="troop-level">Name: ${equipment.name}</div>
                    <div class="troop-level">Level: ${equipment.level}</div>
                `;
        })
    }else{
        hEquipHtml += `<div>No Equipment Available</div>`;
    }
    
    

    return hEquipHtml;
}

export function spellimageProcess(data){
    const name=data.name
        console.log(name)
        const spellImage=`<img alt="${name}" src="/images/spells/${name}.png" class="troop-icons"></img>`
        return spellImage
    
}