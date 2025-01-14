import { clanimageProcess, heroequipmentProcess, labelimageProcess, leagueimageProcess, spellimageProcess, troopsimageProcess } from "./images.js"
let html=''
let clanCardHtml=''
let leagueCardHtml=''
let achievementCardHtml=''
let labelCardHtml=''
let troopsCardHtml=''
let heroCardHtml=''
let spellCardHtml=''


export function playerDisplay(data){
            
    
    html=` <div class="card card-main">
    <h1 class="card-header">${data?.name ||'No Data'}</h1>
    <div class="content-info">
        <div class="content-item">
            <strong class="content-item-label">Tag :</strong>
            <span class="content-item-value" id="tag">${data?.tag ||' No Data'}</span>
        </div>
        <div class="content-item">
            <strong class="content-item-label">Name :</strong>
            <span class="content-item-value" id="name">${data?.name ||' No Data'}</span>
        </div>
        <div class="content-item">
            <strong class="content-item-label">Town Hall Level :</strong>
            <span class="content-item-value" id="townHallLevel">${data.townHallLevel}</span>
        </div>
        <div class="content-item">
            <strong class="content-item-label">Town Hall Weapon Level :</strong>
            <span class="content-item-value" id="townHallWeaponLevel">${data?.townHallWeaponLevel || " Weapon Not Unlocked"}</span>
        </div>
        <div class="content-item">
            <strong class="content-item-label">Experience Level :</strong>
            <span class="content-item-value" id="expLevel">${data.expLevel}</span>
        </div>
        <div class="content-item">
            <strong class="content-item-label">Trophies :</strong>
            <span class="content-item-value" id="trophies">${data.trophies}</span>
        </div>
        <div class="content-item">
            <strong class="content-item-label">Best Trophies :</strong>
            <span class="content-item-value" id="bestTrophies">${data.bestTrophies}</span>
        </div>
        <div class="content-item">
            <strong class="content-item-label">War Stars :</strong>
            <span class="content-item-value" id="warStars">${data?.warStars || ' No War Stars Achieved'}</span>
        </div>
        <div class="content-item">
            <strong class="content-item-label">Attack Wins :</strong>
            <span class="content-item-value" id="attackWins">${data.attackWins}</span>
        </div>
        <div class="content-item">
            <strong class="content-item-label">Defense Wins :</strong>
            <span class="content-item-value" id="defenseWins">${data.defenseWins}</span>
        </div>
        <div class="content-item">
            <strong class="content-item-label">Builder Hall Level :</strong>
            <span class="content-item-value" id="builderHallLevel">${data?.builderHallLevel || 'Builder Hall Not Unlocked'}</span>
        </div>
        <div class="content-item">
            <strong class="content-item-label">Builder Base Trophies :</strong>
            <span class="content-item-value" id="builderBaseTrophies">${data?.builderBaseTrophies || ' No Trophies'}</span>
        </div>
        <div class="content-item">
            <strong class="content-item-label">Best Builder Base Trophies :</strong>
            <span class="content-item-value" id="bestBuilderBaseTrophies">${data?.bestBuilderBaseTrophies || ' No Trophies'}</span>
        </div>
        <div class="content-item">
            <strong class="content-item-label">Role :</strong>
            <span class="content-item-value" id="role">${data?.role || ' Not In A Clan'}</span>
        </div>
        <div class="content-item">
            <strong class="content-item-label">War Preference :</strong>
            <span class="content-item-value" id="warPreference">${data?.warPreference || ' Not Selected'}</span>
        </div>
        <div class="content-item">
            <strong class="content-item-label">Donations :</strong>
            <span class="content-item-value" id="donations">${data.donations}</span>
        </div>
        <div class="content-item">
            <strong class="content-item-label">Donations Received :</strong>
            <span class="content-item-value" id="donationsReceived">${data.donationsReceived}</span>
        </div>
        <div class="content-item">
            <strong class="content-item-label">Clan Capital Contributions :</strong>
            <span class="content-item-value" id="clanCapitalContributions">${data.clanCapitalContributions}</span>
        </div>
    </div>
</div>
        <!-- Clan Card -->
        ${clancard(data)}

        <!-- League Card -->
        ${leagueCard(data)}

        <!-- Labels Card -->
        <div class="card special-card">
            <h2>Labels</h2>
            ${labelCard(data)}
        </div>

        <!-- Troops Card -->
        <div class="card special-card">
            <h2>Troops</h2>
            ${troopsCard(data)}
        </div>

        <!-- Heroes Card -->
        <div class="card special-card">
            <h2>Heroes</h2>
            ${heroesCard(data)}
        </div>

        <!-- Spell Card -->
        <div class="card special-card">
            <h2>Spells</h2>
            ${spellCard(data)}
        </div>
    
    <!-- Achievements Card -->
        <div class="card card-section">
        <h2 class="card-header">Achivements</h2>
        ${achievementCard(data)}
        </div>
    `
        document.querySelector(".profile-container").innerHTML=html
        
        showHideDiv();
       

}


function clancard(data){
    clanCardHtml=` <div class="card card-section">
    <h2 class="card-header">Clan</h2>
    <div class="card-content">
        ${clanimageProcess(data)}
        <div class="content-info">
            <span class="text-primary">Clan Name: ${data.clan?.name || 'No Clan Joined'}</span>
            <span class="text-badge">Clan Level: ${data.clan?.clanLevel || 'No Clan Joined'}</span>
            <span class="text-badge">Clan Role: ${data?.role || 'No Clan Joined'}</span>
            <span class="text-secondary">Clan Tag: ${data.clan?.tag || 'No Clan Joined'}</span>
        </div>
    </div>
</div>`
        return clanCardHtml
}

function leagueCard(data){
    leagueCardHtml=`<div class="card card-section">
    <h2 class="card-header">Leagues</h2>
    <div class="card-content">
        ${leagueimageProcess(data)}
        
        <div class="content-info">
            <span class="text-primary">League Name: ${data.league?.name || 'Not In A League'}</span>
            <span class="text-secondary">League Id: ${data.league?.id || 'Not In A League'}</span>
        </div>
    </div>
</div>`
return leagueCardHtml
}


function achievementCard(data){
    const achievementsAll=data.achievements

    achievementsAll.forEach((achievement,index)=>{
        achievementCardHtml+=`<div class="card-content">
                                <div class="content-info">
                                    <span class="text-index">#${index + 1}</span> <!-- Highlighted Index -->
                                     <span class="text-primary">${achievement.info}</span>
                                    <div class="content-info-hidden">
                                         <span class="text-primary">Name: ${achievement.name}</span>
                                         <span class="text-primary">${achievement.completionInfo}</span>
                                         <span class="text-secondary">Stars: ${achievement.stars}</span>
                                         <span class="text-secondary">Target: ${achievement.target}</span>
                                         <span class="text-secondary">Current: ${achievement.value}</span>
                                         
                                    </div>
                                     <button class="showmore" data-achiev-id="${achievement.index}"  >Show More</button>
                                </div>
                               
                            </div>`                                         
                        })
    return achievementCardHtml
}

function labelCard(data){


    labelCardHtml=`<div class="card-content">
                                <div class="content-info">
                                     ${labelimageProcess(data)}  
                                    </div>  
                                </div>`

    return labelCardHtml;
}

function troopsCard(data){
    let homeTroopsHtml=''
    let builderTroopsHtml=''
    const troops=data.troops
    troops.forEach((troop)=>{
        if(troop.village==='home'){
            homeTroopsHtml+=`<div class="troop-card">
                                <div class="troop-image">
                                    ${troopsimageProcess(troop.name, "home")}
                                </div>
                                <div class="troop-info">
                                    <div class="troop-name">${troop.name}</div>
                                    <div class="troop-level">Level:${troop.level}</div>
                                    <div class="troop-level">Max Level:${troop.maxLevel}</div>
                                </div>
                            </div>`;
        } else{
            builderTroopsHtml+=`<div class="troop-card">
                                <div class="troop-image">
                                    ${troopsimageProcess(troop.name, "builder")}
                                </div>
                                <div class="troop-info">
                                    <div class="troop-name">${troop.name}</div>
                                    <div class="troop-level">Level:${troop.level}</div>
                                    <div class="troop-level">Max Level:${troop.maxLevel}</div>
                                </div>
                            </div>`;
        }

    })
    troopsCardHtml = `
    <div class="troops-section">
        <div class="village-troops">
            <h2>Home Village Troops</h2>
            <div class="troop-grid">
                ${homeTroopsHtml}
            </div>
        </div>
        <div class="village-troops">
            <h2>Builder Base Troops</h2>
            <div class="troop-grid">
                ${builderTroopsHtml}
            </div>
        </div>
    </div>`;
return troopsCardHtml;
    
}

function heroesCard(data){
    let homeHeroesHtml=''
    let builderHeroesHtml=''
    const heroes=data.heroes
    heroes.forEach((hero)=>{
        if(hero.village==='home'){
            homeHeroesHtml+=`<div class="troop-card">
                                <div class="troop-image">
                                    ${troopsimageProcess(hero.name, "home")}
                                </div>
                                <div>
                                <div class="troop-info">
                                    <div class="troop-name">${hero.name}</div>
                                    <div class="troop-level">Level:${hero.level}</div>
                                    <div class="troop-level">Max Level:${hero.maxLevel}</div>
                                </div>
                                <div class="troop-info">
                                    
                                    ${heroequipmentProcess(hero)}
                                </div>
                                </div>
                            </div>`;
        } else{
            builderHeroesHtml+=`<div class="troop-card">
                                <div class="troop-image">
                                    ${troopsimageProcess(hero.name, "home")}
                                </div>
                                <div>
                                <div class="troop-info">
                                    <div class="troop-name">${hero.name}</div>
                                    <div class="troop-level">Level:${hero.level}</div>
                                    <div class="troop-level">Max Level:${hero.maxLevel}</div>
                                </div>
                                <div class="troop-info">

                                    ${heroequipmentProcess(hero)}
                                </div>
                                </div>
                            </div>`;
        }
    })

        heroCardHtml=`
    <div class="troops-section">
        <div class="village-troops">
            <h2>Home Village Heros</h2>
            <div class="troop-grid">
                ${homeHeroesHtml}
            </div>
        </div>
        <div class="village-troops">
            <h2>Builder Base Heros</h2>
            <div class="troop-grid">
                ${builderHeroesHtml}
            </div>
        </div>
    </div>`;
        
        
    
    return  heroCardHtml
}

function spellCard(data){
    let temphtml=''
    const spells=data.spells
    

    spells.forEach((spell)=>{

                            temphtml += `<div class="troop-card">
                            <div class="troop-image">
                                ${spellimageProcess(spell)}
                            </div>
                            <div class="troop-info">
                                <div class="troop-name">${spell.name}</div>
                                <div class="troop-level">Level: ${spell.level}</div>
                                <div class="troop-level">Max Level: ${spell.maxLevel}</div>
                            </div>
                        </div>`;

                            })
                            spellCardHtml = `
                            <div class="troops-section">
                                <div class="village-troops">
                                    <h2>Spells</h2>
                                    <div class="troop-grid">
                                        ${temphtml}
                                    </div>
                                </div>
                            </div>`;
    return spellCardHtml
}

function showHideDiv(){
    const buttons=document.querySelectorAll(".showmore")

    buttons.forEach((button)=>{
        button.addEventListener('click',(e)=>{
            const clickedButton=e.target.closest(".card-content")
            const hsDiv=clickedButton.querySelector('.content-info-hidden')

                if(hsDiv.style.display==='block'){
                    hsDiv.style.display='none'
                    e.target.textContent='Show More'

                }else {hsDiv.style.display='block'
                        e.target.textContent="Hide"
                }
                            
        })
    })
}


